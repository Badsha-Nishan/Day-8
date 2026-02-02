// Practice 1

// function calculateMoney(ticketSale) {
//   if (ticketSale <= 0) return "Ticket sale must be greater than 0";
//   const totalMoney = ticketSale * 120;
//   const payGuard = 500;
//   const lunch = 8 * 50;
//   const deduct = payGuard + lunch;
//   const output = totalMoney - deduct;
//   return output;
// }

// const ticketSale = 1055;
// const restMoney = calculateMoney(ticketSale);
// console.log(restMoney);

// Practice 2

// function checkName(name) {
//   if (typeof name !== "string" || name.length === 0) return "Invalid";
//   const lastChar = name[name.length - 1].toLowerCase();
//   if (
//     lastChar === "a" ||
//     lastChar === "y" ||
//     lastChar === "i" ||
//     lastChar === "e" ||
//     lastChar === "o" ||
//     lastChar === "u" ||
//     lastChar === "w"
//   ) {
//     return "Good Name";
//   }
//   return "Bad Name";
// }

// const name = "Fahad";
// const result = checkName(name);
// console.log(result);

// Practice 3

// function deleteInvalids(array) {
//   if (!Array.isArray(array)) return "Invalid Array";
//   const output = array.filter(
//     (valid) => typeof valid === "number" && !Number.isNaN(valid)
//   );
//   return output;
// }

// const arr = [NaN, 1, 12, 0, -1, undefined];
// const result = deleteInvalids(arr);
// console.log(result);

// Practice 4

// function password(obj) {
//   if (
//     Object.keys(obj).length < 3 ||
//     obj.birthYear.toString().length < 4 ||
//     !obj
//   )
//     return "Invalid";
//   const userName = obj.name;
//   const userBirthYear = obj.birthYear;
//   const site = obj.siteName;
//   const siteName = site[0].toUpperCase() + site.slice(1);
//   const output = siteName + "#" + userName + "@" + userBirthYear;
//   return output;
// }
// const obj = {
//   name: "kolimuddin",
//   birthYear: 1999,
//   siteName: "facebook",
// };

// const result = password(obj);
// console.log(result);

// Practice 5

// function monthlySavings(prop1, prop2) {
//   if (!Array.isArray(prop1)) return "Invalid";
//   let money = [];
//   let totalMoney = 0;
//   for (const val of prop1) {
//     if (val >= 3000) {
//       money.push(val - (val * 20) / 100);
//     } else {
//       money.push(val);
//     }
//   }
//   for (const val of money) {
//     totalMoney += val;
//   }
//   let total = 0;
//   for (const item of money) {
//     total += item;
//   }
//   const output = total - prop2;
//   if (output < 0) return "Earn More";
//   return output;
// }

// const arr = [1000, 2000, 2500];
// const livingCost = 5000;

// const result = monthlySavings(arr, livingCost);
// console.log(result);

//Task from ChatGPT-------------------------

// Task-1
const name = "JavaScript";
const finalName = name.toLowerCase();
let count = 0;
for (const val of finalName) {
  if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
    count++;
  }
}
console.log(count);

// Task-2
const arr = [1, 2, 3, 4, 5];
let total = 0;
for (const val of arr) {
  total += val;
}
console.log(total);

// Another Way
const another = arr.reduce((res, cur) => res + cur, 0); // 0 for initial value coz if array is empty.
console.log(another);

// Task 3
const array = [34, 15, -88, 2, 1];
let smallest = array[0];
for (const val of array) {
  if (smallest > val) {
    smallest = val;
  }
}
const min = Math.min(...array);
console.log(min);

console.log(smallest);

const str1 = "hello";
const fnc = (prop) => {
  let rev = "";
  for (let i = prop.length - 1; i >= 0; i--) {
    rev = rev + prop[i];
  }
  return rev;
};

console.log(fnc(str1));
