function calculateMoney(ticketSale) {
  if (ticketSale <= 0) return "Ticket sale must be greater than 0";
  const totalMoney = ticketSale * 120;
  const payGuard = 500;
  const lunch = 8 * 50;
  const deduct = payGuard + lunch;
  const output = totalMoney - deduct;
  return output;
}

const ticketSale = 1055;
const restMoney = calculateMoney(ticketSale);
console.log(restMoney);
