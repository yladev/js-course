import { answer } from "./AddingTwoVar.js";
import { d, e, num3 } from "./Coercion.js";
import { j, k, l } from "./Datatypes.js";
import { adder, logger } from "./Function.js";
import {
  calculation,
  calculationTest,
  greeting,
  sayHello,
} from "./FunctionDeclaration.js";
import { a, m, n, number } from "./Operators.js";
import { c, z } from "./Variables.js";
import { numberArrays, stringArrays } from "./arrays.js";

console.log("Answer => " + answer);

console.log("Subtraction two vars => " + c);

console.log(z);

console.log(typeof j);
console.log(typeof k);
console.log(typeof l);

console.log(num3);
console.log(d);
console.log(e);

console.log(a);
console.log(m);
console.log(n);
console.log(number);

console.log(numberArrays);
console.log(typeof numberArrays);
console.log("arrays length => " + numberArrays.length); // actual number, not zero based
console.log(numberArrays); // push array
console.log("pop array => " + numberArrays);
console.log("array index number 0 => " + numberArrays[0]);
console.log("array index number 3 => " + numberArrays[3]);
console.log(stringArrays);
console.log(stringArrays[5]); // undefined array

// function
sayHello("Jason");
sayHello("Andrew");
sayHello("Yan Yan");

let tax = calculationTest(100);
console.log(tax);

greeting();

let total = calculation(5);
console.log(total);

// function expression
setTimeout(function () {
  console.log("Jason Andrew");
}, 5000);

setTimeout(() => {
  console.log("I attend in Level-3 diploma in computing");
}, 6000);

function conditionStatement() {
  let isMale = false;
  if (isMale) {
    console.log("its male");
  } else {
    setTimeout(() => {
      console.log("its female");
    }, 7000);
  }
}
conditionStatement();

// let counter = 0;
// function timeOut() {
//   setTimeout(() => {
//     console.log("hi" + counter++);
//     timeOut();
//   }, 2000);
// }
// timeOut();

logger();
adder(2, 3);
