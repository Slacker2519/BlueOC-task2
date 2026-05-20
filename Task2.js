function sumOfTopTwoIntegers(array) {
  if (array.length < 2) {
    throw new Error("Array must contain at least two integers");
  }

  const nonIntegers = array.filter((num) => !Number.isInteger(num));
  if (nonIntegers.length > 0) {
    throw new Error("Array must contain only integers");
  }

  let first = -Infinity,
    second = -Infinity;

  for (const num of array) {
    if (num >= first) {
      second = first;
      first = num;
    } else if (num >= second) {
      second = num;
    }
  }

  return first + second;
}
