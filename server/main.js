//! reverse array/string

// const word = "abhilash";

// const reverseWord = (str) => {
//   var reverseArray = [];

//   Array.from(str).forEach((c) => {
//     var temp = reverseArray;
//     reverseArray = [c, ...temp];
//     temp = [];
//   });

//   return reverseArray.join("");
// };

// console.log(reverseWord(word));

//! palindrome

// const word = "madam";

// const checkPalindrome = (str) => {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

// console.log(checkPalindrome(word));

//! find largest number

// const array = [1, 2, 7, 4, 5, 6];

// const largestNumber = (arr) => {
//   let l = arr[0];

//   arr.map((n) => {
//     if (n > l) {
//       l = n;
//     }
//   });
//   return l;
// };

// console.log(largestNumber(array));

//! find second largest number

// const array = [1, 2, 7, 4, 5, 6];

// const secondLargest = (arr) => {
//   let l1 = 0;
//   let l2 = 0;

//   for (const n of arr) {
//     if (n > l1) {
//       l2 = l1;
//       l1 = n;
//     } else if (n > l2 && n < l1) {
//       l2 = n;
//     }
//   }
//   return l2;
// };

// console.log(secondLargest(array));

// ! remove duplicates from array

// const array = [1, 2, 7, 7, 4, 5, 6, 2, 4, 5];

// const removeDuplicates = (arr) => {
//   const uniqueArray = [];

//   arr.forEach((n) => {
//     if (!uniqueArray.includes(n)) {
//       uniqueArray.push(n);
//     }
//   });

//   return uniqueArray;
// };

// console.log(removeDuplicates(array));

// ! count frequency of elements in array

// const array = [1, 2, 7, 7, 4, 5, 6, 2, 4, 5];

// const countFrequency = (arr) => {
//   const frequencyMap = {};

//   arr.forEach((n) => {
//     if (frequencyMap[n]) {
//       frequencyMap[n]++;
//     } else {
//       frequencyMap[n] = 1;
//     }
//   });

//   return frequencyMap;
// };

// console.log(countFrequency(array));

// ! Merge two sorted arrays

// const array1 = [1, 3, 5, 7];
// const array2 = [2, 4, 6, 8];

// const mergeArrays = (arr1, arr2) => {
//   const mergedArray = [];

//   arr1.forEach((n) => {
//     mergedArray.push(n);
//   });

//   arr2.forEach((n) => {
//     mergedArray.push(n);
//   });

//   return mergedArray.sort((a, b) => a - b);
// };

// console.log(mergeArrays(array1, array2));

// ! Rotate array left at k position

const array = [1, 2, 3, 4, 5];
const k = 2;

const rotateArrayLeft = (arr, k) => {
  const rotatedArray = [];

  for (let i = k; i < arr.length; i++) {
    rotatedArray.push(arr[i]);
  }

  for (let i = 0; i < k; i++) {
    rotatedArray.push(arr[i]);
  }

  return rotatedArray;
};
