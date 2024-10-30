console.log("start");
// console.log(new Date(Date.now()).toLocaleTimeString());

// setTimeout(() => {
//   console.log("3 sec");
// }, 3000);

// setInterval(() => {
//   console.log(new Date(Date.now()).toLocaleTimeString());
// }, 1000);

console.log("end");

// function fetchUserData(fn) {
//   setTimeout(fn, 3000);
// }

// function getData() {
//   // db call
//   const user = { name: "user" };
//   return user;
// }

// fetchUserData(getData);

// callback
// promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = { name: "user" };
    resolve(user);
  }, 1000);
});

// myPromise.catch((err) => console.log("error -", err)).then((res) => console.log("data -", res));

async function getUser() {
  const data = await myPromise;
  console.log(await data.json());
}
getUser();
