//define values for budget, price1, price2
const budget = 50;
const price1 = 20;
const price2 = 25;

//define function
function sumOfGifts(price1, price22) {
  return price1 + price2;
}

//store function
const giftTotal = sumOfGifts(price1, price2);

//define function of gift price plus tax
function addTax(giftTotal) {
  return (giftTotal = giftTotal * 0.08);
}

//store price with tax
const giftsWithTax = addTax(giftTotal);

//define function to compare giftsWithTax and budget, return if greather than or equal to
function holidayShopping(budget, giftsWithTax) {
  return budget <= giftsWithTax;
}

//execute function for budget and giftsWithTax
holidayShopping(budget, giftsWithTax);

console.log(holidayShopping());

//arrow syntax version
const budget1 = 50;
const price3 = 20;
const price4 = 25;

const sumOfGifts1 = (price3, price4) => (price3 = price4);

const giftTotal1 = sumOfGifts1(price3, price4);

const addTax1 = (giftTotalArrow1) => giftTotal1 + giftTotal1 * 0.08;

const giftsWithTax1 = addTax1(giftTotal1);

const holidayShopping1 = (budget1, giftsWithTax1) => budget1 < giftsWithTax1;

holidayShopping1(budget1, giftsWithTax1);

console.log(holidayShopping1());
