// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// ------------------ВИКОНАНИЙ КОД ----------------------//

function findOdd(A) {
  let testingArray = A;
  let result;
  console.log(testingArray);

  let number = 0;

  testingArray.forEach((element, index, array) => {
    for (let k of array) {
      if (k === element) {
        number += 1;
        //   console.log(number);
      }
    }

    if (number % 2 !== 0) {
      result = element;
      console.log(element);
      number = 0;
    } else {
      number = 0;
    }
  });

  return result;
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
