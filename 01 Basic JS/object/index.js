const user = { name: "sandeep", age: 22, city: "kolkata" };
const arr = [1, "name", null, undefined, { a: 1, b: 2 }];

const comp = {
  name: "pvt.ltd",
  location: "kolkata",
  parentComp: null,
  emp: ["user1", "user2"],
  hr: {
    hr1: {
      name: "sandeep",
    },
    hr2: {
      name: "sandeep",
    },
  },
};

const [a, { b }] = [1, { c: 5, b: 2 }, 5];
const { emp } = comp;
const { hr1 } = hr;

console.log(emp[1]);
