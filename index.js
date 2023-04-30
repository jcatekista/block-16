//customer objects for workshop
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};
//timmys price
const tPrice1 = 25;
const tRefills = 3;
const tCoup = 10;
//total refill price
function tTotalRefillPrice(tPrice1, tRefills) {
  return tPrice1 * tRefills;
}
const tRefillPrice = tTotalRefillPrice(tPrice1, tRefills);
//log new refill price
console.log(tRefillPrice);
//no subscription
//if coupon $10 off
function tCouponPrice(tRefillPrice, tCoup) {
  return tRefillPrice - tCoup;
}
const tTotalPrice = tCouponPrice(tRefillPrice, tCoup);
//log "grand total is ${finalAmount}"
console.log("Timmy, your grand total is $" + tTotalPrice);

//sarahs price
const sPrice1 = 50;
const sRefills = 1;
const sSub = 0.75;
//total refill price
function sTotalRefillPrice(sPrice1, sRefills) {
  return sPrice1 * sRefills;
}
const sRefillPrice = sTotalRefillPrice(sPrice1, sRefills);
//log new refill price
console.log(sRefillPrice);
//if subscription 25%off
function sSubPrice(sRefillPrice, sSub) {
  return sRefillPrice * sSub;
}
const sTotalPrice = sSubPrice(sRefillPrice, sSub);
//no coupon
//log "grand total is ${finalAmount}"
console.log("Sarah, your grand total is $" + sTotalPrice);

//rockys price
const rPrice1 = 30;
const rRefills = 5;
const rSub = 0.75;
const rCoup = 10;
//total refill price
function rTotalRefillPrice(rPrice1, rRefills) {
  return rPrice1 * rRefills;
}
const rRefillPrice = rTotalRefillPrice(rPrice1, rRefills);
//log new refill price
console.log(rRefillPrice);
//if subscription 25%off
function rSubPrice(rRefillPrice, rSub) {
  return rRefillPrice * rSub;
}
const rDiscPrice = rSubPrice(rRefillPrice, rSub);
//log price after subscription discount
console.log(rDiscPrice);
//if coupon $10 off
function rFullDiscPrice(rDiscPrice, rCoup) {
  return rDiscPrice - rCoup;
}
const rTotalPrice = rFullDiscPrice(rDiscPrice, rCoup);
//log "grand total is$"
console.log("Rocky, your grand total is $" + rTotalPrice);
