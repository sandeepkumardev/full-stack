const arr1 = [1, 3, 4];
const arr2 = [5, 6, 7];

// console.log([...arr1, ...arr2]);

function abc(name, email, password, ...args) {
  console.log(name, email, password, ...args);
}

abc("sandeep", "sandeep@gmail.com", "1234", "Male", "India", 244001);
