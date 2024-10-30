// // named function
// // function sum(a, b) {
// //   console.log("hello");
// // }

// // sum(1, 3);

// // anonymous function
// const sayHello = function () {
//   console.log("hello");
// };

// // arrow function
// const arrow = (a, b) => {
//   console.log(a + b);
// };

// // IIFE
// // (function (b, c) {
// //   console.log(b - c);
// // })(6, 3);

// // HOF
// function processNumber(num, action) {
//   const output = action(num);
//   return output;
// }

// function double(number) {
//   return number * 2; // 5 sec
// }

// function addFive(number) {
//   return number + 5;
// }

// const res1 = processNumber(5, double);
// const res2 = processNumber(6, addFive);
// // console.log(res1);
// // console.log(res2);

// const sum = (a, b) => a + b;

// const result = sum(2, 4);
// // console.log(result);

// function findMax(a, b) {
//   if (a > b) {
//     console.log("a is greater");
//   } else {
//     console.log("b is greater");
//   }
// }

// // findMax(7, 5);

// const abc = (a, b) => a + b;

// console.log(abc(4, 5));

// function getData(cb) {
//   setTimeout(() => cb(), 2000);
// }

// function users() {
//   console.log("all users data");
// }

// function posts() {
//   console.log("all posts");
// }

// getData(users);
// getData(posts);

// const promise1 = new Promise((resolve, reject) => {
//   const user = { name: "user", age: 20 };

//   if (user.age > 18) {
//     resolve(user);
//   } else {
//     reject("age is less than 18");
//   }
// });

// promise1.catch((error) => console.log("failed -", error)).then((data) => console.log("success -", data));

const container = document.getElementById("container");

async function getUsersData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return { ok: true, users: await res.json() };
  } catch (error) {
    console.log(error);
    return { ok: false, error: "something went wrong" };
  }
}

const getData = async () => {
  const data = await getUsersData();
  if (data.ok) {
    // dom logic

    const userDOM = data.users.map((user, index) => {
      return `<div class="card">
        <p>Name - ${user.name}</p>
        <p>Username - ${user.username}</p>
        <p>Email - ${user.email}</p>
      </div>`;
    });

    container.innerHTML = userDOM.join(" ");
  } else {
    console.log("error");
  }
};

getData();
