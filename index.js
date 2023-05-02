//subscription gets a 25% discount after total
//coupons give $10 discount after the subscription discount has been calculated

//the total for Timmy should be $65
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};
//the total for Sarah should be $37.5
const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};
//the total for Rocky should be $102.5
const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};
//create a function to calculate the totals with discounts included
function calculateTotal(customer) {
  let total = customer.pricePerRefill * customer.refills;

  if (customer.subscription) {
    total *= 0.75;
  }

  if (customer.coupon) {
    total -= 10;
  }

  return total;
}
//assigning the totals to each name
const timmyTotal = calculateTotal(timmy);
const sarahTotal = calculateTotal(sarah);
const rockyTotal = calculateTotal(rocky);
//and here we will write out a solution to show the final totals

console.log(`Timmy, Your grand total is $${timmyTotal}.`);
console.log(`Sarah, Your grand total is $${sarahTotal}.`);
console.log(`Rocky, Your grand total is $${rockyTotal}.`);
