const name = "Yla Dev";

export function logger() {
  console.log(name);
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
}

export function adder(num1, num2) {
  console.log(num1 + num2);
}

export function subtraction(num3, num4) {
  const total = num3 - num4;
  if (total > num3) {
    console.log("total is greater than num3");
  } else {
    setTimeout(() => {
      console.log("total is less than num3");
    }, 9000);
  }
}

export function toUpper(text) {
  const upperCase = text.toUpperCase();
  console.log(upperCase);
}
