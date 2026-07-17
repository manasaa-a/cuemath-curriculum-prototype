// Points / Streaks / Sparks — real, localStorage-backed tracking shared
// across every page that shows .rp-stats-row (grade, chapter, lesson, topic,
// exam pages) plus the test-prep worksheet page (which awards points and
// spends sparks but doesn't show the stats row itself — see
// maths-testprep-worksheet.html).
//
// CONFIRMED RULESET (2026-07-10, corrected same day) — see Open Questions &
// Decisions.md §13, "DECIDED" section. This supersedes the earlier
// provisional version (3 sparks, practice-only gating, +10/lesson
// +2/correct-answer). Sparks max (5), the sign-in bypass, and the two point
// values (10, 50) are confirmed. What consumes a spark was corrected once:
// it's not "1 spark per Learn/Practice tab opened" — reaching EACH NEW slide
// within a Learn sheet also costs its own spark, same granularity as the
// +10 points award ("even navigating within the learn section will cost
// them sparks"). See goToSlide() in maths-grade-3-lesson.html for where
// that's enforced; a test-prep worksheet still costs a flat 1 spark (that
// hasn't been corrected to per-question). Spark refill rate confirmed
// 2026-07-16: 1 spark per hour (CM_SPARK_REFILL_HOURS).
//
// Uses localStorage on purpose — these should survive across sessions/tabs
// closing, unlike the existing one-free-lesson / one-free-worksheet gating
// (cuemathGlobalCompletedLesson, cuemathGlobalCompletedTestPrepWorksheet).
// That claim system still exists and still drives the chapter page's
// Start/Resume/Review button states — that's an intentionally separate,
// still-undecided question (see §13) — but it no longer has any part in
// gating entry into a Learn/Practice tab or a worksheet; sparks fully own
// that now. cuemathSignedIn (also sessionStorage) is only *read* here: per
// the confirmed rule, sparks apply to signed-out users only — a signed-in
// user gets unlimited access and never touches the spark count at all.
//
// KNOWN GAP, explicitly deferred by Manasa (not something to fix here):
// sparks (like everything else in this file) are client-side only, so
// clearing browser storage also wipes/refills them — a real way to cheat
// the cap. Acknowledged, out of scope for this build.

const CM_POINTS_KEY = 'cuemathPoints';
const CM_STREAK_KEY = 'cuemathStreak'; // {lastActiveDate:'YYYY-MM-DD', currentStreak:N}
const CM_SPARKS_KEY = 'cuemathSparks'; // {count:N, lastConsumed:epochMs|null}
const CM_LEARN_ITEM_POINTS_KEY = 'cuemathLearnItemsAwarded'; // string[] of "grade-ch-lesson-slide-N" (or other per-item keys) already paid out
const CM_MANUAL_COMPLETE_POINTS_KEY = 'cuemathLessonPointsAwarded'; // string[] of "grade-ch-lesson" already paid out via the chapter page's manual "Mark as Complete" override specifically (see cmAwardManualCompletePoints)
const CM_SPARK_CHARGED_ITEMS_KEY = 'cuemathSparkChargedItems'; // string[] of arbitrary per-item keys already charged a spark for — separate from CM_LEARN_ITEM_POINTS_KEY since points and sparks are deduped independently (e.g. typing on a Learn slide costs a spark but reaching that slide by scrolling doesn't, see maths-grade-3-lesson.html)

const CM_POINTS_PER_LEARN_ITEM = 10; // CONFIRMED 2026-07-10 — per slide/item advanced through in a Learn sheet, not once per whole sheet
const CM_POINTS_PER_PRACTICE_QUESTION = 50; // CONFIRMED 2026-07-10 — per completed practice question, regardless of correctness (not specified as correctness-gated)
const CM_SPARK_MAX = 5; // CONFIRMED 2026-07-10 (was 3 in the earlier provisional version)
const CM_SPARK_REFILL_HOURS = 1; // CONFIRMED 2026-07-16 — 1 spark refills per hour

function cmToday() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC date — fine for a mockup, real impl should use local calendar day)
}

// ── Points ──
function cmGetPoints() {
  return parseInt(localStorage.getItem(CM_POINTS_KEY) || '0', 10);
}

