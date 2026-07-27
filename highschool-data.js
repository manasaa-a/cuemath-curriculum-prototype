// High-school course data — chapter -> lesson, per course.
// No grade segment in URLs — high school is organized by COURSE, per the confirmed decision
// in Open Questions & Decisions.md section 12. No emoji per chapter (this file never had them).
//
// REPLACED 2026-07-27 (Manasa's direction): switched from the June-2026 xlsx-derived chapter
// list to the "High School Learnosity references - Leap API" Google Sheet
// (ID 1Zg7PY_pXucxd5Fq-x00eOGMNI7AqV_IJ_y1ylk0iyEk), for this release, since the previous
// source has no real Learnosity references yet and this LEAP pull does. Chapter/lesson
// names are verbatim from that sheet, no rewording. Chapter counts changed substantially
// for every course (this is a materially different chapter breakdown, not just added refs):
// Algebra 1 13->17 chapters (73->84 lessons), Geometry 12->20 (74->85), Algebra 2 12->12
// (66->52), AP Precalculus 10->14 (41->59), AP Calculus AB 9->10 (62->51).
// This file still carries no Learnosity IDs itself (chapter/lesson names only, for the
// browsing UI). Actual CW/HW refs live in the source sheet, not ported here.
// Excluded: "Chapter Assessment" / "Recap" entries with no CW or HW Learnosity ref in the
// source sheet, same precedent as Grade 8's "Puzzle Cards" chapter removal (2026-07-21):
// a lesson row with nothing real to link to isn't included as a lesson.
const highSchoolData = {
  "algebra-1": {
    name: "Algebra 1",
    slug: "algebra-1",
    chapters: [
      {name: "Polynomial Expressions", lessons: ["Introduction to Algebraic Expressions", "Properties of Algebraic Expressions", "Introduction to Polynomial Expressions", "Addition, Subtraction and Multiplication of Polynomials", "Special Products of Polynomial Expressions", "Modeling with Polynomial Expressions"]},
      {name: "Simple Equations and Formulas", lessons: ["Equalities and Equations", "Solving One Step Equations", "Solving Multi Step Equations", "Solving Equations with Variable on Both Sides", "Application of Linear Equations"]},
      {name: "Factorization and Polynomial Equations", lessons: ["Factorise Polynomials by Taking out the Common factors and Grouping", "Factorise Trinomials by Splitting the Middle Term", "Factorise Polynomials using Identities", "Solve Simple Polynomial Equations"]},
      {name: "Linear Inequalities in One Variable", lessons: ["Introduction to Linear Inequalities", "Solving Simple Linear Inequalities - 1", "Solving Simple Linear Inequalities - 2", "Solving Compound Linear Inequalities Involving the 'AND' Operator", "Solving Compound Linear Inequalities Involving the 'OR' Operator", "Modelling using Linear Inequalities"]},
      {name: "Linear Equations in Two Variables", lessons: ["Identify and Solve Linear Equations in Two Variables", "Graph Linear Equations in Two Variables", "Find the Slope and Intercept of a Line", "Use the Slope-Intercept and Point-Slope forms to Write Equations and Graph Lines", "Use the Standard form to Write Equations and Graph Lines", "Write the Equation of a Line Parallel/Perpendicular to Another Line"]},
      {name: "Basics of Functions", lessons: ["Functions as Ordered Pairs, Mapping Diagrams or Function Notation", "Graphical Representation of a Function", "The Vertical Line Test", "The Domain and Range of a Function", "The Key Features of the Graph of a Function", "The Inverse of a Function"]},
      {name: "Graphical Analysis of Functions and Linear Functions", lessons: ["Identify Linear Functions and their Domain and Range", "Analyze Functions using the Average Rate of Change", "Model Real-Life Situations using Linear Functions", "Translate the Graphs of Functions", "Reflect Functions & Distinguish between Even and Odd Functions", "Scale the Graphs of Functions", "Find the Inverse of a Linear Function"]},
      {name: "Piecewise and Absolute Value Functions", lessons: ["Identify Absolute Value Functions and their Vertical Translations", "Horizontally Translate the Graphs of Absolute Value Functions", "Reflect the Graphs of Absolute Value Functions", "Scale the Graphs of Absolute Value Functions", "Identify Piecewise Functions"]},
      {name: "Systems of Linear Equations", lessons: ["Solve Systems of Linear Equations Graphically", "Solve Systems of Linear Equations Algebraically", "Modelling using System of Linear Equations"]},
      {name: "Linear Inequalities in Two Variables and their Systems", lessons: ["Graph Linear Inequalities in Two Variables", "Graph Systems of Linear Inequalities in Two Variables", "Model Real-Life Situtations using Linear Inequalities in Two Variables"]},
      {name: "Rational Exponents and Radicals", lessons: ["Simplify Expressions Involving Integral Exponents", "Interpret Rational Exponents", "Simplify Expressions Involving Rational Exponents"]},
      {name: "Exponential Functions and Equations", lessons: ["Identify Key Features of Exponential  Functions", "Find the Initial Value and Common  Ratio of Exponential Functions", "Model Real-Life Situations using  Exponential Functions", "Solve Exponential Equations"]},
      {name: "Sequences", lessons: ["A General Introdution to Sequences", "Understanding Arithmetic Sequences", "Understanding Geometric Sequences and Comparing Them with Arithmetic Sequences"]},
      {name: "Quadratic Functions", lessons: ["Key Features of the Graphs of Quadratic Functions", "Quadratic Functions in Different Forms", "Model Real-Life Situations using Quadratic Functions", "Translate the Graphs of Quadratic Functions", "Scale the Graphs of Quadratic Functions", "Combine Transformations of Quadratic Functions", "Find the Inverse of a Quadratic Function"]},
      {name: "Quadratic Equations", lessons: ["Introduction to Quadratic Equations", "Solve Quadratic Equations by taking Square Root and by Splitting the Middle Term", "Solve Quadratic Equations by Completing the Square", "Solve Quadratic Equations using Quadratic Formula", "Model using Quadratic Equations"]},
      {name: "Radical Functions and Equations", lessons: ["Identify and Transform Square Root Functions", "Identify and Transform Cube Root Functions", "Solve Square Root Equations", "Solve Cube Root Equations"]},
      {name: "Statistics", lessons: ["Analyse Measures of Center", "Analyse Measures of Variation", "Draw and Interpret Plots", "Analyse and Compare Data", "Make and Interpret Two Way Tables", "Classify and Display Data", "Scatter Plots & Linear Regression"]}
    ]
  },
  "geometry": {
    name: "Geometry",
    slug: "geometry",
    chapters: [
      {name: "Lines, Angles, and Triangles", lessons: ["Lines and Angles", "Angles, Parallel lines, and Transversals", "Angles in Triangles", "Basic Constructions", "Some Special Points in Triangles", "Special Points in Triangles - Construction"]},
      {name: "Rigid Transformations and Congruence", lessons: ["Translations on the Coordinate Plane", "Reflection of Points on the Coordinate Plane", "Reflection of Shapes on the Coordinate Plane", "Rotation of Points on the Coordinate Plane", "Rotation of Shapes on the Coordinate Plane", "Congruence and Transformations"]},
      {name: "Triangles and their Congruence", lessons: ["Angles and Sides in Triangles", "Congruence in Triangles-1", "Congruence in Triangles-2", "Proof using Congruence in Triangles"]},
      {name: "Quadrilaterals", lessons: ["Prove and Apply the Properties of a Parallelogram", "Prove and Apply the Mid-Point Theorem and its Converse"]},
      {name: "Dilations and Similarity", lessons: ["Dilations", "Dilations on the Coordinate Plane", "Triangle Similarity", "Proofs using Similar Triangles"]},
      {name: "Triangles and their Similarity", lessons: ["Identify Similar Shapes and Their Corresponding Parts", "Apply Basic Proportionality Theorem and its Converse in Solving Problems", "Apply the Criteria of Similarity of Triangles", "Relate the Areas of Similar Triangles", "Apply Pythagoras' Theorem to Solve Problems"]},
      {name: "Trigonometry with Right Triangles", lessons: ["Introduction to Trigonometric Ratios", "Define Trigonometric Ratios", "Relation between Acute Angles using Trigonometric Ratios", "The Behavior of sin, cos and tan", "Trig Ratios Values at 30-45-60", "Find Missing Side Lengths of a Triangle", "Trigonometry and Pythagorean Theorem"]},
      {name: "Analytic Geometry I", lessons: ["Apply the Distance Formula in Solving Problems", "Apply the Section Formula in Solving Problems", "Apply the Formula for the Area of a Triangle"]},
      {name: "Circles I", lessons: ["Relation Between Chord Lengths, Radius and Distance From the Center", "Prove and Apply Theorems on Angles Subtended by Chords", "Prove and Apply Theorems on Concylic Points and Cyclic Quadrilaterals"]},
      {name: "Circles II", lessons: ["Solve Geometric Problems on Tangents At a Point", "Solve Geometric Problems on Tangents From an External Point"]},
      {name: "Analytic Geometry II", lessons: ["Write the Equation of a Line Parallel/Perpendicular to Another Line", "Find Distance between a Point and a Line", "Find Equation of Circle", "Find Equation of Parabola"]},
      {name: "Perimeter and Area", lessons: ["Solve Contextual Problems on Areas of Circles", "Find the Area of a Circular Sector", "Find the Area of a Circular Segment", "Solve Contextual Problems on Areas of Sectors and Segments", "Find the Area of Combinations of Plane Figures"]},
      {name: "Visualizing Solid Shapes", lessons: ["Visualizing 2D and 3D shapes", "Surface Area and Volume of Prisms", "Surface Area and Volume of Pyramids"]},
      {name: "Surface Area and Volume", lessons: ["Solve Problems on Surface Area of Cubes and Cuboids", "Solve Problems on Surface Area of Cylinders", "Solve Problems on Surface Area of Cones", "Solve Problems on Surface Area of Spheres and Hemispheres", "Solve Problems on Volume of Cubes and Cuboids", "Solve Problems on Volume of Cylinders", "Solve Problems on Volume of Cones", "Solve Problems on Volume of Spheres and Hemispheres"]},
      {name: "Sets", lessons: ["Represent and Classify Sets", "Compare Sets", "Operations on Sets Using Venn Diagram", "Find Complements of Sets", "Solve Real-life Problems Using Sets"]},
      {name: "Permutations and Combinations", lessons: ["Apply the Principles of Counting", "Express Using Factorials", "Count the Number of Arrangements", "Count the Number of Choices"]},
      {name: "Probability", lessons: ["Basics of Probability", "Venn Diagrams and 'OR' Events", "'AND' Events", "Conditional Probability and Independent Events"]},
      {name: "Trigonometry with General Triangles", lessons: ["Find the Area of a Triangle using Trigonometry", "Solve Problems using the Sine Rule", "Solve Problems using the Cosine Rule"]},
      {name: "Applications of Right Triangle Trigonometry", lessons: ["Solve Simple Problems Involving Heights and Distances", "Solve Advanced Problems Involving Heights and Distances"]},
      {name: "Reasoning & Proofs", lessons: ["Simple & Compound Statements", "Conditional and Biconditional Statements", "Inductive and Deductive Reasoning", "Postulates and Diagrams", "Proofs"]}
    ]
  },
  "algebra-2": {
    name: "Algebra 2",
    slug: "algebra-2",
    chapters: [
      {name: "Polynomials and Polynomial Functions", lessons: ["Multiplying Polynomials", "Multiplying Polynomials using Identities", "Factoring Polynomials", "Dividing Polynomials", "Synthetic Division, Remainder and Factor Theorem"]},
      {name: "Complex Numbers and Quadratic Equations", lessons: ["Imaginary Unit", "Introduction to Complex Numbers", "Plotting of a Complex Number", "Operations on Complex Numbers", "Quadratic Equations with Complex Solutions"]},
      {name: "Quadratic Functions", lessons: ["Build Quadratic Functions Using Different Representations", "Model Real-Life Situations using Quadratic Functions", "Combine Transformations of Quadratic Functions", "Find the Inverse of a Quadratic Function"]},
      {name: "Equations and Inequalities", lessons: ["Absolute Value Equations", "Absolute Value Inequalities", "Quadratic Inequalities in One Variable", "Quadratic Inequalities in Two Variables", "Systems of Linear Equations in Three Variables"]},
      {name: "Radical Functions", lessons: ["Identify and Transform Square Root Functions", "Identify and Transform Cube Root Functions", "Solve Radical Equations", "Find Inverse of Radical Functions", "Solve Radical Inequalities"]},
      {name: "Logarithmic Functions", lessons: ["Evaluate Logarithmic Expressions", "Identify the Key Features of Logarithmic Functions", "Evaluate Expressions Using Logarithmic Properties", "Solve Exponential and Logarithmic Equations"]},
      {name: "Rational Functions", lessons: ["Simplify Rational Expressions", "Multiply and Divide Rational Expressions", "Add and Subtract Rational Expressions", "Solve Rational Equations", "Analyse Rational Functions", "Graph Rational Functions", "Model Real-Life Situtations using Rational Functions"]},
      {name: "More Equations", lessons: ["Solve Systems of Non-Linear Equations", "Solve Equations Graphically"]},
      {name: "Trigonometric Functions", lessons: ["Angles and Radians", "Introduction to Sine and Cosine Functions", "Transformations and Modeling with Cosine and Sine Functions", "Other Trigonometric Functions"]},
      {name: "Trigonometric Identities", lessons: ["Trigonometric Identities"]},
      {name: "Statistics", lessons: ["Normal Distributions and its Properties", "Sampling and Observational Studies", "Estimate Population Parameters", "Draw Conclusions using Data from an Experiment"]},
      {name: "Polynomial Functions", lessons: ["Zeros of Polynomial Functions", "Fundamental Theorem of Algebra", "End Behavior of Polynomial Functions", "x-intercepts of Polynomial Functions", "Graphing of Polynomial Functions", "Modeling using Polynomial Functions"]}
    ]
  },
  "ap-precalculus": {
    name: "AP Precalculus",
    slug: "ap-precalculus",
    chapters: [
      {name: "Functions: Composition, Invertibility, and Transformations", lessons: ["Composite Functions Part 1", "Composite Functions Part 2", "Inverse Functions Part 1", "Inverse Functions Part 2", "Function Transformations Part 1", "Function Transformations Part 2"]},
      {name: "Functions: Rates of Change", lessons: ["Key Features of Graph of a Function", "Rates of Change", "Rates of Change for Linear Functions", "Rates of Change in Quadratic Functions"]},
      {name: "Polynomial Functions", lessons: ["Polynomial Functions and their Graphs", "Zeros of Polynomial Functions", "Modelling with Polynomial Functions"]},
      {name: "Rational Functions", lessons: ["Solve Rational Equations", "Solve Rational Inequalities", "Analyse Rational Functions", "Graph Rational Functions", "Find Inverse of Rational Functions", "Model Real-Life Situations using Rational Functions"]},
      {name: "Exponential and Logarithmic Functions", lessons: ["Properties of Logarithms", "Exponential and Logarithmic Equations", "Logarithmic and Exponential Inequalities", "Real-Life Modelling using Exponential Functions"]},
      {name: "Trigonometric Functions", lessons: ["Angles and Radians", "Introduction to Sine and Cosine Functions", "Transformations and Modeling with Cosine and Sine Functions", "The Tangent Function", "Other Trigonometric Functions"]},
      {name: "Inverse Trigonometric Functions", lessons: ["Inverse Trigonometric Functions"]},
      {name: "Analytic Trigonometry", lessons: ["Trigonometric Identities", "Sum and Difference, Multiple Angle Identities", "Trigonometric Equations and Inequalities"]},
      {name: "Basics of Matrices", lessons: ["Introduction To Matrices", "Operations On Matrices", "Symmetric And Skew Symmetric Matrices", "Elementary Operation Of A Matrix"]},
      {name: "Matrices and Systems of Equations", lessons: ["Basics of Determinants", "Properties of Determinants", "Inverse of a Matrix", "Solution of Linear Equations"]},
      {name: "Conic Sections", lessons: ["Conic Sections and the Parabola", "Equation of the Parabola", "The Ellipse and its Characteristics", "Equation of the Ellipse", "The Hyperbola and its Equation", "Graph of the Hyperbola"]},
      {name: "Vectors", lessons: ["Introduction to Vectors", "Basic Operations on Vectors", "Unit Vectors", "Dot Product of Vectors"]},
      {name: "Complex Numbers", lessons: ["Represent Complex Numbers Graphically", "Divide Complex Numbers using Complex Conjugates", "Represent Complex Numbers in the Polar Form", "Find the Powers and Roots of Complex Numbers"]},
      {name: "Sequences and Series", lessons: ["Introduction to Arithmetic Progression", "Sum Of Terms Of An Arithmetic Progression", "Introduction To Geometric Progression", "Sum Of Terms Of A Geometric Progression", "Sum Of Some Special Series"]}
    ]
  },
  "ap-calculus-ab": {
    name: "AP Calculus AB",
    slug: "ap-calculus-ab",
    chapters: [
      {name: "Limits", lessons: ["Introduction to Limits (Graphical Estimation)", "One-sided and Infinite Limits", "Numerical Estimation and Oscillating Behavior", "Limits by Direct Substitution and Limit Laws", "Evaluating Limits Algebraically", "Trig Limits and Strategies for Finding Limits", "Limit of Piecewise and Composite Functions", "Squeeze Theorem", "Limits at Infinity"]},
      {name: "Continuity", lessons: ["Introduction to Continuity", "Analytically Determining Continuity", "Properties of Continuous Functions", "Intermediate Value Theorem"]},
      {name: "Derivatives", lessons: ["Interpretation of the Derivative", "The Derivative Function", "Differentiability", "Relation between Continuity and Differentiability", "Algebra Laws of Derivatives", "Derivatives of Standard Functions"]},
      {name: "Derivatives of Composite, Implicit, and Inverse Functions", lessons: ["The Chain Rule", "Implicit and Logarithmic Differentiation", "Derivatives of Inverse Trigonometric Functions", "Higher Order Derivatives"]},
      {name: "Applications of Differentiation", lessons: ["Derivatives in Applied Contexts", "Rate of Change of Quantities", "Local Linearity"]},
      {name: "Analysis of Functions Using Derivatives", lessons: ["Absolute and Local Extrema", "Extreme Value and Mean Value Theorem", "Analyzing Functions Using First and Second Derivatives", "Find Key Features of a Function Using Derivatives"]},
      {name: "Basics of Integral Calculus", lessons: ["The Area Under a Curve", "Riemann Sums", "Definite Integration", "Indefinite Integration", "Method Of Substitution", "Fundamental Theorem of Calculus"]},
      {name: "Finding Antiderivatives and Definite Integrals", lessons: ["Antiderivatives", "Algebra and Properties of Indefinite Integral", "Integration by Simple Rearrangements", "Integration By Substitution", "Integrate Using the Method of Partial Fractions", "Integration by Parts", "Definite Integration"]},
      {name: "Differential Equations", lessons: ["Identify order and degree of differential equations", "Identify general and particular solutions of differential equations", "Formulate the Differential Equations Given Its General Solution", "Find the Solutions of Differential Equations with Variables Separable", "Identify Homogeneous Differential Equations and Find its Solutions", "Identify First-Order Linear Differential Equations and Find its Solutions"]},
      {name: "Applications of Integration - 1", lessons: ["Area Under Simple Curves", "Area Between Two Curves"]}
    ]
  }
};
