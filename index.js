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

function monthlySavings(prop1, prop2) {
  let money = [];
  let totalMoney = 0;
  for (const val of prop1) {
    if (val >= 3000) {
      money.push(val - (val * 20) / 100);
    } else {
      money.push(val);
    }
  }
  for (const val of money) {
    totalMoney += val;
  }
  return money;
}

const arr = [1000, 2000, 3000];
const livingCost = 5400;

const result = monthlySavings(arr, livingCost);
console.log(result);
