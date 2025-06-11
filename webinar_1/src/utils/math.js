export const PI = 3.14159265359;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

export function calculateCircleArea(radius) {
  return PI * radius * radius;
}

export function calculateCircleCircumference(radius) {
  return 2 * PI * radius;
}


export default {
  PI,
  add,
  subtract,
  multiply,
  divide,
  calculateCircleArea,
  calculateCircleCircumference
};
