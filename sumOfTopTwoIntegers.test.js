const { sumOfTopTwoIntegers } = require("./task2.js");

let passed = 0;
let failed = 0;

function assert(description, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) {
    console.log(`✅ ${description}`);
    passed++;
  } else {
    console.error(`❌ ${description}`);
    console.error(`Expected : ${JSON.stringify(expected)}`);
    console.error(`Received : ${JSON.stringify(actual)}`);
    failed++;
  }
}

function assertThrows(description, fn) {
  try {
    fn();
    console.error(`❌ ${description} (expected an error but none was thrown)`);
    failed++;
  } catch {
    console.log(`✅ ${description}`);
    passed++;
  }
}

function runTests() {
  console.log("Running unit tests for sumOfTopTwoIntegers\n");
  console.log("Example from the task");
  assert(
    "[1, 4, 2, 3, 5] → 5 + 4 = 9",
    sumOfTopTwoIntegers([1, 4, 2, 3, 5]),
    9,
  );

  console.log("\nAlready sorted descending");
  assert("[10, 7, 3, 1] → 10 + 7 = 17", sumOfTopTwoIntegers([10, 7, 3, 1]), 17);

  console.log("\nAlready sorted ascending");
  assert("[1, 2, 3, 4] → 4 + 3 = 7", sumOfTopTwoIntegers([1, 2, 3, 4]), 7);

  console.log("\nExactly two elements");
  assert("[6, 9] → 9 + 6 = 15", sumOfTopTwoIntegers([6, 9]), 15);

  console.log("\nDuplicate largest values");
  assert("[5, 5, 1, 2] → 5 + 5 = 10", sumOfTopTwoIntegers([5, 5, 1, 2]), 10);

  console.log("\nAll same values");
  assert("[3, 3, 3, 3] → 3 + 3 = 6", sumOfTopTwoIntegers([3, 3, 3, 3]), 6);

  console.log("\nNegative numbers");
  assert(
    "[-1, -5, -3, -2] → -1 + -2 = -3",
    sumOfTopTwoIntegers([-1, -5, -3, -2]),
    -3,
  );

  console.log("\nMix of negative and positive");
  assert(
    "[-10, 3, 7, -1] → 7 + 3 = 10",
    sumOfTopTwoIntegers([-10, 3, 7, -1]),
    10,
  );

  console.log("\nContains zero");
  assert("[0, 0, 5, 2] → 5 + 2 = 7", sumOfTopTwoIntegers([0, 0, 5, 2]), 7);

  console.log("\nLarge numbers");
  assert(
    "[1000000, 999999, 1] → 1999999",
    sumOfTopTwoIntegers([1000000, 999999, 1]),
    1999999,
  );

  console.log("\nToo few elements → throws");
  assertThrows("[42] throws an error", () => sumOfTopTwoIntegers([42]));

  console.log("\nEmpty array → throws");
  assertThrows("[] throws an error", () => sumOfTopTwoIntegers([]));

  console.log(`\n${"─".repeat(50)}`);
  console.log(`Results: ${passed} passed, ${failed} failed`);
  if (failed === 0) console.log("All tests passed");
}

runTests();
