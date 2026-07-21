// High-school course data — chapter -> lesson, per course.
// Generated from 'US High School Chapter Lists _ June 2026 (1).xlsx' via extract_highschool.py.
// No grade segment in URLs — high school is organized by COURSE, per the confirmed decision
// in Open Questions & Decisions.md section 12. Names verbatim from the source, no rewording.
// No Learnosity IDs exist in this source file.
//
// Reconciled 2026-07-21 against the canonical Google Sheet (spreadsheet ID
// 1fJJONd44BWF9T4meYIQRVbcvxX3XsxVznZA0iNhiMgI, tabs: Grade 8 / Algebra 1 /
// Geometry / Algebra 2 / AP Precalculus / AP Calculus AB) via
// reconcile_hs_sheet.py. Algebra 1, Algebra 2, AP Precalculus, and AP
// Calculus AB matched the xlsx-derived data exactly (content-identical;
// a couple of lessons differ only in how a minus sign / apostrophe is
// unicode-escaped in the source file, not real wording changes). Geometry
// gained one new chapter, "Probability" (6 lessons), that wasn't in the
// June xlsx pull — this closes a gap flagged back in geometry-learnosity-refs.js
// on 2026-07-09, where the LEAP API pull already had Probability/Permutations
// content our data didn't cover. geometry-learnosity-refs.js still has no
// refs for the new Probability chapter (was previously "not in our data at
// all" per its own note at line 232) — flagged as a follow-up, not done here.
const highSchoolData = {
  "algebra-1": {
    name: "Algebra 1",
    slug: "algebra-1",
    chapters: [
      {name: "Solving Linear Equations", lessons: ["Solving Simple Equations", "Solving Multi-Step Equations", "Solving Equations with Variables on Both Sides", "Solving Absolute Value Equations", "Rewriting Equations and Formulas"]},
      {name: "Solving Inequalities in One Variable", lessons: ["Writing and Graphing Inequalities", "Solving Inequalities Using Addition or Subtraction", "Solving Inequalities Using Multiplication or Division", "Solving Multi-Step Inequalities", "Solving Compound Inequalities", "Solving Absolute Value Inequalities"]},
      {name: "Basics of Functions", lessons: ["Representations of Relations and Functions", "Function Notation", "Domain and Range", "Key Features of Functions", "Inverse of a Function", "Transformations of Linear Functions"]},
      {name: "Linear Functions", lessons: ["Graphing Linear Equations in Standard Form", "Graphing Linear Equations in Slope-Intercept Form", "Transformations of Graphs of Linear Functions", "Graphing Absolute Value Functions", "Writing Equations in Slope-Intercept Form", "Writing Equations in Point-Slope Form", "Writing Equations of Parallel and Perpendicular Lines", "Scatter Plots and Lines of Fit", "Analyzing Lines of Fit", "Arithmetic Sequences", "Piecewise Functions"]},
      {name: "Solving Systems of Linear Equations", lessons: ["Solving Systems of Linear Equations by Graphing", "Solving Systems of Linear Equations by Algebraically", "Solving Special Systems of Linear Equations"]},
      {name: "Two-Variable Linear Inequalities and Systems", lessons: ["Graphing Linear Inequalities in Two Variables", "Systems of Linear Inequalities"]},
      {name: "Exponential Functions and Sequences", lessons: ["Properties of Exponents", "Radicals and Rational Exponents", "Exponential Functions", "Exponential Growth and Decay", "Solving Exponential Equations", "Geometric Sequences", "Recursively Defined Sequences"]},
      {name: "Polynomial Expressions", lessons: ["Definition and Classification of Polynomials", "Adding and Subtracting Polynomials", "Multiplying Polynomials", "Special Products of Polynomials"]},
      {name: "Polynomial Equations and Factoring", lessons: ["Adding and Subtracting Polynomials", "Multiplying Polynomials", "Special Products of Polynomials", "Solving Polynomial Equations in Factored Form", "Factoring x2 + bx + c", "Factoring ax2 + bx + c", "Factoring Special Products", "Factoring Polynomials Completely"]},
      {name: "Quadratic Functions", lessons: ["Graphing f (x) = ax2", "Graphing f (x) = ax2 + c", "Graphing f (x) = ax2 + bx + c", "Graphing f (x) = a(x \u2212 h)2 + k", "Using Intercept Form", "Comparing Linear, Exponential, and Quadratic Functions"]},
      {name: "Solving Quadratic Equations", lessons: ["Properties of Radicals", "Solving Quadratic Equations by Graphing", "Solving Quadratic Equations Using Square Roots", "Solving Quadratic Equations by Completing the Square", "Solving Quadratic Equations Using the Quadratic Formula", "Solving Nonlinear Systems of Equations"]},
      {name: "Radical Functions and Equations", lessons: ["Graphing Square Root Functions", "Graphing Cube Root Functions", "Solving Radical Equations", "Inverse of a Function"]},
      {name: "Data Analysis and Displays", lessons: ["Measures of Center and Variation", "Box-and-Whisker Plots", "Shapes of Distributions", "Two-Way Tables", "Choosing a Data Display"]},
    ],
  },
  "geometry": {
    name: "Geometry",
    slug: "geometry",
    chapters: [
      {name: "Basics of Geometry", lessons: ["Points, Lines, and Planes", "Measuring and Constructing Segments", "Using Midpoint and Distance Formulas", "Perimeter and Area in the Coordinate Plane", "Measuring and Constructing Angles", "Describing Pairs of Angles"]},
      {name: "Reasoning and Proofs", lessons: ["Conditional Statements", "Inductive and Deductive Reasoning", "Postulates and Diagrams", "Algebraic Reasoning", "Proving Statements about Segments and Angles", "Proving Geometric Relationships"]},
      {name: "Equations and Applications of Parallel and Perpendicular Lines", lessons: ["Pairs of Lines and Angles", "Parallel Lines and Transversals", "Proofs with Parallel Lines", "Proofs with Perpendicular Lines", "Equations of Parallel and Perpendicular Lines"]},
      {name: "Transformations", lessons: ["Translations", "Reflections", "Rotations", "Congruence and Transformations", "Dilations", "Similarity and Transformations"]},
      {name: "Congruent Triangles", lessons: ["Angles of Triangles", "Congruent Polygons", "Proving Triangle Congruence by SAS", "Equilateral and Isosceles Triangles", "Proving Triangle Congruence by SSS", "Proving Triangle Congruence by ASA and AAS", "Using Congruent Triangles", "Coordinate Proofs"]},
      {name: "Relationships Within Triangles", lessons: ["Perpendicular and Angle Bisectors", "Bisectors of Triangles", "Medians and Altitudes of Triangles", "The Triangle Midsegment Theorem", "Indirect Proof and Inequalities in One Triangle", "Inequalities in Two Triangles"]},
      {name: "Quadrilaterals and Other Polygons", lessons: ["Angles of Polygons", "Properties of Parallelograms", "Proving That a Quadrilateral Is a Parallelogram", "Properties of Special Parallelograms", "Properties of Trapezoids and Kites"]},
      {name: "Similarity", lessons: ["Similar Polygons", "Proving Triangle Similarity by AA", "Proving Triangle Similarity by SSS and SAS", "Proportionality Theorems"]},
      {name: "Right Triangles and Trigonometry", lessons: ["The Pythagorean Theorem", "Special Right Triangles", "Similar Right Triangles", "The Tangent Ratio", "The Sine and Cosine Ratios", "Solving Right Triangles", "Law of Sines and Law of Cosines"]},
      {name: "Circles", lessons: ["Lines and Segments That Intersect Circles", "Finding Arc Measures", "Using Chords", "Inscribed Angles and Polygons", "Angle Relationships in Circles", "Segment Relationships in Circles", "Circles in the Coordinate Plane"]},
      {name: "Circumference Area and Volume", lessons: ["Circumference and Arc Length", "Areas of Circles and Sectors", "Areas of Polygons", "Three-Dimensional Figures", "Volumes of Prisms and Cylinders", "Volumes of Pyramids", "Surface Areas and Volumes of Cones", "Surface Areas and Volumes of Spheres"]},
      {name: "Probability", lessons: ["Sample Spaces and Probability", "Independent and Dependent Events", "Two-Way Tables and Probability", "Probability of Disjoint and Overlapping Events", "Permutations and Combinations", "Binomial Distributions"]},
    ],
  },
  "algebra-2": {
    name: "Algebra 2",
    slug: "algebra-2",
    chapters: [
      {name: "Linear Functions", lessons: ["Parent Functions and Transformations", "Transformations of Linear and Absolute Value Functions", "Modeling with Linear Functions", "Solving Linear Systems"]},
      {name: "Quadratic Functions", lessons: ["Transformations of Quadratic Functions", "Characteristics of Quadratic Functions", "Focus of a Parabola", "Modeling with Quadratic Functions"]},
      {name: "Quadratic Equations and Complex Numbers", lessons: ["Solving Quadratic Equations", "Complex Numbers", "Completing the Square", "Using the Quadratic Formula", "Solving Nonlinear Systems", "Quadratic Inequalities"]},
      {name: "Polynomial Functions", lessons: ["Graphing Polynomial Functions", "Adding, Subtracting, and Multiplying Polynomials", "Dividing Polynomials", "Factoring Polynomials", "Solving Polynomial Equations", "The Fundamental Theorem of Algebra", "Transformations of Polynomial Functions", "Analyzing Graphs of Polynomial Functions", "Modeling with Polynomial Functions"]},
      {name: "Function Operations and Inverses", lessons: ["Performing Function Operations", "Inverse of a Function"]},
      {name: "Rational Exponents and Radical Functions", lessons: ["nth Roots and Rational Exponents", "Properties of Rational Exponents and Radicals", "Graphing Radical Functions", "Solving Radical Equations and Inequalities"]},
      {name: "Exponential and Logarithmic Functions", lessons: ["Exponential Growth and Decay Functions", "The Natural Base e", "Logarithms and Logarithmic Functions", "Transformations of Exponential and Logarithmic Functions", "Properties of Logarithms", "Solving Exponential and Logarithmic Equations", "Modeling with Exponential and Logarithmic Functions"]},
      {name: "Rational Functions", lessons: ["Inverse Variation", "Graphing Rational Functions", "Multiplying and Dividing Rational Expressions", "Adding and Subtracting Rational Expressions", "Solving Rational Equations"]},
      {name: "Sequences and Series", lessons: ["Defining and Using Sequences and Series", "Analyzing Arithmetic Sequences and Series", "Analyzing Geometric Sequences and Series", "Finding Sums of Infinite Geometric Series", "Using Recursive Rules with Sequences"]},
      {name: "Trigonometric Ratios and Functions", lessons: ["Right Triangle Trigonometry", "Angles and Radian Measure", "Trigonometric Functions of Any Angle", "Graphing Sine and Cosine Functions", "Graphing Other Trigonometric Functions", "Modeling with Trigonometric Functions", "Using Trigonometric Identities", "Using Sum and Difference Formulas"]},
      {name: "Probability", lessons: ["Sample Spaces and Probability", "Independent and Dependent Events", "Two-Way Tables and Probability", "Probability of Disjoint and Overlapping Events", "Permutations and Combinations", "Binomial Distributions"]},
      {name: "Data Analysis and Statistics", lessons: ["Using Normal Distributions", "Populations, Samples, and Hypotheses", "Collecting Data", "Experimental Design", "Making Inferences from Sample Surveys", "Making Inferences from Experiments"]},
    ],
  },
  "ap-precalculus": {
    name: "AP Precalculus",
    slug: "ap-precalculus",
    chapters: [
      {name: "Functions: Composition, Invertibility, and Transformations", lessons: ["Composite Functions", "Inverse Functions", "Transformations"]},
      {name: "Functions: Rate of Change", lessons: ["Key Features of Graph of a Function", "Rates of Change", "Rates of Change for Linear Functions", "Rates of Change in Quadratic Functions"]},
      {name: "Polynomial Functions", lessons: ["Introduction to Polynomial Functions", "Key Features of Graphs", "Complex Zeros and Fundamental Theorem of Algebra", "Theorems on Real Zeros of Polynomials", "Modeling with Polynomial Functions"]},
      {name: "Exponential Functions", lessons: ["Sequence and Change Patterns", "Exponential Functions", "Exponential Function Transformations", "Exponential Modeling"]},
      {name: "Logarithmic Functions", lessons: ["Logarithmic Expressions", "Inverses of Exponential Functions", "Logarithmic Functions", "Logarithmic Function Manipulation", "Exponential and Logarithmic Equations and Inequalities", "Logarithmic Function Context and Data Modeling", "Semi-log Plots"]},
      {name: "Rational Functions", lessons: ["Vertical Asymptotes and Holes", "End Behavior of Rational Functions", "Zeros, Sign Analysis, and Rational Inequalities", "Equivalent Representations, Graphing, and Modeling"]},
      {name: "Trigonometric Functions", lessons: ["Angles and Radians", "Introduction to Sine and Cosine Functions", "Transformations and Modeling with Cosine and Sine Functions", "The Tangent Function", "Other Trigonometric Functions"]},
      {name: "Inverse Trigonometric Functions", lessons: ["Analysing Domain, Range and Graphs", "Evaluating Inverse Trigonometric Expressions", "Modeling"]},
      {name: "Analytic Trigonometry", lessons: ["Trigonometric Identities", "Sum and Difference, Multiple Angle Identities", "Trigonometric Equations and Inequalities"]},
      {name: "Polar Functions", lessons: ["Polar Coordinate System", "Graphs of Polar Functions", "Rates of Change of Polar Functions"]},
    ],
  },
  "ap-calculus-ab": {
    name: "AP Calculus AB",
    slug: "ap-calculus-ab",
    chapters: [
      {name: "Limits", lessons: ["Graphical estimation of limits", "One-sided and infinite limits", "Numerical estimation and oscillating behavior", "Limits by Direct Substitution and Limit Laws", "Evaluating Limits Algebraically", "Trigonometric limits and strategies for finding limits", "Limits of piecewise and composite functions", "Squeeze theorem", "Limits at infinity"]},
      {name: "Continuity", lessons: ["Introduction to Continuity", "Analytically Determining Continuity", "Properties of Continuous Functions", "Intermediate Value Theorem"]},
      {name: "Basics of Differentiation and Derivatives", lessons: ["Basics of Derivatives", "First Principle Definition of Derivatives", "Differentiability of a Function at a Point", "Continuity and Differentiability", "Laws of Derivatives", "Trigonometric Derivatives", "Derivatives of Natural Exponential and Logarithmic Functions", "Basics of Derivatives"]},
      {name: "Derivatives of Composite, Implicit, and Inverse Functions", lessons: ["Differentiate Composite Functions", "Differentiating Exponential and Logarithmic Functions with Different Bases", "Derivatives of Inverse Functions", "Differentiating Implicitly", "Finding Derivatives using Logarithmic Manipulation", "Differentiating Inverse Trigonometric Functions", "Finding Higher Order Derivatives"]},
      {name: "Applications of Differentiation", lessons: ["Interpreting Derivatives in a Context", "Related Rates Problems", "Tangents and Normals", "Linear Approximations", "L\u2019Hospital\u2019s Rule"]},
      {name: "Analysis of Functions Using Derivatives", lessons: ["Finding Extrema", "Extreme Value and Mean Value Theorems", "First Derivative Test", "Concavity and Second Derivative Test", "Graphing Functions Using Calculus", "Optimization Problems"]},
      {name: "Basics of Integral Calculus", lessons: ["The Area Problem", "The Intuition Behind Net Change", "Riemann Sums", "Definite Integrals (Notation and interpretation)", "Properties of Definite Integrals", "Using Antiderivatives to Evaluate Definite Integrals", "Indefinite Integrals (Notation and interpretation)", "Definite Integrals (Notation and interpretation)", "Method of Substitution", "Fundamental Theorem of Calculus"]},
      {name: "Differential Equations", lessons: ["Modeling Situations with Differential Equations", "Verifying Solutions for Differential Equations", "Sketching Slope Fields", "Reasoning Using Slope Fields", "Finding General Solutions Using Separation of Variables", "Finding Particular Solutions Using Initial Conditions and Separation of Variables", "Exponential Models with Differential Equations"]},
      {name: "Applications of Integration", lessons: ["Finding Area Under Simple Curves-1", "Finding Area Under Simple Curves-2", "Finding Area Under Simple Curves-3", "Finding Area Between Two Curves-1", "Finding Area Between Two Curves-2", "Finding Volumes of Solids of Revolution"]},
    ],
  },
};
