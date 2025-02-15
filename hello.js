"use strict";
// // TYPE SCRIPT [SHERIYANNS CODING SCHOOL ]
// What is TypeScript?
// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript is pure object-oriented with classes, interfaces, and statically typed like C# or Java. TypeScript is developed and maintained by Microsoft. It is an open-source programming language.
// TypeScript is a superset of JavaScript, which means any valid JavaScript code is also a valid TypeScript code. TypeScript code is transformed into JavaScript code via the TypeScript compiler or the Babel compiler. The TypeScript compiler is known as tsc.
// TypeScript is a statically typed language, which means you can catch errors and bugs at the development stage. It needs to be compiled to JavaScript to run in the browser.
// TypeScript is a modern language that supports the latest JavaScript features like ES6, ES7, and ES8. It also supports features like modules, classes, and interfaces.
// key features:
// 1. TypeScript is a superset of JavaScript.
// 2. TypeScript is a statically typed language.
// 3. TypeScript supports object-oriented programming features like classes, interfaces, etc.
// 4. TypeScript can be compiled to all major versions of JavaScript.
// 5. TypeScript is open source.
// 6. TypeScript code can be compiled on any browser, any host, and any OS.
// 7. TypeScript supports optional static typing.
// 8. TypeScript supports generics.
// 9. TypeScript supports modules.
// 10. TypeScript supports ES6 features like classes, interfaces, arrow functions, etc.
// things need to setup for typescript in your system:
// 1. Node.js
// 2. npm
// 3. TypeScript
// 4. Visual Studio Code
// How to Install TypeScript?
// You can install TypeScript using npm. To install TypeScript, run the following command:
// npm install -g typescript
// The -g flag installs TypeScript globally on your system, which means you can use it in any project.
// How to Compile TypeScript?
// To compile TypeScript code, you need to run the TypeScript compiler tsc. The TypeScript compiler is installed when you install TypeScript.
// To compile a TypeScript file, run the following command:
// tsc filename.ts
// This command compiles the TypeScript file filename.ts to a JavaScript file filename.js.
// How to Run TypeScript?
// To run TypeScript code, you need to compile it first. After compiling the TypeScript code, you can run it using the node command.
// To run a TypeScript file, follow these steps:
// 1. Compile the TypeScript file using the tsc command.
// 2. Run the JavaScript file using the node command.
// Here is an example:
// tsc hello.ts
// node hello.js
// This command compiles the hello.ts file to hello.js and runs the hello.js file using the node command.
// tsc -- watch means : it will watch the file and compile it automatically when you save the file.
// tsc --init : it will create a tsconfig.json file in your project.
// tsc : it will compile all the files in your project.
// tsc -p : it will compile the project based on the tsconfig.json file.
// tsc -v : it will show the version of the TypeScript compiler.
// Data Types in TypeScript: 
// TypeScript supports the following data types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Array
// 5. Tuple
// 6. Enum
// 7. Any
// 8. Void
// 9. Null
// 10. Undefined
// 11. Never
// 12. Object
// TypeScript Variables:
// In TypeScript, you can declare variables using the var, let, and const keywords. The var keyword is used to declare variables in JavaScript. The let and const keywords are introduced in ES6.
// The let keyword is used to declare block-scoped variables. The const keyword is used to declare constants.
// Here is an example:
// var name: string = "John";
// let age: number = 30;
// const isAdult: boolean = true;
// In this example, we have declared three variables name, age, and isAdult with the types string, number, and boolean, respectively.
// primitive data types vs refrence data types:
// Primitive Data Types:
// shares actual value
// stores in static memory
// Primitive data types are immutable
// Primitive data types are predefined by the language
// Primitive data types are passed by value
// Primitive data types are copied by value
// Primitive data types are faster
// Primitive data types are fixed in size
// Primitive data types are stored on the stack
// Primitive data types are accessed by their value
// Primitive data types are simple data types
// example:
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt
// Reference Data Types:
// shares reference value
// stores in heap memory
// Reference data types are mutable
// Reference data types are created by the programmer
// Reference data types are passed by reference
// Reference data types are copied by reference
// Reference data types are slower
// Reference data types are dynamic in size
// Reference data types are stored on the heap
// Reference data types are accessed by their reference
// Reference data types are complex data types
// example:
// 1. Object
// 2. Array
// 3. Function
// let arr:number[]= [1,2,3,4,5];
// number means it will only accept numbers.
// tuples:
// A tuple is a fixed-size collection that can have elements of different data types. Tuples are used to store multiple values in a single variable.
// In TypeScript, you can create a tuple using the following syntax:
// let tuple: [number, string, boolean];
// The above syntax creates a tuple with three elements of types number, string, and boolean.
// You can initialize a tuple using the following syntax:
// let tuple:[number,string]=["hello",1];  
// this will give an error because the first element is string and the second element is a number.
// let tuple:[number,string]=[1,"hello"];
// console.log(tuple[0]); // Output: 1
// console.log(tuple[1]); // Output: hello
// In this example, we have created a tuple with two elements of types number and string. We have initialized the tuple with the values 1 and "hello".
// You can access the elements of a tuple using the index. The index of a tuple starts from 0.
// features of tuples:
// 1. Tuples are fixed-size collections.
// 2. Tuples can have elements of different data types.
// 3. Tuples can store multiple values in a single variable.
// 4. Tuples are indexed collections.
// 5. Tuples are accessed using the index.
// 6. Tuples are immutable.
// enums:
// An enum is a collection of related values that can be numeric or string values. Enums are used to define a set of named constants. Enums are defined using the enum keyword.
// In TypeScript, you can create an enum using the following syntax:
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// The above syntax creates an enum named Color with three values: Red, Green, and Blue. By default, enums start with the value 0 and increment by 1.
// You can access the enum values using the dot notation. Here is an example:
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let c: Color = Color.Green;
// console.log(c); // Output: 1
// In this example, we have created an enum named Color with three values: Red, Green, and Blue. We have assigned the value Color.Green to the variable c. The value of Color.Green is 1.
// You can also assign custom values to enum members. Here is an example:
// enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 3
// }
// let c: Color = Color.Green;
// console.log(c); // Output: 2
// In this example, we have assigned custom values to the enum members Red, Green, and Blue. The value of Green is 2.
// You can also access the enum values using the index. Here is an example:
// enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 3
// }
// let c: Color = Color.Green;
// console.log(Color[c]); // Output: Green
// In this example, we have accessed the enum value using the index. The index of Green is 2, so the output is Green.
// features of enums:
// 1. Enums are used to define a set of named constants.
// 2. Enums can have numeric or string values.
// 3. Enums are defined using the enum keyword.
// 4. Enums are indexed collections.
// 5. Enums are accessed using the dot notation.
// 6. Enums are immutable.
// 7. Enums can have custom values.
// 8. Enums can have computed values.
// types of enums:
// 1. Numeric Enums: Numeric enums are enums where each member has a numeric value. Numeric enums are the default type of enums in TypeScript.
// 2. String Enums: String enums are enums where each member has a string value. String enums are useful when you need to have a human-readable representation of the enum values.
// 3. Heterogeneous Enums: Heterogeneous enums are enums where some members have numeric values and others have string values. Heterogeneous enums are not recommended as they can be confusing.
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum); // Output: 30
