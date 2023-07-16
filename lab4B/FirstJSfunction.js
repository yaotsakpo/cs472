// Function to find the maximum of two numbers
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Test cases for max() function
console.log(
  "Expected output of max(20, 10) is 20 and " +
    myFunctionTest(20, function () {
      return max(20, 10);
    })
);

console.log(
  "Expected output of max(-5, 2) is 2 and " +
    myFunctionTest(2, function () {
      return max(-5, 2);
    })
);

console.log(
  "Expected output of max(7, 7) is 7 and " +
    myFunctionTest(7, function () {
      return max(7, 7);
    })
);

// Function to find the maximum of three numbers
function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// Test cases for maxOfThree() function
console.log(
  "Expected output of maxOfThree(10, 5, 8) is 10 and " +
    myFunctionTest(10, function () {
      return maxOfThree(10, 5, 8);
    })
);

console.log(
  "Expected output of maxOfThree(-1, -5, -3) is -1 and " +
    myFunctionTest(-1, function () {
      return maxOfThree(-1, -5, -3);
    })
);

console.log(
  "Expected output of maxOfThree(7, 7, 7) is 7 and " +
    myFunctionTest(7, function () {
      return maxOfThree(7, 7, 7);
    })
);

// Function to check if a character is a vowel
function isVowel(char) {
  char = char.toLowerCase();
  return ["a", "e", "i", "o", "u"].includes(char);
}

// Test cases for isVowel() function
console.log(
  "Expected output of isVowel('a') is true and " +
    myFunctionTest(true, function () {
      return isVowel("a");
    })
);

console.log(
  "Expected output of isVowel('B') is false and " +
    myFunctionTest(false, function () {
      return isVowel("B");
    })
);

console.log(
  "Expected output of isVowel('e') is true and " +
    myFunctionTest(true, function () {
      return isVowel("e");
    })
);

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

// Function to calculate the product of an array of numbers
function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// Test cases for multiply() function
console.log(
  "Expected output of multiply([1, 2, 3, 4]) is 24 and " +
    myFunctionTest(24, function () {
      return multiply([1, 2, 3, 4]);
    })
);

console.log(
  "Expected output of multiply([-5, 10, 3, -2]) is 300 and " +
    myFunctionTest(300, function () {
      return multiply([-5, 10, 3, -2]);
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

// Function to find the length of the longest word in an array
function findLongestWord(words) {
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord.length;
}

// Test cases for findLongestWord() function
console.log(
  "Expected output of findLongestWord(['apple', 'banana', 'orange']) is 6 and " +
    myFunctionTest(6, function () {
      return findLongestWord(["apple", "banana", "orange"]);
    })
);

console.log(
  "Expected output of findLongestWord(['cat', 'dog', 'elephant']) is 8 and " +
    myFunctionTest(8, function () {
      return findLongestWord(["cat", "dog", "elephant"]);
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

// Additional modifications to the given code

const a = [1, 3, 5, 3, 3];

// Multiply each element by 10
const b = a.map(function (elem) {
  return elem * 10;
});
console.log(b);

// Return array with all elements equal to 3
const c = a.filter(function (elem) {
  return elem === 3;
});
console.log(c);

// Return the product of all elements
const d = a.reduce(function (prevValue, elem) {
  return prevValue * elem;
});
console.log(d);

// Helper function to test the output of a function
function myFunctionTest(expected, functionToTest) {
  const result = functionToTest();
  console.assert(
    result === expected,
    `Expected ${expected}, but got ${result}`
  );
  return result === expected ? "TEST SUCCEEDED" : "TEST FAILED";
}