function cmAddPoints(n) {
  const total = cmGetPoints() + n;
  localStorage.setItem(CM_POINTS_KEY, String(total));
  cmBumpStreak();
  cmRenderStats();
  return total;
}

// +10 per unique slide/item reached in a Learn sheet (CONFIRMED 2026-07-10 —
// "awarded per slide/item advanced through, not once per whole sheet").
// itemKey should uniquely identify that one slide within that one lesson,
// e.g. `${grade}-${chIdx}-${lessonIdx}-slide-${slideIndex}`. Persisted dedup
// means re-visiting a slide already reached (going back, reloading the page,
// coming back later) never double-pays it — but reaching a genuinely new
// slide, in this lesson or any other, still earns its own +10. Reads once
// per unique slide reached, not once per every single navigation event —
// see the comment at the call site in maths-grade-3-lesson.html for why.
function cmAwardLearnItemPoints(itemKey) {
  const raw = localStorage.getItem(CM_LEARN_ITEM_POINTS_KEY);
  const awarded = raw ? JSON.parse(raw) : [];
  if (awarded.indexOf(itemKey) !== -1) return false;
  awarded.push(itemKey);
  localStorage.setItem(CM_LEARN_ITEM_POINTS_KEY, JSON.stringify(awarded));
  cmAddPoints(CM_POINTS_PER_LEARN_ITEM);
  return true;
}

// Side-effect-free check for whether a given Learn item has already been
// paid for (points awarded). Added 2026-07-10 so callers can decide whether
// reaching a slide is "new" (and therefore also costs a spark — see
// goToSlide() in maths-grade-3-lesson.html) before calling
// cmAwardLearnItemPoints, without double-bookkeeping the dedup list.
function cmHasAwardedLearnItem(itemKey) {
  const raw = localStorage.getItem(CM_LEARN_ITEM_POINTS_KEY);
  const awarded = raw ? JSON.parse(raw) : [];
  return awarded.indexOf(itemKey) !== -1;
}

// +10, once, for the chapter page's manual "Mark as Complete" override
// (the 3-dot menu action that flags a lesson done WITHOUT actually opening
// its Learn/Practice sheets). GUESS, flagged: Manasa's confirmed numbers
// cover per-slide Learn points and per-question Practice points, not this
// bypass path, which never generates real slides/questions to attach points
// to. Treating it as worth one Learn-item's worth of points is a reasonable
// placeholder, not a confirmed formula for this specific action.
function cmAwardManualCompletePoints(lessonKey) {
  const raw = localStorage.getItem(CM_MANUAL_COMPLETE_POINTS_KEY);
  const awarded = raw ? JSON.parse(raw) : [];
  if (awarded.indexOf(lessonKey) !== -1) return false;
  awarded.push(lessonKey);
  localStorage.setItem(CM_MANUAL_COMPLETE_POINTS_KEY, JSON.stringify(awarded));
  cmAddPoints(CM_POINTS_PER_LEARN_ITEM);
  return true;
}

// +50 per completed practice question (CONFIRMED 2026-07-10 — "not gated by
// correctness," awarded whether the answer given was right or wrong).
// Callers are responsible for only invoking this once per question —
// guarded by that question's own answered/submitted flag (see selectOpt()
// in maths-grade-3-lesson.html and submitAnswer() in
// maths-testprep-worksheet.html), not by anything in here.
function cmAwardPracticePoints() {
  cmAddPoints(CM_POINTS_PER_PRACTICE_QUESTION);
}

// ── Streak — calendar-day based ──
function cmBumpStreak() {
  const raw = localStorage.getItem(CM_STREAK_KEY);
  const state = raw ? JSON.parse(raw) : { lastActiveDate: null, currentStreak: 0 };
  const today = cmToday();
  if (state.lastActiveDate === today) {
    // already counted today — no change
  } else if (state.lastActiveDate === null) {
    state.currentStreak = 1;
  } else {
    const msPerDay = 86400000;
    const last = new Date(state.lastActiveDate + 'T00:00:00Z').getTime();
    const now = new Date(today + 'T00:00:00Z').getTime();
    const dayGap = Math.round((now - last) / msPerDay);
    state.currentStreak = dayGap === 1 ? state.currentStreak + 1 : 1;
  }
  state.lastActiveDate = today;
  localStorage.setItem(CM_STREAK_KEY, JSON.stringify(state));
}

