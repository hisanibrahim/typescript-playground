const obj = {
  level: 1,
  name: "Original",
  contents: {
    level: 2,
    contents: {
      level: 3,
      contents: {
        level: 4,
      },
    },
  },
};

const arr = ["name", 1, "male"];

// const copyObj = obj; // Shallow copy
// const copyObj = { ...obj }; // Deep copy
const copyObj = Object.assign({}, obj); // Deep copy

// const copyArr = arr; // Shallow copy
// const copyArr = [...arr]; // Deep copy
const copyArr = arr.slice(); // Deep copy

copyObj.name = "copy";
copyArr.push("New");

console.log(JSON.stringify(obj, null, 2));
console.log(JSON.stringify(arr, null, 2));
