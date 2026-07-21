#!/usr/bin/env python3
"""
Reconcile the Grade 8 + 5 high-school-course chapter/lesson lists in
`curriculum-data.js` (csvGradeData[8]) and `highschool-data.js` against
the canonical Google Sheet Manasa provided on 2026-07-21:

  https://docs.google.com/spreadsheets/d/1fJJONd44BWF9T4meYIQRVbcvxX3XsxVznZA0iNhiMgI

Tabs: Grade 8, Algebra 1, Geometry, Algebra 2, AP Precalculus, AP Calculus AB.
Columns: Chapter Number | Chapter Title | Lesson Names (Chapter Title repeats
on every row, no forward-fill needed). AP Precalculus / AP Calculus AB show
26 columns vs 24 for the rest in spreadsheets.get metadata, but pulling
values confirms columns D+ are empty/unrelated scratch data (a stray
TRUE/FALSE + number list in far-right columns on some AP Calculus AB rows,
unconnected to the chapter table) — not real extra columns, safe to ignore.

Same chapter-grouping logic as extract_highschool.py: group by contiguous
run of identical Chapter Title in row order, NOT by Chapter Number (which
is not reliably unique across chapters).

Run: python3 reconcile_hs_sheet.py
Prints a diff against the current .js data files; does not write anything
(the actual data-file edits from the 2026-07-21 run were applied by hand
after reviewing this diff — see highschool-data.js / curriculum-data.js
header comments for what changed).
"""
import json
import re

from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

TOKEN_FILE = "/Users/manasaa/Desktop/Manasa/Math-Explainers/token.json"
SHEET_ID = "1fJJONd44BWF9T4meYIQRVbcvxX3XsxVznZA0iNhiMgI"

TABS = ["Grade 8", "Algebra 1", "Geometry", "Algebra 2", "AP Precalculus", "AP Calculus AB"]
COURSE_SLUGS = {
    "Algebra 1": "algebra-1",
    "Geometry": "geometry",
    "Algebra 2": "algebra-2",
    "AP Precalculus": "ap-precalculus",
    "AP Calculus AB": "ap-calculus-ab",
}


def fetch_tab(service, tab_name):
    res = service.spreadsheets().values().get(
        spreadsheetId=SHEET_ID, range=f"'{tab_name}'!A1:Z1007"
    ).execute()
    return res.get("values", [])


def extract_chapters(rows):
    """Group rows into chapters by contiguous run of identical Chapter Title
    (column B). Chapter Number (column A) is informational only."""
    chapters = []
    current = None
    for row in rows[1:]:
        row = (row + [""] * 3)[:3]
        _cnum, ctitle, lname = row
        if not str(ctitle).strip() or not str(lname).strip():
            continue
        ctitle = str(ctitle).strip()
        lname = str(lname).strip()
        if current is None or current["name"] != ctitle:
            current = {"name": ctitle, "lessons": []}
            chapters.append(current)
        current["lessons"].append(lname)
    return chapters


def parse_existing_course_block(content, key, next_key):
    start = content.find(f'"{key}": {{')
    end = content.find(f'"{next_key}": {{') if next_key else len(content)
    block = content[start:end]
    chapters = []
    for m in re.finditer(r'\{name: "((?:[^"\\]|\\.)*)", lessons: \[((?:[^\]])*)\]\}', block):
        name = m.group(1)
        lessons = re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(2))
        chapters.append({"name": name, "lessons": lessons})
    return chapters


def parse_existing_grade8(content):
    start = content.find("  8: [")
    end = content.find("\n};", start)
    block = content[start:end]
    chapters = []
    pattern = r'\{name: "((?:[^"\\]|\\.)*)", emoji: "(?:[^"\\]|\\.)*", lessons: \[((?:[^\]])*)\]\}'
    for m in re.finditer(pattern, block):
        name = m.group(1)
        lessons = re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(2))
        chapters.append({"name": name, "lessons": lessons})
    return chapters


def diff_chapters(label, old_chapters, new_chapters):
    old_names = [c["name"] for c in old_chapters]
    new_names = [c["name"] for c in new_chapters]
    print(f"=== {label} === old: {len(old_chapters)} chapters / new: {len(new_chapters)} chapters")
    if old_names != new_names:
        print("  CHAPTER NAME/ORDER DIFF")
        print("  old:", old_names)
        print("  new:", new_names)
    old_by_name = {c["name"]: c for c in old_chapters}
    for nc in new_chapters:
        oc = old_by_name.get(nc["name"])
        if oc is None:
            print(f"  NEW CHAPTER not in existing data: '{nc['name']}' ({len(nc['lessons'])} lessons): {nc['lessons']}")
            continue
        if oc["lessons"] != nc["lessons"]:
            # Decode JS unicode escapes on the old side before comparing, since
            # the .js source may spell the same character as a literal \uXXXX
            # escape (functionally identical once JS/HTML parses it).
            old_decoded = [s.encode().decode("unicode_escape") if "\\u" in s else s for s in oc["lessons"]]
            if old_decoded == nc["lessons"]:
                continue  # cosmetic escape-style difference only, not a real change
            print(f"  LESSON DIFF in '{nc['name']}':")
            print("    old:", oc["lessons"])
            print("    new:", nc["lessons"])
    print()


def main():
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, ["https://www.googleapis.com/auth/spreadsheets"])
    if creds.expired and creds.refresh_token:
        creds.refresh(Request())
    service = build("sheets", "v4", credentials=creds)

    sheet_chapters = {}
    for tab in TABS:
        rows = fetch_tab(service, tab)
        chapters = extract_chapters(rows)
        sheet_chapters[tab] = chapters
        n_lessons = sum(len(c["lessons"]) for c in chapters)
        print(f"{tab}: {len(chapters)} chapters, {n_lessons} lessons (pulled from sheet)")
    print()

    with open("curriculum-data.js") as f:
        curriculum_js = f.read()
    with open("highschool-data.js") as f:
        highschool_js = f.read()

    diff_chapters("Grade 8", parse_existing_grade8(curriculum_js), sheet_chapters["Grade 8"])

    keys = list(COURSE_SLUGS.values())
    for i, tab in enumerate([t for t in TABS if t != "Grade 8"]):
        key = COURSE_SLUGS[tab]
        next_key = keys[i + 1] if i + 1 < len(keys) else None
        old = parse_existing_course_block(highschool_js, key, next_key)
        diff_chapters(tab, old, sheet_chapters[tab])


if __name__ == "__main__":
    main()
