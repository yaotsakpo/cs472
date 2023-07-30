// Function to calculate the sum of an array of numbers
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Test cases for sum() function
console.log(
  "Expected output of sum([1, 2, 3, 4]) is 10 and " +
    myFunctionTest(10, function () {
      return sum([1, 2, 3, 4]);
    })
);

console.log(
  "Expected output of sum([-5, 10, 3, -2]) is 6 and " +
    myFunctionTest(6, function () {
      return sum([-5, 10, 3, -2]);
    })
);

// Function to reverse a string
function reverse(str) {
  return str.split("").reverse().join("");
}

// Test cases for reverse() function
console.log(
  "Expected output of reverse('jag testar') is 'ratset gaj' and " +
    myFunctionTest("ratset gaj", function () {
      return reverse("jag testar");
    })
);

console.log(
  "Expected output of reverse('hello') is 'olleh' and " +
    myFunctionTest("olleh", function () {
      return reverse("hello");
    })
);

// Function to filter words longer than a given length
function filterLongWords(words, length) {
  return words.filter((word) => word.length > length);
}

// Test cases for filterLongWords() function
console.log(
  "Expected output of filterLongWords(['apple', 'banana', 'orange'], 5) is ['banana', 'orange'] and " +
    myFunctionTest(["banana", "orange"], function () {
      return filterLongWords(["apple", "banana", "orange"], 5);
    })
);

console.log(
  "Expected output of filterLongWords(['cat', 'dog', 'elephant'], 3) is ['elephant'] and " +
    myFunctionTest(["elephant"], function () {
      return filterLongWords(["cat", "dog", "elephant"], 3);
    })
);

// Helper function to test the output of a function
function myFunctionTest(expected, functionToTest) {
  let result = functionToTest();

  if(typeof result == 'object'){
    result = result.toString();
    expected = expected.toString();
  }

  console.assert(
    result === expected,
    `Expected ${expected}, but got ${result}`
  );
  return result === expected ? "TEST SUCCEEDED" : "TEST FAILED";
}
