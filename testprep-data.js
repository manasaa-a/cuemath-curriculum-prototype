// Test-prep curriculum data — chapter -> block -> worksheet, per exam program.
// Generated from the Drive test-prep CSVs via generate_testprep_data.py.
// URLs mirror the 'Test Prep URL Structure — DRAFT for DK discussion' Google Sheet
// (ID 13Yj9S8cUGPu5HxdHGd4ZKI0okW4cp2psTUnyFFHZtxE) — this is a PROPOSAL, not confirmed.
// Chapter/block/worksheet names are verbatim from the source CSVs — no rewording.
const testPrepData = {
  "moems": {
    "name": "MOEMS Mock Tests",
    "aboutName": "MOEMS",
    "slug": "moems",
    "examUrl": "/maths/moems/",
    "hasBands": false,
    "bands": [
      {
        "slug": null,
        "label": null,
        "programCode": "MOEMS.EL",
        "url": "/maths/moems/",
        "chapters": [
          {
            "name": "Mock Test 1",
            "url": "/maths/moems/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/moems/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1 A",
                    "url": "/maths/moems/mock-test-1/mock-test-1/mock-test-1-a/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-1A",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 B",
                    "url": "/maths/moems/mock-test-1/mock-test-1/mock-test-1-b/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-1B",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 C",
                    "url": "/maths/moems/mock-test-1/mock-test-1/mock-test-1-c/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-1C",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 D",
                    "url": "/maths/moems/mock-test-1/mock-test-1/mock-test-1-d/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-1D",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 E",
                    "url": "/maths/moems/mock-test-1/mock-test-1/mock-test-1-e/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-1E",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/moems/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/moems/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2 A",
                    "url": "/maths/moems/mock-test-2/mock-test-2/mock-test-2-a/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-2A",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 B",
                    "url": "/maths/moems/mock-test-2/mock-test-2/mock-test-2-b/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-2B",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 C",
                    "url": "/maths/moems/mock-test-2/mock-test-2/mock-test-2-c/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-2C",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 D",
                    "url": "/maths/moems/mock-test-2/mock-test-2/mock-test-2-d/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-2D",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 E",
                    "url": "/maths/moems/mock-test-2/mock-test-2/mock-test-2-e/",
                    "learnosityRef": "MOEMS-Elementary-Mock-Test-2E",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "map": {
    "name": "MAP Curriculum",
    "aboutName": "MAP",
    "slug": "map",
    "examUrl": "/maths/map/",
    "hasBands": true,
    "bands": [
      {
        "slug": "elementary",
        "label": "Elementary",
        "programCode": "MAP.EL",
        "url": "/maths/map/elementary/",
        "chapters": [
          {
            "name": "Number system",
            "url": "/maths/map/elementary/number-system/",
            "blocks": [
              {
                "name": "Number system Practice 1",
                "url": "/maths/map/elementary/number-system/number-system-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number system Practice 1",
                    "url": "/maths/map/elementary/number-system/number-system-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Number-System-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number system Practice 2",
                "url": "/maths/map/elementary/number-system/number-system-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number system Practice 2",
                    "url": "/maths/map/elementary/number-system/number-system-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Number-System-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number operations",
            "url": "/maths/map/elementary/number-operations/",
            "blocks": [
              {
                "name": "Number operations Practice 1",
                "url": "/maths/map/elementary/number-operations/number-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number operations Practice 1",
                    "url": "/maths/map/elementary/number-operations/number-operations-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Number-Operations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number operations Practice 2",
                "url": "/maths/map/elementary/number-operations/number-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number operations Practice 2",
                    "url": "/maths/map/elementary/number-operations/number-operations-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Number-Operations-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and operations",
            "url": "/maths/map/elementary/fractions-and-operations/",
            "blocks": [
              {
                "name": "Fractions and operations Practice 1",
                "url": "/maths/map/elementary/fractions-and-operations/fractions-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and operations Practice 1",
                    "url": "/maths/map/elementary/fractions-and-operations/fractions-and-operations-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Fractions-Operations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and operations Practice 2",
                "url": "/maths/map/elementary/fractions-and-operations/fractions-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and operations Practice 2",
                    "url": "/maths/map/elementary/fractions-and-operations/fractions-and-operations-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Fractions-Operations-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimals",
            "url": "/maths/map/elementary/decimals/",
            "blocks": [
              {
                "name": "Decimals Practice 1",
                "url": "/maths/map/elementary/decimals/decimals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals Practice 1",
                    "url": "/maths/map/elementary/decimals/decimals-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Decimals-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Decimals Practice 2",
                "url": "/maths/map/elementary/decimals/decimals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals Practice 2",
                    "url": "/maths/map/elementary/decimals/decimals-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Decimals-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic patterns",
            "url": "/maths/map/elementary/algebraic-patterns/",
            "blocks": [
              {
                "name": "Algebraic patterns Practice 1",
                "url": "/maths/map/elementary/algebraic-patterns/algebraic-patterns-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic patterns Practice 1",
                    "url": "/maths/map/elementary/algebraic-patterns/algebraic-patterns-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Algebraic-Patterns-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Algebraic patterns Practice 2",
                "url": "/maths/map/elementary/algebraic-patterns/algebraic-patterns-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic patterns Practice 2",
                    "url": "/maths/map/elementary/algebraic-patterns/algebraic-patterns-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Algebraic-Patterns-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/map/elementary/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice 1",
                "url": "/maths/map/elementary/measurement-and-time/measurement-and-time-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice 1",
                    "url": "/maths/map/elementary/measurement-and-time/measurement-and-time-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Measurement-Time-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Measurement and Time Practice 2",
                "url": "/maths/map/elementary/measurement-and-time/measurement-and-time-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice 2",
                    "url": "/maths/map/elementary/measurement-and-time/measurement-and-time-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Measurement-Time-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/map/elementary/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/map/elementary/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/map/elementary/geometry/geometry-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Geometry-Mensuration-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/map/elementary/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/map/elementary/geometry/geometry-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Geometry-Mensuration-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/map/elementary/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice 1",
                "url": "/maths/map/elementary/coordinate-geometry/coordinate-geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 1",
                    "url": "/maths/map/elementary/coordinate-geometry/coordinate-geometry-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Coordinate-Geometry-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Coordinate Geometry Practice 2",
                "url": "/maths/map/elementary/coordinate-geometry/coordinate-geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 2",
                    "url": "/maths/map/elementary/coordinate-geometry/coordinate-geometry-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Coordinate-Geometry-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/map/elementary/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice 1",
                "url": "/maths/map/elementary/data-handling/data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 1",
                    "url": "/maths/map/elementary/data-handling/data-handling-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Data-Handling-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Handling Practice 2",
                "url": "/maths/map/elementary/data-handling/data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 2",
                    "url": "/maths/map/elementary/data-handling/data-handling-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Data-Handling-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Money",
            "url": "/maths/map/elementary/money/",
            "blocks": [
              {
                "name": "Money Practice 1",
                "url": "/maths/map/elementary/money/money-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Money Practice 1",
                    "url": "/maths/map/elementary/money/money-practice-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Money-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Money Practice 2",
                "url": "/maths/map/elementary/money/money-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Money Practice 2",
                    "url": "/maths/map/elementary/money/money-practice-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Money-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/map/elementary/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/map/elementary/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/map/elementary/mock-test-1/mock-test-1/",
                    "learnosityRef": "TestPrep-MAP-EL-Practice-Test-1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/map/elementary/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/map/elementary/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/map/elementary/mock-test-2/mock-test-2/",
                    "learnosityRef": "TestPrep-MAP-EL-Practice-Test-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "middle",
        "label": "Middle",
        "programCode": "MAP.ML",
        "url": "/maths/map/middle/",
        "chapters": [
          {
            "name": "Numbers and Operations",
            "url": "/maths/map/middle/numbers-and-operations/",
            "blocks": [
              {
                "name": "Numbers and Operations Practice 1",
                "url": "/maths/map/middle/numbers-and-operations/numbers-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 1",
                    "url": "/maths/map/middle/numbers-and-operations/numbers-and-operations-practice-1/",
                    "learnosityRef": "MAP-ML-Number-Operations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numbers and Operations Practice 2",
                "url": "/maths/map/middle/numbers-and-operations/numbers-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 2",
                    "url": "/maths/map/middle/numbers-and-operations/numbers-and-operations-practice-2/",
                    "learnosityRef": "MAP-ML-Number-Operations-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/map/middle/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals Practice 1",
                "url": "/maths/map/middle/fractions-and-decimals/fractions-and-decimals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 1",
                    "url": "/maths/map/middle/fractions-and-decimals/fractions-and-decimals-practice-1/",
                    "learnosityRef": "MAP-ML-Fractions-Decimals-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Decimals Practice 2",
                "url": "/maths/map/middle/fractions-and-decimals/fractions-and-decimals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 2",
                    "url": "/maths/map/middle/fractions-and-decimals/fractions-and-decimals-practice-2/",
                    "learnosityRef": "MAP-ML-Fractions-Decimals-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratio and Percentages",
            "url": "/maths/map/middle/ratio-and-percentages/",
            "blocks": [
              {
                "name": "Ratio and Percentages Practice 1",
                "url": "/maths/map/middle/ratio-and-percentages/ratio-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio and Percentages Practice 1",
                    "url": "/maths/map/middle/ratio-and-percentages/ratio-and-percentages-practice-1/",
                    "learnosityRef": "MAP-ML-Ratio-Percent-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratio and Percentages Practice 2",
                "url": "/maths/map/middle/ratio-and-percentages/ratio-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio and Percentages Practice 2",
                    "url": "/maths/map/middle/ratio-and-percentages/ratio-and-percentages-practice-2/",
                    "learnosityRef": "MAP-ML-Ratio-Percent-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Expressions, Equations and Inequalities",
            "url": "/maths/map/middle/expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Expressions, Equations and Inequalities Practice 1",
                "url": "/maths/map/middle/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions, Equations and Inequalities Practice 1",
                    "url": "/maths/map/middle/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "MAP-ML-Expressions-Equations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Expressions, Equations and Inequalities Practice 2",
                "url": "/maths/map/middle/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions, Equations and Inequalities Practice 2",
                    "url": "/maths/map/middle/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "MAP-ML-Expressions-Equations-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/map/middle/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/map/middle/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/map/middle/geometry/geometry-practice-1/",
                    "learnosityRef": "MAP-ML-Geometry-Mensuration-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/map/middle/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/map/middle/geometry/geometry-practice-2/",
                    "learnosityRef": "MAP-ML-Geometry-Mensuration-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 3",
                "url": "/maths/map/middle/geometry/geometry-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 3",
                    "url": "/maths/map/middle/geometry/geometry-practice-3/",
                    "learnosityRef": "MAP-ML-Geometry-Mensuration-P03",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 4",
                "url": "/maths/map/middle/geometry/geometry-practice-4/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 4",
                    "url": "/maths/map/middle/geometry/geometry-practice-4/",
                    "learnosityRef": "MAP-ML-Geometry-Mensuration-P04",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Analysis and Probability",
            "url": "/maths/map/middle/data-analysis-and-probability/",
            "blocks": [
              {
                "name": "Data Analysis and Probability Practice 1",
                "url": "/maths/map/middle/data-analysis-and-probability/data-analysis-and-probability-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Analysis and Probability Practice 1",
                    "url": "/maths/map/middle/data-analysis-and-probability/data-analysis-and-probability-practice-1/",
                    "learnosityRef": "MAP-ML-DATA-HANDLING-PROBABILITY-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Analysis and Probability Practice 2",
                "url": "/maths/map/middle/data-analysis-and-probability/data-analysis-and-probability-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Analysis and Probability Practice 2",
                    "url": "/maths/map/middle/data-analysis-and-probability/data-analysis-and-probability-practice-2/",
                    "learnosityRef": "MAP-ML-DATA-HANDLING-PROBABILITY-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/map/middle/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/map/middle/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/map/middle/mock-test-1/mock-test-1/",
                    "learnosityRef": "MAP ML Mock Test 1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/map/middle/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/map/middle/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/map/middle/mock-test-2/mock-test-2/",
                    "learnosityRef": "MAP ML Mock Test 2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "iar": {
    "name": "IAR Curriculum",
    "aboutName": "IAR",
    "slug": "iar",
    "examUrl": "/maths/iar/",
    "hasBands": true,
    "bands": [
      {
        "slug": "grade-3",
        "label": "Grade 3",
        "programCode": "IAR.G3",
        "url": "/maths/iar/grade-3/",
        "chapters": [
          {
            "name": "Place Value and Number Comparison",
            "url": "/maths/iar/grade-3/place-value-and-number-comparison/",
            "blocks": [
              {
                "name": "Place Value and Number Comparison Practice 1",
                "url": "/maths/iar/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 1",
                    "url": "/maths/iar/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Place Value and Number Comparison Practice 2",
                "url": "/maths/iar/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 2",
                    "url": "/maths/iar/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Addition and Subtraction",
            "url": "/maths/iar/grade-3/addition-and-subtraction/",
            "blocks": [
              {
                "name": "Addition and Subtraction Practice 1",
                "url": "/maths/iar/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 1",
                    "url": "/maths/iar/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                    "learnosityRef": "TestPrep-G3-AS-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Addition and Subtraction Practice 2",
                "url": "/maths/iar/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 2",
                    "url": "/maths/iar/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                    "learnosityRef": "TestPrep-G3-Addition-Subtraction-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division",
            "url": "/maths/iar/grade-3/multiplication-and-division/",
            "blocks": [
              {
                "name": "Multiplication and Division Practice 1",
                "url": "/maths/iar/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 1",
                    "url": "/maths/iar/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 2",
                "url": "/maths/iar/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 2",
                    "url": "/maths/iar/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 3",
                "url": "/maths/iar/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 3",
                    "url": "/maths/iar/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-3",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions",
            "url": "/maths/iar/grade-3/fractions/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/iar/grade-3/fractions/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/iar/grade-3/fractions/fractions-practice-1/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/iar/grade-3/fractions/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/iar/grade-3/fractions/fractions-practice-2/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Patterns",
            "url": "/maths/iar/grade-3/algebraic-patterns/",
            "blocks": [
              {
                "name": "Algebraic Patterns Practice",
                "url": "/maths/iar/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Patterns Practice",
                    "url": "/maths/iar/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                    "learnosityRef": "TestPrep-G3-Algebraic-Patterns-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry and Mensuration",
            "url": "/maths/iar/grade-3/geometry-and-mensuration/",
            "blocks": [
              {
                "name": "Geometry and Mensuration Practice 1",
                "url": "/maths/iar/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 1",
                    "url": "/maths/iar/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry and Mensuration Practice 2",
                "url": "/maths/iar/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 2",
                    "url": "/maths/iar/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/iar/grade-3/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/iar/grade-3/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/iar/grade-3/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "TestPrep-G3-Measurement-Time-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/iar/grade-3/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/iar/grade-3/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/iar/grade-3/data-handling/data-handling-practice/",
                    "learnosityRef": "TestPrep-G3-Data-Handling-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/iar/grade-3/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/iar/grade-3/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1: Unit 1",
                    "url": "/maths/iar/grade-3/mock-test-1/mock-test-1/mock-test-1-unit-1/",
                    "learnosityRef": "TestPrep-IAR-G3-Practice-Test-1-Unit-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1: Unit 2",
                    "url": "/maths/iar/grade-3/mock-test-1/mock-test-1/mock-test-1-unit-2/",
                    "learnosityRef": "TestPrep-IAR-G3-Practice-Test-1-Unit-2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1: Unit 3",
                    "url": "/maths/iar/grade-3/mock-test-1/mock-test-1/mock-test-1-unit-3/",
                    "learnosityRef": "TestPrep-IAR-G3-Practice-Test-1-Unit-3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/iar/grade-3/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/iar/grade-3/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2: Unit 1",
                    "url": "/maths/iar/grade-3/mock-test-2/mock-test-2/mock-test-2-unit-1/",
                    "learnosityRef": "TestPrep-IAR-G3-Practice-Test-2-Unit-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2: Unit 2",
                    "url": "/maths/iar/grade-3/mock-test-2/mock-test-2/mock-test-2-unit-2/",
                    "learnosityRef": "TestPrep-IAR-G3-Practice-Test-2-Unit-2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2: Unit 3",
                    "url": "/maths/iar/grade-3/mock-test-2/mock-test-2/mock-test-2-unit-3/",
                    "learnosityRef": "TestPrep-IAR-G3-Practice-Test-2-Unit-3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-4",
        "label": "Grade 4",
        "programCode": "IAR.G4",
        "url": "/maths/iar/grade-4/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/iar/grade-4/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice 1",
                "url": "/maths/iar/grade-4/number-systems/number-systems-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 1",
                    "url": "/maths/iar/grade-4/number-systems/number-systems-practice-1/",
                    "learnosityRef": "G4-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Systems Practice 2",
                "url": "/maths/iar/grade-4/number-systems/number-systems-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 2",
                    "url": "/maths/iar/grade-4/number-systems/number-systems-practice-2/",
                    "learnosityRef": "G4-Practice-Number-Systems-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Operations on Numbers",
            "url": "/maths/iar/grade-4/operations-on-numbers/",
            "blocks": [
              {
                "name": "Operations on Numbers Practice 1",
                "url": "/maths/iar/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 1",
                    "url": "/maths/iar/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 2",
                "url": "/maths/iar/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 2",
                    "url": "/maths/iar/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 3",
                "url": "/maths/iar/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 3",
                    "url": "/maths/iar/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Factors Multiples and Primes",
            "url": "/maths/iar/grade-4/factors-multiples-and-primes/",
            "blocks": [
              {
                "name": "Factors Multiples Primes Practice",
                "url": "/maths/iar/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Factors Multiples Primes Practice",
                    "url": "/maths/iar/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                    "learnosityRef": "G4-Practice-Factors-Multiples-Primes-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Operations",
            "url": "/maths/iar/grade-4/fractions-and-operations/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/iar/grade-4/fractions-and-operations/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/iar/grade-4/fractions-and-operations/fractions-practice-1/",
                    "learnosityRef": "G4-Practice-Fractions-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/iar/grade-4/fractions-and-operations/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/iar/grade-4/fractions-and-operations/fractions-practice-2/",
                    "learnosityRef": "G4-Practice-Fractions-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 3",
                "url": "/maths/iar/grade-4/fractions-and-operations/fractions-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 3",
                    "url": "/maths/iar/grade-4/fractions-and-operations/fractions-practice-3/",
                    "learnosityRef": "G4-Practice-Fractions-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimal Numbers",
            "url": "/maths/iar/grade-4/decimal-numbers/",
            "blocks": [
              {
                "name": "Decimals Practice",
                "url": "/maths/iar/grade-4/decimal-numbers/decimals-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals Practice",
                    "url": "/maths/iar/grade-4/decimal-numbers/decimals-practice/",
                    "learnosityRef": "G4-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/iar/grade-4/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/iar/grade-4/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/iar/grade-4/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "G4-Practice-Measurement-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry and Patterns",
            "url": "/maths/iar/grade-4/symmetry-and-patterns/",
            "blocks": [
              {
                "name": "Patterns Practice",
                "url": "/maths/iar/grade-4/symmetry-and-patterns/patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Patterns Practice",
                    "url": "/maths/iar/grade-4/symmetry-and-patterns/patterns-practice/",
                    "learnosityRef": "G4-Practice-Patterns-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Symmetry Practice",
                "url": "/maths/iar/grade-4/symmetry-and-patterns/symmetry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry Practice",
                    "url": "/maths/iar/grade-4/symmetry-and-patterns/symmetry-practice/",
                    "learnosityRef": "G4-Practice-Symmetry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/iar/grade-4/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/iar/grade-4/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/iar/grade-4/geometry/geometry-practice-1/",
                    "learnosityRef": "G4-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/iar/grade-4/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/iar/grade-4/geometry/geometry-practice-2/",
                    "learnosityRef": "G4-Practice-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/iar/grade-4/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/iar/grade-4/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/iar/grade-4/data-handling/data-handling-practice/",
                    "learnosityRef": "G4-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/iar/grade-4/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/iar/grade-4/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1: Unit 1",
                    "url": "/maths/iar/grade-4/mock-test-1/mock-test-1/mock-test-1-unit-1/",
                    "learnosityRef": "TestPrep-IAR-G4-Practice-Test-1-Unit-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1: Unit 2",
                    "url": "/maths/iar/grade-4/mock-test-1/mock-test-1/mock-test-1-unit-2/",
                    "learnosityRef": "TestPrep-IAR-G4-Practice-Test-1-Unit-2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1: Unit 3",
                    "url": "/maths/iar/grade-4/mock-test-1/mock-test-1/mock-test-1-unit-3/",
                    "learnosityRef": "TestPrep-IAR-G4-Practice-Test-1-Unit-3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/iar/grade-4/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/iar/grade-4/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2: Unit 1",
                    "url": "/maths/iar/grade-4/mock-test-2/mock-test-2/mock-test-2-unit-1/",
                    "learnosityRef": "TestPrep-IAR-G4-Practice-Test-2-Unit-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2: Unit 2",
                    "url": "/maths/iar/grade-4/mock-test-2/mock-test-2/mock-test-2-unit-2/",
                    "learnosityRef": "TestPrep-IAR-G4-Practice-Test-2-Unit-2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2: Unit 3",
                    "url": "/maths/iar/grade-4/mock-test-2/mock-test-2/mock-test-2-unit-3/",
                    "learnosityRef": "TestPrep-IAR-G4-Practice-Test-2-Unit-3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-5",
        "label": "Grade 5",
        "programCode": "IAR.G5",
        "url": "/maths/iar/grade-5/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/iar/grade-5/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice",
                "url": "/maths/iar/grade-5/number-systems/number-systems-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice",
                    "url": "/maths/iar/grade-5/number-systems/number-systems-practice/",
                    "learnosityRef": "G5-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Numbers and Operations",
            "url": "/maths/iar/grade-5/numbers-and-operations/",
            "blocks": [
              {
                "name": "Numbers and Operations Practice 1",
                "url": "/maths/iar/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 1",
                    "url": "/maths/iar/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numbers and Operations Practice 2",
                "url": "/maths/iar/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 2",
                    "url": "/maths/iar/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and their Addition and Subtraction",
            "url": "/maths/iar/grade-5/fractions-and-their-addition-and-subtraction/",
            "blocks": [
              {
                "name": "Fractions and their Addition and Subtraction Practice 1",
                "url": "/maths/iar/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 1",
                    "url": "/maths/iar/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and their Addition and Subtraction Practice 2",
                "url": "/maths/iar/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 2",
                    "url": "/maths/iar/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division of Fractions",
            "url": "/maths/iar/grade-5/multiplication-and-division-of-fractions/",
            "blocks": [
              {
                "name": "Multiplication and Division of Fractions Practice 1",
                "url": "/maths/iar/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 1",
                    "url": "/maths/iar/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division of Fractions Practice 2",
                "url": "/maths/iar/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 2",
                    "url": "/maths/iar/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimals and Operations",
            "url": "/maths/iar/grade-5/decimals-and-operations/",
            "blocks": [
              {
                "name": "Decimals and Operations Practice 1",
                "url": "/maths/iar/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 1",
                    "url": "/maths/iar/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Decimals and Operations Practice 2",
                "url": "/maths/iar/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 2",
                    "url": "/maths/iar/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Decimals-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/iar/grade-5/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice",
                "url": "/maths/iar/grade-5/geometry/geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice",
                    "url": "/maths/iar/grade-5/geometry/geometry-practice/",
                    "learnosityRef": "G5-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/iar/grade-5/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice 1",
                "url": "/maths/iar/grade-5/mensuration/mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 2D",
                    "url": "/maths/iar/grade-5/mensuration/mensuration-practice-1/",
                    "learnosityRef": "G5-Practice-Mensuration-2D-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Mensuration Practice 2",
                "url": "/maths/iar/grade-5/mensuration/mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 3D",
                    "url": "/maths/iar/grade-5/mensuration/mensuration-practice-2/",
                    "learnosityRef": "G5-Practice-Mensuration-3D-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/iar/grade-5/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/iar/grade-5/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/iar/grade-5/data-handling/data-handling-practice/",
                    "learnosityRef": "G5-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/iar/grade-5/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice 1",
                "url": "/maths/iar/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 1",
                    "url": "/maths/iar/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Coordinate Geometry Practice 2",
                "url": "/maths/iar/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 2",
                    "url": "/maths/iar/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/iar/grade-5/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/iar/grade-5/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1: Unit 1",
                    "url": "/maths/iar/grade-5/mock-test-1/mock-test-1/mock-test-1-unit-1/",
                    "learnosityRef": "TestPrep-IAR-G5-Practice-Test-1-Unit-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1: Unit 2",
                    "url": "/maths/iar/grade-5/mock-test-1/mock-test-1/mock-test-1-unit-2/",
                    "learnosityRef": "TestPrep-IAR-G5-Practice-Test-1-Unit-2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1: Unit 3",
                    "url": "/maths/iar/grade-5/mock-test-1/mock-test-1/mock-test-1-unit-3/",
                    "learnosityRef": "TestPrep-IAR-G5-Practice-Test-1-Unit-3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/iar/grade-5/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/iar/grade-5/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2: Unit 1",
                    "url": "/maths/iar/grade-5/mock-test-2/mock-test-2/mock-test-2-unit-1/",
                    "learnosityRef": "TestPrep-IAR-G5-Practice-Test-2-Unit-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2: Unit 2",
                    "url": "/maths/iar/grade-5/mock-test-2/mock-test-2/mock-test-2-unit-2/",
                    "learnosityRef": "TestPrep-IAR-G5-Practice-Test-2-Unit-2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2: Unit 3",
                    "url": "/maths/iar/grade-5/mock-test-2/mock-test-2/mock-test-2-unit-3/",
                    "learnosityRef": "TestPrep-IAR-G5-Practice-Test-2-Unit-3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-6",
        "label": "Grade 6",
        "programCode": "IAR.G6",
        "url": "/maths/iar/grade-6/",
        "chapters": [
          {
            "name": "Numerical Expressions and Factors",
            "url": "/maths/iar/grade-6/numerical-expressions-and-factors/",
            "blocks": [
              {
                "name": "Numerical Expressions and Factors Practice 1",
                "url": "/maths/iar/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 1",
                    "url": "/maths/iar/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                    "learnosityRef": "G6-Number-Operations-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numerical Expressions and Factors Practice 2",
                "url": "/maths/iar/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 2",
                    "url": "/maths/iar/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                    "learnosityRef": "G6-Number-Operations-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/iar/grade-6/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals Practice 1",
                "url": "/maths/iar/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 1",
                    "url": "/maths/iar/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Decimals Practice 2",
                "url": "/maths/iar/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 2",
                    "url": "/maths/iar/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratio Proportion and Percentages",
            "url": "/maths/iar/grade-6/ratio-proportion-and-percentages/",
            "blocks": [
              {
                "name": "Ratio Proportion and Percentages Practice 1",
                "url": "/maths/iar/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 1",
                    "url": "/maths/iar/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratio Proportion and Percentages Practice 2",
                "url": "/maths/iar/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 2",
                    "url": "/maths/iar/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Expressions Equations and Inequalities",
            "url": "/maths/iar/grade-6/algebraic-expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                "url": "/maths/iar/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/iar/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G6-Algebra-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                "url": "/maths/iar/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/iar/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G6-Algebra-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/iar/grade-6/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice",
                "url": "/maths/iar/grade-6/mensuration/mensuration-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice",
                    "url": "/maths/iar/grade-6/mensuration/mensuration-practice/",
                    "learnosityRef": "G6-Mensuration-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/iar/grade-6/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice",
                "url": "/maths/iar/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice",
                    "url": "/maths/iar/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                    "learnosityRef": "G6-Coordinate-Geometry-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/iar/grade-6/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice 1",
                "url": "/maths/iar/grade-6/data-handling/data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 1",
                    "url": "/maths/iar/grade-6/data-handling/data-handling-practice-1/",
                    "learnosityRef": "G6-Data-Handling-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Handling Practice 2",
                "url": "/maths/iar/grade-6/data-handling/data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 2",
                    "url": "/maths/iar/grade-6/data-handling/data-handling-practice-2/",
                    "learnosityRef": "G6-Data-Handling-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/iar/grade-6/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/iar/grade-6/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1 Unit 1",
                    "url": "/maths/iar/grade-6/mock-test-1/mock-test-1/mock-test-1-unit-1/",
                    "learnosityRef": "TestPrep IAR G6 Mock Test 1 Unit 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Unit 2",
                    "url": "/maths/iar/grade-6/mock-test-1/mock-test-1/mock-test-1-unit-2/",
                    "learnosityRef": "TestPrep IAR G6 Mock Test 1 Unit 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Unit 3",
                    "url": "/maths/iar/grade-6/mock-test-1/mock-test-1/mock-test-1-unit-3/",
                    "learnosityRef": "TestPrep IAR G6 Mock Test 1 Unit 3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/iar/grade-6/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/iar/grade-6/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2 Unit 1",
                    "url": "/maths/iar/grade-6/mock-test-2/mock-test-2/mock-test-2-unit-1/",
                    "learnosityRef": "TestPrep IAR G6 Mock Test 2 Unit 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Unit 2",
                    "url": "/maths/iar/grade-6/mock-test-2/mock-test-2/mock-test-2-unit-2/",
                    "learnosityRef": "TestPrep IAR G6 Mock Test 2 Unit 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Unit 3",
                    "url": "/maths/iar/grade-6/mock-test-2/mock-test-2/mock-test-2-unit-3/",
                    "learnosityRef": "TestPrep IAR G6 Mock Test 2 Unit 3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-7",
        "label": "Grade 7",
        "programCode": "IAR.G7",
        "url": "/maths/iar/grade-7/",
        "chapters": [
          {
            "name": "Rational Numbers",
            "url": "/maths/iar/grade-7/rational-numbers/",
            "blocks": [
              {
                "name": "Rational Numbers Practice 1",
                "url": "/maths/iar/grade-7/rational-numbers/rational-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 1",
                    "url": "/maths/iar/grade-7/rational-numbers/rational-numbers-practice-1/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Rational Numbers Practice 2",
                "url": "/maths/iar/grade-7/rational-numbers/rational-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 2",
                    "url": "/maths/iar/grade-7/rational-numbers/rational-numbers-practice-2/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratios Proportions and Percentages",
            "url": "/maths/iar/grade-7/ratios-proportions-and-percentages/",
            "blocks": [
              {
                "name": "Ratios Proportions and Percentages Practice 1",
                "url": "/maths/iar/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 1",
                    "url": "/maths/iar/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratios Proportions and Percentages Practice 2",
                "url": "/maths/iar/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 2",
                    "url": "/maths/iar/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Expressions Equations and Inequalities",
            "url": "/maths/iar/grade-7/expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Expressions Equations and Inequalities Practice 1",
                "url": "/maths/iar/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/iar/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Expressions Equations and Inequalities Practice 2",
                "url": "/maths/iar/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/iar/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry (Angles Circles slicing solids mensuration)",
            "url": "/maths/iar/grade-7/geometry-angles-circles-slicing-solids-mensuration/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/iar/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/iar/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                    "learnosityRef": "G7-GM-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/iar/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/iar/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                    "learnosityRef": "G7-GM-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Probability and Data Handling",
            "url": "/maths/iar/grade-7/probability-and-data-handling/",
            "blocks": [
              {
                "name": "Probability and Data Handling Practice 1",
                "url": "/maths/iar/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 1",
                    "url": "/maths/iar/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Probability and Data Handling Practice 2",
                "url": "/maths/iar/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 2",
                    "url": "/maths/iar/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/iar/grade-7/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/iar/grade-7/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1 Unit 1",
                    "url": "/maths/iar/grade-7/mock-test-1/mock-test-1/mock-test-1-unit-1/",
                    "learnosityRef": "TestPrep IAR G7 Mock Test 1 Unit 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Unit 2",
                    "url": "/maths/iar/grade-7/mock-test-1/mock-test-1/mock-test-1-unit-2/",
                    "learnosityRef": "TestPrep IAR G7 Mock Test 1 Unit 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Unit 3",
                    "url": "/maths/iar/grade-7/mock-test-1/mock-test-1/mock-test-1-unit-3/",
                    "learnosityRef": "TestPrep IAR G7 Mock Test 1 Unit 3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/iar/grade-7/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/iar/grade-7/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2 Unit 1",
                    "url": "/maths/iar/grade-7/mock-test-2/mock-test-2/mock-test-2-unit-1/",
                    "learnosityRef": "TestPrep IAR G7 Mock Test 2 Unit 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Unit 2",
                    "url": "/maths/iar/grade-7/mock-test-2/mock-test-2/mock-test-2-unit-2/",
                    "learnosityRef": "TestPrep IAR G7 Mock Test 2 Unit 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Unit 3",
                    "url": "/maths/iar/grade-7/mock-test-2/mock-test-2/mock-test-2-unit-3/",
                    "learnosityRef": "TestPrep IAR G7 Mock Test 2 Unit 3",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "aasa": {
    "name": "AASA Curriculum",
    "aboutName": "AASA",
    "slug": "aasa",
    "examUrl": "/maths/aasa/",
    "hasBands": true,
    "bands": [
      {
        "slug": "grade-3",
        "label": "Grade 3",
        "programCode": "AASA.G3",
        "url": "/maths/aasa/grade-3/",
        "chapters": [
          {
            "name": "Place Value and Number Comparison",
            "url": "/maths/aasa/grade-3/place-value-and-number-comparison/",
            "blocks": [
              {
                "name": "Place Value and Number Comparison Practice 1",
                "url": "/maths/aasa/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 1",
                    "url": "/maths/aasa/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Place Value and Number Comparison Practice 2",
                "url": "/maths/aasa/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 2",
                    "url": "/maths/aasa/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Addition and Subtraction",
            "url": "/maths/aasa/grade-3/addition-and-subtraction/",
            "blocks": [
              {
                "name": "Addition and Subtraction Practice 1",
                "url": "/maths/aasa/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 1",
                    "url": "/maths/aasa/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                    "learnosityRef": "TestPrep-G3-AS-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Addition and Subtraction Practice 2",
                "url": "/maths/aasa/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 2",
                    "url": "/maths/aasa/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                    "learnosityRef": "TestPrep-G3-Addition-Subtraction-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division",
            "url": "/maths/aasa/grade-3/multiplication-and-division/",
            "blocks": [
              {
                "name": "Multiplication and Division Practice 1",
                "url": "/maths/aasa/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 1",
                    "url": "/maths/aasa/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 2",
                "url": "/maths/aasa/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 2",
                    "url": "/maths/aasa/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 3",
                "url": "/maths/aasa/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 3",
                    "url": "/maths/aasa/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-3",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions",
            "url": "/maths/aasa/grade-3/fractions/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/aasa/grade-3/fractions/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/aasa/grade-3/fractions/fractions-practice-1/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/aasa/grade-3/fractions/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/aasa/grade-3/fractions/fractions-practice-2/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Patterns",
            "url": "/maths/aasa/grade-3/algebraic-patterns/",
            "blocks": [
              {
                "name": "Algebraic Patterns Practice",
                "url": "/maths/aasa/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Patterns Practice",
                    "url": "/maths/aasa/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                    "learnosityRef": "TestPrep-G3-Algebraic-Patterns-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry and Mensuration",
            "url": "/maths/aasa/grade-3/geometry-and-mensuration/",
            "blocks": [
              {
                "name": "Geometry and Mensuration Practice 1",
                "url": "/maths/aasa/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 1",
                    "url": "/maths/aasa/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry and Mensuration Practice 2",
                "url": "/maths/aasa/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 2",
                    "url": "/maths/aasa/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/aasa/grade-3/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/aasa/grade-3/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/aasa/grade-3/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "TestPrep-G3-Measurement-Time-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/aasa/grade-3/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/aasa/grade-3/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/aasa/grade-3/data-handling/data-handling-practice/",
                    "learnosityRef": "TestPrep-G3-Data-Handling-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/aasa/grade-3/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/aasa/grade-3/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/aasa/grade-3/mock-test-1/mock-test-1/",
                    "learnosityRef": "TestPrep-AASA-G3-Practice-Test-1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/aasa/grade-3/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/aasa/grade-3/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/aasa/grade-3/mock-test-2/mock-test-2/",
                    "learnosityRef": "TestPrep-AASA-G3-Practice-Test-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-4",
        "label": "Grade 4",
        "programCode": "AASA.G4",
        "url": "/maths/aasa/grade-4/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/aasa/grade-4/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice 1",
                "url": "/maths/aasa/grade-4/number-systems/number-systems-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 1",
                    "url": "/maths/aasa/grade-4/number-systems/number-systems-practice-1/",
                    "learnosityRef": "G4-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Systems Practice 2",
                "url": "/maths/aasa/grade-4/number-systems/number-systems-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 2",
                    "url": "/maths/aasa/grade-4/number-systems/number-systems-practice-2/",
                    "learnosityRef": "G4-Practice-Number-Systems-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Operations on Numbers",
            "url": "/maths/aasa/grade-4/operations-on-numbers/",
            "blocks": [
              {
                "name": "Operations on Numbers Practice 1",
                "url": "/maths/aasa/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 1",
                    "url": "/maths/aasa/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 2",
                "url": "/maths/aasa/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 2",
                    "url": "/maths/aasa/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 3",
                "url": "/maths/aasa/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 3",
                    "url": "/maths/aasa/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Factors Multiples and Primes",
            "url": "/maths/aasa/grade-4/factors-multiples-and-primes/",
            "blocks": [
              {
                "name": "Factors Multiples Primes Practice",
                "url": "/maths/aasa/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Factors Multiples Primes Practice",
                    "url": "/maths/aasa/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                    "learnosityRef": "G4-Practice-Factors-Multiples-Primes-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Operations",
            "url": "/maths/aasa/grade-4/fractions-and-operations/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/aasa/grade-4/fractions-and-operations/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/aasa/grade-4/fractions-and-operations/fractions-practice-1/",
                    "learnosityRef": "G4-Practice-Fractions-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/aasa/grade-4/fractions-and-operations/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/aasa/grade-4/fractions-and-operations/fractions-practice-2/",
                    "learnosityRef": "G4-Practice-Fractions-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 3",
                "url": "/maths/aasa/grade-4/fractions-and-operations/fractions-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 3",
                    "url": "/maths/aasa/grade-4/fractions-and-operations/fractions-practice-3/",
                    "learnosityRef": "G4-Practice-Fractions-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimal Numbers",
            "url": "/maths/aasa/grade-4/decimal-numbers/",
            "blocks": [
              {
                "name": "Decimals Practice",
                "url": "/maths/aasa/grade-4/decimal-numbers/decimals-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals Practice",
                    "url": "/maths/aasa/grade-4/decimal-numbers/decimals-practice/",
                    "learnosityRef": "G4-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/aasa/grade-4/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/aasa/grade-4/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/aasa/grade-4/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "G4-Practice-Measurement-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry and Patterns",
            "url": "/maths/aasa/grade-4/symmetry-and-patterns/",
            "blocks": [
              {
                "name": "Patterns Practice",
                "url": "/maths/aasa/grade-4/symmetry-and-patterns/patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Patterns Practice",
                    "url": "/maths/aasa/grade-4/symmetry-and-patterns/patterns-practice/",
                    "learnosityRef": "G4-Practice-Patterns-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Symmetry Practice",
                "url": "/maths/aasa/grade-4/symmetry-and-patterns/symmetry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry Practice",
                    "url": "/maths/aasa/grade-4/symmetry-and-patterns/symmetry-practice/",
                    "learnosityRef": "G4-Practice-Symmetry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/aasa/grade-4/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/aasa/grade-4/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/aasa/grade-4/geometry/geometry-practice-1/",
                    "learnosityRef": "G4-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/aasa/grade-4/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/aasa/grade-4/geometry/geometry-practice-2/",
                    "learnosityRef": "G4-Practice-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/aasa/grade-4/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/aasa/grade-4/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/aasa/grade-4/data-handling/data-handling-practice/",
                    "learnosityRef": "G4-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/aasa/grade-4/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/aasa/grade-4/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/aasa/grade-4/mock-test-1/mock-test-1/",
                    "learnosityRef": "TestPrep-AASA-G4-Practice-Test-1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/aasa/grade-4/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/aasa/grade-4/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/aasa/grade-4/mock-test-2/mock-test-2/",
                    "learnosityRef": "TestPrep-AASA-G4-Practice-Test-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-5",
        "label": "Grade 5",
        "programCode": "AASA.G5",
        "url": "/maths/aasa/grade-5/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/aasa/grade-5/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice",
                "url": "/maths/aasa/grade-5/number-systems/number-systems-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice",
                    "url": "/maths/aasa/grade-5/number-systems/number-systems-practice/",
                    "learnosityRef": "G5-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Numbers and Operations",
            "url": "/maths/aasa/grade-5/numbers-and-operations/",
            "blocks": [
              {
                "name": "Numbers and Operations Practice 1",
                "url": "/maths/aasa/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 1",
                    "url": "/maths/aasa/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numbers and Operations Practice 2",
                "url": "/maths/aasa/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 2",
                    "url": "/maths/aasa/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and their Addition and Subtraction",
            "url": "/maths/aasa/grade-5/fractions-and-their-addition-and-subtraction/",
            "blocks": [
              {
                "name": "Fractions and their Addition and Subtraction Practice 1",
                "url": "/maths/aasa/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 1",
                    "url": "/maths/aasa/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and their Addition and Subtraction Practice 2",
                "url": "/maths/aasa/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 2",
                    "url": "/maths/aasa/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division of Fractions",
            "url": "/maths/aasa/grade-5/multiplication-and-division-of-fractions/",
            "blocks": [
              {
                "name": "Multiplication and Division of Fractions Practice 1",
                "url": "/maths/aasa/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 1",
                    "url": "/maths/aasa/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division of Fractions Practice 2",
                "url": "/maths/aasa/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 2",
                    "url": "/maths/aasa/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimals and Operations",
            "url": "/maths/aasa/grade-5/decimals-and-operations/",
            "blocks": [
              {
                "name": "Decimals and Operations Practice 1",
                "url": "/maths/aasa/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 1",
                    "url": "/maths/aasa/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Decimals and Operations Practice 2",
                "url": "/maths/aasa/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 2",
                    "url": "/maths/aasa/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Decimals-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/aasa/grade-5/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice",
                "url": "/maths/aasa/grade-5/geometry/geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice",
                    "url": "/maths/aasa/grade-5/geometry/geometry-practice/",
                    "learnosityRef": "G5-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/aasa/grade-5/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice 1",
                "url": "/maths/aasa/grade-5/mensuration/mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 2D",
                    "url": "/maths/aasa/grade-5/mensuration/mensuration-practice-1/",
                    "learnosityRef": "G5-Practice-Mensuration-2D-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Mensuration Practice 2",
                "url": "/maths/aasa/grade-5/mensuration/mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 3D",
                    "url": "/maths/aasa/grade-5/mensuration/mensuration-practice-2/",
                    "learnosityRef": "G5-Practice-Mensuration-3D-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/aasa/grade-5/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/aasa/grade-5/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/aasa/grade-5/data-handling/data-handling-practice/",
                    "learnosityRef": "G5-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/aasa/grade-5/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice 1",
                "url": "/maths/aasa/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 1",
                    "url": "/maths/aasa/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Coordinate Geometry Practice 2",
                "url": "/maths/aasa/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 2",
                    "url": "/maths/aasa/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/aasa/grade-5/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/aasa/grade-5/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/aasa/grade-5/mock-test-1/mock-test-1/",
                    "learnosityRef": "TestPrep AASA G5 Practice Mock Test 1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/aasa/grade-5/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/aasa/grade-5/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/aasa/grade-5/mock-test-2/mock-test-2/",
                    "learnosityRef": "TestPrep AASA G5 Practice Mock Test 2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-6",
        "label": "Grade 6",
        "programCode": "AASA.G6",
        "url": "/maths/aasa/grade-6/",
        "chapters": [
          {
            "name": "Numerical Expressions and Factors",
            "url": "/maths/aasa/grade-6/numerical-expressions-and-factors/",
            "blocks": [
              {
                "name": "Numerical Expressions and Factors Practice 1",
                "url": "/maths/aasa/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 1",
                    "url": "/maths/aasa/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                    "learnosityRef": "G6-Number-Operations-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numerical Expressions and Factors Practice 2",
                "url": "/maths/aasa/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 2",
                    "url": "/maths/aasa/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                    "learnosityRef": "G6-Number-Operations-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/aasa/grade-6/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals Practice 1",
                "url": "/maths/aasa/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 1",
                    "url": "/maths/aasa/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Decimals Practice 2",
                "url": "/maths/aasa/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 2",
                    "url": "/maths/aasa/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratio Proportion and Percentages",
            "url": "/maths/aasa/grade-6/ratio-proportion-and-percentages/",
            "blocks": [
              {
                "name": "Ratio Proportion and Percentages Practice 1",
                "url": "/maths/aasa/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 1",
                    "url": "/maths/aasa/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratio Proportion and Percentages Practice 2",
                "url": "/maths/aasa/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 2",
                    "url": "/maths/aasa/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Expressions Equations and Inequalities",
            "url": "/maths/aasa/grade-6/algebraic-expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                "url": "/maths/aasa/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/aasa/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G6-Algebra-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                "url": "/maths/aasa/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/aasa/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G6-Algebra-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/aasa/grade-6/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice",
                "url": "/maths/aasa/grade-6/mensuration/mensuration-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice",
                    "url": "/maths/aasa/grade-6/mensuration/mensuration-practice/",
                    "learnosityRef": "G6-Mensuration-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/aasa/grade-6/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice",
                "url": "/maths/aasa/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice",
                    "url": "/maths/aasa/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                    "learnosityRef": "G6-Coordinate-Geometry-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/aasa/grade-6/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice 1",
                "url": "/maths/aasa/grade-6/data-handling/data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 1",
                    "url": "/maths/aasa/grade-6/data-handling/data-handling-practice-1/",
                    "learnosityRef": "G6-Data-Handling-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Handling Practice 2",
                "url": "/maths/aasa/grade-6/data-handling/data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 2",
                    "url": "/maths/aasa/grade-6/data-handling/data-handling-practice-2/",
                    "learnosityRef": "G6-Data-Handling-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/aasa/grade-6/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/aasa/grade-6/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/aasa/grade-6/mock-test-1/mock-test-1/",
                    "learnosityRef": "TestPrep-AASA-G6-Practice-Test-1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/aasa/grade-6/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/aasa/grade-6/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/aasa/grade-6/mock-test-2/mock-test-2/",
                    "learnosityRef": "TestPrep-AASA-G6-Practice-Test-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-7",
        "label": "Grade 7",
        "programCode": "AASA.G7",
        "url": "/maths/aasa/grade-7/",
        "chapters": [
          {
            "name": "Rational Numbers",
            "url": "/maths/aasa/grade-7/rational-numbers/",
            "blocks": [
              {
                "name": "Rational Numbers Practice 1",
                "url": "/maths/aasa/grade-7/rational-numbers/rational-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 1",
                    "url": "/maths/aasa/grade-7/rational-numbers/rational-numbers-practice-1/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Rational Numbers Practice 2",
                "url": "/maths/aasa/grade-7/rational-numbers/rational-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 2",
                    "url": "/maths/aasa/grade-7/rational-numbers/rational-numbers-practice-2/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratios Proportions and Percentages",
            "url": "/maths/aasa/grade-7/ratios-proportions-and-percentages/",
            "blocks": [
              {
                "name": "Ratios Proportions and Percentages Practice 1",
                "url": "/maths/aasa/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 1",
                    "url": "/maths/aasa/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratios Proportions and Percentages Practice 2",
                "url": "/maths/aasa/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 2",
                    "url": "/maths/aasa/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Expressions Equations and Inequalities",
            "url": "/maths/aasa/grade-7/expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Expressions Equations and Inequalities Practice 1",
                "url": "/maths/aasa/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/aasa/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Expressions Equations and Inequalities Practice 2",
                "url": "/maths/aasa/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/aasa/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry (Angles Circles slicing solids mensuration)",
            "url": "/maths/aasa/grade-7/geometry-angles-circles-slicing-solids-mensuration/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/aasa/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/aasa/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                    "learnosityRef": "G7-GM-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/aasa/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/aasa/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                    "learnosityRef": "G7-GM-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Probability and Data Handling",
            "url": "/maths/aasa/grade-7/probability-and-data-handling/",
            "blocks": [
              {
                "name": "Probability and Data Handling Practice 1",
                "url": "/maths/aasa/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 1",
                    "url": "/maths/aasa/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Probability and Data Handling Practice 2",
                "url": "/maths/aasa/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 2",
                    "url": "/maths/aasa/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/aasa/grade-7/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/aasa/grade-7/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/aasa/grade-7/mock-test-1/mock-test-1/",
                    "learnosityRef": "TestPrep AASA G7 Practice Mock Test 1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/aasa/grade-7/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/aasa/grade-7/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/aasa/grade-7/mock-test-2/mock-test-2/",
                    "learnosityRef": "TestPrep AASA G7 Practice Mock Test 2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "ssat": {
    "name": "SSAT Curriculum",
    "aboutName": "SSAT",
    "slug": "ssat",
    "examUrl": "/maths/ssat/",
    "hasBands": true,
    "bands": [
      {
        "slug": "elementary",
        "label": "Elementary",
        "programCode": "SSAT.EL",
        "url": "/maths/ssat/elementary/",
        "chapters": [
          {
            "name": "Number System",
            "url": "/maths/ssat/elementary/number-system/",
            "blocks": [
              {
                "name": "Number System Practice 1",
                "url": "/maths/ssat/elementary/number-system/number-system-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number System Practice 1",
                    "url": "/maths/ssat/elementary/number-system/number-system-practice-1/",
                    "learnosityRef": "SSAT-EL-Number-System-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number System Practice 2",
                "url": "/maths/ssat/elementary/number-system/number-system-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number System Practice 2",
                    "url": "/maths/ssat/elementary/number-system/number-system-practice-2/",
                    "learnosityRef": "SSAT-EL-Number-System-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Operations",
            "url": "/maths/ssat/elementary/number-operations/",
            "blocks": [
              {
                "name": "Number Operations Practice 1",
                "url": "/maths/ssat/elementary/number-operations/number-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Operations Practice 1",
                    "url": "/maths/ssat/elementary/number-operations/number-operations-practice-1/",
                    "learnosityRef": "SSAT-EL-Number-Operations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Operations Practice 2",
                "url": "/maths/ssat/elementary/number-operations/number-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Operations Practice 2",
                    "url": "/maths/ssat/elementary/number-operations/number-operations-practice-2/",
                    "learnosityRef": "SSAT-EL-Number-Operations-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Operations",
            "url": "/maths/ssat/elementary/fractions-and-operations/",
            "blocks": [
              {
                "name": "Fractions and Operations Practice 1",
                "url": "/maths/ssat/elementary/fractions-and-operations/fractions-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Operations Practice 1",
                    "url": "/maths/ssat/elementary/fractions-and-operations/fractions-and-operations-practice-1/",
                    "learnosityRef": "SSAT-EL-Fractions-and-Operations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Operations Practice 2",
                "url": "/maths/ssat/elementary/fractions-and-operations/fractions-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Operations Practice 2",
                    "url": "/maths/ssat/elementary/fractions-and-operations/fractions-and-operations-practice-2/",
                    "learnosityRef": "SSAT-EL-Fractions-and-Operations-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimal Numbers",
            "url": "/maths/ssat/elementary/decimal-numbers/",
            "blocks": [
              {
                "name": "Decimal Numbers Practice 1",
                "url": "/maths/ssat/elementary/decimal-numbers/decimal-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimal Numbers Practice 1",
                    "url": "/maths/ssat/elementary/decimal-numbers/decimal-numbers-practice-1/",
                    "learnosityRef": "SSAT-EL-Decimals-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Decimal Numbers Practice 2",
                "url": "/maths/ssat/elementary/decimal-numbers/decimal-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimal Numbers Practice 2",
                    "url": "/maths/ssat/elementary/decimal-numbers/decimal-numbers-practice-2/",
                    "learnosityRef": "SSAT-EL-Decimals-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement",
            "url": "/maths/ssat/elementary/measurement/",
            "blocks": [
              {
                "name": "Measurement Practice 1",
                "url": "/maths/ssat/elementary/measurement/measurement-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement Practice 1",
                    "url": "/maths/ssat/elementary/measurement/measurement-practice-1/",
                    "learnosityRef": "SSAT-EL-Measurement-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Measurement Practice 2",
                "url": "/maths/ssat/elementary/measurement/measurement-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement Practice 2",
                    "url": "/maths/ssat/elementary/measurement/measurement-practice-2/",
                    "learnosityRef": "SSAT-EL-Measurement-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry and Patterns",
            "url": "/maths/ssat/elementary/symmetry-and-patterns/",
            "blocks": [
              {
                "name": "Symmetry and Patterns Practice 1",
                "url": "/maths/ssat/elementary/symmetry-and-patterns/symmetry-and-patterns-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry and Patterns Practice 1",
                    "url": "/maths/ssat/elementary/symmetry-and-patterns/symmetry-and-patterns-practice-1/",
                    "learnosityRef": "SSAT-EL-Symmetry-and-Patterns-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Symmetry and Patterns Practice 2",
                "url": "/maths/ssat/elementary/symmetry-and-patterns/symmetry-and-patterns-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry and Patterns Practice 2",
                    "url": "/maths/ssat/elementary/symmetry-and-patterns/symmetry-and-patterns-practice-2/",
                    "learnosityRef": "SSAT-EL-Symmetry-and-Patterns-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/ssat/elementary/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/ssat/elementary/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/ssat/elementary/geometry/geometry-practice-1/",
                    "learnosityRef": "SSAT-EL-Geometry-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/ssat/elementary/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/ssat/elementary/geometry/geometry-practice-2/",
                    "learnosityRef": "SSAT-EL-Geometry-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/ssat/elementary/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice 1",
                "url": "/maths/ssat/elementary/data-handling/data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 1",
                    "url": "/maths/ssat/elementary/data-handling/data-handling-practice-1/",
                    "learnosityRef": "SSAT-EL-Data-Handling-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Handling Practice 2",
                "url": "/maths/ssat/elementary/data-handling/data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 2",
                    "url": "/maths/ssat/elementary/data-handling/data-handling-practice-2/",
                    "learnosityRef": "SSAT-EL-Data-Handling-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Money",
            "url": "/maths/ssat/elementary/money/",
            "blocks": [
              {
                "name": "Money Practice 1",
                "url": "/maths/ssat/elementary/money/money-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Money Practice 1",
                    "url": "/maths/ssat/elementary/money/money-practice-1/",
                    "learnosityRef": "SSAT-EL-Money-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Money Practice 2",
                "url": "/maths/ssat/elementary/money/money-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Money Practice 2",
                    "url": "/maths/ssat/elementary/money/money-practice-2/",
                    "learnosityRef": "SSAT-EL-Money-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/ssat/elementary/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/ssat/elementary/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/ssat/elementary/mock-test-1/mock-test-1/",
                    "learnosityRef": "TestPrep-SSAT-EL-Mock-1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/ssat/elementary/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/ssat/elementary/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/ssat/elementary/mock-test-2/mock-test-2/",
                    "learnosityRef": "TestPrep-SSAT-EL-Mock-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "middle",
        "label": "Middle",
        "programCode": "SSAT.ML",
        "url": "/maths/ssat/middle/",
        "chapters": [
          {
            "name": "Numbers & Operations",
            "url": "/maths/ssat/middle/numbers-and-operations/",
            "blocks": [
              {
                "name": "Numbers & Operations Practice 1",
                "url": "/maths/ssat/middle/numbers-and-operations/numbers-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers & Operations Practice 1",
                    "url": "/maths/ssat/middle/numbers-and-operations/numbers-and-operations-practice-1/",
                    "learnosityRef": "SSAT-ML-Number-Operations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numbers & Operations Practice 2",
                "url": "/maths/ssat/middle/numbers-and-operations/numbers-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers & Operations Practice 2",
                    "url": "/maths/ssat/middle/numbers-and-operations/numbers-and-operations-practice-2/",
                    "learnosityRef": "SSAT-ML-Number-Operations-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Factors & Multiples",
            "url": "/maths/ssat/middle/factors-and-multiples/",
            "blocks": [
              {
                "name": "Factors & Multiples Practice 1",
                "url": "/maths/ssat/middle/factors-and-multiples/factors-and-multiples-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Factors & Multiples Practice 1",
                    "url": "/maths/ssat/middle/factors-and-multiples/factors-and-multiples-practice-1/",
                    "learnosityRef": "SSAT-ML-Factors-Multiples-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Factors & Multiples Practice 2",
                "url": "/maths/ssat/middle/factors-and-multiples/factors-and-multiples-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Factors & Multiples Practice 2",
                    "url": "/maths/ssat/middle/factors-and-multiples/factors-and-multiples-practice-2/",
                    "learnosityRef": "SSAT-ML-Factors-Multiples-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/ssat/middle/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals Practice 1",
                "url": "/maths/ssat/middle/fractions-and-decimals/fractions-and-decimals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 1",
                    "url": "/maths/ssat/middle/fractions-and-decimals/fractions-and-decimals-practice-1/",
                    "learnosityRef": "SSAT-ML-Fractions-Decimals-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Decimals Practice 2",
                "url": "/maths/ssat/middle/fractions-and-decimals/fractions-and-decimals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 2",
                    "url": "/maths/ssat/middle/fractions-and-decimals/fractions-and-decimals-practice-2/",
                    "learnosityRef": "SSAT-ML-Fractions-Decimals-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Decimals Practice 3",
                "url": "/maths/ssat/middle/fractions-and-decimals/fractions-and-decimals-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 3",
                    "url": "/maths/ssat/middle/fractions-and-decimals/fractions-and-decimals-practice-3/",
                    "learnosityRef": "SSAT-ML-Fractions-Decimals-P03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratio & Percentages",
            "url": "/maths/ssat/middle/ratio-and-percentages/",
            "blocks": [
              {
                "name": "Ratio & Percentages Practice 1",
                "url": "/maths/ssat/middle/ratio-and-percentages/ratio-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio & Percentages Practice 1",
                    "url": "/maths/ssat/middle/ratio-and-percentages/ratio-and-percentages-practice-1/",
                    "learnosityRef": "SSAT-ML-Ratio-Percent-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratio & Percentages Practice 2",
                "url": "/maths/ssat/middle/ratio-and-percentages/ratio-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio & Percentages Practice 2",
                    "url": "/maths/ssat/middle/ratio-and-percentages/ratio-and-percentages-practice-2/",
                    "learnosityRef": "SSAT-ML-Ratio-Percent-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Expressions and Equations",
            "url": "/maths/ssat/middle/expressions-and-equations/",
            "blocks": [
              {
                "name": "Expressions and Equations Practice 1",
                "url": "/maths/ssat/middle/expressions-and-equations/expressions-and-equations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions and Equations Practice 1",
                    "url": "/maths/ssat/middle/expressions-and-equations/expressions-and-equations-practice-1/",
                    "learnosityRef": "SSAT-ML-Expressions-Equations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Expressions and Equations Practice 2",
                "url": "/maths/ssat/middle/expressions-and-equations/expressions-and-equations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions and Equations Practice 2",
                    "url": "/maths/ssat/middle/expressions-and-equations/expressions-and-equations-practice-2/",
                    "learnosityRef": "SSAT-ML-Expressions-Equations-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/ssat/middle/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/ssat/middle/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/ssat/middle/geometry/geometry-practice-1/",
                    "learnosityRef": "SSAT-ML-Geometry-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/ssat/middle/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/ssat/middle/geometry/geometry-practice-2/",
                    "learnosityRef": "SSAT-ML-Geometry-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/ssat/middle/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice 1",
                "url": "/maths/ssat/middle/mensuration/mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 1",
                    "url": "/maths/ssat/middle/mensuration/mensuration-practice-1/",
                    "learnosityRef": "SSAT-ML-Mensuration-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Mensuration Practice 2",
                "url": "/maths/ssat/middle/mensuration/mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 2",
                    "url": "/maths/ssat/middle/mensuration/mensuration-practice-2/",
                    "learnosityRef": "SSAT-ML-Mensuration-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Mensuration Practice 3",
                "url": "/maths/ssat/middle/mensuration/mensuration-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 3",
                    "url": "/maths/ssat/middle/mensuration/mensuration-practice-3/",
                    "learnosityRef": "SSAT-ML-Mensuration-P03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Analysis and Probability",
            "url": "/maths/ssat/middle/data-analysis-and-probability/",
            "blocks": [
              {
                "name": "Data Analysis and Probability Practice 1",
                "url": "/maths/ssat/middle/data-analysis-and-probability/data-analysis-and-probability-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Analysis and Probability Practice 1",
                    "url": "/maths/ssat/middle/data-analysis-and-probability/data-analysis-and-probability-practice-1/",
                    "learnosityRef": "SSAT-ML-DATA-HANDLING-PROBABILITY-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Analysis and Probability Practice 2",
                "url": "/maths/ssat/middle/data-analysis-and-probability/data-analysis-and-probability-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Analysis and Probability Practice 2",
                    "url": "/maths/ssat/middle/data-analysis-and-probability/data-analysis-and-probability-practice-2/",
                    "learnosityRef": "SSAT-ML-DATA-HANDLING-PROBABILITY-P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Analysis and Probability Practice 3",
                "url": "/maths/ssat/middle/data-analysis-and-probability/data-analysis-and-probability-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Analysis and Probability Practice 3",
                    "url": "/maths/ssat/middle/data-analysis-and-probability/data-analysis-and-probability-practice-3/",
                    "learnosityRef": "SSAT-ML-DATA-HANDLING-PROBABILITY-P03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/ssat/middle/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/ssat/middle/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1 Section 1",
                    "url": "/maths/ssat/middle/mock-test-1/mock-test-1/mock-test-1-section-1/",
                    "learnosityRef": "SSAT ML Mock Test 1 Section 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Section 2",
                    "url": "/maths/ssat/middle/mock-test-1/mock-test-1/mock-test-1-section-2/",
                    "learnosityRef": "SSAT ML Mock Test 1 Section 2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/ssat/middle/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/ssat/middle/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2 Section 1",
                    "url": "/maths/ssat/middle/mock-test-2/mock-test-2/mock-test-2-section-1/",
                    "learnosityRef": "SSAT ML Mock Test 2 Section 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Section 2",
                    "url": "/maths/ssat/middle/mock-test-2/mock-test-2/mock-test-2-section-2/",
                    "learnosityRef": "SSAT ML Mock Test 2 Section 2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "gmas": {
    "name": "GMAS Curriculum",
    "aboutName": "GMAS",
    "slug": "gmas",
    "examUrl": "/maths/gmas/",
    "hasBands": true,
    "bands": [
      {
        "slug": "grade-3",
        "label": "Grade 3",
        "programCode": "GMAS.G3",
        "url": "/maths/gmas/grade-3/",
        "chapters": [
          {
            "name": "Place Value and Number Comparison",
            "url": "/maths/gmas/grade-3/place-value-and-number-comparison/",
            "blocks": [
              {
                "name": "Place Value and Number Comparison Practice 1",
                "url": "/maths/gmas/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 1",
                    "url": "/maths/gmas/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Place Value and Number Comparison Practice 2",
                "url": "/maths/gmas/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 2",
                    "url": "/maths/gmas/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Addition and Subtraction",
            "url": "/maths/gmas/grade-3/addition-and-subtraction/",
            "blocks": [
              {
                "name": "Addition and Subtraction Practice 1",
                "url": "/maths/gmas/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 1",
                    "url": "/maths/gmas/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                    "learnosityRef": "TestPrep-G3-AS-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Addition and Subtraction Practice 2",
                "url": "/maths/gmas/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 2",
                    "url": "/maths/gmas/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                    "learnosityRef": "TestPrep-G3-Addition-Subtraction-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division",
            "url": "/maths/gmas/grade-3/multiplication-and-division/",
            "blocks": [
              {
                "name": "Multiplication and Division Practice 1",
                "url": "/maths/gmas/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 1",
                    "url": "/maths/gmas/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 2",
                "url": "/maths/gmas/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 2",
                    "url": "/maths/gmas/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 3",
                "url": "/maths/gmas/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 3",
                    "url": "/maths/gmas/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-3",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions",
            "url": "/maths/gmas/grade-3/fractions/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/gmas/grade-3/fractions/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/gmas/grade-3/fractions/fractions-practice-1/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/gmas/grade-3/fractions/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/gmas/grade-3/fractions/fractions-practice-2/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Patterns",
            "url": "/maths/gmas/grade-3/algebraic-patterns/",
            "blocks": [
              {
                "name": "Algebraic Patterns Practice",
                "url": "/maths/gmas/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Patterns Practice",
                    "url": "/maths/gmas/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                    "learnosityRef": "TestPrep-G3-Algebraic-Patterns-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry and Mensuration",
            "url": "/maths/gmas/grade-3/geometry-and-mensuration/",
            "blocks": [
              {
                "name": "Geometry and Mensuration Practice 1",
                "url": "/maths/gmas/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 1",
                    "url": "/maths/gmas/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry and Mensuration Practice 2",
                "url": "/maths/gmas/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 2",
                    "url": "/maths/gmas/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/gmas/grade-3/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/gmas/grade-3/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/gmas/grade-3/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "TestPrep-G3-Measurement-Time-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/gmas/grade-3/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/gmas/grade-3/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/gmas/grade-3/data-handling/data-handling-practice/",
                    "learnosityRef": "TestPrep-G3-Data-Handling-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/gmas/grade-3/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/gmas/grade-3/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1 Section 1",
                    "url": "/maths/gmas/grade-3/mock-test-1/mock-test-1/mock-test-1-section-1/",
                    "learnosityRef": "GMAS-Math-G3-Practice-Mock-1-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Section 2",
                    "url": "/maths/gmas/grade-3/mock-test-1/mock-test-1/mock-test-1-section-2/",
                    "learnosityRef": "GMAS-Math-G3-Practice-Mock-1-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/gmas/grade-3/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/gmas/grade-3/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2 Section 1",
                    "url": "/maths/gmas/grade-3/mock-test-2/mock-test-2/mock-test-2-section-1/",
                    "learnosityRef": "GMAS-Math-G3-Practice-Mock-2-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Section 2",
                    "url": "/maths/gmas/grade-3/mock-test-2/mock-test-2/mock-test-2-section-2/",
                    "learnosityRef": "GMAS-Math-G3-Practice-Mock-2-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-4",
        "label": "Grade 4",
        "programCode": "GMAS.G4",
        "url": "/maths/gmas/grade-4/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/gmas/grade-4/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice 1",
                "url": "/maths/gmas/grade-4/number-systems/number-systems-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 1",
                    "url": "/maths/gmas/grade-4/number-systems/number-systems-practice-1/",
                    "learnosityRef": "G4-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Systems Practice 2",
                "url": "/maths/gmas/grade-4/number-systems/number-systems-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 2",
                    "url": "/maths/gmas/grade-4/number-systems/number-systems-practice-2/",
                    "learnosityRef": "G4-Practice-Number-Systems-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Operations on Numbers",
            "url": "/maths/gmas/grade-4/operations-on-numbers/",
            "blocks": [
              {
                "name": "Operations on Numbers Practice 1",
                "url": "/maths/gmas/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 1",
                    "url": "/maths/gmas/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 2",
                "url": "/maths/gmas/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 2",
                    "url": "/maths/gmas/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 3",
                "url": "/maths/gmas/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 3",
                    "url": "/maths/gmas/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Factors Multiples and Primes",
            "url": "/maths/gmas/grade-4/factors-multiples-and-primes/",
            "blocks": [
              {
                "name": "Factors Multiples Primes Practice",
                "url": "/maths/gmas/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Factors Multiples Primes Practice",
                    "url": "/maths/gmas/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                    "learnosityRef": "G4-Practice-Factors-Multiples-Primes-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Operations",
            "url": "/maths/gmas/grade-4/fractions-and-operations/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/gmas/grade-4/fractions-and-operations/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/gmas/grade-4/fractions-and-operations/fractions-practice-1/",
                    "learnosityRef": "G4-Practice-Fractions-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/gmas/grade-4/fractions-and-operations/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/gmas/grade-4/fractions-and-operations/fractions-practice-2/",
                    "learnosityRef": "G4-Practice-Fractions-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 3",
                "url": "/maths/gmas/grade-4/fractions-and-operations/fractions-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 3",
                    "url": "/maths/gmas/grade-4/fractions-and-operations/fractions-practice-3/",
                    "learnosityRef": "G4-Practice-Fractions-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimal Numbers",
            "url": "/maths/gmas/grade-4/decimal-numbers/",
            "blocks": [
              {
                "name": "Decimals Practice",
                "url": "/maths/gmas/grade-4/decimal-numbers/decimals-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals Practice",
                    "url": "/maths/gmas/grade-4/decimal-numbers/decimals-practice/",
                    "learnosityRef": "G4-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/gmas/grade-4/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/gmas/grade-4/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/gmas/grade-4/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "G4-Practice-Measurement-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry and Patterns",
            "url": "/maths/gmas/grade-4/symmetry-and-patterns/",
            "blocks": [
              {
                "name": "Patterns Practice",
                "url": "/maths/gmas/grade-4/symmetry-and-patterns/patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Patterns Practice",
                    "url": "/maths/gmas/grade-4/symmetry-and-patterns/patterns-practice/",
                    "learnosityRef": "G4-Practice-Patterns-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Symmetry Practice",
                "url": "/maths/gmas/grade-4/symmetry-and-patterns/symmetry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry Practice",
                    "url": "/maths/gmas/grade-4/symmetry-and-patterns/symmetry-practice/",
                    "learnosityRef": "G4-Practice-Symmetry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/gmas/grade-4/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/gmas/grade-4/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/gmas/grade-4/geometry/geometry-practice-1/",
                    "learnosityRef": "G4-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/gmas/grade-4/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/gmas/grade-4/geometry/geometry-practice-2/",
                    "learnosityRef": "G4-Practice-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/gmas/grade-4/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/gmas/grade-4/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/gmas/grade-4/data-handling/data-handling-practice/",
                    "learnosityRef": "G4-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/gmas/grade-4/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/gmas/grade-4/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1 Section 1",
                    "url": "/maths/gmas/grade-4/mock-test-1/mock-test-1/mock-test-1-section-1/",
                    "learnosityRef": "GMAS-Math-G4-Practice-Mock-01-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Section 2",
                    "url": "/maths/gmas/grade-4/mock-test-1/mock-test-1/mock-test-1-section-2/",
                    "learnosityRef": "GMAS-Math-G4-Practice-Mock-01-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/gmas/grade-4/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/gmas/grade-4/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2 Section 1",
                    "url": "/maths/gmas/grade-4/mock-test-2/mock-test-2/mock-test-2-section-1/",
                    "learnosityRef": "GMAS-Math-G4-Practice-Mock-02-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Section 2",
                    "url": "/maths/gmas/grade-4/mock-test-2/mock-test-2/mock-test-2-section-2/",
                    "learnosityRef": "GMAS-Math-G4-Practice-Mock-02-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-5",
        "label": "Grade 5",
        "programCode": "GMAS.G5",
        "url": "/maths/gmas/grade-5/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/gmas/grade-5/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice",
                "url": "/maths/gmas/grade-5/number-systems/number-systems-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice",
                    "url": "/maths/gmas/grade-5/number-systems/number-systems-practice/",
                    "learnosityRef": "G5-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Numbers and Operations",
            "url": "/maths/gmas/grade-5/numbers-and-operations/",
            "blocks": [
              {
                "name": "Numbers and Operations Practice 1",
                "url": "/maths/gmas/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 1",
                    "url": "/maths/gmas/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numbers and Operations Practice 2",
                "url": "/maths/gmas/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 2",
                    "url": "/maths/gmas/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and their Addition and Subtraction",
            "url": "/maths/gmas/grade-5/fractions-and-their-addition-and-subtraction/",
            "blocks": [
              {
                "name": "Fractions and their Addition and Subtraction Practice 1",
                "url": "/maths/gmas/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 1",
                    "url": "/maths/gmas/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and their Addition and Subtraction Practice 2",
                "url": "/maths/gmas/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 2",
                    "url": "/maths/gmas/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division of Fractions",
            "url": "/maths/gmas/grade-5/multiplication-and-division-of-fractions/",
            "blocks": [
              {
                "name": "Multiplication and Division of Fractions Practice 1",
                "url": "/maths/gmas/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 1",
                    "url": "/maths/gmas/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division of Fractions Practice 2",
                "url": "/maths/gmas/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 2",
                    "url": "/maths/gmas/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimals and Operations",
            "url": "/maths/gmas/grade-5/decimals-and-operations/",
            "blocks": [
              {
                "name": "Decimals and Operations Practice 1",
                "url": "/maths/gmas/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 1",
                    "url": "/maths/gmas/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Decimals and Operations Practice 2",
                "url": "/maths/gmas/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 2",
                    "url": "/maths/gmas/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Decimals-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/gmas/grade-5/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice",
                "url": "/maths/gmas/grade-5/geometry/geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice",
                    "url": "/maths/gmas/grade-5/geometry/geometry-practice/",
                    "learnosityRef": "G5-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/gmas/grade-5/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice 1",
                "url": "/maths/gmas/grade-5/mensuration/mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 2D",
                    "url": "/maths/gmas/grade-5/mensuration/mensuration-practice-1/",
                    "learnosityRef": "G5-Practice-Mensuration-2D-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Mensuration Practice 2",
                "url": "/maths/gmas/grade-5/mensuration/mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 3D",
                    "url": "/maths/gmas/grade-5/mensuration/mensuration-practice-2/",
                    "learnosityRef": "G5-Practice-Mensuration-3D-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/gmas/grade-5/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/gmas/grade-5/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/gmas/grade-5/data-handling/data-handling-practice/",
                    "learnosityRef": "G5-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/gmas/grade-5/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice 1",
                "url": "/maths/gmas/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 1",
                    "url": "/maths/gmas/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Coordinate Geometry Practice 2",
                "url": "/maths/gmas/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 2",
                    "url": "/maths/gmas/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/gmas/grade-5/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/gmas/grade-5/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1 Section 1",
                    "url": "/maths/gmas/grade-5/mock-test-1/mock-test-1/mock-test-1-section-1/",
                    "learnosityRef": "GMAS-Math-G5-Practice-Mock-01-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Section 2",
                    "url": "/maths/gmas/grade-5/mock-test-1/mock-test-1/mock-test-1-section-2/",
                    "learnosityRef": "GMAS-Math-G5-Practice-Mock-01-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/gmas/grade-5/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/gmas/grade-5/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2 Section 1",
                    "url": "/maths/gmas/grade-5/mock-test-2/mock-test-2/mock-test-2-section-1/",
                    "learnosityRef": "GMAS-Math-G5-Practice-Mock-02-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Section 2",
                    "url": "/maths/gmas/grade-5/mock-test-2/mock-test-2/mock-test-2-section-2/",
                    "learnosityRef": "GMAS-Math-G5-Practice-Mock-02-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-6",
        "label": "Grade 6",
        "programCode": "GMAS.G6",
        "url": "/maths/gmas/grade-6/",
        "chapters": [
          {
            "name": "Numerical Expressions and Factors",
            "url": "/maths/gmas/grade-6/numerical-expressions-and-factors/",
            "blocks": [
              {
                "name": "Numerical Expressions and Factors Practice 1",
                "url": "/maths/gmas/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 1",
                    "url": "/maths/gmas/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                    "learnosityRef": "G6-Number-Operations-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numerical Expressions and Factors Practice 2",
                "url": "/maths/gmas/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 2",
                    "url": "/maths/gmas/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                    "learnosityRef": "G6-Number-Operations-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/gmas/grade-6/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals Practice 1",
                "url": "/maths/gmas/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 1",
                    "url": "/maths/gmas/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Decimals Practice 2",
                "url": "/maths/gmas/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 2",
                    "url": "/maths/gmas/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratio Proportion and Percentages",
            "url": "/maths/gmas/grade-6/ratio-proportion-and-percentages/",
            "blocks": [
              {
                "name": "Ratio Proportion and Percentages Practice 1",
                "url": "/maths/gmas/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 1",
                    "url": "/maths/gmas/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratio Proportion and Percentages Practice 2",
                "url": "/maths/gmas/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 2",
                    "url": "/maths/gmas/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Expressions Equations and Inequalities",
            "url": "/maths/gmas/grade-6/algebraic-expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                "url": "/maths/gmas/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/gmas/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G6-Algebra-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                "url": "/maths/gmas/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/gmas/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G6-Algebra-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/gmas/grade-6/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice",
                "url": "/maths/gmas/grade-6/mensuration/mensuration-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice",
                    "url": "/maths/gmas/grade-6/mensuration/mensuration-practice/",
                    "learnosityRef": "G6-Mensuration-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/gmas/grade-6/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice",
                "url": "/maths/gmas/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice",
                    "url": "/maths/gmas/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                    "learnosityRef": "G6-Coordinate-Geometry-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/gmas/grade-6/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice 1",
                "url": "/maths/gmas/grade-6/data-handling/data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 1",
                    "url": "/maths/gmas/grade-6/data-handling/data-handling-practice-1/",
                    "learnosityRef": "G6-Data-Handling-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Handling Practice 2",
                "url": "/maths/gmas/grade-6/data-handling/data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 2",
                    "url": "/maths/gmas/grade-6/data-handling/data-handling-practice-2/",
                    "learnosityRef": "G6-Data-Handling-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/gmas/grade-6/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/gmas/grade-6/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1 Section 1",
                    "url": "/maths/gmas/grade-6/mock-test-1/mock-test-1/mock-test-1-section-1/",
                    "learnosityRef": "GMAS-Math-G6-Mock-Test-01-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Section 2",
                    "url": "/maths/gmas/grade-6/mock-test-1/mock-test-1/mock-test-1-section-2/",
                    "learnosityRef": "GMAS-Math-G6-Mock-Test-01-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/gmas/grade-6/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/gmas/grade-6/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2 Section 1",
                    "url": "/maths/gmas/grade-6/mock-test-2/mock-test-2/mock-test-2-section-1/",
                    "learnosityRef": "GMAS-Math-G6-Mock-Test-02-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Section 2",
                    "url": "/maths/gmas/grade-6/mock-test-2/mock-test-2/mock-test-2-section-2/",
                    "learnosityRef": "GMAS-Math-G6-Mock-Test-02-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-7",
        "label": "Grade 7",
        "programCode": "GMAS.G7",
        "url": "/maths/gmas/grade-7/",
        "chapters": [
          {
            "name": "Rational Numbers",
            "url": "/maths/gmas/grade-7/rational-numbers/",
            "blocks": [
              {
                "name": "Rational Numbers Practice 1",
                "url": "/maths/gmas/grade-7/rational-numbers/rational-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 1",
                    "url": "/maths/gmas/grade-7/rational-numbers/rational-numbers-practice-1/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Rational Numbers Practice 2",
                "url": "/maths/gmas/grade-7/rational-numbers/rational-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 2",
                    "url": "/maths/gmas/grade-7/rational-numbers/rational-numbers-practice-2/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratios Proportions and Percentages",
            "url": "/maths/gmas/grade-7/ratios-proportions-and-percentages/",
            "blocks": [
              {
                "name": "Ratios Proportions and Percentages Practice 1",
                "url": "/maths/gmas/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 1",
                    "url": "/maths/gmas/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratios Proportions and Percentages Practice 2",
                "url": "/maths/gmas/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 2",
                    "url": "/maths/gmas/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Expressions Equations and Inequalities",
            "url": "/maths/gmas/grade-7/expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Expressions Equations and Inequalities Practice 1",
                "url": "/maths/gmas/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/gmas/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Expressions Equations and Inequalities Practice 2",
                "url": "/maths/gmas/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/gmas/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry (Angles Circles slicing solids mensuration)",
            "url": "/maths/gmas/grade-7/geometry-angles-circles-slicing-solids-mensuration/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/gmas/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/gmas/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                    "learnosityRef": "G7-GM-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/gmas/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/gmas/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                    "learnosityRef": "G7-GM-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Probability and Data Handling",
            "url": "/maths/gmas/grade-7/probability-and-data-handling/",
            "blocks": [
              {
                "name": "Probability and Data Handling Practice 1",
                "url": "/maths/gmas/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 1",
                    "url": "/maths/gmas/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Probability and Data Handling Practice 2",
                "url": "/maths/gmas/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 2",
                    "url": "/maths/gmas/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/gmas/grade-7/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/gmas/grade-7/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1 Section 1",
                    "url": "/maths/gmas/grade-7/mock-test-1/mock-test-1/mock-test-1-section-1/",
                    "learnosityRef": "GMAS-Math-G7-Mock-Test-01-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 1 Section 2",
                    "url": "/maths/gmas/grade-7/mock-test-1/mock-test-1/mock-test-1-section-2/",
                    "learnosityRef": "GMAS-Math-G7-Mock-Test-01-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/gmas/grade-7/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/gmas/grade-7/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2 Section 1",
                    "url": "/maths/gmas/grade-7/mock-test-2/mock-test-2/mock-test-2-section-1/",
                    "learnosityRef": "GMAS-Math-G7-Mock-Test-02-Section-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Mock Test 2 Section 2",
                    "url": "/maths/gmas/grade-7/mock-test-2/mock-test-2/mock-test-2-section-2/",
                    "learnosityRef": "GMAS-Math-G7-Mock-Test-02-Section-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "sba": {
    "name": "SBA Curriculum",
    "aboutName": "SBA",
    "slug": "sba",
    "examUrl": "/maths/sba/",
    "hasBands": true,
    "bands": [
      {
        "slug": "grade-3",
        "label": "Grade 3",
        "programCode": "SBSA.G3",
        "url": "/maths/sba/grade-3/",
        "chapters": [
          {
            "name": "Place Value and Number Comparison",
            "url": "/maths/sba/grade-3/place-value-and-number-comparison/",
            "blocks": [
              {
                "name": "Place Value and Number Comparison Practice 1",
                "url": "/maths/sba/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 1",
                    "url": "/maths/sba/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Place Value and Number Comparison Practice 2",
                "url": "/maths/sba/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 2",
                    "url": "/maths/sba/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Addition and Subtraction",
            "url": "/maths/sba/grade-3/addition-and-subtraction/",
            "blocks": [
              {
                "name": "Addition and Subtraction Practice 1",
                "url": "/maths/sba/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 1",
                    "url": "/maths/sba/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                    "learnosityRef": "TestPrep-G3-AS-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Addition and Subtraction Practice 2",
                "url": "/maths/sba/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 2",
                    "url": "/maths/sba/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                    "learnosityRef": "TestPrep-G3-Addition-Subtraction-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division",
            "url": "/maths/sba/grade-3/multiplication-and-division/",
            "blocks": [
              {
                "name": "Multiplication and Division Practice 1",
                "url": "/maths/sba/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 1",
                    "url": "/maths/sba/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 2",
                "url": "/maths/sba/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 2",
                    "url": "/maths/sba/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 3",
                "url": "/maths/sba/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 3",
                    "url": "/maths/sba/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-3",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions",
            "url": "/maths/sba/grade-3/fractions/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/sba/grade-3/fractions/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/sba/grade-3/fractions/fractions-practice-1/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/sba/grade-3/fractions/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/sba/grade-3/fractions/fractions-practice-2/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Patterns",
            "url": "/maths/sba/grade-3/algebraic-patterns/",
            "blocks": [
              {
                "name": "Algebraic Patterns Practice",
                "url": "/maths/sba/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Patterns Practice",
                    "url": "/maths/sba/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                    "learnosityRef": "TestPrep-G3-Algebraic-Patterns-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry and Mensuration",
            "url": "/maths/sba/grade-3/geometry-and-mensuration/",
            "blocks": [
              {
                "name": "Geometry and Mensuration Practice 1",
                "url": "/maths/sba/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 1",
                    "url": "/maths/sba/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry and Mensuration Practice 2",
                "url": "/maths/sba/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 2",
                    "url": "/maths/sba/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/sba/grade-3/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/sba/grade-3/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/sba/grade-3/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "TestPrep-G3-Measurement-Time-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/sba/grade-3/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/sba/grade-3/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/sba/grade-3/data-handling/data-handling-practice/",
                    "learnosityRef": "TestPrep-G3-Data-Handling-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/sba/grade-3/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/sba/grade-3/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-3/mock-test-1/mock-test-1/math-computer-adaptive-test/",
                    "learnosityRef": "SBSA-Math-G3-Practice-Mock-1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-3/mock-test-1/mock-test-1/math-performance-task/",
                    "learnosityRef": "SBSA-Math-G3-Practice-Mock-1-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/sba/grade-3/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/sba/grade-3/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-3/mock-test-2/mock-test-2/math-computer-adaptive-test/",
                    "learnosityRef": "SBSA-Math-G3-Practice-Mock-2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-3/mock-test-2/mock-test-2/math-performance-task/",
                    "learnosityRef": "SBSA-Math-G3-Practice-Mock-2-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-4",
        "label": "Grade 4",
        "programCode": "SBSA.G4",
        "url": "/maths/sba/grade-4/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/sba/grade-4/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice 1",
                "url": "/maths/sba/grade-4/number-systems/number-systems-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 1",
                    "url": "/maths/sba/grade-4/number-systems/number-systems-practice-1/",
                    "learnosityRef": "G4-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Systems Practice 2",
                "url": "/maths/sba/grade-4/number-systems/number-systems-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 2",
                    "url": "/maths/sba/grade-4/number-systems/number-systems-practice-2/",
                    "learnosityRef": "G4-Practice-Number-Systems-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Operations on Numbers",
            "url": "/maths/sba/grade-4/operations-on-numbers/",
            "blocks": [
              {
                "name": "Operations on Numbers Practice 1",
                "url": "/maths/sba/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 1",
                    "url": "/maths/sba/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 2",
                "url": "/maths/sba/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 2",
                    "url": "/maths/sba/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 3",
                "url": "/maths/sba/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 3",
                    "url": "/maths/sba/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Factors Multiples and Primes",
            "url": "/maths/sba/grade-4/factors-multiples-and-primes/",
            "blocks": [
              {
                "name": "Factors Multiples Primes Practice",
                "url": "/maths/sba/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Factors Multiples Primes Practice",
                    "url": "/maths/sba/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                    "learnosityRef": "G4-Practice-Factors-Multiples-Primes-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Operations",
            "url": "/maths/sba/grade-4/fractions-and-operations/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/sba/grade-4/fractions-and-operations/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/sba/grade-4/fractions-and-operations/fractions-practice-1/",
                    "learnosityRef": "G4-Practice-Fractions-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/sba/grade-4/fractions-and-operations/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/sba/grade-4/fractions-and-operations/fractions-practice-2/",
                    "learnosityRef": "G4-Practice-Fractions-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 3",
                "url": "/maths/sba/grade-4/fractions-and-operations/fractions-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 3",
                    "url": "/maths/sba/grade-4/fractions-and-operations/fractions-practice-3/",
                    "learnosityRef": "G4-Practice-Fractions-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimal Numbers",
            "url": "/maths/sba/grade-4/decimal-numbers/",
            "blocks": [
              {
                "name": "Decimals Practice",
                "url": "/maths/sba/grade-4/decimal-numbers/decimals-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals Practice",
                    "url": "/maths/sba/grade-4/decimal-numbers/decimals-practice/",
                    "learnosityRef": "G4-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/sba/grade-4/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/sba/grade-4/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/sba/grade-4/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "G4-Practice-Measurement-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry and Patterns",
            "url": "/maths/sba/grade-4/symmetry-and-patterns/",
            "blocks": [
              {
                "name": "Patterns Practice",
                "url": "/maths/sba/grade-4/symmetry-and-patterns/patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Patterns Practice",
                    "url": "/maths/sba/grade-4/symmetry-and-patterns/patterns-practice/",
                    "learnosityRef": "G4-Practice-Patterns-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Symmetry Practice",
                "url": "/maths/sba/grade-4/symmetry-and-patterns/symmetry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry Practice",
                    "url": "/maths/sba/grade-4/symmetry-and-patterns/symmetry-practice/",
                    "learnosityRef": "G4-Practice-Symmetry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/sba/grade-4/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/sba/grade-4/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/sba/grade-4/geometry/geometry-practice-1/",
                    "learnosityRef": "G4-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/sba/grade-4/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/sba/grade-4/geometry/geometry-practice-2/",
                    "learnosityRef": "G4-Practice-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/sba/grade-4/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/sba/grade-4/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/sba/grade-4/data-handling/data-handling-practice/",
                    "learnosityRef": "G4-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/sba/grade-4/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/sba/grade-4/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-4/mock-test-1/mock-test-1/math-computer-adaptive-test/",
                    "learnosityRef": "SBSA-MATH-G4-Practice-Mock-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-4/mock-test-1/mock-test-1/math-performance-task/",
                    "learnosityRef": "SBSA-MATH-G4-Practice-Mock-01-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/sba/grade-4/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/sba/grade-4/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-4/mock-test-2/mock-test-2/math-computer-adaptive-test/",
                    "learnosityRef": "SBSA-MATH-G4-Practice-Mock-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-4/mock-test-2/mock-test-2/math-performance-task/",
                    "learnosityRef": "SBSA-MATH-G4-Practice-Mock-02-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-5",
        "label": "Grade 5",
        "programCode": "SBSA.G5",
        "url": "/maths/sba/grade-5/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/sba/grade-5/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice",
                "url": "/maths/sba/grade-5/number-systems/number-systems-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice",
                    "url": "/maths/sba/grade-5/number-systems/number-systems-practice/",
                    "learnosityRef": "G5-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Numbers and Operations",
            "url": "/maths/sba/grade-5/numbers-and-operations/",
            "blocks": [
              {
                "name": "Numbers and Operations Practice 1",
                "url": "/maths/sba/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 1",
                    "url": "/maths/sba/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numbers and Operations Practice 2",
                "url": "/maths/sba/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 2",
                    "url": "/maths/sba/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and their Addition and Subtraction",
            "url": "/maths/sba/grade-5/fractions-and-their-addition-and-subtraction/",
            "blocks": [
              {
                "name": "Fractions and their Addition and Subtraction Practice 1",
                "url": "/maths/sba/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 1",
                    "url": "/maths/sba/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and their Addition and Subtraction Practice 2",
                "url": "/maths/sba/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 2",
                    "url": "/maths/sba/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division of Fractions",
            "url": "/maths/sba/grade-5/multiplication-and-division-of-fractions/",
            "blocks": [
              {
                "name": "Multiplication and Division of Fractions Practice 1",
                "url": "/maths/sba/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 1",
                    "url": "/maths/sba/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division of Fractions Practice 2",
                "url": "/maths/sba/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 2",
                    "url": "/maths/sba/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimals and Operations",
            "url": "/maths/sba/grade-5/decimals-and-operations/",
            "blocks": [
              {
                "name": "Decimals and Operations Practice 1",
                "url": "/maths/sba/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 1",
                    "url": "/maths/sba/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Decimals and Operations Practice 2",
                "url": "/maths/sba/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 2",
                    "url": "/maths/sba/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Decimals-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/sba/grade-5/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice",
                "url": "/maths/sba/grade-5/geometry/geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice",
                    "url": "/maths/sba/grade-5/geometry/geometry-practice/",
                    "learnosityRef": "G5-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/sba/grade-5/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice",
                "url": "/maths/sba/grade-5/mensuration/mensuration-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 3D",
                    "url": "/maths/sba/grade-5/mensuration/mensuration-practice/",
                    "learnosityRef": "G5-Practice-Mensuration-3D-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/sba/grade-5/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/sba/grade-5/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/sba/grade-5/data-handling/data-handling-practice/",
                    "learnosityRef": "G5-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/sba/grade-5/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice 1",
                "url": "/maths/sba/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 1",
                    "url": "/maths/sba/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Coordinate Geometry Practice 2",
                "url": "/maths/sba/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 2",
                    "url": "/maths/sba/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/sba/grade-5/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/sba/grade-5/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-5/mock-test-1/mock-test-1/math-computer-adaptive-test/",
                    "learnosityRef": "SBAC-G5-Practice-Mock-1-CAT",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-5/mock-test-1/mock-test-1/math-performance-task/",
                    "learnosityRef": "SBAC-G5-Practice-Mock-1-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/sba/grade-5/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/sba/grade-5/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-5/mock-test-2/mock-test-2/math-computer-adaptive-test/",
                    "learnosityRef": "SBAC-G5-Practice-Mock-2-CAT",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-5/mock-test-2/mock-test-2/math-performance-task/",
                    "learnosityRef": "SBAC-G5-Practice-Mock-2-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-6",
        "label": "Grade 6",
        "programCode": "SBSA.G6",
        "url": "/maths/sba/grade-6/",
        "chapters": [
          {
            "name": "Numerical Expressions and Factors",
            "url": "/maths/sba/grade-6/numerical-expressions-and-factors/",
            "blocks": [
              {
                "name": "Numerical Expressions and Factors Practice 1",
                "url": "/maths/sba/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 1",
                    "url": "/maths/sba/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                    "learnosityRef": "G6-Number-Operations-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numerical Expressions and Factors Practice 2",
                "url": "/maths/sba/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 2",
                    "url": "/maths/sba/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                    "learnosityRef": "G6-Number-Operations-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/sba/grade-6/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals Practice 1",
                "url": "/maths/sba/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 1",
                    "url": "/maths/sba/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Decimals Practice 2",
                "url": "/maths/sba/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 2",
                    "url": "/maths/sba/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratio Proportion and Percentages",
            "url": "/maths/sba/grade-6/ratio-proportion-and-percentages/",
            "blocks": [
              {
                "name": "Ratio Proportion and Percentages Practice 1",
                "url": "/maths/sba/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 1",
                    "url": "/maths/sba/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratio Proportion and Percentages Practice 2",
                "url": "/maths/sba/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 2",
                    "url": "/maths/sba/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Expressions Equations and Inequalities",
            "url": "/maths/sba/grade-6/algebraic-expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                "url": "/maths/sba/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/sba/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G6-Algebra-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                "url": "/maths/sba/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/sba/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G6-Algebra-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/sba/grade-6/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice",
                "url": "/maths/sba/grade-6/mensuration/mensuration-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice",
                    "url": "/maths/sba/grade-6/mensuration/mensuration-practice/",
                    "learnosityRef": "G6-Mensuration-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/sba/grade-6/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice",
                "url": "/maths/sba/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice",
                    "url": "/maths/sba/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                    "learnosityRef": "G6-Coordinate-Geometry-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/sba/grade-6/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice 1",
                "url": "/maths/sba/grade-6/data-handling/data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 1",
                    "url": "/maths/sba/grade-6/data-handling/data-handling-practice-1/",
                    "learnosityRef": "G6-Data-Handling-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Handling Practice 2",
                "url": "/maths/sba/grade-6/data-handling/data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 2",
                    "url": "/maths/sba/grade-6/data-handling/data-handling-practice-2/",
                    "learnosityRef": "G6-Data-Handling-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/sba/grade-6/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/sba/grade-6/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-6/mock-test-1/mock-test-1/math-computer-adaptive-test/",
                    "learnosityRef": "SBSA-Math-G6-Practice-Mock-01-CAT",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-6/mock-test-1/mock-test-1/math-performance-task/",
                    "learnosityRef": "SBSA-Math-G6-Practice-Mock-01-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/sba/grade-6/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/sba/grade-6/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-6/mock-test-2/mock-test-2/math-computer-adaptive-test/",
                    "learnosityRef": "SBSA-Math-G6-Practice-Mock-02-CAT",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-6/mock-test-2/mock-test-2/math-performance-task/",
                    "learnosityRef": "SBSA-Math-G6-Practice-Mock-02-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-7",
        "label": "Grade 7",
        "programCode": "SBSA.G7",
        "url": "/maths/sba/grade-7/",
        "chapters": [
          {
            "name": "Rational Numbers",
            "url": "/maths/sba/grade-7/rational-numbers/",
            "blocks": [
              {
                "name": "Rational Numbers Practice 1",
                "url": "/maths/sba/grade-7/rational-numbers/rational-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 1",
                    "url": "/maths/sba/grade-7/rational-numbers/rational-numbers-practice-1/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Rational Numbers Practice 2",
                "url": "/maths/sba/grade-7/rational-numbers/rational-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 2",
                    "url": "/maths/sba/grade-7/rational-numbers/rational-numbers-practice-2/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratios Proportions and Percentages",
            "url": "/maths/sba/grade-7/ratios-proportions-and-percentages/",
            "blocks": [
              {
                "name": "Ratios Proportions and Percentages Practice 1",
                "url": "/maths/sba/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 1",
                    "url": "/maths/sba/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratios Proportions and Percentages Practice 2",
                "url": "/maths/sba/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 2",
                    "url": "/maths/sba/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Expressions Equations and Inequalities",
            "url": "/maths/sba/grade-7/expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Expressions Equations and Inequalities Practice 1",
                "url": "/maths/sba/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/sba/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Expressions Equations and Inequalities Practice 2",
                "url": "/maths/sba/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/sba/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry (Angles Circles slicing solids mensuration)",
            "url": "/maths/sba/grade-7/geometry-angles-circles-slicing-solids-mensuration/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/sba/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/sba/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                    "learnosityRef": "G7-GM-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/sba/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/sba/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                    "learnosityRef": "G7-GM-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Probability and Data Handling",
            "url": "/maths/sba/grade-7/probability-and-data-handling/",
            "blocks": [
              {
                "name": "Probability and Data Handling Practice 1",
                "url": "/maths/sba/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 1",
                    "url": "/maths/sba/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Probability and Data Handling Practice 2",
                "url": "/maths/sba/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 2",
                    "url": "/maths/sba/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/sba/grade-7/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/sba/grade-7/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-7/mock-test-1/mock-test-1/math-computer-adaptive-test/",
                    "learnosityRef": "SBSA-MATH-G7-Practice-Mock-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-7/mock-test-1/mock-test-1/math-performance-task/",
                    "learnosityRef": "SBSA-MATH-G7-Practice-Mock-01-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/sba/grade-7/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/sba/grade-7/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Math Computer Adaptive Test",
                    "url": "/maths/sba/grade-7/mock-test-2/mock-test-2/math-computer-adaptive-test/",
                    "learnosityRef": "SBSA-MATH-G7-Practice-Mock-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Math Performance Task",
                    "url": "/maths/sba/grade-7/mock-test-2/mock-test-2/math-performance-task/",
                    "learnosityRef": "SBSA-MATH-G7-Practice-Mock-02-PT",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "amc-8": {
    "name": "AMC 8 Curriculum",
    "aboutName": "AMC 8",
    "slug": "amc-8",
    "examUrl": "/maths/amc-8/",
    "hasBands": false,
    "bands": [
      {
        "slug": null,
        "label": null,
        "programCode": "AMC.G8",
        "url": "/maths/amc-8/",
        "chapters": [
          {
            "name": "Algebra",
            "url": "/maths/amc-8/algebra/",
            "blocks": [
              {
                "name": "Arithmetic Manipulations And Properties",
                "url": "/maths/amc-8/algebra/arithmetic-manipulations-and-properties/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Arithmetic-Manipulations-Properties Practice",
                    "url": "/maths/amc-8/algebra/arithmetic-manipulations-and-properties/",
                    "learnosityRef": "AMC8-Arithmetic-Manipulations-Properties-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Exponents",
                "url": "/maths/amc-8/algebra/exponents/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Exponents Practice",
                    "url": "/maths/amc-8/algebra/exponents/",
                    "learnosityRef": "AMC8-Exponents-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions",
                "url": "/maths/amc-8/algebra/fractions/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice",
                    "url": "/maths/amc-8/algebra/fractions/",
                    "learnosityRef": "AMC8-Fractions-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Decimals",
                "url": "/maths/amc-8/algebra/decimals/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals Practice",
                    "url": "/maths/amc-8/algebra/decimals/",
                    "learnosityRef": "AMC8-Decimals-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratios",
                "url": "/maths/amc-8/algebra/ratios/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Practice",
                    "url": "/maths/amc-8/algebra/ratios/",
                    "learnosityRef": "AMC8-Ratios-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Proportions",
                "url": "/maths/amc-8/algebra/proportions/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Proportions Practice",
                    "url": "/maths/amc-8/algebra/proportions/",
                    "learnosityRef": "AMC8-Proportions-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Percents",
                "url": "/maths/amc-8/algebra/percents/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Percents Practice",
                    "url": "/maths/amc-8/algebra/percents/",
                    "learnosityRef": "AMC8-Percents-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Theory",
            "url": "/maths/amc-8/number-theory/",
            "blocks": [
              {
                "name": "Multiples And Divisors",
                "url": "/maths/amc-8/number-theory/multiples-and-divisors/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiples And Divisors Practice",
                    "url": "/maths/amc-8/number-theory/multiples-and-divisors/",
                    "learnosityRef": "AMC8-Multiples-And-Divisors-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Divisibility Tests",
                "url": "/maths/amc-8/number-theory/divisibility-tests/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Divisibility Tests Practice",
                    "url": "/maths/amc-8/number-theory/divisibility-tests/",
                    "learnosityRef": "AMC8-Divisibility-Tests-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Prime Factorization",
                "url": "/maths/amc-8/number-theory/prime-factorization/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Prime Factorization Practice",
                    "url": "/maths/amc-8/number-theory/prime-factorization/",
                    "learnosityRef": "AMC8-Prime-Factorization-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "LCM And GCD",
                "url": "/maths/amc-8/number-theory/lcm-and-gcd/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "LCM And GCD Practice",
                    "url": "/maths/amc-8/number-theory/lcm-and-gcd/",
                    "learnosityRef": "AMC8-LCM-GCD-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/amc-8/geometry/",
            "blocks": [
              {
                "name": "Basic Geometry",
                "url": "/maths/amc-8/geometry/basic-geometry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Basic Geometry Practice",
                    "url": "/maths/amc-8/geometry/basic-geometry/",
                    "learnosityRef": "AMC8-Basic-Geometry-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Right Triangles And Quadrilaterals",
                "url": "/maths/amc-8/geometry/right-triangles-and-quadrilaterals/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Right Triangles And Quadrilaterals Practice",
                    "url": "/maths/amc-8/geometry/right-triangles-and-quadrilaterals/",
                    "learnosityRef": "AMC8-Right-Triangles-And-Quadrilaterals-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Perimeter And Area",
                "url": "/maths/amc-8/geometry/perimeter-and-area/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Perimeter And Area Practice",
                    "url": "/maths/amc-8/geometry/perimeter-and-area/",
                    "learnosityRef": "AMC8-Perimeter-And-Area-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Counting And Probability",
            "url": "/maths/amc-8/counting-and-probability/",
            "blocks": [
              {
                "name": "Counting",
                "url": "/maths/amc-8/counting-and-probability/counting/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Counting Practice",
                    "url": "/maths/amc-8/counting-and-probability/counting/",
                    "learnosityRef": "AMC8-Counting-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Probability",
                "url": "/maths/amc-8/counting-and-probability/probability/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability Practice",
                    "url": "/maths/amc-8/counting-and-probability/probability/",
                    "learnosityRef": "AMC8-Probability-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data And Statistics",
            "url": "/maths/amc-8/data-and-statistics/",
            "blocks": [
              {
                "name": "Basic Statistics",
                "url": "/maths/amc-8/data-and-statistics/basic-statistics/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Basic Statistics Practice",
                    "url": "/maths/amc-8/data-and-statistics/basic-statistics/",
                    "learnosityRef": "AMC8-Basic-Statistics-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Graphs And Charts",
                "url": "/maths/amc-8/data-and-statistics/graphs-and-charts/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Graphs And Charts Practice",
                    "url": "/maths/amc-8/data-and-statistics/graphs-and-charts/",
                    "learnosityRef": "AMC8-Graphs-And-Charts-W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/amc-8/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/amc-8/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/amc-8/mock-test-1/mock-test-1/",
                    "learnosityRef": "AMC8-Practice-Mock-1-V1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/amc-8/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/amc-8/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/amc-8/mock-test-2/mock-test-2/",
                    "learnosityRef": "AMC8-Practice-Mock-2-V1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 3",
            "url": "/maths/amc-8/mock-test-3/",
            "blocks": [
              {
                "name": "Mock Test 3",
                "url": "/maths/amc-8/mock-test-3/mock-test-3/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 3",
                    "url": "/maths/amc-8/mock-test-3/mock-test-3/",
                    "learnosityRef": "AMC8-Practice-Mock-3-V1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "kangaroo": {
    "name": "Math Kangaroo Curriculum",
    "aboutName": "Math Kangaroo",
    "slug": "kangaroo",
    "examUrl": "/maths/kangaroo/",
    "hasBands": true,
    "bands": [
      {
        "slug": "grades-1-2",
        "label": "Grades 1-2",
        "programCode": "Kangaroo.G1-G2",
        "url": "/maths/kangaroo/grades-1-2/",
        "chapters": [
          {
            "name": "Number Sense",
            "url": "/maths/kangaroo/grades-1-2/number-sense/",
            "blocks": [
              {
                "name": "Number Sense",
                "url": "/maths/kangaroo/grades-1-2/number-sense/number-sense/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-1-2/number-sense/number-sense/number-sense-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Number-Sense-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-1-2/number-sense/number-sense/number-sense-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Number-Sense-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-1-2/number-sense/number-sense/number-sense-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Number-Sense-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Operations",
            "url": "/maths/kangaroo/grades-1-2/number-operations/",
            "blocks": [
              {
                "name": "Number Operations",
                "url": "/maths/kangaroo/grades-1-2/number-operations/number-operations/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Operations",
                    "url": "/maths/kangaroo/grades-1-2/number-operations/number-operations/number-operations-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Number-Operations-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Operations",
                    "url": "/maths/kangaroo/grades-1-2/number-operations/number-operations/number-operations-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Number-Operations-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Operations",
                    "url": "/maths/kangaroo/grades-1-2/number-operations/number-operations/number-operations-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Number-Operations-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Pre-algebra",
            "url": "/maths/kangaroo/grades-1-2/pre-algebra/",
            "blocks": [
              {
                "name": "Pre-algebra",
                "url": "/maths/kangaroo/grades-1-2/pre-algebra/pre-algebra/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Pre-Algebra",
                    "url": "/maths/kangaroo/grades-1-2/pre-algebra/pre-algebra/pre-algebra-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Pre-Algebra-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Pre-Algebra",
                    "url": "/maths/kangaroo/grades-1-2/pre-algebra/pre-algebra/pre-algebra-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Pre-Algebra-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Pre-Algebra",
                    "url": "/maths/kangaroo/grades-1-2/pre-algebra/pre-algebra/pre-algebra-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Pre-Algebra-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurements",
            "url": "/maths/kangaroo/grades-1-2/measurements/",
            "blocks": [
              {
                "name": "Measurements",
                "url": "/maths/kangaroo/grades-1-2/measurements/measurements/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-1-2/measurements/measurements/measurements-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Measurements-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-1-2/measurements/measurements/measurements-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Measurements-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-1-2/measurements/measurements/measurements-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Measurements-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Spatial Understanding",
            "url": "/maths/kangaroo/grades-1-2/spatial-understanding/",
            "blocks": [
              {
                "name": "Spatial Understanding",
                "url": "/maths/kangaroo/grades-1-2/spatial-understanding/spatial-understanding/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Spatial Understanding",
                    "url": "/maths/kangaroo/grades-1-2/spatial-understanding/spatial-understanding/spatial-understanding-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Spatial-Understanding-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Spatial Understanding",
                    "url": "/maths/kangaroo/grades-1-2/spatial-understanding/spatial-understanding/spatial-understanding-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Spatial-Understanding-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Spatial Understanding",
                    "url": "/maths/kangaroo/grades-1-2/spatial-understanding/spatial-understanding/spatial-understanding-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Spatial-Understanding-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Time",
            "url": "/maths/kangaroo/grades-1-2/time/",
            "blocks": [
              {
                "name": "Time",
                "url": "/maths/kangaroo/grades-1-2/time/time/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Time",
                    "url": "/maths/kangaroo/grades-1-2/time/time/time-1/",
                    "learnosityRef": "Kangaroo-G-1-2-Time-Calendars-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Time",
                    "url": "/maths/kangaroo/grades-1-2/time/time/time-2/",
                    "learnosityRef": "Kangaroo-G-1-2-Time-Calendars-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Time",
                    "url": "/maths/kangaroo/grades-1-2/time/time/time-3/",
                    "learnosityRef": "Kangaroo-G-1-2-Time-Calendars-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Pictographs",
            "url": "/maths/kangaroo/grades-1-2/pictographs/",
            "blocks": [
              {
                "name": "Pictographs",
                "url": "/maths/kangaroo/grades-1-2/pictographs/pictographs/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Pictographs",
                    "url": "/maths/kangaroo/grades-1-2/pictographs/pictographs/pictographs-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Pictographs-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Pictographs",
                    "url": "/maths/kangaroo/grades-1-2/pictographs/pictographs/pictographs-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Pictographs-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Pictographs",
                    "url": "/maths/kangaroo/grades-1-2/pictographs/pictographs/pictographs-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Pictographs-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Chance",
            "url": "/maths/kangaroo/grades-1-2/chance/",
            "blocks": [
              {
                "name": "Chance",
                "url": "/maths/kangaroo/grades-1-2/chance/chance/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Chance",
                    "url": "/maths/kangaroo/grades-1-2/chance/chance/chance-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Chance-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Chance",
                    "url": "/maths/kangaroo/grades-1-2/chance/chance/chance-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Chance-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Chance",
                    "url": "/maths/kangaroo/grades-1-2/chance/chance/chance-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Chance-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry",
            "url": "/maths/kangaroo/grades-1-2/symmetry/",
            "blocks": [
              {
                "name": "Symmetry",
                "url": "/maths/kangaroo/grades-1-2/symmetry/symmetry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-1-2/symmetry/symmetry/symmetry-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Symmetry-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-1-2/symmetry/symmetry/symmetry-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Symmetry-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-1-2/symmetry/symmetry/symmetry-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Symmetry-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Order and Ranking",
            "url": "/maths/kangaroo/grades-1-2/order-and-ranking/",
            "blocks": [
              {
                "name": "Order and Ranking",
                "url": "/maths/kangaroo/grades-1-2/order-and-ranking/order-and-ranking/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ranking",
                    "url": "/maths/kangaroo/grades-1-2/order-and-ranking/order-and-ranking/ranking-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Ordering-Ranking-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Ranking",
                    "url": "/maths/kangaroo/grades-1-2/order-and-ranking/order-and-ranking/ranking-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Ordering-Ranking-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Ranking",
                    "url": "/maths/kangaroo/grades-1-2/order-and-ranking/order-and-ranking/ranking-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Ordering-Ranking-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Venn Diagrams",
            "url": "/maths/kangaroo/grades-1-2/venn-diagrams/",
            "blocks": [
              {
                "name": "Venn Diagrams",
                "url": "/maths/kangaroo/grades-1-2/venn-diagrams/venn-diagrams/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Venn Diagram",
                    "url": "/maths/kangaroo/grades-1-2/venn-diagrams/venn-diagrams/venn-diagram-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Venn-Diagram-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Venn Diagram",
                    "url": "/maths/kangaroo/grades-1-2/venn-diagrams/venn-diagrams/venn-diagram-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Venn-Diagram-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Venn Diagram",
                    "url": "/maths/kangaroo/grades-1-2/venn-diagrams/venn-diagrams/venn-diagram-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Venn-Diagram-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Puzzles",
            "url": "/maths/kangaroo/grades-1-2/puzzles/",
            "blocks": [
              {
                "name": "Puzzles",
                "url": "/maths/kangaroo/grades-1-2/puzzles/puzzles/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Puzzles",
                    "url": "/maths/kangaroo/grades-1-2/puzzles/puzzles/puzzles-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Puzzles-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Puzzles",
                    "url": "/maths/kangaroo/grades-1-2/puzzles/puzzles/puzzles-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Puzzles-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Puzzles",
                    "url": "/maths/kangaroo/grades-1-2/puzzles/puzzles/puzzles-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Puzzles-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Patterns",
            "url": "/maths/kangaroo/grades-1-2/patterns/",
            "blocks": [
              {
                "name": "Patterns",
                "url": "/maths/kangaroo/grades-1-2/patterns/patterns/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Patterns",
                    "url": "/maths/kangaroo/grades-1-2/patterns/patterns/patterns-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Patterns-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Patterns",
                    "url": "/maths/kangaroo/grades-1-2/patterns/patterns/patterns-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Patterns-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Patterns",
                    "url": "/maths/kangaroo/grades-1-2/patterns/patterns/patterns-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Patterns-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/kangaroo/grades-1-2/geometry/",
            "blocks": [
              {
                "name": "Geometry",
                "url": "/maths/kangaroo/grades-1-2/geometry/geometry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry",
                    "url": "/maths/kangaroo/grades-1-2/geometry/geometry/geometry-1/",
                    "learnosityRef": "Kangaroo-G1-G2-Geometry-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Geometry",
                    "url": "/maths/kangaroo/grades-1-2/geometry/geometry/geometry-2/",
                    "learnosityRef": "Kangaroo-G1-G2-Geometry-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Geometry",
                    "url": "/maths/kangaroo/grades-1-2/geometry/geometry/geometry-3/",
                    "learnosityRef": "Kangaroo-G1-G2-Geometry-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Kangaroo Mock Test 1",
            "url": "/maths/kangaroo/grades-1-2/kangaroo-mock-test-1/",
            "blocks": [
              {
                "name": "Kangaroo Mock Test 1",
                "url": "/maths/kangaroo/grades-1-2/kangaroo-mock-test-1/kangaroo-mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/kangaroo/grades-1-2/kangaroo-mock-test-1/kangaroo-mock-test-1/",
                    "learnosityRef": "Kangaroo-G-1-2-Mock-Test-MT01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Kangaroo Mock Test 2",
            "url": "/maths/kangaroo/grades-1-2/kangaroo-mock-test-2/",
            "blocks": [
              {
                "name": "Kangaroo Mock Test 2",
                "url": "/maths/kangaroo/grades-1-2/kangaroo-mock-test-2/kangaroo-mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Kangaroo Mock Test 2",
                    "url": "/maths/kangaroo/grades-1-2/kangaroo-mock-test-2/kangaroo-mock-test-2/",
                    "learnosityRef": "Kangaroo-G-1-2-Mock-Test-MT02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grades-3-4",
        "label": "Grades 3-4",
        "programCode": "Kangaroo.G3-G4",
        "url": "/maths/kangaroo/grades-3-4/",
        "chapters": [
          {
            "name": "Number Sense",
            "url": "/maths/kangaroo/grades-3-4/number-sense/",
            "blocks": [
              {
                "name": "Number Sense",
                "url": "/maths/kangaroo/grades-3-4/number-sense/number-sense/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-3-4/number-sense/number-sense/number-sense-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Number-Sense-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-3-4/number-sense/number-sense/number-sense-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Number-Sense-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-3-4/number-sense/number-sense/number-sense-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Number-Sense-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Operations",
            "url": "/maths/kangaroo/grades-3-4/number-operations/",
            "blocks": [
              {
                "name": "Number Operations",
                "url": "/maths/kangaroo/grades-3-4/number-operations/number-operations/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers Operations",
                    "url": "/maths/kangaroo/grades-3-4/number-operations/number-operations/numbers-operations-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Number-Operations-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Numbers Operations",
                    "url": "/maths/kangaroo/grades-3-4/number-operations/number-operations/numbers-operations-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Number-Operations-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Numbers Operations",
                    "url": "/maths/kangaroo/grades-3-4/number-operations/number-operations/numbers-operations-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Number-Operations-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions",
            "url": "/maths/kangaroo/grades-3-4/fractions/",
            "blocks": [
              {
                "name": "Fractions",
                "url": "/maths/kangaroo/grades-3-4/fractions/fractions/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions",
                    "url": "/maths/kangaroo/grades-3-4/fractions/fractions/fractions-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Fractions-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Fractions",
                    "url": "/maths/kangaroo/grades-3-4/fractions/fractions/fractions-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Fractions-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Fractions",
                    "url": "/maths/kangaroo/grades-3-4/fractions/fractions/fractions-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Fractions-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Factors and Multiples",
            "url": "/maths/kangaroo/grades-3-4/factors-and-multiples/",
            "blocks": [
              {
                "name": "Factors and Multiples",
                "url": "/maths/kangaroo/grades-3-4/factors-and-multiples/factors-and-multiples/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Factors and Multiples",
                    "url": "/maths/kangaroo/grades-3-4/factors-and-multiples/factors-and-multiples/factors-and-multiples-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Factors-Multiples-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Factors and Multiples",
                    "url": "/maths/kangaroo/grades-3-4/factors-and-multiples/factors-and-multiples/factors-and-multiples-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Factors-Multiples-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Factors and Multiples",
                    "url": "/maths/kangaroo/grades-3-4/factors-and-multiples/factors-and-multiples/factors-and-multiples-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Factors-Multiples-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurements",
            "url": "/maths/kangaroo/grades-3-4/measurements/",
            "blocks": [
              {
                "name": "Measurements",
                "url": "/maths/kangaroo/grades-3-4/measurements/measurements/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-3-4/measurements/measurements/measurements-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Measurement-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-3-4/measurements/measurements/measurements-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Measurement-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-3-4/measurements/measurements/measurements-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Measurement-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Time",
            "url": "/maths/kangaroo/grades-3-4/time/",
            "blocks": [
              {
                "name": "Time",
                "url": "/maths/kangaroo/grades-3-4/time/time/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Time and Money",
                    "url": "/maths/kangaroo/grades-3-4/time/time/time-and-money-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Time-Money-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Time and Money",
                    "url": "/maths/kangaroo/grades-3-4/time/time/time-and-money-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Time-Money-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Time and Money",
                    "url": "/maths/kangaroo/grades-3-4/time/time/time-and-money-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Time-Money-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Simple Area and Perimeter",
            "url": "/maths/kangaroo/grades-3-4/simple-area-and-perimeter/",
            "blocks": [
              {
                "name": "Simple Area and Perimeter",
                "url": "/maths/kangaroo/grades-3-4/simple-area-and-perimeter/simple-area-and-perimeter/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Simple Area and Perimeter",
                    "url": "/maths/kangaroo/grades-3-4/simple-area-and-perimeter/simple-area-and-perimeter/simple-area-and-perimeter-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Area-Perimeter-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Simple Area and Perimeter",
                    "url": "/maths/kangaroo/grades-3-4/simple-area-and-perimeter/simple-area-and-perimeter/simple-area-and-perimeter-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Area-Perimeter-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Simple Area and Perimeter",
                    "url": "/maths/kangaroo/grades-3-4/simple-area-and-perimeter/simple-area-and-perimeter/simple-area-and-perimeter-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Area-Perimeter-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/kangaroo/grades-3-4/data-handling/",
            "blocks": [
              {
                "name": "Data Handling",
                "url": "/maths/kangaroo/grades-3-4/data-handling/data-handling/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling",
                    "url": "/maths/kangaroo/grades-3-4/data-handling/data-handling/data-handling-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Data-Handling-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Data Handling",
                    "url": "/maths/kangaroo/grades-3-4/data-handling/data-handling/data-handling-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Data-Handling-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Data Handling",
                    "url": "/maths/kangaroo/grades-3-4/data-handling/data-handling/data-handling-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Data-Handling-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry",
            "url": "/maths/kangaroo/grades-3-4/symmetry/",
            "blocks": [
              {
                "name": "Symmetry",
                "url": "/maths/kangaroo/grades-3-4/symmetry/symmetry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-3-4/symmetry/symmetry/symmetry-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Symmetry-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-3-4/symmetry/symmetry/symmetry-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Symmetry-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-3-4/symmetry/symmetry/symmetry-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Symmetry-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Puzzles",
            "url": "/maths/kangaroo/grades-3-4/puzzles/",
            "blocks": [
              {
                "name": "Puzzles",
                "url": "/maths/kangaroo/grades-3-4/puzzles/puzzles/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Games and Puzzles",
                    "url": "/maths/kangaroo/grades-3-4/puzzles/puzzles/games-and-puzzles-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Simple-Puzzles-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Games and Puzzles",
                    "url": "/maths/kangaroo/grades-3-4/puzzles/puzzles/games-and-puzzles-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Simple-Puzzles-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Games and Puzzles",
                    "url": "/maths/kangaroo/grades-3-4/puzzles/puzzles/games-and-puzzles-3/",
                    "learnosityRef": "Kangaroo-G-3-4-Simple-Puzzles-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Kangaroo Mock Test 1",
            "url": "/maths/kangaroo/grades-3-4/kangaroo-mock-test-1/",
            "blocks": [
              {
                "name": "Kangaroo Mock Test 1",
                "url": "/maths/kangaroo/grades-3-4/kangaroo-mock-test-1/kangaroo-mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Kangaroo Mock Test 1",
                    "url": "/maths/kangaroo/grades-3-4/kangaroo-mock-test-1/kangaroo-mock-test-1/",
                    "learnosityRef": "Kangaroo-G-3-4-Mock-Test-MT01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Kangaroo Mock Test 2",
            "url": "/maths/kangaroo/grades-3-4/kangaroo-mock-test-2/",
            "blocks": [
              {
                "name": "Kangaroo Mock Test 2",
                "url": "/maths/kangaroo/grades-3-4/kangaroo-mock-test-2/kangaroo-mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Kangaroo Mock Test 2",
                    "url": "/maths/kangaroo/grades-3-4/kangaroo-mock-test-2/kangaroo-mock-test-2/",
                    "learnosityRef": "Kangaroo-G-3-4-Mock-Test-MT02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grades-5-6",
        "label": "Grades 5-6",
        "programCode": "Kangaroo.G5-G6",
        "url": "/maths/kangaroo/grades-5-6/",
        "chapters": [
          {
            "name": "Number Sense",
            "url": "/maths/kangaroo/grades-5-6/number-sense/",
            "blocks": [
              {
                "name": "Number Sense",
                "url": "/maths/kangaroo/grades-5-6/number-sense/number-sense/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-5-6/number-sense/number-sense/number-sense-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Number-Sense-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-5-6/number-sense/number-sense/number-sense-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Number-Sense-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-5-6/number-sense/number-sense/number-sense-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Number-Sense-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Operations",
            "url": "/maths/kangaroo/grades-5-6/number-operations/",
            "blocks": [
              {
                "name": "Number Operations",
                "url": "/maths/kangaroo/grades-5-6/number-operations/number-operations/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Operations",
                    "url": "/maths/kangaroo/grades-5-6/number-operations/number-operations/number-operations-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Number-Operations-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Operations",
                    "url": "/maths/kangaroo/grades-5-6/number-operations/number-operations/number-operations-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Number-Operations-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Operations",
                    "url": "/maths/kangaroo/grades-5-6/number-operations/number-operations/number-operations-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Number-Operations-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/kangaroo/grades-5-6/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals",
                "url": "/maths/kangaroo/grades-5-6/fractions-and-decimals/fractions-and-decimals/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals",
                    "url": "/maths/kangaroo/grades-5-6/fractions-and-decimals/fractions-and-decimals/fractions-and-decimals-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Fractions-Decimals-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Fractions and Decimals",
                    "url": "/maths/kangaroo/grades-5-6/fractions-and-decimals/fractions-and-decimals/fractions-and-decimals-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Fractions-Decimals-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Fractions and Decimals",
                    "url": "/maths/kangaroo/grades-5-6/fractions-and-decimals/fractions-and-decimals/fractions-and-decimals-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Fractions-Decimals-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebra",
            "url": "/maths/kangaroo/grades-5-6/algebra/",
            "blocks": [
              {
                "name": "Algebra",
                "url": "/maths/kangaroo/grades-5-6/algebra/algebra/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebra",
                    "url": "/maths/kangaroo/grades-5-6/algebra/algebra/algebra-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Algebra-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Algebra",
                    "url": "/maths/kangaroo/grades-5-6/algebra/algebra/algebra-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Algebra-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Algebra",
                    "url": "/maths/kangaroo/grades-5-6/algebra/algebra/algebra-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Algebra-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurements",
            "url": "/maths/kangaroo/grades-5-6/measurements/",
            "blocks": [
              {
                "name": "Measurements",
                "url": "/maths/kangaroo/grades-5-6/measurements/measurements/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-5-6/measurements/measurements/measurements-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Measurements-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-5-6/measurements/measurements/measurements-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Measurements-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-5-6/measurements/measurements/measurements-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Measurements-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Plane Geometry",
            "url": "/maths/kangaroo/grades-5-6/plane-geometry/",
            "blocks": [
              {
                "name": "Plane Geometry",
                "url": "/maths/kangaroo/grades-5-6/plane-geometry/plane-geometry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Plane Geometry",
                    "url": "/maths/kangaroo/grades-5-6/plane-geometry/plane-geometry/plane-geometry-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Plane-Geometry-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Plane Geometry",
                    "url": "/maths/kangaroo/grades-5-6/plane-geometry/plane-geometry/plane-geometry-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Plane-Geometry-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Plane Geometry",
                    "url": "/maths/kangaroo/grades-5-6/plane-geometry/plane-geometry/plane-geometry-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Plane-Geometry-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid Geometry",
            "url": "/maths/kangaroo/grades-5-6/solid-geometry/",
            "blocks": [
              {
                "name": "Solid Geometry",
                "url": "/maths/kangaroo/grades-5-6/solid-geometry/solid-geometry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Solid Geometry",
                    "url": "/maths/kangaroo/grades-5-6/solid-geometry/solid-geometry/solid-geometry-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Solid-Geometry-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Solid Geometry",
                    "url": "/maths/kangaroo/grades-5-6/solid-geometry/solid-geometry/solid-geometry-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Solid-Geometry-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Solid Geometry",
                    "url": "/maths/kangaroo/grades-5-6/solid-geometry/solid-geometry/solid-geometry-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Solid-Geometry-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Area and Volume",
            "url": "/maths/kangaroo/grades-5-6/area-and-volume/",
            "blocks": [
              {
                "name": "Area and Volume",
                "url": "/maths/kangaroo/grades-5-6/area-and-volume/area-and-volume/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Area and Volume",
                    "url": "/maths/kangaroo/grades-5-6/area-and-volume/area-and-volume/area-and-volume-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Area-Volume-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Area and Volume",
                    "url": "/maths/kangaroo/grades-5-6/area-and-volume/area-and-volume/area-and-volume-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Area-Volume-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Area and Volume",
                    "url": "/maths/kangaroo/grades-5-6/area-and-volume/area-and-volume/area-and-volume-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Area-Volume-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry",
            "url": "/maths/kangaroo/grades-5-6/symmetry/",
            "blocks": [
              {
                "name": "Symmetry",
                "url": "/maths/kangaroo/grades-5-6/symmetry/symmetry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-5-6/symmetry/symmetry/symmetry-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Symmetry-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-5-6/symmetry/symmetry/symmetry-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Symmetry-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-5-6/symmetry/symmetry/symmetry-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Symmetry-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Logic",
            "url": "/maths/kangaroo/grades-5-6/logic/",
            "blocks": [
              {
                "name": "Logic",
                "url": "/maths/kangaroo/grades-5-6/logic/logic/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Logic",
                    "url": "/maths/kangaroo/grades-5-6/logic/logic/logic-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Logic-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Logic",
                    "url": "/maths/kangaroo/grades-5-6/logic/logic/logic-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Logic-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Logic",
                    "url": "/maths/kangaroo/grades-5-6/logic/logic/logic-3/",
                    "learnosityRef": "Kangaroo-G-5-6-Logic-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Kangaroo Mock Test 1",
            "url": "/maths/kangaroo/grades-5-6/kangaroo-mock-test-1/",
            "blocks": [
              {
                "name": "Kangaroo Mock Test 1",
                "url": "/maths/kangaroo/grades-5-6/kangaroo-mock-test-1/kangaroo-mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Kangaroo Mock Test 1",
                    "url": "/maths/kangaroo/grades-5-6/kangaroo-mock-test-1/kangaroo-mock-test-1/",
                    "learnosityRef": "Kangaroo-G-5-6-Mock-Test-MT01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Kangaroo Mock Test 2",
            "url": "/maths/kangaroo/grades-5-6/kangaroo-mock-test-2/",
            "blocks": [
              {
                "name": "Kangaroo Mock Test 2",
                "url": "/maths/kangaroo/grades-5-6/kangaroo-mock-test-2/kangaroo-mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Kangaroo Mock Test 2",
                    "url": "/maths/kangaroo/grades-5-6/kangaroo-mock-test-2/kangaroo-mock-test-2/",
                    "learnosityRef": "Kangaroo-G-5-6-Mock-Test-MT02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grades-7-8",
        "label": "Grades 7-8",
        "programCode": "Kangaroo.G7-G8",
        "url": "/maths/kangaroo/grades-7-8/",
        "chapters": [
          {
            "name": "Number Sense",
            "url": "/maths/kangaroo/grades-7-8/number-sense/",
            "blocks": [
              {
                "name": "Number Sense",
                "url": "/maths/kangaroo/grades-7-8/number-sense/number-sense/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-7-8/number-sense/number-sense/number-sense-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Number-Sense-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-7-8/number-sense/number-sense/number-sense-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Number-Sense-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Sense",
                    "url": "/maths/kangaroo/grades-7-8/number-sense/number-sense/number-sense-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Number-Sense-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Operations",
            "url": "/maths/kangaroo/grades-7-8/number-operations/",
            "blocks": [
              {
                "name": "Number Operations",
                "url": "/maths/kangaroo/grades-7-8/number-operations/number-operations/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Operations",
                    "url": "/maths/kangaroo/grades-7-8/number-operations/number-operations/number-operations-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Number-Operations-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Operations",
                    "url": "/maths/kangaroo/grades-7-8/number-operations/number-operations/number-operations-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Number-Operations-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Number Operations",
                    "url": "/maths/kangaroo/grades-7-8/number-operations/number-operations/number-operations-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Number-Operations-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/kangaroo/grades-7-8/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals",
                "url": "/maths/kangaroo/grades-7-8/fractions-and-decimals/fractions-and-decimals/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals",
                    "url": "/maths/kangaroo/grades-7-8/fractions-and-decimals/fractions-and-decimals/fractions-and-decimals-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Fractions-Decimals-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Fractions and Decimals",
                    "url": "/maths/kangaroo/grades-7-8/fractions-and-decimals/fractions-and-decimals/fractions-and-decimals-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Fractions-Decimals-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Fractions and Decimals",
                    "url": "/maths/kangaroo/grades-7-8/fractions-and-decimals/fractions-and-decimals/fractions-and-decimals-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Fractions-Decimals-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Exponents and Powers",
            "url": "/maths/kangaroo/grades-7-8/exponents-and-powers/",
            "blocks": [
              {
                "name": "Exponents and Powers",
                "url": "/maths/kangaroo/grades-7-8/exponents-and-powers/exponents-and-powers/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Exponents and Powers",
                    "url": "/maths/kangaroo/grades-7-8/exponents-and-powers/exponents-and-powers/exponents-and-powers-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Exponents-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Exponents and Powers",
                    "url": "/maths/kangaroo/grades-7-8/exponents-and-powers/exponents-and-powers/exponents-and-powers-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Exponents-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Exponents and Powers",
                    "url": "/maths/kangaroo/grades-7-8/exponents-and-powers/exponents-and-powers/exponents-and-powers-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Exponents-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Squares and Cubes",
            "url": "/maths/kangaroo/grades-7-8/squares-and-cubes/",
            "blocks": [
              {
                "name": "Squares and Cubes",
                "url": "/maths/kangaroo/grades-7-8/squares-and-cubes/squares-and-cubes/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Squares and Cubes",
                    "url": "/maths/kangaroo/grades-7-8/squares-and-cubes/squares-and-cubes/squares-and-cubes-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Squares-Cubes-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Squares and Cubes",
                    "url": "/maths/kangaroo/grades-7-8/squares-and-cubes/squares-and-cubes/squares-and-cubes-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Squares-Cubes-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Squares and Cubes",
                    "url": "/maths/kangaroo/grades-7-8/squares-and-cubes/squares-and-cubes/squares-and-cubes-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Squares-Cubes-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurements",
            "url": "/maths/kangaroo/grades-7-8/measurements/",
            "blocks": [
              {
                "name": "Measurements",
                "url": "/maths/kangaroo/grades-7-8/measurements/measurements/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-7-8/measurements/measurements/measurements-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Measurements-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-7-8/measurements/measurements/measurements-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Measurements-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Measurements",
                    "url": "/maths/kangaroo/grades-7-8/measurements/measurements/measurements-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Measurements-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebra",
            "url": "/maths/kangaroo/grades-7-8/algebra/",
            "blocks": [
              {
                "name": "Algebra",
                "url": "/maths/kangaroo/grades-7-8/algebra/algebra/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebra",
                    "url": "/maths/kangaroo/grades-7-8/algebra/algebra/algebra-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Algebra-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Algebra",
                    "url": "/maths/kangaroo/grades-7-8/algebra/algebra/algebra-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Algebra-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Algebra",
                    "url": "/maths/kangaroo/grades-7-8/algebra/algebra/algebra-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Algebra-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Plane Geometry",
            "url": "/maths/kangaroo/grades-7-8/plane-geometry/",
            "blocks": [
              {
                "name": "Plane Geometry",
                "url": "/maths/kangaroo/grades-7-8/plane-geometry/plane-geometry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Plane Geometry",
                    "url": "/maths/kangaroo/grades-7-8/plane-geometry/plane-geometry/plane-geometry-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Geometry-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Plane Geometry",
                    "url": "/maths/kangaroo/grades-7-8/plane-geometry/plane-geometry/plane-geometry-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Geometry-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Plane Geometry",
                    "url": "/maths/kangaroo/grades-7-8/plane-geometry/plane-geometry/plane-geometry-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Geometry-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Lines, Angles, and Polygons",
            "url": "/maths/kangaroo/grades-7-8/lines-angles-and-polygons/",
            "blocks": [
              {
                "name": "Lines, Angles, and Polygons",
                "url": "/maths/kangaroo/grades-7-8/lines-angles-and-polygons/lines-angles-and-polygons/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Lines, Angles, and Polygons",
                    "url": "/maths/kangaroo/grades-7-8/lines-angles-and-polygons/lines-angles-and-polygons/lines-angles-and-polygons-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Lines-Angles-Triangles-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Lines, Angles, and Polygons",
                    "url": "/maths/kangaroo/grades-7-8/lines-angles-and-polygons/lines-angles-and-polygons/lines-angles-and-polygons-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Lines-Angles-Triangles-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Lines, Angles, and Polygons",
                    "url": "/maths/kangaroo/grades-7-8/lines-angles-and-polygons/lines-angles-and-polygons/lines-angles-and-polygons-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Lines-Angles-Triangles-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry",
            "url": "/maths/kangaroo/grades-7-8/symmetry/",
            "blocks": [
              {
                "name": "Symmetry",
                "url": "/maths/kangaroo/grades-7-8/symmetry/symmetry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-7-8/symmetry/symmetry/symmetry-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Symmetry-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-7-8/symmetry/symmetry/symmetry-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Symmetry-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Symmetry",
                    "url": "/maths/kangaroo/grades-7-8/symmetry/symmetry/symmetry-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Symmetry-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Solid Geometry",
            "url": "/maths/kangaroo/grades-7-8/solid-geometry/",
            "blocks": [
              {
                "name": "Solid Geometry",
                "url": "/maths/kangaroo/grades-7-8/solid-geometry/solid-geometry/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Solid Geometry",
                    "url": "/maths/kangaroo/grades-7-8/solid-geometry/solid-geometry/solid-geometry-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Solids-Nets-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Solid Geometry",
                    "url": "/maths/kangaroo/grades-7-8/solid-geometry/solid-geometry/solid-geometry-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Solids-Nets-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Solid Geometry",
                    "url": "/maths/kangaroo/grades-7-8/solid-geometry/solid-geometry/solid-geometry-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Solids-Nets-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Perimeter and Area",
            "url": "/maths/kangaroo/grades-7-8/perimeter-and-area/",
            "blocks": [
              {
                "name": "Perimeter and Area",
                "url": "/maths/kangaroo/grades-7-8/perimeter-and-area/perimeter-and-area/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Perimeter and Area",
                    "url": "/maths/kangaroo/grades-7-8/perimeter-and-area/perimeter-and-area/perimeter-and-area-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Perimeter-Area-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Perimeter and Area",
                    "url": "/maths/kangaroo/grades-7-8/perimeter-and-area/perimeter-and-area/perimeter-and-area-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Perimeter-Area-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Perimeter and Area",
                    "url": "/maths/kangaroo/grades-7-8/perimeter-and-area/perimeter-and-area/perimeter-and-area-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Perimeter-Area-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Surface area and Volume",
            "url": "/maths/kangaroo/grades-7-8/surface-area-and-volume/",
            "blocks": [
              {
                "name": "Surface area and Volume",
                "url": "/maths/kangaroo/grades-7-8/surface-area-and-volume/surface-area-and-volume/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Surface area and Volume",
                    "url": "/maths/kangaroo/grades-7-8/surface-area-and-volume/surface-area-and-volume/surface-area-and-volume-1/",
                    "learnosityRef": "Kangaroo-G-7-8-SA-Volume-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Surface area and Volume",
                    "url": "/maths/kangaroo/grades-7-8/surface-area-and-volume/surface-area-and-volume/surface-area-and-volume-2/",
                    "learnosityRef": "Kangaroo-G-7-8-SA-Volume-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Surface area and Volume",
                    "url": "/maths/kangaroo/grades-7-8/surface-area-and-volume/surface-area-and-volume/surface-area-and-volume-3/",
                    "learnosityRef": "Kangaroo-G-7-8-SA-Volume-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Logic",
            "url": "/maths/kangaroo/grades-7-8/logic/",
            "blocks": [
              {
                "name": "Logic",
                "url": "/maths/kangaroo/grades-7-8/logic/logic/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Logic",
                    "url": "/maths/kangaroo/grades-7-8/logic/logic/logic-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Logic-P01",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Logic",
                    "url": "/maths/kangaroo/grades-7-8/logic/logic/logic-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Logic-P02",
                    "nodeType": "PRACTICE"
                  },
                  {
                    "name": "Logic",
                    "url": "/maths/kangaroo/grades-7-8/logic/logic/logic-3/",
                    "learnosityRef": "Kangaroo-G-7-8-Logic-A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Kangaroo Mock Test 1",
            "url": "/maths/kangaroo/grades-7-8/kangaroo-mock-test-1/",
            "blocks": [
              {
                "name": "Kangaroo Mock Test 1",
                "url": "/maths/kangaroo/grades-7-8/kangaroo-mock-test-1/kangaroo-mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Kangaroo Mock Test 1",
                    "url": "/maths/kangaroo/grades-7-8/kangaroo-mock-test-1/kangaroo-mock-test-1/",
                    "learnosityRef": "Kangaroo-G-7-8-Mock-Test-MT01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Kangaroo Mock Test 2",
            "url": "/maths/kangaroo/grades-7-8/kangaroo-mock-test-2/",
            "blocks": [
              {
                "name": "Kangaroo Mock Test 2",
                "url": "/maths/kangaroo/grades-7-8/kangaroo-mock-test-2/kangaroo-mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Kangaroo Mock Test 2",
                    "url": "/maths/kangaroo/grades-7-8/kangaroo-mock-test-2/kangaroo-mock-test-2/",
                    "learnosityRef": "Kangaroo-G-7-8-Mock-Test-MT02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "staar": {
    "name": "STAAR Curriculum",
    "aboutName": "STAAR",
    "slug": "staar",
    "examUrl": "/maths/staar/",
    "hasBands": true,
    "bands": [
      {
        "slug": "grade-3",
        "label": "Grade 3",
        "programCode": "STAAR.G3",
        "url": "/maths/staar/grade-3/",
        "chapters": [
          {
            "name": "Place Value and Number Comparison",
            "url": "/maths/staar/grade-3/place-value-and-number-comparison/",
            "blocks": [
              {
                "name": "Place Value and Number Comparison Practice 1",
                "url": "/maths/staar/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 1",
                    "url": "/maths/staar/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Place Value and Number Comparison Practice 2",
                "url": "/maths/staar/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 2",
                    "url": "/maths/staar/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Addition and Subtraction",
            "url": "/maths/staar/grade-3/addition-and-subtraction/",
            "blocks": [
              {
                "name": "Addition and Subtraction Practice 1",
                "url": "/maths/staar/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 1",
                    "url": "/maths/staar/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                    "learnosityRef": "TestPrep-G3-AS-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Addition and Subtraction Practice 2",
                "url": "/maths/staar/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 2",
                    "url": "/maths/staar/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                    "learnosityRef": "TestPrep-G3-Addition-Subtraction-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division",
            "url": "/maths/staar/grade-3/multiplication-and-division/",
            "blocks": [
              {
                "name": "Multiplication and Division Practice 1",
                "url": "/maths/staar/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 1",
                    "url": "/maths/staar/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 2",
                "url": "/maths/staar/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 2",
                    "url": "/maths/staar/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 3",
                "url": "/maths/staar/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 3",
                    "url": "/maths/staar/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-3",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions",
            "url": "/maths/staar/grade-3/fractions/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/staar/grade-3/fractions/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/staar/grade-3/fractions/fractions-practice-1/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/staar/grade-3/fractions/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/staar/grade-3/fractions/fractions-practice-2/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Patterns",
            "url": "/maths/staar/grade-3/algebraic-patterns/",
            "blocks": [
              {
                "name": "Algebraic Patterns Practice",
                "url": "/maths/staar/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Patterns Practice",
                    "url": "/maths/staar/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                    "learnosityRef": "TestPrep-G3-Algebraic-Patterns-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry and Mensuration",
            "url": "/maths/staar/grade-3/geometry-and-mensuration/",
            "blocks": [
              {
                "name": "Geometry and Mensuration Practice 1",
                "url": "/maths/staar/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 1",
                    "url": "/maths/staar/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry and Mensuration Practice 2",
                "url": "/maths/staar/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 2",
                    "url": "/maths/staar/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/staar/grade-3/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/staar/grade-3/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/staar/grade-3/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "TestPrep-G3-Measurement-Time-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/staar/grade-3/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/staar/grade-3/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/staar/grade-3/data-handling/data-handling-practice/",
                    "learnosityRef": "TestPrep-G3-Data-Handling-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Money and Financial Literacy",
            "url": "/maths/staar/grade-3/money-and-financial-literacy/",
            "blocks": [
              {
                "name": "Money and Financial Literacy Practice",
                "url": "/maths/staar/grade-3/money-and-financial-literacy/money-and-financial-literacy-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Money and Financial Literacy Practice",
                    "url": "/maths/staar/grade-3/money-and-financial-literacy/money-and-financial-literacy-practice/",
                    "learnosityRef": "TestPrep-G3-Money-Financial-Literacy-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/staar/grade-3/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/staar/grade-3/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/staar/grade-3/mock-test-1/mock-test-1/",
                    "learnosityRef": "STAAR-Math-G3-Practice-Mock-1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/staar/grade-3/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/staar/grade-3/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/staar/grade-3/mock-test-2/mock-test-2/",
                    "learnosityRef": "STAAR-Math-G3-Practice-Mock-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-4",
        "label": "Grade 4",
        "programCode": "STAAR.G4",
        "url": "/maths/staar/grade-4/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/staar/grade-4/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice 1",
                "url": "/maths/staar/grade-4/number-systems/number-systems-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 1",
                    "url": "/maths/staar/grade-4/number-systems/number-systems-practice-1/",
                    "learnosityRef": "G4-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Systems Practice 2",
                "url": "/maths/staar/grade-4/number-systems/number-systems-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 2",
                    "url": "/maths/staar/grade-4/number-systems/number-systems-practice-2/",
                    "learnosityRef": "G4-Practice-Number-Systems-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Operations on Numbers",
            "url": "/maths/staar/grade-4/operations-on-numbers/",
            "blocks": [
              {
                "name": "Operations on Numbers Practice 1",
                "url": "/maths/staar/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 1",
                    "url": "/maths/staar/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 2",
                "url": "/maths/staar/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 2",
                    "url": "/maths/staar/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 3",
                "url": "/maths/staar/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 3",
                    "url": "/maths/staar/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Operations",
            "url": "/maths/staar/grade-4/fractions-and-operations/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/staar/grade-4/fractions-and-operations/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/staar/grade-4/fractions-and-operations/fractions-practice-1/",
                    "learnosityRef": "G4-Practice-Fractions-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/staar/grade-4/fractions-and-operations/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/staar/grade-4/fractions-and-operations/fractions-practice-2/",
                    "learnosityRef": "G4-Practice-Fractions-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 3",
                "url": "/maths/staar/grade-4/fractions-and-operations/fractions-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 3",
                    "url": "/maths/staar/grade-4/fractions-and-operations/fractions-practice-3/",
                    "learnosityRef": "G4-Practice-Fractions-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimal Numbers",
            "url": "/maths/staar/grade-4/decimal-numbers/",
            "blocks": [
              {
                "name": "Decimals Practice",
                "url": "/maths/staar/grade-4/decimal-numbers/decimals-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals Practice",
                    "url": "/maths/staar/grade-4/decimal-numbers/decimals-practice/",
                    "learnosityRef": "G4-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/staar/grade-4/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/staar/grade-4/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/staar/grade-4/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "G4-Practice-Measurement-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry and Patterns",
            "url": "/maths/staar/grade-4/symmetry-and-patterns/",
            "blocks": [
              {
                "name": "Patterns Practice",
                "url": "/maths/staar/grade-4/symmetry-and-patterns/patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Patterns Practice",
                    "url": "/maths/staar/grade-4/symmetry-and-patterns/patterns-practice/",
                    "learnosityRef": "G4-Practice-Patterns-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Symmetry Practice",
                "url": "/maths/staar/grade-4/symmetry-and-patterns/symmetry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry Practice",
                    "url": "/maths/staar/grade-4/symmetry-and-patterns/symmetry-practice/",
                    "learnosityRef": "G4-Practice-Symmetry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/staar/grade-4/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/staar/grade-4/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/staar/grade-4/geometry/geometry-practice-1/",
                    "learnosityRef": "G4-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/staar/grade-4/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/staar/grade-4/geometry/geometry-practice-2/",
                    "learnosityRef": "G4-Practice-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/staar/grade-4/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/staar/grade-4/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/staar/grade-4/data-handling/data-handling-practice/",
                    "learnosityRef": "G4-Practice-Data-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Financial Literacy",
            "url": "/maths/staar/grade-4/financial-literacy/",
            "blocks": [
              {
                "name": "Financial Literacy Practice",
                "url": "/maths/staar/grade-4/financial-literacy/financial-literacy-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Financial Literacy Practice",
                    "url": "/maths/staar/grade-4/financial-literacy/financial-literacy-practice/",
                    "learnosityRef": "G4-Practice-FinLit-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/staar/grade-4/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/staar/grade-4/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/staar/grade-4/mock-test-1/mock-test-1/",
                    "learnosityRef": "STAAR-Math-G4-Practice-Mock-1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/staar/grade-4/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/staar/grade-4/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/staar/grade-4/mock-test-2/mock-test-2/",
                    "learnosityRef": "STAAR-Math-G4-Practice-Mock-2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-5",
        "label": "Grade 5",
        "programCode": "STAAR.G5",
        "url": "/maths/staar/grade-5/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/staar/grade-5/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice",
                "url": "/maths/staar/grade-5/number-systems/number-systems-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice",
                    "url": "/maths/staar/grade-5/number-systems/number-systems-practice/",
                    "learnosityRef": "G5-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Numbers and Operations",
            "url": "/maths/staar/grade-5/numbers-and-operations/",
            "blocks": [
              {
                "name": "Numbers and Operations Practice 1",
                "url": "/maths/staar/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 1",
                    "url": "/maths/staar/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numbers and Operations Practice 2",
                "url": "/maths/staar/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 2",
                    "url": "/maths/staar/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and their Addition and Subtraction",
            "url": "/maths/staar/grade-5/fractions-and-their-addition-and-subtraction/",
            "blocks": [
              {
                "name": "Fractions and their Addition and Subtraction Practice 1",
                "url": "/maths/staar/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 1",
                    "url": "/maths/staar/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and their Addition and Subtraction Practice 2",
                "url": "/maths/staar/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 2",
                    "url": "/maths/staar/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division of Fractions",
            "url": "/maths/staar/grade-5/multiplication-and-division-of-fractions/",
            "blocks": [
              {
                "name": "Multiplication and Division of Fractions Practice 1",
                "url": "/maths/staar/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 1",
                    "url": "/maths/staar/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division of Fractions Practice 2",
                "url": "/maths/staar/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 2",
                    "url": "/maths/staar/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimals and Operations",
            "url": "/maths/staar/grade-5/decimals-and-operations/",
            "blocks": [
              {
                "name": "Decimals and Operations Practice 1",
                "url": "/maths/staar/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 1",
                    "url": "/maths/staar/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Decimals and Operations Practice 2",
                "url": "/maths/staar/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 2",
                    "url": "/maths/staar/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Decimals-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/staar/grade-5/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice",
                "url": "/maths/staar/grade-5/geometry/geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice",
                    "url": "/maths/staar/grade-5/geometry/geometry-practice/",
                    "learnosityRef": "G5-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/staar/grade-5/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice 1",
                "url": "/maths/staar/grade-5/mensuration/mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 2D",
                    "url": "/maths/staar/grade-5/mensuration/mensuration-practice-1/",
                    "learnosityRef": "G5-Practice-Mensuration-2D-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Mensuration Practice 2",
                "url": "/maths/staar/grade-5/mensuration/mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 3D",
                    "url": "/maths/staar/grade-5/mensuration/mensuration-practice-2/",
                    "learnosityRef": "G5-Practice-Mensuration-3D-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/staar/grade-5/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/staar/grade-5/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/staar/grade-5/data-handling/data-handling-practice/",
                    "learnosityRef": "G5-Practice-Data-Handling-STAAR-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/staar/grade-5/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice 1",
                "url": "/maths/staar/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 1",
                    "url": "/maths/staar/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Coordinate Geometry Practice 2",
                "url": "/maths/staar/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 2",
                    "url": "/maths/staar/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/staar/grade-5/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/staar/grade-5/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/staar/grade-5/mock-test-1/mock-test-1/",
                    "learnosityRef": "STAAR-G5-Practice-Mock-01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/staar/grade-5/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/staar/grade-5/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/staar/grade-5/mock-test-2/mock-test-2/",
                    "learnosityRef": "STAAR-G5-Practice-Mock-02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-6",
        "label": "Grade 6",
        "programCode": "STAAR.G6",
        "url": "/maths/staar/grade-6/",
        "chapters": [
          {
            "name": "Numerical Expressions and Factors",
            "url": "/maths/staar/grade-6/numerical-expressions-and-factors/",
            "blocks": [
              {
                "name": "Numbers and Numerical Expressions Practice 1",
                "url": "/maths/staar/grade-6/numerical-expressions-and-factors/numbers-and-numerical-expressions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Numerical Expressions Practice 1",
                    "url": "/maths/staar/grade-6/numerical-expressions-and-factors/numbers-and-numerical-expressions-practice-1/",
                    "learnosityRef": "G6-Number-Operations-Practice-STAAR-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numbers and Numerical Expressions Practice 2",
                "url": "/maths/staar/grade-6/numerical-expressions-and-factors/numbers-and-numerical-expressions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Numerical Expressions Practice 2",
                    "url": "/maths/staar/grade-6/numerical-expressions-and-factors/numbers-and-numerical-expressions-practice-2/",
                    "learnosityRef": "G6-Number-Operations-Practice-STAAR-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/staar/grade-6/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals Practice 1",
                "url": "/maths/staar/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 1",
                    "url": "/maths/staar/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Decimals Practice 2",
                "url": "/maths/staar/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 2",
                    "url": "/maths/staar/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratio Proportion and Percentages",
            "url": "/maths/staar/grade-6/ratio-proportion-and-percentages/",
            "blocks": [
              {
                "name": "Ratio Proportion and Percentages Practice 1",
                "url": "/maths/staar/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 1",
                    "url": "/maths/staar/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratio Proportion and Percentages Practice 2",
                "url": "/maths/staar/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 2",
                    "url": "/maths/staar/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Expressions Equations and Inequalities",
            "url": "/maths/staar/grade-6/algebraic-expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                "url": "/maths/staar/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/staar/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G6-Algebra-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                "url": "/maths/staar/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/staar/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G6-Algebra-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration and Geometry",
            "url": "/maths/staar/grade-6/mensuration-and-geometry/",
            "blocks": [
              {
                "name": "Mensuration and Geometry Practice",
                "url": "/maths/staar/grade-6/mensuration-and-geometry/mensuration-and-geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration and Geometry Practice",
                    "url": "/maths/staar/grade-6/mensuration-and-geometry/mensuration-and-geometry-practice/",
                    "learnosityRef": "G6-Mensuration-Geo-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/staar/grade-6/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice",
                "url": "/maths/staar/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice",
                    "url": "/maths/staar/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                    "learnosityRef": "G6-Coordinate-Geometry-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/staar/grade-6/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice 1",
                "url": "/maths/staar/grade-6/data-handling/data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 1",
                    "url": "/maths/staar/grade-6/data-handling/data-handling-practice-1/",
                    "learnosityRef": "G6-Data-Handling-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Handling Practice 2",
                "url": "/maths/staar/grade-6/data-handling/data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 2",
                    "url": "/maths/staar/grade-6/data-handling/data-handling-practice-2/",
                    "learnosityRef": "G6-Data-Handling-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Financial Literacy",
            "url": "/maths/staar/grade-6/financial-literacy/",
            "blocks": [
              {
                "name": "Financial Literacy Practice",
                "url": "/maths/staar/grade-6/financial-literacy/financial-literacy-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Financial Literacy Practice",
                    "url": "/maths/staar/grade-6/financial-literacy/financial-literacy-practice/",
                    "learnosityRef": "G6-Financial-Literacy-STAAR-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/staar/grade-6/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/staar/grade-6/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/staar/grade-6/mock-test-1/mock-test-1/",
                    "learnosityRef": "STAAR-G6-Practice-Mock-01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/staar/grade-6/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/staar/grade-6/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/staar/grade-6/mock-test-2/mock-test-2/",
                    "learnosityRef": "STAAR-G6-Practice-Mock-02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-7",
        "label": "Grade 7",
        "programCode": "STAAR.G7",
        "url": "/maths/staar/grade-7/",
        "chapters": [
          {
            "name": "Rational Numbers",
            "url": "/maths/staar/grade-7/rational-numbers/",
            "blocks": [
              {
                "name": "Rational Numbers Practice 1",
                "url": "/maths/staar/grade-7/rational-numbers/rational-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 1",
                    "url": "/maths/staar/grade-7/rational-numbers/rational-numbers-practice-1/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Rational Numbers Practice 2",
                "url": "/maths/staar/grade-7/rational-numbers/rational-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 2",
                    "url": "/maths/staar/grade-7/rational-numbers/rational-numbers-practice-2/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratios Proportions and Percentages",
            "url": "/maths/staar/grade-7/ratios-proportions-and-percentages/",
            "blocks": [
              {
                "name": "Ratios Proportions and Percentages Practice 1",
                "url": "/maths/staar/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 1",
                    "url": "/maths/staar/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                    "learnosityRef": "G7-STAAR-Practice-Proportions-Percentages-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratios Proportions and Percentages Practice 2",
                "url": "/maths/staar/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 2",
                    "url": "/maths/staar/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                    "learnosityRef": "G7-STAAR-Practice-Proportions-Percentages-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Expressions Equations and Inequalities",
            "url": "/maths/staar/grade-7/expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Expressions Equations and Inequalities Practice 1",
                "url": "/maths/staar/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/staar/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G7-STAAR-EEI-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Expressions Equations and Inequalities Practice 2",
                "url": "/maths/staar/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/staar/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G7-STAAR-EEI-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry (Angles Circles similarity mensuration)",
            "url": "/maths/staar/grade-7/geometry-angles-circles-similarity-mensuration/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/staar/grade-7/geometry-angles-circles-similarity-mensuration/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/staar/grade-7/geometry-angles-circles-similarity-mensuration/geometry-practice-1/",
                    "learnosityRef": "G7-STAAR-GM-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/staar/grade-7/geometry-angles-circles-similarity-mensuration/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/staar/grade-7/geometry-angles-circles-similarity-mensuration/geometry-practice-2/",
                    "learnosityRef": "G7-STAAR-GM-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Probability and Data Handling",
            "url": "/maths/staar/grade-7/probability-and-data-handling/",
            "blocks": [
              {
                "name": "Probability and Data Handling Practice 1",
                "url": "/maths/staar/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 1",
                    "url": "/maths/staar/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                    "learnosityRef": "G7-STAAR-Practice-Probability-Statistics-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Probability and Data Handling Practice 2",
                "url": "/maths/staar/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 2",
                    "url": "/maths/staar/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                    "learnosityRef": "G7-STAAR-Practice-Probability-Statistics-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Financial Literacy",
            "url": "/maths/staar/grade-7/financial-literacy/",
            "blocks": [
              {
                "name": "Financial Literacy Practice",
                "url": "/maths/staar/grade-7/financial-literacy/financial-literacy-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Financial Literacy Practice",
                    "url": "/maths/staar/grade-7/financial-literacy/financial-literacy-practice/",
                    "learnosityRef": "G7-FL-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/staar/grade-7/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/staar/grade-7/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 1",
                    "url": "/maths/staar/grade-7/mock-test-1/mock-test-1/",
                    "learnosityRef": "STAAR-MATH-G7-Practice-Mock-01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/staar/grade-7/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/staar/grade-7/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Mock Test 2",
                    "url": "/maths/staar/grade-7/mock-test-2/mock-test-2/",
                    "learnosityRef": "STAAR-MATH-G7-Practice-Mock-02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "njsla": {
    "name": "NJSLA Curriculum",
    "aboutName": "NJSLA",
    "slug": "njsla",
    "examUrl": "/maths/njsla/",
    "hasBands": true,
    "bands": [
      {
        "slug": "grade-3",
        "label": "Grade 3",
        "programCode": "NJSLA.G3",
        "url": "/maths/njsla/grade-3/",
        "chapters": [
          {
            "name": "Place Value and Number Comparison",
            "url": "/maths/njsla/grade-3/place-value-and-number-comparison/",
            "blocks": [
              {
                "name": "Place Value and Number Comparison Practice 1",
                "url": "/maths/njsla/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 1",
                    "url": "/maths/njsla/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-1/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Place Value and Number Comparison Practice 2",
                "url": "/maths/njsla/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Place Value and Number Comparison Practice 2",
                    "url": "/maths/njsla/grade-3/place-value-and-number-comparison/place-value-and-number-comparison-practice-2/",
                    "learnosityRef": "TestPrep-G3-PVNC-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Addition and Subtraction",
            "url": "/maths/njsla/grade-3/addition-and-subtraction/",
            "blocks": [
              {
                "name": "Addition and Subtraction Practice 1",
                "url": "/maths/njsla/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 1",
                    "url": "/maths/njsla/grade-3/addition-and-subtraction/addition-and-subtraction-practice-1/",
                    "learnosityRef": "TestPrep-G3-AS-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Addition and Subtraction Practice 2",
                "url": "/maths/njsla/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Addition and Subtraction Practice 2",
                    "url": "/maths/njsla/grade-3/addition-and-subtraction/addition-and-subtraction-practice-2/",
                    "learnosityRef": "TestPrep-G3-Addition-Subtraction-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division",
            "url": "/maths/njsla/grade-3/multiplication-and-division/",
            "blocks": [
              {
                "name": "Multiplication and Division Practice 1",
                "url": "/maths/njsla/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 1",
                    "url": "/maths/njsla/grade-3/multiplication-and-division/multiplication-and-division-practice-1/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 2",
                "url": "/maths/njsla/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 2",
                    "url": "/maths/njsla/grade-3/multiplication-and-division/multiplication-and-division-practice-2/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division Practice 3",
                "url": "/maths/njsla/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division Practice 3",
                    "url": "/maths/njsla/grade-3/multiplication-and-division/multiplication-and-division-practice-3/",
                    "learnosityRef": "TestPrep-G3-Multiplication-Division-Practice-3",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions",
            "url": "/maths/njsla/grade-3/fractions/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/njsla/grade-3/fractions/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/njsla/grade-3/fractions/fractions-practice-1/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/njsla/grade-3/fractions/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/njsla/grade-3/fractions/fractions-practice-2/",
                    "learnosityRef": "TestPrep-G3-Fractions-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Patterns",
            "url": "/maths/njsla/grade-3/algebraic-patterns/",
            "blocks": [
              {
                "name": "Algebraic Patterns Practice",
                "url": "/maths/njsla/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Patterns Practice",
                    "url": "/maths/njsla/grade-3/algebraic-patterns/algebraic-patterns-practice/",
                    "learnosityRef": "TestPrep-G3-Algebraic-Patterns-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry and Mensuration",
            "url": "/maths/njsla/grade-3/geometry-and-mensuration/",
            "blocks": [
              {
                "name": "Geometry and Mensuration Practice 1",
                "url": "/maths/njsla/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 1",
                    "url": "/maths/njsla/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-1/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry and Mensuration Practice 2",
                "url": "/maths/njsla/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry and Mensuration Practice 2",
                    "url": "/maths/njsla/grade-3/geometry-and-mensuration/geometry-and-mensuration-practice-2/",
                    "learnosityRef": "TestPrep-G3-Geometry-Mensuration-Practice-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/njsla/grade-3/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/njsla/grade-3/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/njsla/grade-3/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "TestPrep-G3-Measurement-Time-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/njsla/grade-3/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/njsla/grade-3/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/njsla/grade-3/data-handling/data-handling-practice/",
                    "learnosityRef": "TestPrep-G3-Data-Handling-Practice-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/njsla/grade-3/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-3/mock-test-1/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-3/mock-test-1/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G3-Practice-Mock-1-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-3/mock-test-1/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G3-Practice-Mock-1-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-3/mock-test-1/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G3-Practice-Mock-1-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/njsla/grade-3/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-3/mock-test-2/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-3/mock-test-2/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G3-Practice-Mock-2-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-3/mock-test-2/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G3-Practice-Mock-2-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-3/mock-test-2/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G3-Practice-Mock-2-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-4",
        "label": "Grade 4",
        "programCode": "NJSLA.G4",
        "url": "/maths/njsla/grade-4/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/njsla/grade-4/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice 1",
                "url": "/maths/njsla/grade-4/number-systems/number-systems-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 1",
                    "url": "/maths/njsla/grade-4/number-systems/number-systems-practice-1/",
                    "learnosityRef": "G4-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Systems Practice 2",
                "url": "/maths/njsla/grade-4/number-systems/number-systems-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice 2",
                    "url": "/maths/njsla/grade-4/number-systems/number-systems-practice-2/",
                    "learnosityRef": "G4-Practice-Number-Systems-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Operations on Numbers",
            "url": "/maths/njsla/grade-4/operations-on-numbers/",
            "blocks": [
              {
                "name": "Operations on Numbers Practice 1",
                "url": "/maths/njsla/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 1",
                    "url": "/maths/njsla/grade-4/operations-on-numbers/operations-on-numbers-practice-1/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 2",
                "url": "/maths/njsla/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 2",
                    "url": "/maths/njsla/grade-4/operations-on-numbers/operations-on-numbers-practice-2/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Operations on Numbers Practice 3",
                "url": "/maths/njsla/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Operations on Numbers Practice 3",
                    "url": "/maths/njsla/grade-4/operations-on-numbers/operations-on-numbers-practice-3/",
                    "learnosityRef": "G4-Practice-Numbers-Operations-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Factors Multiples and Primes",
            "url": "/maths/njsla/grade-4/factors-multiples-and-primes/",
            "blocks": [
              {
                "name": "Factors Multiples Primes Practice",
                "url": "/maths/njsla/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Factors Multiples Primes Practice",
                    "url": "/maths/njsla/grade-4/factors-multiples-and-primes/factors-multiples-primes-practice/",
                    "learnosityRef": "G4-Practice-Factors-Multiples-Primes-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Operations",
            "url": "/maths/njsla/grade-4/fractions-and-operations/",
            "blocks": [
              {
                "name": "Fractions Practice 1",
                "url": "/maths/njsla/grade-4/fractions-and-operations/fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 1",
                    "url": "/maths/njsla/grade-4/fractions-and-operations/fractions-practice-1/",
                    "learnosityRef": "G4-Practice-Fractions-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 2",
                "url": "/maths/njsla/grade-4/fractions-and-operations/fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 2",
                    "url": "/maths/njsla/grade-4/fractions-and-operations/fractions-practice-2/",
                    "learnosityRef": "G4-Practice-Fractions-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions Practice 3",
                "url": "/maths/njsla/grade-4/fractions-and-operations/fractions-practice-3/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions Practice 3",
                    "url": "/maths/njsla/grade-4/fractions-and-operations/fractions-practice-3/",
                    "learnosityRef": "G4-Practice-Fractions-03",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimal Numbers",
            "url": "/maths/njsla/grade-4/decimal-numbers/",
            "blocks": [
              {
                "name": "Decimals Practice",
                "url": "/maths/njsla/grade-4/decimal-numbers/decimals-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals Practice",
                    "url": "/maths/njsla/grade-4/decimal-numbers/decimals-practice/",
                    "learnosityRef": "G4-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Measurement and Time",
            "url": "/maths/njsla/grade-4/measurement-and-time/",
            "blocks": [
              {
                "name": "Measurement and Time Practice",
                "url": "/maths/njsla/grade-4/measurement-and-time/measurement-and-time-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Measurement and Time Practice",
                    "url": "/maths/njsla/grade-4/measurement-and-time/measurement-and-time-practice/",
                    "learnosityRef": "G4-Practice-Measurement-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Symmetry and Patterns",
            "url": "/maths/njsla/grade-4/symmetry-and-patterns/",
            "blocks": [
              {
                "name": "Patterns Practice",
                "url": "/maths/njsla/grade-4/symmetry-and-patterns/patterns-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Patterns Practice",
                    "url": "/maths/njsla/grade-4/symmetry-and-patterns/patterns-practice/",
                    "learnosityRef": "G4-Practice-Patterns-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Symmetry Practice",
                "url": "/maths/njsla/grade-4/symmetry-and-patterns/symmetry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Symmetry Practice",
                    "url": "/maths/njsla/grade-4/symmetry-and-patterns/symmetry-practice/",
                    "learnosityRef": "G4-Practice-Symmetry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/njsla/grade-4/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/njsla/grade-4/geometry/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/njsla/grade-4/geometry/geometry-practice-1/",
                    "learnosityRef": "G4-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/njsla/grade-4/geometry/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/njsla/grade-4/geometry/geometry-practice-2/",
                    "learnosityRef": "G4-Practice-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/njsla/grade-4/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/njsla/grade-4/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/njsla/grade-4/data-handling/data-handling-practice/",
                    "learnosityRef": "G4-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/njsla/grade-4/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-4/mock-test-1/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-4/mock-test-1/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G4-Practice-Mock-1-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-4/mock-test-1/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G4-Practice-Mock-1-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-4/mock-test-1/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G4-Practice-Mock-1-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/njsla/grade-4/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-4/mock-test-2/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-4/mock-test-2/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G4-Practice-Mock-2-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-4/mock-test-2/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G4-Practice-Mock-2-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-4/mock-test-2/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G4-Practice-Mock-2-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-5",
        "label": "Grade 5",
        "programCode": "NJSLA.G5",
        "url": "/maths/njsla/grade-5/",
        "chapters": [
          {
            "name": "Number Systems",
            "url": "/maths/njsla/grade-5/number-systems/",
            "blocks": [
              {
                "name": "Number Systems Practice",
                "url": "/maths/njsla/grade-5/number-systems/number-systems-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Systems Practice",
                    "url": "/maths/njsla/grade-5/number-systems/number-systems-practice/",
                    "learnosityRef": "G5-Practice-Number-Systems-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Numbers and Operations",
            "url": "/maths/njsla/grade-5/numbers-and-operations/",
            "blocks": [
              {
                "name": "Numbers and Operations Practice 1",
                "url": "/maths/njsla/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 1",
                    "url": "/maths/njsla/grade-5/numbers-and-operations/numbers-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numbers and Operations Practice 2",
                "url": "/maths/njsla/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numbers and Operations Practice 2",
                    "url": "/maths/njsla/grade-5/numbers-and-operations/numbers-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Numbers-Operations-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and their Addition and Subtraction",
            "url": "/maths/njsla/grade-5/fractions-and-their-addition-and-subtraction/",
            "blocks": [
              {
                "name": "Fractions and their Addition and Subtraction Practice 1",
                "url": "/maths/njsla/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 1",
                    "url": "/maths/njsla/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and their Addition and Subtraction Practice 2",
                "url": "/maths/njsla/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and their Addition and Subtraction Practice 2",
                    "url": "/maths/njsla/grade-5/fractions-and-their-addition-and-subtraction/fractions-and-their-addition-and-subtraction-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Add-Sub-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Multiplication and Division of Fractions",
            "url": "/maths/njsla/grade-5/multiplication-and-division-of-fractions/",
            "blocks": [
              {
                "name": "Multiplication and Division of Fractions Practice 1",
                "url": "/maths/njsla/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 1",
                    "url": "/maths/njsla/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-1/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Multiplication and Division of Fractions Practice 2",
                "url": "/maths/njsla/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Multiplication and Division of Fractions Practice 2",
                    "url": "/maths/njsla/grade-5/multiplication-and-division-of-fractions/multiplication-and-division-of-fractions-practice-2/",
                    "learnosityRef": "G5-Practice-Frac-Mul-Div-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Decimals and Operations",
            "url": "/maths/njsla/grade-5/decimals-and-operations/",
            "blocks": [
              {
                "name": "Decimals and Operations Practice 1",
                "url": "/maths/njsla/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 1",
                    "url": "/maths/njsla/grade-5/decimals-and-operations/decimals-and-operations-practice-1/",
                    "learnosityRef": "G5-Practice-Decimals-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Decimals and Operations Practice 2",
                "url": "/maths/njsla/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Decimals and Operations Practice 2",
                    "url": "/maths/njsla/grade-5/decimals-and-operations/decimals-and-operations-practice-2/",
                    "learnosityRef": "G5-Practice-Decimals-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry",
            "url": "/maths/njsla/grade-5/geometry/",
            "blocks": [
              {
                "name": "Geometry Practice",
                "url": "/maths/njsla/grade-5/geometry/geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice",
                    "url": "/maths/njsla/grade-5/geometry/geometry-practice/",
                    "learnosityRef": "G5-Practice-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/njsla/grade-5/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice 1",
                "url": "/maths/njsla/grade-5/mensuration/mensuration-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 2D",
                    "url": "/maths/njsla/grade-5/mensuration/mensuration-practice-1/",
                    "learnosityRef": "G5-Practice-Mensuration-2D-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Mensuration Practice 2",
                "url": "/maths/njsla/grade-5/mensuration/mensuration-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice 3D",
                    "url": "/maths/njsla/grade-5/mensuration/mensuration-practice-2/",
                    "learnosityRef": "G5-Practice-Mensuration-3D-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/njsla/grade-5/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice",
                "url": "/maths/njsla/grade-5/data-handling/data-handling-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice",
                    "url": "/maths/njsla/grade-5/data-handling/data-handling-practice/",
                    "learnosityRef": "G5-Practice-Data-Handling-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/njsla/grade-5/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice 1",
                "url": "/maths/njsla/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 1",
                    "url": "/maths/njsla/grade-5/coordinate-geometry/coordinate-geometry-practice-1/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Coordinate Geometry Practice 2",
                "url": "/maths/njsla/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice 2",
                    "url": "/maths/njsla/grade-5/coordinate-geometry/coordinate-geometry-practice-2/",
                    "learnosityRef": "G5-Practice-Coordinate-Geometry-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/njsla/grade-5/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-5/mock-test-1/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-5/mock-test-1/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G5-Practice-Mock-1-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-5/mock-test-1/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G5-Practice-Mock-1-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-5/mock-test-1/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G5-Practice-Mock-1-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/njsla/grade-5/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-5/mock-test-2/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-5/mock-test-2/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G5-Practice-Mock-2-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-5/mock-test-2/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G5-Practice-Mock-2-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-5/mock-test-2/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G5-Practice-Mock-2-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-6",
        "label": "Grade 6",
        "programCode": "NJSLA.G6",
        "url": "/maths/njsla/grade-6/",
        "chapters": [
          {
            "name": "Numerical Expressions and Factors",
            "url": "/maths/njsla/grade-6/numerical-expressions-and-factors/",
            "blocks": [
              {
                "name": "Numerical Expressions and Factors Practice 1",
                "url": "/maths/njsla/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 1",
                    "url": "/maths/njsla/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-1/",
                    "learnosityRef": "G6-Number-Operations-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Numerical Expressions and Factors Practice 2",
                "url": "/maths/njsla/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Numerical Expressions and Factors Practice 2",
                    "url": "/maths/njsla/grade-6/numerical-expressions-and-factors/numerical-expressions-and-factors-practice-2/",
                    "learnosityRef": "G6-Number-Operations-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Fractions and Decimals",
            "url": "/maths/njsla/grade-6/fractions-and-decimals/",
            "blocks": [
              {
                "name": "Fractions and Decimals Practice 1",
                "url": "/maths/njsla/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 1",
                    "url": "/maths/njsla/grade-6/fractions-and-decimals/fractions-and-decimals-practice-1/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Fractions and Decimals Practice 2",
                "url": "/maths/njsla/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Fractions and Decimals Practice 2",
                    "url": "/maths/njsla/grade-6/fractions-and-decimals/fractions-and-decimals-practice-2/",
                    "learnosityRef": "G6-Fractions-Decimals-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratio Proportion and Percentages",
            "url": "/maths/njsla/grade-6/ratio-proportion-and-percentages/",
            "blocks": [
              {
                "name": "Ratio Proportion and Percentages Practice 1",
                "url": "/maths/njsla/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 1",
                    "url": "/maths/njsla/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-1/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratio Proportion and Percentages Practice 2",
                "url": "/maths/njsla/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratio Proportion and Percentages Practice 2",
                    "url": "/maths/njsla/grade-6/ratio-proportion-and-percentages/ratio-proportion-and-percentages-practice-2/",
                    "learnosityRef": "G6-Ratio-Proportion-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebraic Expressions Equations and Inequalities",
            "url": "/maths/njsla/grade-6/algebraic-expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                "url": "/maths/njsla/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/njsla/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G6-Algebra-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                "url": "/maths/njsla/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Algebraic Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/njsla/grade-6/algebraic-expressions-equations-and-inequalities/algebraic-expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G6-Algebra-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mensuration",
            "url": "/maths/njsla/grade-6/mensuration/",
            "blocks": [
              {
                "name": "Mensuration Practice",
                "url": "/maths/njsla/grade-6/mensuration/mensuration-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Mensuration Practice",
                    "url": "/maths/njsla/grade-6/mensuration/mensuration-practice/",
                    "learnosityRef": "G6-Mensuration-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Coordinate Geometry",
            "url": "/maths/njsla/grade-6/coordinate-geometry/",
            "blocks": [
              {
                "name": "Coordinate Geometry Practice",
                "url": "/maths/njsla/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Coordinate Geometry Practice",
                    "url": "/maths/njsla/grade-6/coordinate-geometry/coordinate-geometry-practice/",
                    "learnosityRef": "G6-Coordinate-Geometry-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Data Handling",
            "url": "/maths/njsla/grade-6/data-handling/",
            "blocks": [
              {
                "name": "Data Handling Practice 1",
                "url": "/maths/njsla/grade-6/data-handling/data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 1",
                    "url": "/maths/njsla/grade-6/data-handling/data-handling-practice-1/",
                    "learnosityRef": "G6-Data-Handling-Practice-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Data Handling Practice 2",
                "url": "/maths/njsla/grade-6/data-handling/data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Data Handling Practice 2",
                    "url": "/maths/njsla/grade-6/data-handling/data-handling-practice-2/",
                    "learnosityRef": "G6-Data-Handling-Practice-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/njsla/grade-6/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-6/mock-test-1/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-6/mock-test-1/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G6-Practice-Mock-1-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-6/mock-test-1/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G6-Practice-Mock-1-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-6/mock-test-1/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G6-Practice-Mock-1-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/njsla/grade-6/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-6/mock-test-2/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-6/mock-test-2/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G6-Practice-Mock-2-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-6/mock-test-2/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G6-Practice-Mock-2-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-6/mock-test-2/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G6-Practice-Mock-2-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-7",
        "label": "Grade 7",
        "programCode": "NJSLA.G7",
        "url": "/maths/njsla/grade-7/",
        "chapters": [
          {
            "name": "Rational Numbers",
            "url": "/maths/njsla/grade-7/rational-numbers/",
            "blocks": [
              {
                "name": "Rational Numbers Practice 1",
                "url": "/maths/njsla/grade-7/rational-numbers/rational-numbers-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 1",
                    "url": "/maths/njsla/grade-7/rational-numbers/rational-numbers-practice-1/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Rational Numbers Practice 2",
                "url": "/maths/njsla/grade-7/rational-numbers/rational-numbers-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rational Numbers Practice 2",
                    "url": "/maths/njsla/grade-7/rational-numbers/rational-numbers-practice-2/",
                    "learnosityRef": "G7-Practice-Rational-Numbers-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Ratios Proportions and Percentages",
            "url": "/maths/njsla/grade-7/ratios-proportions-and-percentages/",
            "blocks": [
              {
                "name": "Ratios Proportions and Percentages Practice 1",
                "url": "/maths/njsla/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 1",
                    "url": "/maths/njsla/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-1/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Ratios Proportions and Percentages Practice 2",
                "url": "/maths/njsla/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Ratios Proportions and Percentages Practice 2",
                    "url": "/maths/njsla/grade-7/ratios-proportions-and-percentages/ratios-proportions-and-percentages-practice-2/",
                    "learnosityRef": "G7-Practice-Proportions-Percentages-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Expressions Equations and Inequalities",
            "url": "/maths/njsla/grade-7/expressions-equations-and-inequalities/",
            "blocks": [
              {
                "name": "Expressions Equations and Inequalities Practice 1",
                "url": "/maths/njsla/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 1",
                    "url": "/maths/njsla/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-1/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Expressions Equations and Inequalities Practice 2",
                "url": "/maths/njsla/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Expressions Equations and Inequalities Practice 2",
                    "url": "/maths/njsla/grade-7/expressions-equations-and-inequalities/expressions-equations-and-inequalities-practice-2/",
                    "learnosityRef": "G7-EEI-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry (Angles Circles slicing solids mensuration)",
            "url": "/maths/njsla/grade-7/geometry-angles-circles-slicing-solids-mensuration/",
            "blocks": [
              {
                "name": "Geometry Practice 1",
                "url": "/maths/njsla/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 1",
                    "url": "/maths/njsla/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-1/",
                    "learnosityRef": "G7-GM-Practice-Sheet-1",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Geometry Practice 2",
                "url": "/maths/njsla/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Geometry Practice 2",
                    "url": "/maths/njsla/grade-7/geometry-angles-circles-slicing-solids-mensuration/geometry-practice-2/",
                    "learnosityRef": "G7-GM-Practice-Sheet-2",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Probability and Data Handling",
            "url": "/maths/njsla/grade-7/probability-and-data-handling/",
            "blocks": [
              {
                "name": "Probability and Data Handling Practice 1",
                "url": "/maths/njsla/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 1",
                    "url": "/maths/njsla/grade-7/probability-and-data-handling/probability-and-data-handling-practice-1/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Probability and Data Handling Practice 2",
                "url": "/maths/njsla/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability and Data Handling Practice 2",
                    "url": "/maths/njsla/grade-7/probability-and-data-handling/probability-and-data-handling-practice-2/",
                    "learnosityRef": "G7-Practice-Probability-Statistics-02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/njsla/grade-7/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-7/mock-test-1/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-7/mock-test-1/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G7-Practice-Mock-1-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-7/mock-test-1/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G7-Practice-Mock-1-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-7/mock-test-1/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G7-Practice-Mock-1-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/njsla/grade-7/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test",
                "url": "/maths/njsla/grade-7/mock-test-2/mock-test/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Unit 1",
                    "url": "/maths/njsla/grade-7/mock-test-2/mock-test/unit-1/",
                    "learnosityRef": "NJSLA-G7-Practice-Mock-2-i",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 2",
                    "url": "/maths/njsla/grade-7/mock-test-2/mock-test/unit-2/",
                    "learnosityRef": "NJSLA-G7-Practice-Mock-2-ii",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Unit 3",
                    "url": "/maths/njsla/grade-7/mock-test-2/mock-test/unit-3/",
                    "learnosityRef": "NJSLA-G7-Practice-Mock-2-iii",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "cogat": {
    "name": "CogAT Curriculum",
    "aboutName": "CogAT",
    "slug": "cogat",
    "examUrl": "/maths/cogat/",
    "hasBands": true,
    "bands": [
      {
        "slug": "grade-1",
        "label": "Grade 1",
        "programCode": "CogAT.G1",
        "url": "/maths/cogat/grade-1/",
        "chapters": [
          {
            "name": "Number Analogies",
            "url": "/maths/cogat/grade-1/number-analogies/",
            "blocks": [
              {
                "name": "Number Analogies Practice 1",
                "url": "/maths/cogat/grade-1/number-analogies/number-analogies-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 1",
                    "url": "/maths/cogat/grade-1/number-analogies/number-analogies-practice-1/",
                    "learnosityRef": "CogAT G1-2 QR NA Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Analogies Practice 2",
                "url": "/maths/cogat/grade-1/number-analogies/number-analogies-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 2",
                    "url": "/maths/cogat/grade-1/number-analogies/number-analogies-practice-2/",
                    "learnosityRef": "CogAT G1-2 QR NA Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Puzzles",
            "url": "/maths/cogat/grade-1/number-puzzles/",
            "blocks": [
              {
                "name": "Number Puzzles Practice 1",
                "url": "/maths/cogat/grade-1/number-puzzles/number-puzzles-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 1",
                    "url": "/maths/cogat/grade-1/number-puzzles/number-puzzles-practice-1/",
                    "learnosityRef": "CogAT G1-2 QR NP Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Puzzles Practice 2",
                "url": "/maths/cogat/grade-1/number-puzzles/number-puzzles-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 2",
                    "url": "/maths/cogat/grade-1/number-puzzles/number-puzzles-practice-2/",
                    "learnosityRef": "CogAT G1-2 QR NP Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Series",
            "url": "/maths/cogat/grade-1/number-series/",
            "blocks": [
              {
                "name": "Number Series Practice 1",
                "url": "/maths/cogat/grade-1/number-series/number-series-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 1",
                    "url": "/maths/cogat/grade-1/number-series/number-series-practice-1/",
                    "learnosityRef": "CogAT G1-2 QR NS Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Series Practice 2",
                "url": "/maths/cogat/grade-1/number-series/number-series-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 2",
                    "url": "/maths/cogat/grade-1/number-series/number-series-practice-2/",
                    "learnosityRef": "CogAT G1-2 QR NS Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Matrices",
            "url": "/maths/cogat/grade-1/figure-matrices/",
            "blocks": [
              {
                "name": "Figure Matrices Practice 1",
                "url": "/maths/cogat/grade-1/figure-matrices/figure-matrices-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 1",
                    "url": "/maths/cogat/grade-1/figure-matrices/figure-matrices-practice-1/",
                    "learnosityRef": "TestPrep G1-2 CogAT FM Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Matrices Practice 2",
                "url": "/maths/cogat/grade-1/figure-matrices/figure-matrices-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 2",
                    "url": "/maths/cogat/grade-1/figure-matrices/figure-matrices-practice-2/",
                    "learnosityRef": "TestPrep G1-2 CogAT FM Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Classification",
            "url": "/maths/cogat/grade-1/figure-classification/",
            "blocks": [
              {
                "name": "Figure Classification Practice 1",
                "url": "/maths/cogat/grade-1/figure-classification/figure-classification-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 1",
                    "url": "/maths/cogat/grade-1/figure-classification/figure-classification-practice-1/",
                    "learnosityRef": "TestPrep G1-2 CogAT FC Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Classification Practice 2",
                "url": "/maths/cogat/grade-1/figure-classification/figure-classification-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 2",
                    "url": "/maths/cogat/grade-1/figure-classification/figure-classification-practice-2/",
                    "learnosityRef": "TestPrep G1-2 CogAT FC Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Paper Folding",
            "url": "/maths/cogat/grade-1/paper-folding/",
            "blocks": [
              {
                "name": "Paper Folding Practice 1",
                "url": "/maths/cogat/grade-1/paper-folding/paper-folding-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 1",
                    "url": "/maths/cogat/grade-1/paper-folding/paper-folding-practice-1/",
                    "learnosityRef": "TestPrep G1-2 CogAT PF Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Paper Folding Practice 2",
                "url": "/maths/cogat/grade-1/paper-folding/paper-folding-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 2",
                    "url": "/maths/cogat/grade-1/paper-folding/paper-folding-practice-2/",
                    "learnosityRef": "TestPrep G1-2 CogAT PF Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/cogat/grade-1/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/cogat/grade-1/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-1/mock-test-1/mock-test-1/number-analogies/",
                    "learnosityRef": "CogAT G1-2 QR NA Practice Test 1 A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-1/mock-test-1/mock-test-1/number-puzzles/",
                    "learnosityRef": "CogAT G1-2 QR NP Practice Test 1 A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-1/mock-test-1/mock-test-1/number-series/",
                    "learnosityRef": "CogAT G1-2 QR NS Practice Test 1 A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-1/mock-test-1/mock-test-1/figure-matrices/",
                    "learnosityRef": "TestPrep G1-2 CogAT FM Practice A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-1/mock-test-1/mock-test-1/figure-classification/",
                    "learnosityRef": "TestPrep G1-2 CogAT FC Practice A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-1/mock-test-1/mock-test-1/paper-folding/",
                    "learnosityRef": "TestPrep G1-2 CogAT PF Practice A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/cogat/grade-1/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/cogat/grade-1/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-1/mock-test-2/mock-test-2/number-analogies/",
                    "learnosityRef": "CogAT G1-2 QR NA Practice Test 2 A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-1/mock-test-2/mock-test-2/number-puzzles/",
                    "learnosityRef": "CogAT G1-2 QR NP Practice Test 2 A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-1/mock-test-2/mock-test-2/number-series/",
                    "learnosityRef": "CogAT G1-2 QR NS Practice Test 2 A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-1/mock-test-2/mock-test-2/figure-matrices/",
                    "learnosityRef": "TestPrep G1-2 CogAT FM Practice A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-1/mock-test-2/mock-test-2/figure-classification/",
                    "learnosityRef": "TestPrep G1-2 CogAT FC Practice A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-1/mock-test-2/mock-test-2/paper-folding/",
                    "learnosityRef": "TestPrep G1-2 CogAT PF Practice A02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-2",
        "label": "Grade 2",
        "programCode": "CogAT.G2",
        "url": "/maths/cogat/grade-2/",
        "chapters": [
          {
            "name": "Number Analogies",
            "url": "/maths/cogat/grade-2/number-analogies/",
            "blocks": [
              {
                "name": "Number Analogies Practice 1",
                "url": "/maths/cogat/grade-2/number-analogies/number-analogies-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 1",
                    "url": "/maths/cogat/grade-2/number-analogies/number-analogies-practice-1/",
                    "learnosityRef": "CogAT G1-2 QR NA Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Analogies Practice 2",
                "url": "/maths/cogat/grade-2/number-analogies/number-analogies-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 2",
                    "url": "/maths/cogat/grade-2/number-analogies/number-analogies-practice-2/",
                    "learnosityRef": "CogAT G1-2 QR NA Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Puzzles",
            "url": "/maths/cogat/grade-2/number-puzzles/",
            "blocks": [
              {
                "name": "Number Puzzles Practice 1",
                "url": "/maths/cogat/grade-2/number-puzzles/number-puzzles-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 1",
                    "url": "/maths/cogat/grade-2/number-puzzles/number-puzzles-practice-1/",
                    "learnosityRef": "CogAT G1-2 QR NP Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Puzzles Practice 2",
                "url": "/maths/cogat/grade-2/number-puzzles/number-puzzles-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 2",
                    "url": "/maths/cogat/grade-2/number-puzzles/number-puzzles-practice-2/",
                    "learnosityRef": "CogAT G1-2 QR NP Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Series",
            "url": "/maths/cogat/grade-2/number-series/",
            "blocks": [
              {
                "name": "Number Series Practice 1",
                "url": "/maths/cogat/grade-2/number-series/number-series-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 1",
                    "url": "/maths/cogat/grade-2/number-series/number-series-practice-1/",
                    "learnosityRef": "CogAT G1-2 QR NS Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Series Practice 2",
                "url": "/maths/cogat/grade-2/number-series/number-series-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 2",
                    "url": "/maths/cogat/grade-2/number-series/number-series-practice-2/",
                    "learnosityRef": "CogAT G1-2 QR NS Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Matrices",
            "url": "/maths/cogat/grade-2/figure-matrices/",
            "blocks": [
              {
                "name": "Figure Matrices Practice 1",
                "url": "/maths/cogat/grade-2/figure-matrices/figure-matrices-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 1",
                    "url": "/maths/cogat/grade-2/figure-matrices/figure-matrices-practice-1/",
                    "learnosityRef": "TestPrep G1-2 CogAT FM Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Matrices Practice 2",
                "url": "/maths/cogat/grade-2/figure-matrices/figure-matrices-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 2",
                    "url": "/maths/cogat/grade-2/figure-matrices/figure-matrices-practice-2/",
                    "learnosityRef": "TestPrep G1-2 CogAT FM Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Classification",
            "url": "/maths/cogat/grade-2/figure-classification/",
            "blocks": [
              {
                "name": "Figure Classification Practice 1",
                "url": "/maths/cogat/grade-2/figure-classification/figure-classification-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 1",
                    "url": "/maths/cogat/grade-2/figure-classification/figure-classification-practice-1/",
                    "learnosityRef": "TestPrep G1-2 CogAT FC Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Classification Practice 2",
                "url": "/maths/cogat/grade-2/figure-classification/figure-classification-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 2",
                    "url": "/maths/cogat/grade-2/figure-classification/figure-classification-practice-2/",
                    "learnosityRef": "TestPrep G1-2 CogAT FC Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Paper Folding",
            "url": "/maths/cogat/grade-2/paper-folding/",
            "blocks": [
              {
                "name": "Paper Folding Practice 1",
                "url": "/maths/cogat/grade-2/paper-folding/paper-folding-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 1",
                    "url": "/maths/cogat/grade-2/paper-folding/paper-folding-practice-1/",
                    "learnosityRef": "TestPrep G1-2 CogAT PF Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Paper Folding Practice 2",
                "url": "/maths/cogat/grade-2/paper-folding/paper-folding-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 2",
                    "url": "/maths/cogat/grade-2/paper-folding/paper-folding-practice-2/",
                    "learnosityRef": "TestPrep G1-2 CogAT PF Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/cogat/grade-2/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/cogat/grade-2/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-2/mock-test-1/mock-test-1/number-analogies/",
                    "learnosityRef": "CogAT G1-2 QR NA Practice Test 1 A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-2/mock-test-1/mock-test-1/number-puzzles/",
                    "learnosityRef": "CogAT G1-2 QR NP Practice Test 1 A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-2/mock-test-1/mock-test-1/number-series/",
                    "learnosityRef": "CogAT G1-2 QR NS Practice Test 1 A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-2/mock-test-1/mock-test-1/figure-matrices/",
                    "learnosityRef": "TestPrep G1-2 CogAT FM Practice A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-2/mock-test-1/mock-test-1/figure-classification/",
                    "learnosityRef": "TestPrep G1-2 CogAT FC Practice A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-2/mock-test-1/mock-test-1/paper-folding/",
                    "learnosityRef": "TestPrep G1-2 CogAT PF Practice A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/cogat/grade-2/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/cogat/grade-2/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-2/mock-test-2/mock-test-2/number-analogies/",
                    "learnosityRef": "CogAT G1-2 QR NA Practice Test 2 A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-2/mock-test-2/mock-test-2/number-puzzles/",
                    "learnosityRef": "CogAT G1-2 QR NP Practice Test 2 A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-2/mock-test-2/mock-test-2/number-series/",
                    "learnosityRef": "CogAT G1-2 QR NS Practice Test 2 A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-2/mock-test-2/mock-test-2/figure-matrices/",
                    "learnosityRef": "TestPrep G1-2 CogAT FM Practice A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-2/mock-test-2/mock-test-2/figure-classification/",
                    "learnosityRef": "TestPrep G1-2 CogAT FC Practice A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-2/mock-test-2/mock-test-2/paper-folding/",
                    "learnosityRef": "TestPrep G1-2 CogAT PF Practice A02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-3",
        "label": "Grade 3",
        "programCode": "CogAT.G3",
        "url": "/maths/cogat/grade-3/",
        "chapters": [
          {
            "name": "Number Analogies",
            "url": "/maths/cogat/grade-3/number-analogies/",
            "blocks": [
              {
                "name": "Number Analogies Practice 1",
                "url": "/maths/cogat/grade-3/number-analogies/number-analogies-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 1",
                    "url": "/maths/cogat/grade-3/number-analogies/number-analogies-practice-1/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NA Practice 01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Analogies Practice 2",
                "url": "/maths/cogat/grade-3/number-analogies/number-analogies-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 2",
                    "url": "/maths/cogat/grade-3/number-analogies/number-analogies-practice-2/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NA Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Puzzles",
            "url": "/maths/cogat/grade-3/number-puzzles/",
            "blocks": [
              {
                "name": "Number Puzzles Practice 1",
                "url": "/maths/cogat/grade-3/number-puzzles/number-puzzles-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 1",
                    "url": "/maths/cogat/grade-3/number-puzzles/number-puzzles-practice-1/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NP Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Puzzles Practice 2",
                "url": "/maths/cogat/grade-3/number-puzzles/number-puzzles-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 2",
                    "url": "/maths/cogat/grade-3/number-puzzles/number-puzzles-practice-2/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NP Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Series",
            "url": "/maths/cogat/grade-3/number-series/",
            "blocks": [
              {
                "name": "Number Series Practice 1",
                "url": "/maths/cogat/grade-3/number-series/number-series-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 1",
                    "url": "/maths/cogat/grade-3/number-series/number-series-practice-1/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NS Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Series Practice 2",
                "url": "/maths/cogat/grade-3/number-series/number-series-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 2",
                    "url": "/maths/cogat/grade-3/number-series/number-series-practice-2/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NS Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Matrices",
            "url": "/maths/cogat/grade-3/figure-matrices/",
            "blocks": [
              {
                "name": "Figure Matrices Practice 1",
                "url": "/maths/cogat/grade-3/figure-matrices/figure-matrices-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 1",
                    "url": "/maths/cogat/grade-3/figure-matrices/figure-matrices-practice-1/",
                    "learnosityRef": "TestPrep G3-4 CogAT FM Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Matrices Practice 2",
                "url": "/maths/cogat/grade-3/figure-matrices/figure-matrices-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 2",
                    "url": "/maths/cogat/grade-3/figure-matrices/figure-matrices-practice-2/",
                    "learnosityRef": "TestPrep G3-4 CogAT FM Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Classification",
            "url": "/maths/cogat/grade-3/figure-classification/",
            "blocks": [
              {
                "name": "Figure Classification Practice 1",
                "url": "/maths/cogat/grade-3/figure-classification/figure-classification-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 1",
                    "url": "/maths/cogat/grade-3/figure-classification/figure-classification-practice-1/",
                    "learnosityRef": "TestPrep G3-4 CogAT FC Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Classification Practice 2",
                "url": "/maths/cogat/grade-3/figure-classification/figure-classification-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 2",
                    "url": "/maths/cogat/grade-3/figure-classification/figure-classification-practice-2/",
                    "learnosityRef": "TestPrep G3-4 CogAT FC Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Paper Folding",
            "url": "/maths/cogat/grade-3/paper-folding/",
            "blocks": [
              {
                "name": "Paper Folding Practice 1",
                "url": "/maths/cogat/grade-3/paper-folding/paper-folding-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 1",
                    "url": "/maths/cogat/grade-3/paper-folding/paper-folding-practice-1/",
                    "learnosityRef": "TestPrep G3-4 CogAT PF Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Paper Folding Practice 2",
                "url": "/maths/cogat/grade-3/paper-folding/paper-folding-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 2",
                    "url": "/maths/cogat/grade-3/paper-folding/paper-folding-practice-2/",
                    "learnosityRef": "TestPrep G3-4 CogAT PF Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/cogat/grade-3/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/cogat/grade-3/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-3/mock-test-1/mock-test-1/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L9-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-3/mock-test-1/mock-test-1/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L9-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-3/mock-test-1/mock-test-1/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L9-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-3/mock-test-1/mock-test-1/figure-matrices/",
                    "learnosityRef": "TestPrep Cogat G3-4 FM Mock Test A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-3/mock-test-1/mock-test-1/figure-classification/",
                    "learnosityRef": "TestPrep CogAT G3-4 NVR FC Practice Test 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-3/mock-test-1/mock-test-1/paper-folding/",
                    "learnosityRef": "TestPrep Cogat G3-4 PF Mock Test A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/cogat/grade-3/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/cogat/grade-3/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-3/mock-test-2/mock-test-2/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L9-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-3/mock-test-2/mock-test-2/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L9-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-3/mock-test-2/mock-test-2/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L9-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-3/mock-test-2/mock-test-2/figure-matrices/",
                    "learnosityRef": "TestPrep Cogat G3-4 FM Mock Test A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-3/mock-test-2/mock-test-2/figure-classification/",
                    "learnosityRef": "TestPrep CogAT G3-4 NVR FC Practice Test 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-3/mock-test-2/mock-test-2/paper-folding/",
                    "learnosityRef": "TestPrep Cogat G3-4 PF Mock Test A02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-4",
        "label": "Grade 4",
        "programCode": "CogAT.G4",
        "url": "/maths/cogat/grade-4/",
        "chapters": [
          {
            "name": "Number Analogies",
            "url": "/maths/cogat/grade-4/number-analogies/",
            "blocks": [
              {
                "name": "Number Analogies Practice 1",
                "url": "/maths/cogat/grade-4/number-analogies/number-analogies-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 1",
                    "url": "/maths/cogat/grade-4/number-analogies/number-analogies-practice-1/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NA Practice 01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Analogies Practice 2",
                "url": "/maths/cogat/grade-4/number-analogies/number-analogies-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 2",
                    "url": "/maths/cogat/grade-4/number-analogies/number-analogies-practice-2/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NA Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Puzzles",
            "url": "/maths/cogat/grade-4/number-puzzles/",
            "blocks": [
              {
                "name": "Number Puzzles Practice 1",
                "url": "/maths/cogat/grade-4/number-puzzles/number-puzzles-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 1",
                    "url": "/maths/cogat/grade-4/number-puzzles/number-puzzles-practice-1/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NP Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Puzzles Practice 2",
                "url": "/maths/cogat/grade-4/number-puzzles/number-puzzles-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 2",
                    "url": "/maths/cogat/grade-4/number-puzzles/number-puzzles-practice-2/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NP Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Series",
            "url": "/maths/cogat/grade-4/number-series/",
            "blocks": [
              {
                "name": "Number Series Practice 1",
                "url": "/maths/cogat/grade-4/number-series/number-series-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 1",
                    "url": "/maths/cogat/grade-4/number-series/number-series-practice-1/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NS Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Series Practice 2",
                "url": "/maths/cogat/grade-4/number-series/number-series-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 2",
                    "url": "/maths/cogat/grade-4/number-series/number-series-practice-2/",
                    "learnosityRef": "TestPrep CogAT G3-4 QR NS Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Matrices",
            "url": "/maths/cogat/grade-4/figure-matrices/",
            "blocks": [
              {
                "name": "Figure Matrices Practice 1",
                "url": "/maths/cogat/grade-4/figure-matrices/figure-matrices-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 1",
                    "url": "/maths/cogat/grade-4/figure-matrices/figure-matrices-practice-1/",
                    "learnosityRef": "TestPrep G3-4 CogAT FM Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Matrices Practice 2",
                "url": "/maths/cogat/grade-4/figure-matrices/figure-matrices-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 2",
                    "url": "/maths/cogat/grade-4/figure-matrices/figure-matrices-practice-2/",
                    "learnosityRef": "TestPrep G3-4 CogAT FM Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Classification",
            "url": "/maths/cogat/grade-4/figure-classification/",
            "blocks": [
              {
                "name": "Figure Classification Practice 1",
                "url": "/maths/cogat/grade-4/figure-classification/figure-classification-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 1",
                    "url": "/maths/cogat/grade-4/figure-classification/figure-classification-practice-1/",
                    "learnosityRef": "TestPrep G3-4 CogAT FC Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Classification Practice 2",
                "url": "/maths/cogat/grade-4/figure-classification/figure-classification-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 2",
                    "url": "/maths/cogat/grade-4/figure-classification/figure-classification-practice-2/",
                    "learnosityRef": "TestPrep G3-4 CogAT FC Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Paper Folding",
            "url": "/maths/cogat/grade-4/paper-folding/",
            "blocks": [
              {
                "name": "Paper Folding Practice 1",
                "url": "/maths/cogat/grade-4/paper-folding/paper-folding-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 1",
                    "url": "/maths/cogat/grade-4/paper-folding/paper-folding-practice-1/",
                    "learnosityRef": "TestPrep G3-4 CogAT PF Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Paper Folding Practice 2",
                "url": "/maths/cogat/grade-4/paper-folding/paper-folding-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 2",
                    "url": "/maths/cogat/grade-4/paper-folding/paper-folding-practice-2/",
                    "learnosityRef": "TestPrep G3-4 CogAT PF Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/cogat/grade-4/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/cogat/grade-4/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-4/mock-test-1/mock-test-1/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L10-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-4/mock-test-1/mock-test-1/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L10-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-4/mock-test-1/mock-test-1/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L10-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-4/mock-test-1/mock-test-1/figure-matrices/",
                    "learnosityRef": "TestPrep Cogat G3-4 FM Mock Test A01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-4/mock-test-1/mock-test-1/figure-classification/",
                    "learnosityRef": "TestPrep CogAT G3-4 NVR FC Practice Test 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-4/mock-test-1/mock-test-1/paper-folding/",
                    "learnosityRef": "TestPrep Cogat G3-4 PF Mock Test A01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/cogat/grade-4/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/cogat/grade-4/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-4/mock-test-2/mock-test-2/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L10-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-4/mock-test-2/mock-test-2/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L10-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-4/mock-test-2/mock-test-2/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L10-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-4/mock-test-2/mock-test-2/figure-matrices/",
                    "learnosityRef": "TestPrep Cogat G3-4 FM Mock Test A02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-4/mock-test-2/mock-test-2/figure-classification/",
                    "learnosityRef": "TestPrep CogAT G3-4 NVR FC Practice Test 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-4/mock-test-2/mock-test-2/paper-folding/",
                    "learnosityRef": "TestPrep Cogat G3-4 PF Mock Test A02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-5",
        "label": "Grade 5",
        "programCode": "CogAT.G5",
        "url": "/maths/cogat/grade-5/",
        "chapters": [
          {
            "name": "Number Analogies",
            "url": "/maths/cogat/grade-5/number-analogies/",
            "blocks": [
              {
                "name": "Number Analogies Practice 1",
                "url": "/maths/cogat/grade-5/number-analogies/number-analogies-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 1",
                    "url": "/maths/cogat/grade-5/number-analogies/number-analogies-practice-1/",
                    "learnosityRef": "TestPrep G5-6 CogAT NA Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Analogies Practice 2",
                "url": "/maths/cogat/grade-5/number-analogies/number-analogies-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 2",
                    "url": "/maths/cogat/grade-5/number-analogies/number-analogies-practice-2/",
                    "learnosityRef": "TestPrep G5-6 CogAT NA Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Puzzles",
            "url": "/maths/cogat/grade-5/number-puzzles/",
            "blocks": [
              {
                "name": "Number Puzzles Practice 1",
                "url": "/maths/cogat/grade-5/number-puzzles/number-puzzles-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 1",
                    "url": "/maths/cogat/grade-5/number-puzzles/number-puzzles-practice-1/",
                    "learnosityRef": "TestPrep G5-6 CogAT NP Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Puzzles Practice 2",
                "url": "/maths/cogat/grade-5/number-puzzles/number-puzzles-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 2",
                    "url": "/maths/cogat/grade-5/number-puzzles/number-puzzles-practice-2/",
                    "learnosityRef": "TestPrep G5-6 CogAT NP Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Series",
            "url": "/maths/cogat/grade-5/number-series/",
            "blocks": [
              {
                "name": "Number Series Practice 1",
                "url": "/maths/cogat/grade-5/number-series/number-series-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 1",
                    "url": "/maths/cogat/grade-5/number-series/number-series-practice-1/",
                    "learnosityRef": "TestPrep G5-6 CogAT NS Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Series Practice 2",
                "url": "/maths/cogat/grade-5/number-series/number-series-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 2",
                    "url": "/maths/cogat/grade-5/number-series/number-series-practice-2/",
                    "learnosityRef": "TestPrep G5-6 CogAT NS Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Matrices",
            "url": "/maths/cogat/grade-5/figure-matrices/",
            "blocks": [
              {
                "name": "Figure Matrices Practice 1",
                "url": "/maths/cogat/grade-5/figure-matrices/figure-matrices-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 1",
                    "url": "/maths/cogat/grade-5/figure-matrices/figure-matrices-practice-1/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FM Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Matrices Practice 2",
                "url": "/maths/cogat/grade-5/figure-matrices/figure-matrices-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 2",
                    "url": "/maths/cogat/grade-5/figure-matrices/figure-matrices-practice-2/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FM Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Classification",
            "url": "/maths/cogat/grade-5/figure-classification/",
            "blocks": [
              {
                "name": "Figure Classification Practice 1",
                "url": "/maths/cogat/grade-5/figure-classification/figure-classification-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 1",
                    "url": "/maths/cogat/grade-5/figure-classification/figure-classification-practice-1/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FC Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Classification Practice 2",
                "url": "/maths/cogat/grade-5/figure-classification/figure-classification-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 2",
                    "url": "/maths/cogat/grade-5/figure-classification/figure-classification-practice-2/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FC Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Paper Folding",
            "url": "/maths/cogat/grade-5/paper-folding/",
            "blocks": [
              {
                "name": "Paper Folding Practice 1",
                "url": "/maths/cogat/grade-5/paper-folding/paper-folding-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 1",
                    "url": "/maths/cogat/grade-5/paper-folding/paper-folding-practice-1/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR PF Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Paper Folding Practice 2",
                "url": "/maths/cogat/grade-5/paper-folding/paper-folding-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 2",
                    "url": "/maths/cogat/grade-5/paper-folding/paper-folding-practice-2/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR PF Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/cogat/grade-5/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/cogat/grade-5/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-5/mock-test-1/mock-test-1/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L11-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-5/mock-test-1/mock-test-1/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L11-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-5/mock-test-1/mock-test-1/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L11-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-5/mock-test-1/mock-test-1/figure-matrices/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FM Practice Test 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-5/mock-test-1/mock-test-1/figure-classification/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FC Practice Test 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-5/mock-test-1/mock-test-1/paper-folding/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR PF Practice Test 1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/cogat/grade-5/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/cogat/grade-5/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-5/mock-test-2/mock-test-2/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L11-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-5/mock-test-2/mock-test-2/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L11-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-5/mock-test-2/mock-test-2/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L11-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-5/mock-test-2/mock-test-2/figure-matrices/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FM Practice Test 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-5/mock-test-2/mock-test-2/figure-classification/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FC Practice Test 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-5/mock-test-2/mock-test-2/paper-folding/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR PF Practice Test 2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-6",
        "label": "Grade 6",
        "programCode": "CogAT.G6",
        "url": "/maths/cogat/grade-6/",
        "chapters": [
          {
            "name": "Number Analogies",
            "url": "/maths/cogat/grade-6/number-analogies/",
            "blocks": [
              {
                "name": "Number Analogies Practice 1",
                "url": "/maths/cogat/grade-6/number-analogies/number-analogies-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 1",
                    "url": "/maths/cogat/grade-6/number-analogies/number-analogies-practice-1/",
                    "learnosityRef": "TestPrep G5-6 CogAT NA Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Analogies Practice 2",
                "url": "/maths/cogat/grade-6/number-analogies/number-analogies-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Analogies Practice 2",
                    "url": "/maths/cogat/grade-6/number-analogies/number-analogies-practice-2/",
                    "learnosityRef": "TestPrep G5-6 CogAT NA Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Puzzles",
            "url": "/maths/cogat/grade-6/number-puzzles/",
            "blocks": [
              {
                "name": "Number Puzzles Practice 1",
                "url": "/maths/cogat/grade-6/number-puzzles/number-puzzles-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 1",
                    "url": "/maths/cogat/grade-6/number-puzzles/number-puzzles-practice-1/",
                    "learnosityRef": "TestPrep G5-6 CogAT NP Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Puzzles Practice 2",
                "url": "/maths/cogat/grade-6/number-puzzles/number-puzzles-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Puzzles Practice 2",
                    "url": "/maths/cogat/grade-6/number-puzzles/number-puzzles-practice-2/",
                    "learnosityRef": "TestPrep G5-6 CogAT NP Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Number Series",
            "url": "/maths/cogat/grade-6/number-series/",
            "blocks": [
              {
                "name": "Number Series Practice 1",
                "url": "/maths/cogat/grade-6/number-series/number-series-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 1",
                    "url": "/maths/cogat/grade-6/number-series/number-series-practice-1/",
                    "learnosityRef": "TestPrep G5-6 CogAT NS Practice W01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Number Series Practice 2",
                "url": "/maths/cogat/grade-6/number-series/number-series-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Number Series Practice 2",
                    "url": "/maths/cogat/grade-6/number-series/number-series-practice-2/",
                    "learnosityRef": "TestPrep G5-6 CogAT NS Practice W02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Matrices",
            "url": "/maths/cogat/grade-6/figure-matrices/",
            "blocks": [
              {
                "name": "Figure Matrices Practice 1",
                "url": "/maths/cogat/grade-6/figure-matrices/figure-matrices-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 1",
                    "url": "/maths/cogat/grade-6/figure-matrices/figure-matrices-practice-1/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FM Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Matrices Practice 2",
                "url": "/maths/cogat/grade-6/figure-matrices/figure-matrices-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Matrices Practice 2",
                    "url": "/maths/cogat/grade-6/figure-matrices/figure-matrices-practice-2/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FM Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Figure Classification",
            "url": "/maths/cogat/grade-6/figure-classification/",
            "blocks": [
              {
                "name": "Figure Classification Practice 1",
                "url": "/maths/cogat/grade-6/figure-classification/figure-classification-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 1",
                    "url": "/maths/cogat/grade-6/figure-classification/figure-classification-practice-1/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FC Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Figure Classification Practice 2",
                "url": "/maths/cogat/grade-6/figure-classification/figure-classification-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Figure Classification Practice 2",
                    "url": "/maths/cogat/grade-6/figure-classification/figure-classification-practice-2/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FC Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Paper Folding",
            "url": "/maths/cogat/grade-6/paper-folding/",
            "blocks": [
              {
                "name": "Paper Folding Practice 1",
                "url": "/maths/cogat/grade-6/paper-folding/paper-folding-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 1",
                    "url": "/maths/cogat/grade-6/paper-folding/paper-folding-practice-1/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR PF Practice P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Paper Folding Practice 2",
                "url": "/maths/cogat/grade-6/paper-folding/paper-folding-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Paper Folding Practice 2",
                    "url": "/maths/cogat/grade-6/paper-folding/paper-folding-practice-2/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR PF Practice P02",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 1",
            "url": "/maths/cogat/grade-6/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/cogat/grade-6/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-6/mock-test-1/mock-test-1/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L12-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-6/mock-test-1/mock-test-1/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L12-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-6/mock-test-1/mock-test-1/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L12-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-6/mock-test-1/mock-test-1/figure-matrices/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FM Practice Test 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-6/mock-test-1/mock-test-1/figure-classification/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FC Practice Test 1",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-6/mock-test-1/mock-test-1/paper-folding/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR PF Practice Test 1",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/cogat/grade-6/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/cogat/grade-6/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-6/mock-test-2/mock-test-2/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L12-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-6/mock-test-2/mock-test-2/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L12-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-6/mock-test-2/mock-test-2/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L12-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Matrices",
                    "url": "/maths/cogat/grade-6/mock-test-2/mock-test-2/figure-matrices/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FM Practice Test 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Figure Classification",
                    "url": "/maths/cogat/grade-6/mock-test-2/mock-test-2/figure-classification/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR FC Practice Test 2",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Paper Folding",
                    "url": "/maths/cogat/grade-6/mock-test-2/mock-test-2/paper-folding/",
                    "learnosityRef": "TestPrep CogAT G5-6 NVR PF Practice Test 2",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "slug": "grade-7",
        "label": "Grade 7",
        "programCode": "CogAT.G7",
        "url": "/maths/cogat/grade-7/",
        "chapters": [
          {
            "name": "Mock Test 1",
            "url": "/maths/cogat/grade-7/mock-test-1/",
            "blocks": [
              {
                "name": "Mock Test 1",
                "url": "/maths/cogat/grade-7/mock-test-1/mock-test-1/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-7/mock-test-1/mock-test-1/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L13-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-7/mock-test-1/mock-test-1/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L13-Practice-01",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-7/mock-test-1/mock-test-1/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L13-Practice-01",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          },
          {
            "name": "Mock Test 2",
            "url": "/maths/cogat/grade-7/mock-test-2/",
            "blocks": [
              {
                "name": "Mock Test 2",
                "url": "/maths/cogat/grade-7/mock-test-2/mock-test-2/",
                "type": "TESTS",
                "worksheets": [
                  {
                    "name": "Number Analogies",
                    "url": "/maths/cogat/grade-7/mock-test-2/mock-test-2/number-analogies/",
                    "learnosityRef": "CogAT-QR-NA-L13-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Puzzles",
                    "url": "/maths/cogat/grade-7/mock-test-2/mock-test-2/number-puzzles/",
                    "learnosityRef": "CogAT-QR-NP-L13-Practice-02",
                    "nodeType": "ASSESSMENT"
                  },
                  {
                    "name": "Number Series",
                    "url": "/maths/cogat/grade-7/mock-test-2/mock-test-2/number-series/",
                    "learnosityRef": "CogAT-QR-NS-L13-Practice-02",
                    "nodeType": "ASSESSMENT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "sat": {
    "name": "SAT Math Curriculum",
    "aboutName": "SAT Math",
    "slug": "sat",
    "examUrl": "/maths/sat/",
    "hasBands": false,
    "bands": [
      {
        "slug": null,
        "label": null,
        "programCode": null,
        "url": "/maths/sat/",
        "chapters": [
          {
            "name": "Algebra",
            "blocks": [
              {
                "name": "Linear Equations In One & Two Variables Practice 1",
                "url": "/maths/sat/linear-equations-in-one-and-two-variables-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Equations In One & Two Variables Practice 1",
                    "url": "/maths/sat/linear-equations-in-one-and-two-variables-practice-1/",
                    "learnosityRef": "SAT-V3-Linear-Equations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Equations In One & Two Variables Practice 2",
                "url": "/maths/sat/linear-equations-in-one-and-two-variables-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Equations In One & Two Variables Practice 2",
                    "url": "/maths/sat/linear-equations-in-one-and-two-variables-practice-2/",
                    "learnosityRef": "SAT-V3-Linear-Equations-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Equations of Lines Practice 1",
                "url": "/maths/sat/equations-of-lines-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Equations of Lines Practice 1",
                    "url": "/maths/sat/equations-of-lines-practice-1/",
                    "learnosityRef": "Class-2-SAT-Equation-Of-Lines-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Equations of Lines Practice 2",
                "url": "/maths/sat/equations-of-lines-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Equations of Lines Practice 2",
                    "url": "/maths/sat/equations-of-lines-practice-2/",
                    "learnosityRef": "Class-2-SAT-Equation-Of-Lines-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Functions Practice 1",
                "url": "/maths/sat/linear-functions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Functions Practice 1",
                    "url": "/maths/sat/linear-functions-practice-1/",
                    "learnosityRef": "SAT-V3-Linear-Functions-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Functions Practice 2",
                "url": "/maths/sat/linear-functions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Functions Practice 2",
                    "url": "/maths/sat/linear-functions-practice-2/",
                    "learnosityRef": "SAT-V3-Linear-Functions-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Systems of Linear Equations Practice 1",
                "url": "/maths/sat/systems-of-linear-equations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Systems of Linear Equations Practice 1",
                    "url": "/maths/sat/systems-of-linear-equations-practice-1/",
                    "learnosityRef": "SAT-V3-Systems-of-Linear-Equations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Systems of Linear Equations Practice 2",
                "url": "/maths/sat/systems-of-linear-equations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Systems of Linear Equations Practice 2",
                    "url": "/maths/sat/systems-of-linear-equations-practice-2/",
                    "learnosityRef": "SAT-V3-Systems-of-Linear-Equations-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Inequalities I Practice 1",
                "url": "/maths/sat/linear-inequalities-i-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Inequalities I Practice 1",
                    "url": "/maths/sat/linear-inequalities-i-practice-1/",
                    "learnosityRef": "SAT-V3-Linear-Inequalities-I-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Inequalities I Practice 2",
                "url": "/maths/sat/linear-inequalities-i-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Inequalities I Practice 2",
                    "url": "/maths/sat/linear-inequalities-i-practice-2/",
                    "learnosityRef": "SAT-V3-Linear-Inequalities-I-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Inequalities II Practice 1",
                "url": "/maths/sat/linear-inequalities-ii-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Inequalities II Practice 1",
                    "url": "/maths/sat/linear-inequalities-ii-practice-1/",
                    "learnosityRef": "SAT-V3-Linear-Inequalities-II-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Inequalities II Practice 2",
                "url": "/maths/sat/linear-inequalities-ii-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Inequalities II Practice 2",
                    "url": "/maths/sat/linear-inequalities-ii-practice-2/",
                    "learnosityRef": "SAT-V3-Linear-Inequalities-II-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Advanced Math",
            "blocks": [
              {
                "name": "Exponents and Radicals Practice 1",
                "url": "/maths/sat/exponents-and-radicals-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Exponents and Radicals Practice 1",
                    "url": "/maths/sat/exponents-and-radicals-practice-1/",
                    "learnosityRef": "SAT-V3-Exponents-and-Radicals-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Exponents and Radicals Practice 2",
                "url": "/maths/sat/exponents-and-radicals-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Exponents and Radicals Practice 2",
                    "url": "/maths/sat/exponents-and-radicals-practice-2/",
                    "learnosityRef": "SAT-V3-Exponent-and-Radicals-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Polynomials Practice 1",
                "url": "/maths/sat/polynomials-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Polynomials Practice 1",
                    "url": "/maths/sat/polynomials-practice-1/",
                    "learnosityRef": "SAT-V3-Polynomials-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Polynomials Practice 2",
                "url": "/maths/sat/polynomials-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Polynomials Practice 2",
                    "url": "/maths/sat/polynomials-practice-2/",
                    "learnosityRef": "SAT-V3-Polynomials-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Quadratic Equations Practice 1",
                "url": "/maths/sat/quadratic-equations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Quadratic Equations Practice 1",
                    "url": "/maths/sat/quadratic-equations-practice-1/",
                    "learnosityRef": "SAT-V3-Quadratic-Equations-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Quadratic Equations Practice 2",
                "url": "/maths/sat/quadratic-equations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Quadratic Equations Practice 2",
                    "url": "/maths/sat/quadratic-equations-practice-2/",
                    "learnosityRef": "SAT-V3-Quadratic-Equations-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Quadratic Functions Practice 1",
                "url": "/maths/sat/quadratic-functions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Quadratic Functions Practice 1",
                    "url": "/maths/sat/quadratic-functions-practice-1/",
                    "learnosityRef": "SAT-V3-Quadratic-Functions-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Quadratic Functions Practice 2",
                "url": "/maths/sat/quadratic-functions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Quadratic Functions Practice 2",
                    "url": "/maths/sat/quadratic-functions-practice-2/",
                    "learnosityRef": "SAT-V3-Quadratic-Functions-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Absolute Value and Nonlinear Functions Practice 1",
                "url": "/maths/sat/absolute-value-and-nonlinear-functions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Absolute Value and Nonlinear Functions Practice 1",
                    "url": "/maths/sat/absolute-value-and-nonlinear-functions-practice-1/",
                    "learnosityRef": "SAT-V3-Absolute-Value-and-Nonlinear-Functions-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Absolute Value and Nonlinear Functions Practice 2",
                "url": "/maths/sat/absolute-value-and-nonlinear-functions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Absolute Value and Nonlinear Functions Practice 2",
                    "url": "/maths/sat/absolute-value-and-nonlinear-functions-practice-2/",
                    "learnosityRef": "SAT-V3-Absolute-Value-and-Nonlinear-Functions-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Nonlinear Functions II Practice 1",
                "url": "/maths/sat/nonlinear-functions-ii-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Nonlinear Functions II Practice 1",
                    "url": "/maths/sat/nonlinear-functions-ii-practice-1/",
                    "learnosityRef": "SAT-V3-Nonlinear-Functions-II-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Nonlinear Functions II Practice 2",
                "url": "/maths/sat/nonlinear-functions-ii-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Nonlinear Functions II Practice 2",
                    "url": "/maths/sat/nonlinear-functions-ii-practice-2/",
                    "learnosityRef": "SAT-V3-Nonlinear-Functions-II-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Problem Solving and Data Analysis",
            "blocks": [
              {
                "name": "Rates, Ratios, and Proportions Practice 1",
                "url": "/maths/sat/rates-ratios-and-proportions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rates, Ratios, and Proportions Practice 1",
                    "url": "/maths/sat/rates-ratios-and-proportions-practice-1/",
                    "learnosityRef": "SAT-V3-Rates-Ratio-Proportion-P01A",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Rates, Ratios, and Proportions Practice 2",
                "url": "/maths/sat/rates-ratios-and-proportions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Rates, Ratios, and Proportions Practice 2",
                    "url": "/maths/sat/rates-ratios-and-proportions-practice-2/",
                    "learnosityRef": "SAT-V3-Rates-Ratio-Proportion-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Percents Practice 1",
                "url": "/maths/sat/percents-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Percents Practice 1",
                    "url": "/maths/sat/percents-practice-1/",
                    "learnosityRef": "SAT-V3-Percentages-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Percents Practice 2",
                "url": "/maths/sat/percents-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Percents Practice 2",
                    "url": "/maths/sat/percents-practice-2/",
                    "learnosityRef": "SAT-V3-Percentages-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Tables and Statistics Practice 1",
                "url": "/maths/sat/tables-and-statistics-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Tables and Statistics Practice 1",
                    "url": "/maths/sat/tables-and-statistics-practice-1/",
                    "learnosityRef": "SAT-V3-Tables-and-Statistics-P01A",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Tables and Statistics Practice 2",
                "url": "/maths/sat/tables-and-statistics-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Tables and Statistics Practice 2",
                    "url": "/maths/sat/tables-and-statistics-practice-2/",
                    "learnosityRef": "SAT-V3-Tables-and-Statistics-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Probability Practice 1",
                "url": "/maths/sat/probability-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability Practice 1",
                    "url": "/maths/sat/probability-practice-1/",
                    "learnosityRef": "SAT-V3-Probability-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Probability Practice 2",
                "url": "/maths/sat/probability-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Probability Practice 2",
                    "url": "/maths/sat/probability-practice-2/",
                    "learnosityRef": "SAT-V3-Probability-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Scatterplots Practice 1",
                "url": "/maths/sat/scatterplots-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Scatterplots Practice 1",
                    "url": "/maths/sat/scatterplots-practice-1/",
                    "learnosityRef": "SAT-V3-Scatter-Plots-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Scatterplots Practice 2",
                "url": "/maths/sat/scatterplots-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Scatterplots Practice 2",
                    "url": "/maths/sat/scatterplots-practice-2/",
                    "learnosityRef": "SAT-V3-Scatter-Plots-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Geometry and Trigonometry",
            "blocks": [
              {
                "name": "Lines, Angles, and Similar Triangles Practice 1",
                "url": "/maths/sat/lines-angles-and-similar-triangles-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Lines, Angles, and Similar Triangles Practice 1",
                    "url": "/maths/sat/lines-angles-and-similar-triangles-practice-1/",
                    "learnosityRef": "SAT-V3-Lines-Angles-and-Triangles-P01A",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Lines, Angles, and Similar Triangles Practice 2",
                "url": "/maths/sat/lines-angles-and-similar-triangles-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Lines, Angles, and Similar Triangles Practice 2",
                    "url": "/maths/sat/lines-angles-and-similar-triangles-practice-2/",
                    "learnosityRef": "SAT-V3-Lines-Angles-and-Triangles-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Pythagorean Theorem and Special Right Triangles Practice 1",
                "url": "/maths/sat/pythagorean-theorem-and-special-right-triangles-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Pythagorean Theorem and Special Right Triangles Practice 1",
                    "url": "/maths/sat/pythagorean-theorem-and-special-right-triangles-practice-1/",
                    "learnosityRef": "SAT-V3-Pythagorean-Theorem-P01A",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Pythagorean Theorem and Special Right Triangles Practice 2",
                "url": "/maths/sat/pythagorean-theorem-and-special-right-triangles-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Pythagorean Theorem and Special Right Triangles Practice 2",
                    "url": "/maths/sat/pythagorean-theorem-and-special-right-triangles-practice-2/",
                    "learnosityRef": "SAT-V3-Pythagorean-Theorem-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Circles Practice 1",
                "url": "/maths/sat/circles-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Circles Practice 1",
                    "url": "/maths/sat/circles-practice-1/",
                    "learnosityRef": "SAT-V3-Circles-P01A",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Circles Practice 2",
                "url": "/maths/sat/circles-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Circles Practice 2",
                    "url": "/maths/sat/circles-practice-2/",
                    "learnosityRef": "SAT-V3-Circles-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Area and Perimeter Practice 1",
                "url": "/maths/sat/area-and-perimeter-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Area and Perimeter Practice 1",
                    "url": "/maths/sat/area-and-perimeter-practice-1/",
                    "learnosityRef": "SAT-V3-Area-and-Perimeter-P01A",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Area and Perimeter Practice 2",
                "url": "/maths/sat/area-and-perimeter-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Area and Perimeter Practice 2",
                    "url": "/maths/sat/area-and-perimeter-practice-2/",
                    "learnosityRef": "SAT-V3-Area-and-Perimeter-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Three-Dimensional Figures Practice 1",
                "url": "/maths/sat/three-dimensional-figures-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Three-Dimensional Figures Practice 1",
                    "url": "/maths/sat/three-dimensional-figures-practice-1/",
                    "learnosityRef": "SAT-V3-Three-Dimentional-Figures-P01A",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Three-Dimensional Figures Practice 2",
                "url": "/maths/sat/three-dimensional-figures-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Three-Dimensional Figures Practice 2",
                    "url": "/maths/sat/three-dimensional-figures-practice-2/",
                    "learnosityRef": "SAT-V3-Three-Dimentional-Figures-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Trigonometry Practice 1",
                "url": "/maths/sat/trigonometry-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Trigonometry Practice 1",
                    "url": "/maths/sat/trigonometry-practice-1/",
                    "learnosityRef": "SAT-V3-Trigonometry-P01",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Trigonometry Practice 2",
                "url": "/maths/sat/trigonometry-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Trigonometry Practice 2",
                    "url": "/maths/sat/trigonometry-practice-2/",
                    "learnosityRef": "SAT-V3-Trigonometry-A01",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          },
          {
            "name": "Algebra: Practice Bank",
            "blocks": [
              {
                "name": "Linear Equations in One Variable Practice 1",
                "url": "/maths/sat/linear-equations-in-one-variable-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Equations in One Variable Practice 1",
                    "url": "/maths/sat/linear-equations-in-one-variable-practice-1/",
                    "learnosityRef": "LEAP-V4-10-Linear-Equations-in-One-Variable-L2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Equations in One Variable Practice 2",
                "url": "/maths/sat/linear-equations-in-one-variable-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Equations in One Variable Practice 2",
                    "url": "/maths/sat/linear-equations-in-one-variable-practice-2/",
                    "learnosityRef": "LEAP-V4-11-Linear-Equations-in-One-Variable-L3",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Equations in Two Variables Practice 1",
                "url": "/maths/sat/linear-equations-in-two-variables-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Equations in Two Variables Practice 1",
                    "url": "/maths/sat/linear-equations-in-two-variables-practice-1/",
                    "learnosityRef": "LEAP-V4-8-Linear-Equations-in-Two-Variables-L2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Equations in Two Variables Practice 2",
                "url": "/maths/sat/linear-equations-in-two-variables-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Equations in Two Variables Practice 2",
                    "url": "/maths/sat/linear-equations-in-two-variables-practice-2/",
                    "learnosityRef": "LEAP-V4-9-Linear-Equations-in-Two-Variables-L3",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Functions Practice 1",
                "url": "/maths/sat/linear-functions-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Functions Practice 1",
                    "url": "/maths/sat/linear-functions-practice-1/",
                    "learnosityRef": "LEAP-V4-14-Linear-Functions-L2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Linear Functions Practice 2",
                "url": "/maths/sat/linear-functions-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Linear Functions Practice 2",
                    "url": "/maths/sat/linear-functions-practice-2/",
                    "learnosityRef": "LEAP-V4-15-Linear-Functions-L3",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Systems of Linear Equations Practice 1",
                "url": "/maths/sat/systems-of-linear-equations-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Systems of Linear Equations Practice 1",
                    "url": "/maths/sat/systems-of-linear-equations-practice-1/",
                    "learnosityRef": "LEAP-V4-16-SLE-L2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Systems of Linear Equations Practice 2",
                "url": "/maths/sat/systems-of-linear-equations-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Systems of Linear Equations Practice 2",
                    "url": "/maths/sat/systems-of-linear-equations-practice-2/",
                    "learnosityRef": "LEAP-V4-17-SLE-L3",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Basics of Linear Inequalities in One Variable Practice 1",
                "url": "/maths/sat/basics-of-linear-inequalities-in-one-variable-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Basics of Linear Inequalities in One Variable Practice 1",
                    "url": "/maths/sat/basics-of-linear-inequalities-in-one-variable-practice-1/",
                    "learnosityRef": "LEAP-V4-18-Linear-Inequalities-in-One-Variable-L2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Basics of Linear Inequalities in One Variable Practice 2",
                "url": "/maths/sat/basics-of-linear-inequalities-in-one-variable-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Basics of Linear Inequalities in One Variable Practice 2",
                    "url": "/maths/sat/basics-of-linear-inequalities-in-one-variable-practice-2/",
                    "learnosityRef": "LEAP-V4-20-Linear-Inequalities-in-One-Variable-L3",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Applications of Linear Inequalities in One Variable Practice 1",
                "url": "/maths/sat/applications-of-linear-inequalities-in-one-variable-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Applications of Linear Inequalities in One Variable Practice 1",
                    "url": "/maths/sat/applications-of-linear-inequalities-in-one-variable-practice-1/",
                    "learnosityRef": "LEAP-V4-23-Applications-of-Linear-Inequalities-in-O",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Applications of Linear Inequalities in One Variable Practice 2",
                "url": "/maths/sat/applications-of-linear-inequalities-in-one-variable-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Applications of Linear Inequalities in One Variable Practice 2",
                    "url": "/maths/sat/applications-of-linear-inequalities-in-one-variable-practice-2/",
                    "learnosityRef": "LEAP-V4-24-Applications-of-Linear-Inequalities-in-O",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Compound Inequalities Practice 1",
                "url": "/maths/sat/compound-inequalities-practice-1/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Compound Inequalities Practice 1",
                    "url": "/maths/sat/compound-inequalities-practice-1/",
                    "learnosityRef": "LEAP-V4-21-Compound-Inequalities-L2",
                    "nodeType": "PRACTICE"
                  }
                ]
              },
              {
                "name": "Compound Inequalities Practice 2",
                "url": "/maths/sat/compound-inequalities-practice-2/",
                "type": "GOAL",
                "worksheets": [
                  {
                    "name": "Compound Inequalities Practice 2",
                    "url": "/maths/sat/compound-inequalities-practice-2/",
                    "learnosityRef": "LEAP-V4-22-Compound-Inequalities-L3",
                    "nodeType": "PRACTICE"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
