// Learnosity CW/HW references for Geometry, matched against the EXISTING
// chapter/lesson structure in highschool-data.js (kept as-is). Source: GET
// /api/v4/leap/cue-chapters/?program_code=USCC.GEOMRY, pulled from LOCAL DEV
// (not prod -- flagging since Algebra 1's pull was prod, see chat summary),
// 2026-07-09. 20 chapters / 95 lessons / 457 refs in the raw pull.
//
// Structure: refs["<our chapter name>"]["<our lesson name>"] = {cw, hw} | null
// null means no single API lesson corresponds cleanly to ours -- see the
// comments inline (and the chat summary) for why, rather than guessing.
//
// DEVIATION FROM THE ALGEBRA 1 TEMPLATE: Geometry's API pull (apparently
// inherited from CBSE-origin content) very often bundles several LEARNING
// worksheets (W01/W02/W03...) under one API lesson node, and sometimes our
// one lesson's content is genuinely split across two *different* API lesson
// nodes rather than sheets within one. Where picking a single ref would be
// less honest than showing the real set, cw/hw are ARRAYS of refs (same
// index across cw/hw) instead of single strings. A few lessons also have a
// LEARNING sheet but no TARGET_PRACTICE/PRACTICE sheet in the pull at all --
// those show hw: null with a comment, not a fabricated ref.
const geometryLearnosityRefs = {
  "Basics of Geometry": {
    // No undefined-terms ("what is a point/line/plane") lesson anywhere in the pull --
    // API's angle content starts directly from angle relationships.
    "Points, Lines, and Planes": null,
    // "Basic Constructions" (Lines, Angles, and Triangles chapter) is about constructing
    // triangle special points (bisectors/medians), not general segment construction --
    // no lesson on measuring/constructing plain segments exists.
    "Measuring and Constructing Segments": null,
    // "Analytic Geometry I"'s Distance Formula lesson is the closer/more literal match;
    // the midpoint half of our lesson is actually a SEPARATE API lesson ("Apply the
    // Section Formula in Solving Problems") not folded in here -- flagging as a guess.
    "Using Midpoint and Distance Formulas": {cw: "Distance-Formula-GEO-W01", hw: "target-practice-Distance-Formula-GEO-W01"},
    // API's lesson is area-of-triangles-by-coordinates only, no perimeter-in-the-plane
    // content -- picked as the closest available, not a full match.
    "Perimeter and Area in the Coordinate Plane": {cw: "Area-Triangle-W01", hw: "target-practice-Area-Triangle-W01"},
    // Spans two different API lessons: "Lines and Angles" (measuring) and "Basic
    // Constructions" (constructing, but for triangle special points) -- no single ref.
    "Measuring and Constructing Angles": null,
    "Describing Pairs of Angles": {cw: "Lines and Angles V3 Lesson 1", hw: "Lines-and-Angles-V3-Lesson-1-TP-01"},
  },
  "Reasoning and Proofs": {
    "Conditional Statements": {cw: "Conditional-Statement-W01", hw: "target-practice-Conditional-Statement-W01"},
    // API's lesson node is literally named "Inductive and Deductive Reasoning" too, and
    // bundles one sheet per half -- listing both rather than picking one arbitrarily.
    "Inductive and Deductive Reasoning": {
      cw: ["Inductive-Reasoning-W01", "Deductive-Reasoning-W01"],
      hw: ["target-practice-Inductive-Reasoning-W01", "target-practice-Deductive-Reasoning-W01"],
    },
    "Postulates and Diagrams": {cw: "Postulates-and-Diagrams-W01", hw: "target-practice-Postulates-and-Diagrams-W01"},
    // API's "Proofs" lesson bundles 3 sheets (Algebraic Reasoning, Proving Segment
    // Relationships, Proving Angle Relationships) that map 1:1 onto 3 of our lessons below.
    "Algebraic Reasoning": {cw: "Algebraic-Reasoning-W01", hw: "target-practice-Algebraic-Reasoning-W01"},
    // Our lesson explicitly covers both segments AND angles; API's "Proofs" lesson keeps
    // these as two separate sheets -- listing both.
    "Proving Statements about Segments and Angles": {
      cw: ["Proving Segment Relationships W01", "Proving-Angle-Relationships-W01"],
      hw: ["target-practice-Proving Segment Relationships W01", "target-practice-Proving-Angle-Relationships-W01"],
    },
    // No 4th sheet in the "Proofs" lesson beyond the 3 already used above.
    "Proving Geometric Relationships": null,
  },
  "Equations and Applications of Parallel and Perpendicular Lines": {
    // API has one combined lesson "Angles, Parallel lines, and Transversals" for both of
    // ours below (it doesn't separate the angle-pairs concept from the parallel/transversal
    // application the way our two lessons do).
    "Pairs of Lines and Angles": {cw: "Lines-and-Angles-V3-Lesson-2", hw: "Lines-and-Angles-V3-Lesson-2-TP-02"},
    "Parallel Lines and Transversals": {cw: "Lines-and-Angles-V3-Lesson-2", hw: "Lines-and-Angles-V3-Lesson-2-TP-02"},
    // API's angle-pairs lesson above is computational, not a two-column-proof lesson --
    // no distinct proof-focused lesson exists for either of these.
    "Proofs with Parallel Lines": null,
    "Proofs with Perpendicular Lines": null,
    // API's lesson ("Write the Equation of a Line Parallel/Perpendicular to Another Line")
    // bundles 3 sheets: two preliminary "find the slope" sheets, then this one, which
    // actually writes the equation -- picked as most representative of our lesson's name.
    "Equations of Parallel and Perpendicular Lines": {
      cw: "Equation-of-Parallel-Perpendicular-Lines-GEO-W01",
      hw: "target-practice-Equation-of-Parallel-Perpendicular-Lines-GEO-W01",
    },
  },
  "Transformations": {
    "Translations": {cw: "Transformations-and-Congruence-V3-Lesson-1", hw: "Transformations-and-Congruence-V3-Lesson-TP-01"},
    // API splits reflection into "of Points" then "of Shapes" as two separate lessons --
    // picked the more complete "of Shapes" one as the guess, not a clean 1:1.
    "Reflections": {cw: "Transformations-and-Congruence-V3-Lesson-3", hw: "Transformations-and-Congruence-V3-Lesson-TP-03"},
    // Same situation as Reflections -- API splits "of Points" / "of Shapes"; picked "of Shapes".
    "Rotations": {cw: "Transformations-and-Congruence-V3-Lesson-5", hw: "Transformations-and-Congruence-V3-Lesson-TP-05"},
    "Congruence and Transformations": {cw: "Transformations-and-Congruence-V3-Lesson-6", hw: "Transformations-and-Congruence-V3-Lesson-TP-06"},
    // API has no TARGET_PRACTICE/PRACTICE sheet at all for any of "Dilations and
    // Similarity"'s 4 lessons -- CW-only in this pull, not a missing lookup.
    "Dilations": {cw: "Dilations-and-Similarity-V3-Lesson-1", hw: null},
    // API's similarity content (a separate, proof-heavy chapter) doesn't have a
    // transformations-framed "similarity as a transformation" lesson to point to.
    "Similarity and Transformations": null,
  },
  "Congruent Triangles": {
    "Angles of Triangles": {cw: "Lines-and-Angles-V3-Lesson-3", hw: "Lines-and-Angles-V3-Lesson-3-TP-01"},
    // No general "polygon congruence" concept lesson -- API goes straight to triangles.
    "Congruent Polygons": null,
    // API's two congruence lessons are generically titled "Congruence in Triangles-1/2"
    // with no SAS/SSS/ASA/AAS breakdown in the title -- can't confidently tell which
    // criterion each covers without guessing, so all three below are left null.
    "Proving Triangle Congruence by SAS": null,
    "Equilateral and Isosceles Triangles": null,
    "Proving Triangle Congruence by SSS": null,
    "Proving Triangle Congruence by ASA and AAS": null,
    "Using Congruent Triangles": {cw: "Congruence-V3-Lesson-4", hw: "Triangles-Congruence-TP4"},
    // API's coordinate-geometry lessons are computational, not proof-based -- no
    // "coordinate proof" style lesson exists.
    "Coordinate Proofs": null,
  },
  "Relationships Within Triangles": {
    // "Special Points in Triangles - Construction" is literally about constructing the
    // bisectors/medians/altitudes that produce a triangle's special points.
    "Perpendicular and Angle Bisectors": {cw: "Lines-and-Angles-V3-Lesson-6", hw: "Lines-and-Angles-V3-TP-06"},
    // "Some Special Points in Triangles" (the theory lesson paired with the construction
    // lesson above) covers bisectors/medians/altitudes together without separating them --
    // both this lesson and the next reuse the same ref.
    "Bisectors of Triangles": {cw: "Lines-and-Angles-V3-Lesson-5", hw: "Lines-and-Angles-V3-Lesson-5-TP-01"},
    "Medians and Altitudes of Triangles": {cw: "Lines-and-Angles-V3-Lesson-5", hw: "Lines-and-Angles-V3-Lesson-5-TP-01"},
    // The midpoint theorem IS the midsegment theorem (segment joining two midpoints is
    // parallel to and half the third side) -- filed under API's "Quadrilaterals" chapter
    // (proved via a parallelogram construction) rather than a triangles chapter.
    "The Triangle Midsegment Theorem": {cw: "Midpoint-Theorem-W01-V3", hw: "target-practice-Midpoint-Theorem-W01-V3"},
    // Not present anywhere in the pull -- no triangle-inequality or indirect-proof lesson.
    "Indirect Proof and Inequalities in One Triangle": null,
    "Inequalities in Two Triangles": null,
  },
  "Quadrilaterals and Other Polygons": {
    // API's "Quadrilaterals" chapter never generalizes to polygons broadly.
    "Angles of Polygons": null,
    "Properties of Parallelograms": {cw: "Parallelograms-W02-V3", hw: "target-practice-Parallelograms-W02-V3"},
    // Approximate: API's lesson bundles general-quadrilateral + properties + application +
    // mixed-problem sheets with no proof-of-converse-specific sheet; picked the
    // "application of properties" sheet as the closest available, not a clean match.
    "Proving That a Quadrilateral Is a Parallelogram": {cw: "Parallelograms-W03-V3", hw: "target-practice-Parallelograms-W03-V3"},
    // API doesn't distinguish rectangles/rhombi/squares from general parallelogram
    // properties by title -- its "mixed problems" sheet (W04) may cover this but isn't
    // separable with confidence.
    "Properties of Special Parallelograms": null,
    // Not mentioned anywhere in this chapter's pull -- everything here is
    // "quadrilateral"/"parallelogram", never "trapezoid" or "kite".
    "Properties of Trapezoids and Kites": null,
  },
  "Similarity": {
    "Similar Polygons": {cw: "Similarity-Of-Triangles-W01", hw: "target-practice-Similarity-Of-Triangles-W01"},
    // "Dilations and Similarity"'s "Triangle Similarity" lesson is the AA-via-dilation
    // treatment common to this framing -- best available pick, not a title-confirmed match.
    // No TARGET_PRACTICE sheet exists for it (see the Dilations note above -- same chapter).
    "Proving Triangle Similarity by AA": {cw: "Dilations-and-Similarity-V3-Lesson-3", hw: null},
    // Approximate, same reasoning as AA above -- API doesn't separate SSS/SAS by title either.
    "Proving Triangle Similarity by SSS and SAS": {cw: "Similarity-Of-Triangles-W02", hw: "target-practice-Similarity-Of-Triangles-W02"},
    // Exact conceptual match. Multi-worksheet lesson (5 sheets, W01-W05) -- picked the
    // intro sheet as representative.
    "Proportionality Theorems": {cw: "Basic-Proportionality-Theorem-W01", hw: "target-practice-Basic-Proportionality-Theorem-W01"},
  },
  "Right Triangles and Trigonometry": {
    "The Pythagorean Theorem": {cw: "Pythagoras-Theorem-W01", hw: "target-practice-Pythagoras-Theorem-W01"},
    // Framing differs: API's lesson is about trig-ratio VALUES at 30-45-60, ours is about
    // side-ratio relationships in special right triangles -- same underlying triangles,
    // different angle of approach, so treat as approximate.
    "Special Right Triangles": {cw: "Values-Trig-Ratios-30-45-60-V3-W05", hw: "Values-TrigRatios-30-45-60-V3-TP-05"},
    // Not present -- no geometric-mean-in-right-triangles (altitude-to-hypotenuse) lesson.
    "Similar Right Triangles": null,
    // API teaches sin/cos/tan together in one lesson ("Define Trigonometric Ratios") --
    // no tangent-specific lesson to point to on its own.
    "The Tangent Ratio": null,
    // Reused from "Define Trigonometric Ratios" -- note it actually covers tan too, not
    // just sine/cosine, since API doesn't split them.
    "The Sine and Cosine Ratios": {cw: "Def-Trig-Ratios-V3-W02", hw: "Defining-Trigonometric-Ratios-USCC-GEOMETRY-TP-02"},
    "Solving Right Triangles": {cw: "Find-Sides-Lengths-Triangle-TrigRatios-V3-W06", hw: "Find-Sides-Lengths-Triangle-TrigRatios-V3-TP-06"},
    // API splits Sine Rule and Cosine Rule into two separate lessons under "Trigonometry
    // with General Triangles" -- listing both since the match is clean and confident.
    "Law of Sines and Law of Cosines": {
      cw: ["Trigonometry-Sine-Rule-W01", "Trigonometry-Cosine-Rule-W01"],
      hw: ["target-practice-Trigonometry-Sine-Rule-W01", "target-practice-Trigonometry-Cosine-Rule-W01"],
    },
  },
  "Circles": {
    // Approximate: API's lesson is specifically about tangents at a point, narrower than
    // our lesson's broader "lines and segments that intersect a circle" framing.
    "Lines and Segments That Intersect Circles": {cw: "Circles-Tangents-W01", hw: "target-practice-Circles-Tangents-W01"},
    // Not present as its own lesson -- API's chord/angle lessons deal with angles
    // subtended, never a dedicated "find the arc measure" skill.
    "Finding Arc Measures": null,
    "Using Chords": {cw: "basics-circles-chords-V3-W02", hw: "target-practice-basics-circles-chords-V3-W02"},
    "Inscribed Angles and Polygons": {cw: "cyclic-quadrilaterals-V2y-W01", hw: "target-practice-cyclic-quadrilaterals-V2y-W01"},
    "Angle Relationships in Circles": {cw: "arcs-subtended-angles-V2y-W01", hw: "target-practice-arcs-subtended-angles-V2y-W01"},
    // No power-of-a-point / segments-of-chords-secants-tangents theorem lesson in this
    // pull -- the CBSE-origin tangent lessons use congruent triangles, not segment products.
    "Segment Relationships in Circles": null,
    "Circles in the Coordinate Plane": {cw: "Equation-Circle-USCC-W01", hw: "target-practice-Equation-Circle-USCC-W01"},
  },
  "Circumference Area and Volume": {
    // API's sheet title is literally "Length of a Circular Arc and Area of a Circular
    // Sector" -- covers arc length directly.
    "Circumference and Arc Length": {cw: "Area-Sectors-Segments-W01", hw: "target-practice-Area-Sectors-Segments-W01"},
    // Circles (general area) and Sectors are two different API lessons; both directly relevant.
    "Areas of Circles and Sectors": {
      cw: ["Circles-Area-Perimeter-Basics-W01", "Area-Sectors-Segments-W01"],
      hw: ["target-practice-Circles-Area-Perimeter-Basics-W01", "target-practice-Area-Sectors-Segments-W01"],
    },
    // "Perimeter and Area" chapter is entirely circle-focused -- no general polygon-area lesson.
    "Areas of Polygons": null,
    "Three-Dimensional Figures": {cw: "Visualizing-3D-Shapes-W01", hw: "target-practice-Visualizing-3D-Shapes-W01"},
    // API splits prisms (Visualizing Solid Shapes chapter) and cylinders (Surface Area and
    // Volume chapter) into entirely different chapters/lessons; ours combines both shapes.
    "Volumes of Prisms and Cylinders": {
      cw: ["Volume of Prisms-W01", "Mensuration-Cylinders-Recap-V2y-W02"],
      hw: ["target-practice-Volume of Prisms-W01", "target-practice-Mensuration-Cylinders-Recap-V2y-W02"],
    },
    "Volumes of Pyramids": {cw: "Volume of Pyramids-W01", hw: "target-practice-Volume of Pyramids-W01"},
    // API keeps surface area and volume of cones as two separate lesson nodes; ours combines them.
    "Surface Areas and Volumes of Cones": {
      cw: ["Mensuration-Cones-V2x-W01", "Mensuration-Cones-V2x-W02"],
      hw: ["target-practice-Mensuration-Cones-V2x-W01", "target-practice-Mensuration-Cones-V2x-W02"],
    },
    // Same pattern as cones -- surface area and volume of spheres are two separate API lessons.
    "Surface Areas and Volumes of Spheres": {
      cw: ["Mensuration-Spheres-V2x-W01", "mensuration-spheres.w02"],
      hw: ["target-practice-Mensuration-Spheres-V2x-W01", "target-practice-mensuration-spheres.w02"],
    },
  },
};

