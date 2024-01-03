let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let numbers: number[] = [1, 2, 3];
// tuple in typescript: fixed length array with each element having a particular type.
let user: [number, string] = [1, "remy"];
// enum in typescript: Used for list of related constants
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize = Size.Medium;
console.log(mySize);

// function annotation in TypeScript
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

console.log(calculateTax(10_000));

//Objects in Typescript

let employee: {
  // keyword readonly help to set object keys to be immutable
  readonly id: 1;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Remy",
  retire: (date: Date) => console.log(date),
};

//Type Alias in Typescript: To define custom types in Typescript

type Employee = {
  readonly id: 1;
  name: string;
  retire: (date: Date) => void;
};

let theEmployee: Employee = {
  id: 1,
  name: "Remy",
  retire: (date: Date) => console.log(date),
};

//Union Type in Typescript: Help to give variables or parameters more than one type in Typescript.

function kgToLbs(weight: number | string): number {
  //Narrowing helps to narrow down a union type into a more specific type when needed
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs("10"));

// type intersection in typescript: Helps to give a parameter or variables different data types at the same time.

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag() {},
  resize() {},
};

// Literal types(exact, specific): Use for limiting the values we can assign to a variable.

type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = "cm" | "inch";

// Nullable types: To check for common bugs related to null and undefine in TypeScript, typescript does not allow us to pass null or undefined as argument by default

function greet(name: string | null | undefined) {
  if (name) console.log(name.toLocaleUpperCase());
  else console.log("Holla!");
}

console.log(greet(undefined));

// Optional Chaining in TypeScript

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0
    ? null
    : {
        birthday: new Date(),
      };
}

let customer = getCustomer(1);
// using default method
// if (customer !== null && customer !== undefined ) console.log(customer.birthday);
//using optional property access operator
console.log(customer?.birthday?.getFullYear());

// optional element access operator: Mostly useful when dealing with arrays the optional call operator also have the same syntax as this, and this works only if a function invocation is referencing an actual function otherwise it returns undefined

// optional element access operator
// customers?.[0]
// optional call operator
let log: any = null;
log?.("a");
