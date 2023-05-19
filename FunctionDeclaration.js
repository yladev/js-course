export function sayHello(name) {
  console.log("------------");
  console.log("hello " + name + "!");
  console.log("------------");
}

export function calculationTest(amount) {
  let result = amount * 0.0825;
  return result;
}

export function greeting() {
  console.log("Hello World");
}

export function calculation(totalAmount) {
  let totalPrice = totalAmount * 8;
  return totalPrice;
}
