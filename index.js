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

function deleteInvalids(array) {
  if (!Array.isArray(array)) return "Invalid Array";
  const output = array.filter((valid) => typeof valid === "number");
  return output;
}

const arr = [5, 2, 4, null, "string", 0];
const result = deleteInvalids(arr);
console.log(result);