// Chapters that exist in the live API pull (program_code=USCC.GEOMRY, local
// dev, 20 chapters / 95 lessons / 457 refs) but have NO corresponding chapter
// in our existing highschool-data.js geometry course (11 chapters / 68
// lessons) at all. Not added to our data -- noted here per instruction.
//
// UPDATE 2026-07-21: highschool-data.js geometry now HAS a "Probability"
// chapter (added from the canonical Google Sheet, 6 lessons: Sample Spaces
// and Probability / Independent and Dependent Events / Two-Way Tables and
// Probability / Probability of Disjoint and Overlapping Events /
// Permutations and Combinations / Binomial Distributions) -- this closes
// the gap flagged below in general terms, but NOT a 1:1 match with the API
// chapters noted here: the API's "Probability" chapter is only 4 lessons
// (basics/Venn diagrams/OR events/AND events/conditional probability) and
// its "Permutations and Combinations" content is a separate 4-lesson
// chapter, neither of which lines up cleanly with our new 6-lesson version.
// Still need a real ref-matching pass against the API pull for these 6
// lessons -- not done here (would need re-pulling/re-checking the live API
// response, out of scope for this data-reconciliation pass). Leaving the
// two rows below as-is since they describe the API's shape, not ours.
const geometryExtraChaptersInApiNotInOurs = [
  {chapter: "Sets", lessonCount: 6, note: "Represent/Classify/Compare Sets, Venn diagram operations, complements, real-life applications. Ours has no set-theory content anywhere in Geometry (or elsewhere in our HS data)."},
  {chapter: "Permutations and Combinations", lessonCount: 4, note: "Counting principles, factorials, permutations, combinations. As of 2026-07-21 our Geometry data has its own 'Probability' chapter with a 'Permutations and Combinations' lesson, but that's a single lesson, not this dedicated 4-lesson API chapter -- still needs a real ref-matching pass, see update note above."},
  {chapter: "Probability", lessonCount: 4, note: "Basics of probability, Venn diagrams/'OR' events, 'AND' events, conditional probability. As of 2026-07-21 our Geometry data has its own 6-lesson 'Probability' chapter (see update note above) but it doesn't map cleanly onto this 4-lesson API version -- still needs a real ref-matching pass, not done here."},
  {chapter: "Applications of Right Triangle Trigonometry", lessonCount: 3, note: "Heights-and-distances word problems (angle of elevation/depression), simple and advanced, plus a chapter assessment. Ours doesn't have a dedicated heights/distances lesson under 'Right Triangles and Trigonometry' -- closest is the more general 'Solving Right Triangles', already assigned above to a different, more precise API lesson."},
];
