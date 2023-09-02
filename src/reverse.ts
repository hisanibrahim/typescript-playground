const myName: string = "My name is Hisan Ibrahim";

const reverseMyName: string = myName.split("").reverse().join("");

const reverseMyNameWords: string = myName
  .split(" ")
  .reduce((accumilator, current) => {
    const reversed = current.split("").reverse().join("") + " ";
    return accumilator + reversed;
  }, "");

console.log(reverseMyName);
console.log(reverseMyNameWords);