function cmGetStreak() {
  const raw = localStorage.getItem(CM_STREAK_KEY);
  return raw ? JSON.parse(raw).currentStreak : 0;
}

// ── Sparks — the limiting mechanic (energy/lives-style cap, not a reward) ──
function cmGetSparksState() {
  const raw = localStorage.getItem(CM_SPARKS_KEY);
  return raw ? JSON.parse(raw) : { count: CM_SPARK_MAX, lastConsumed: null };
}

// Current spark count computed from stored state + real elapsed time — not
// a live countdown, just evaluated fresh on every read.
function cmGetSparks() {
  const state = cmGetSparksState();
  if (state.lastConsumed === null) return CM_SPARK_MAX;
  const hoursElapsed = (Date.now() - state.lastConsumed) / 3600000;
  return Math.min(CM_SPARK_MAX, state.count + Math.floor(hoursElapsed / CM_SPARK_REFILL_HOURS));
}

// Milliseconds until the next spark increments (0 if already at max or
// never consumed).
function cmMsUntilNextSpark() {
  const state = cmGetSparksState();
  if (state.lastConsumed === null || cmGetSparks() >= CM_SPARK_MAX) return 0;
  const msPerRefill = CM_SPARK_REFILL_HOURS * 3600000;
  const msIntoCurrentCycle = (Date.now() - state.lastConsumed) % msPerRefill;
  return msPerRefill - msIntoCurrentCycle;
}

function cmFormatRefillTime(ms) {
  const totalMinutes = Math.max(1, Math.ceil(ms / 60000));
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

// Attempts to spend one spark. Returns true and persists the reduced count
// (with a refreshed refill-timer baseline) if one was available; false if
// the user is already at 0 — callers should block the action and show the
// refill time (cmMsUntilNextSpark / cmFormatRefillTime) in that case.
function cmConsumeSpark() {
  const current = cmGetSparks();
  if (current <= 0) return false;
  localStorage.setItem(CM_SPARKS_KEY, JSON.stringify({ count: current - 1, lastConsumed: Date.now() }));
  cmRenderStats();
  return true;
}

// Dedup for spark charges keyed by an arbitrary item id (e.g. a specific
// Learn slide a user typed on) — separate list from the points dedup above,
// since a given action can cost a spark without earning points or vice
// versa. Persisted (localStorage), so once a spark's been paid for a given
// item, revisiting it later never charges again.
function cmHasChargedSpark(itemKey) {
  const raw = localStorage.getItem(CM_SPARK_CHARGED_ITEMS_KEY);
  const charged = raw ? JSON.parse(raw) : [];
  return charged.indexOf(itemKey) !== -1;
}
function cmMarkSparkCharged(itemKey) {
  const raw = localStorage.getItem(CM_SPARK_CHARGED_ITEMS_KEY);
  const charged = raw ? JSON.parse(raw) : [];
  if (charged.indexOf(itemKey) === -1) {
    charged.push(itemKey);
    localStorage.setItem(CM_SPARK_CHARGED_ITEMS_KEY, JSON.stringify(charged));
  }
}

// ── Rendering ──
// Call on any page with .rp-stats-row. Looks for #rp-points-value /
// #rp-streak-value / #rp-sparks-value and no-ops if a page doesn't have them
// (e.g. maths-testprep-worksheet.html, which earns points but has no sidebar
// stats display).
function cmRenderStats() {
  const pointsEl = document.getElementById('rp-points-value');
  const streakEl = document.getElementById('rp-streak-value');
  const sparksEl = document.getElementById('rp-sparks-value');
  if (pointsEl) pointsEl.textContent = cmGetPoints();
  if (streakEl) streakEl.textContent = cmGetStreak();
  if (sparksEl) sparksEl.textContent = cmGetSparks();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', cmRenderStats);
} else {
  cmRenderStats();
}
