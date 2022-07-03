const a: string = "Hello Jalish";

function getLowerCase(str: string) {
  return str.toLowerCase();
}
console.log(getLowerCase("Hello"));
console.log(getLowerCase("Hello World"));
console.log(getLowerCase(""));

const b: number = 34;

function add(number1: number, number2: number): number {
  return number1 + number2;
}
add(5, 3);
add(45, b);

const substrack = (number1: number, number2: number): number => {
  return number1 - number2;
};
// Array<T> Generic
const arr2: Array<number | string> = [123, 44, "Jalish"];
const arr: number[] = [12, 34, 444, 44];
const arr1: string[] = ["jalish", "danish"];
// type
type numberOrSting = number | string;

const id: numberOrSting = "34";
// interface
interface iPerson {
  name: string;
  age: number;
  hobby?: string;
}

const person: iPerson = {
  name: "Nishat",
  age: 34,
  hobby: "Football",
};

const person1: iPerson = {
  name: "Jalish",
  age: 34,
};

// Enums
enum Colors {
  color1 = "f1f1f1",
  color2 = "f3f3f3",
  color3 = "f3f3f4",
}
console.log(Colors.color1);
console.log(Colors.color2);
