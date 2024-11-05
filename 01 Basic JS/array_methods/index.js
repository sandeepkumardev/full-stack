// map
const arr = [1, 2, 3, 4, 5];

const doubleArr = arr.map((ele, index) => {
  // console.log(ele, index);
  return ele * 2;
});

// sort
const products = [
  { name: "laptop", price: 45000 },
  { name: "watch", price: 3000 },
  { name: "phone", price: 80000 },
];

const sortedProducts = products.sort((a, b) => b.price - a.price);

// filter
const students = [
  { name: "student1", marks: 90 },
  { name: "student2", marks: 50 },
  { name: "student3", marks: 70 },
];

const filteredStudents = students.filter((ele, index) => ele.marks > 75);

// reduce
const totalStu = students.reduce((acc, curr) => {
  if (curr.marks > 75) {
    return acc + 1;
  }
  return acc;
}, 0);

// console.log(totalStu);

// flat
const nestedArr = [1, 2, [3, 4, 5], 6, [7, 8, 9]];
// console.log(nestedArr.flat());

// forEach

// find
const data = [
  { name: "student2", marks: 50 },
  { name: "student3", marks: 70 },
  { name: "student1", marks: 90 },
];

const result = data.find((ele, index) => ele.marks > 60);
// console.log(result);

// findIndex
const resultIndex = data.findIndex((ele, index) => ele.marks > 80);
// console.log(resultIndex);

// some
const someRes = data.some((ele, index) => ele.marks > 60);
// console.log(someRes);

// every
const numbers = [2, 4, 6, 7];
const isAllEven = numbers.every((num) => num % 2 === 0);
// console.log(isAllEven);

// includes
const fArr = ["apple", "banana", "mango"];
console.log(fArr.includes("potato"));
