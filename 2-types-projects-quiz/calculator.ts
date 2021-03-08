/**
 * Let's make a calculator 🧮
 */
type Calculator = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(str: Calculator, num1: number, num2: number): number {
  switch (str) {
    case "add":
      return num1 + num2;
    case "substract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    case "remainder":
      return num1 % num2;
    default:
      throw new Error("error");
  }
  //-> 내가 푼 방법
  // if (str === "add") {
  //   return num1 + num2;
  // } else if (str === "substract") {
  //   return num1 - num2;
  // } else if (str === "multiply") {
  //   return num1 * num2;
  // } else if (str === "divide") {
  //   return num1 / num2;
  // } else if (str === "remainder") {
  //   return num1 % num2;
  // }
}
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
