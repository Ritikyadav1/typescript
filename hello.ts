// // // TYPE SCRIPT [SHERIYANNS CODING SCHOOL ]
// // What is TypeScript?
// // TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript is pure object-oriented with classes, interfaces, and statically typed like C# or Java. TypeScript is developed and maintained by Microsoft. It is an open-source programming language.
// // TypeScript is a superset of JavaScript, which means any valid JavaScript code is also a valid TypeScript code. TypeScript code is transformed into JavaScript code via the TypeScript compiler or the Babel compiler. The TypeScript compiler is known as tsc.
// // TypeScript is a statically typed language, which means you can catch errors and bugs at the development stage. It needs to be compiled to JavaScript to run in the browser.
// // TypeScript is a modern language that supports the latest JavaScript features like ES6, ES7, and ES8. It also supports features like modules, classes, and interfaces.

// // key features:
// // 1. TypeScript is a superset of JavaScript.
// // 2. TypeScript is a statically typed language.
// // 3. TypeScript supports object-oriented programming features like classes, interfaces, etc.
// // 4. TypeScript can be compiled to all major versions of JavaScript.
// // 5. TypeScript is open source.
// // 6. TypeScript code can be compiled on any browser, any host, and any OS.
// // 7. TypeScript supports optional static typing.
// // 8. TypeScript supports generics.
// // 9. TypeScript supports modules.
// // 10. TypeScript supports ES6 features like classes, interfaces, arrow functions, etc.

// // things need to setup for typescript in your system:
// // 1. Node.js
// // 2. npm
// // 3. TypeScript
// // 4. Visual Studio Code

// // How to Install TypeScript?
// // You can install TypeScript using npm. To install TypeScript, run the following command:
// // npm install -g typescript
// // The -g flag installs TypeScript globally on your system, which means you can use it in any project.

// // How to Compile TypeScript?
// // To compile TypeScript code, you need to run the TypeScript compiler tsc. The TypeScript compiler is installed when you install TypeScript.
// // To compile a TypeScript file, run the following command:
// // tsc filename.ts
// // This command compiles the TypeScript file filename.ts to a JavaScript file filename.js.

// // How to Run TypeScript?
// // To run TypeScript code, you need to compile it first. After compiling the TypeScript code, you can run it using the node command.
// // To run a TypeScript file, follow these steps:
// // 1. Compile the TypeScript file using the tsc command.
// // 2. Run the JavaScript file using the node command.
// // Here is an example:
// // tsc hello.ts
// // node hello.js
// // This command compiles the hello.ts file to hello.js and runs the hello.js file using the node command.

// // tsc -- watch means : it will watch the file and compile it automatically when you save the file.
// // tsc --init : it will create a tsconfig.json file in your project.
// // tsc : it will compile all the files in your project.
// // tsc -p : it will compile the project based on the tsconfig.json file.
// // tsc -v : it will show the version of the TypeScript compiler.

// // Data Types in TypeScript: 
// // TypeScript supports the following data types:
// // 1. Number
// // 2. String
// // 3. Boolean
// // 4. Array
// // 5. Tuple
// // 6. Enum
// // 7. Any
// // 8. Void
// // 9. Null
// // 10. Undefined
// // 11. Never
// // 12. Object

// // TypeScript Variables:
// // In TypeScript, you can declare variables using the var, let, and const keywords. The var keyword is used to declare variables in JavaScript. The let and const keywords are introduced in ES6.
// // The let keyword is used to declare block-scoped variables. The const keyword is used to declare constants.
// // Here is an example:
// // var name: string = "John";
// // let age: number = 30;
// // const isAdult: boolean = true;
// // In this example, we have declared three variables name, age, and isAdult with the types string, number, and boolean, respectively.

// // primitive data types vs refrence data types:
// // Primitive Data Types:
// // shares actual value
// // stores in static memory
// // Primitive data types are immutable
// // Primitive data types are predefined by the language
// // Primitive data types are passed by value
// // Primitive data types are copied by value
// // Primitive data types are faster
// // Primitive data types are fixed in size
// // Primitive data types are stored on the stack
// // Primitive data types are accessed by their value
// // Primitive data types are simple data types
// // example:
// // 1. Number
// // 2. String
// // 3. Boolean
// // 4. Null
// // 5. Undefined
// // 6. Symbol
// // 7. BigInt
// // Reference Data Types:
// // shares reference value
// // stores in heap memory
// // Reference data types are mutable
// // Reference data types are created by the programmer
// // Reference data types are passed by reference
// // Reference data types are copied by reference
// // Reference data types are slower
// // Reference data types are dynamic in size
// // Reference data types are stored on the heap
// // Reference data types are accessed by their reference
// // Reference data types are complex data types
// // example:
// // 1. Object
// // 2. Array
// // 3. Function

// // let arr:number[]= [1,2,3,4,5];
// // number means it will only accept numbers.

// // tuples:
// // A tuple is a fixed-size collection that can have elements of different data types. Tuples are used to store multiple values in a single variable.
// // In TypeScript, you can create a tuple using the following syntax:
// // let tuple: [number, string, boolean];
// // The above syntax creates a tuple with three elements of types number, string, and boolean.
// // You can initialize a tuple using the following syntax:
// // let tuple:[number,string]=["hello",1];  
// // this will give an error because the first element is string and the second element is a number.
// // let tuple:[number,string]=[1,"hello"];
// // console.log(tuple[0]); // Output: 1
// // console.log(tuple[1]); // Output: hello
// // In this example, we have created a tuple with two elements of types number and string. We have initialized the tuple with the values 1 and "hello".
// // You can access the elements of a tuple using the index. The index of a tuple starts from 0.


// // features of tuples:
// // 1. Tuples are fixed-size collections.
// // 2. Tuples can have elements of different data types.
// // 3. Tuples can store multiple values in a single variable.
// // 4. Tuples are indexed collections.
// // 5. Tuples are accessed using the index.
// // 6. Tuples are immutable.


// // enums:
// // An enum is a collection of related values that can be numeric or string values. Enums are used to define a set of named constants. Enums are defined using the enum keyword.
// // In TypeScript, you can create an enum using the following syntax:
// // enum Color {
// //     Red,
// //     Green,
// //     Blue
// // }
// // The above syntax creates an enum named Color with three values: Red, Green, and Blue. By default, enums start with the value 0 and increment by 1.
// // You can access the enum values using the dot notation. Here is an example:
// // enum Color {
// //     Red,
// //     Green,
// //     Blue
// // }
// // let c: Color = Color.Green;
// // console.log(c); // Output: 1
// // In this example, we have created an enum named Color with three values: Red, Green, and Blue. We have assigned the value Color.Green to the variable c. The value of Color.Green is 1.
// // You can also assign custom values to enum members. Here is an example:
// // enum Color {
// //     Red = 1,
// //     Green = 2,
// //     Blue = 3
// // }
// // let c: Color = Color.Green;
// // console.log(c); // Output: 2
// // In this example, we have assigned custom values to the enum members Red, Green, and Blue. The value of Green is 2.
// // You can also access the enum values using the index. Here is an example:
// // enum Color {
// //     Red = 1,
// //     Green = 2,
// //     Blue = 3
// // }
// // let c: Color = Color.Green;
// // console.log(Color[c]); // Output: Green
// // In this example, we have accessed the enum value using the index. The index of Green is 2, so the output is Green.

// // features of enums:
// // 1. Enums are used to define a set of named constants.
// // 2. Enums can have numeric or string values.
// // 3. Enums are defined using the enum keyword.
// // 4. Enums are indexed collections.
// // 5. Enums are accessed using the dot notation.
// // 6. Enums are immutable.
// // 7. Enums can have custom values.
// // 8. Enums can have computed values.

// // types of enums:
// // 1. Numeric Enums: Numeric enums are enums where each member has a numeric value. Numeric enums are the default type of enums in TypeScript.
// // 2. String Enums: String enums are enums where each member has a string value. String enums are useful when you need to have a human-readable representation of the enum values.
// // 3. Heterogeneous Enums: Heterogeneous enums are enums where some members have numeric values and others have string values. Heterogeneous enums are not recommended as they can be confusing.

// // let a = 10;
// // let b = 20;

// // let sum = a + b;
// // console.log(sum); // Output: 30
// // console.log("Hello World"); // Output: Hello World


// // any , unknown, never, void, null, undefined, object 
// // any: The any data type is used to represent any value. It is the most flexible data type in TypeScript. The any data type can store any type of value.
// let a;
// console.log(typeof a); // Output: undefined 

// a = 10;
// console.log(typeof a); // Output: number

// a = "hello";
// console.log(typeof a); // Output: string

// a = true;
// console.log(typeof a); // Output: boolean
// // In this example, we have declared a variable a without specifying its type. The type of the variable a is undefined. We have assigned different values to the variable a, and the type of the variable changes based on the value.

// // unknown: The unknown data type is used to represent values that are not known at compile time. The unknown data type is similar to the any data type, but it is type-safe.
// let b: unknown;
// b = 10;
// console.log(typeof b); // Output: number

// b = "hello";
// console.log(typeof b); // Output: string

// void
// // The void data type is used to represent the absence of a value. The void data type is used as the return type of functions that do not return a value.   
// function greet(): void {
//     console.log("Hello World");
// }
// greet(); // Output: Hello World
// // In this example, we have defined a function greet that does not return a value. The return type of the function is void.

// // null and undefined

// // The null and undefined data types are used to represent null and undefined values, respectively. The null data type is used to represent an intentional absence of a value, while the undefined data type is used to represent an uninitialized value.
// let c: null = null;
// let d: undefined = undefined;
// // In this example, we have declared two variables c and d with the types null and undefined, respectively.

// // object
// // The object data type is used to represent non-primitive types in TypeScript. The object data type can store multiple values of different types.
// let obj: object = {
//     name: "John",
//     age: 30
// };
// console.log(obj); // Output: { name: 'John', age: 30 }
// // In this example, we have declared a variable obj with the type object. The variable obj stores an object with two properties name and age.

// // never
// // The never data type is used to represent values that never occur. The never data type is used as the return type of functions that never return a value.
// function error(message: string): never {
//     throw new Error(message);
// }
// // In this example, we have defined a function error that throws an error. The return type of the function is never.
// interface in typecript 
// An interface in TypeScript is used to define the structure of an object. Interfaces are used to define contracts in your code and to provide explicit names for complex types.
// In TypeScript, you can create an interface using the interface keyword. Here is the syntax to create an interface:

// interface Person {
//     name : string;
//     age:    number;
// }

// function greet(person: Person) {
//     console.log("Hello " + person.name + " Your age is " + person.age);
// }
// greet({
//     name: "Ritik",
//     age: 24
// });

// extending interfaces in typescript
// In TypeScript, you can extend an interface using the extends keyword. When you extend an interface, the child interface inherits the properties of the parent interface.
// Here is the syntax to extend an interface:
// interface person{
//     name:string;
//     age:number;
// }

// interface employee extends person{
//     empId:number;
// }

// function greet(emp:employee){
//     console.log("Hello "+emp.name+" Your age is "+emp.age+" Your employee id is "+emp.empId);
// }
// greet({
//     name:"Ritik",
//     age:24,
//     empId:101
// });

// type alieases in typescript
// A type alias in TypeScript is used to create a new name for a type. Type aliases are used to provide meaningful names to complex types.
// In TypeScript, you can create a type alias using the type keyword. Here is the syntax to create a type alias:

// type person = {
//     name: string;
//     age: number;
// };

// function greet(person: person) {
//     console.log("Hello " + person.name + " Your age is " + person.age);
// }
// greet({
//     name: "Ritik",
//     age: 24
// });

// class and object in typescript
// blueprint of an object
// In TypeScript, a class is a blueprint for creating objects. A class defines the
// properties and methods of an object. Objects are instances of a class.
// In TypeScript, you can create a class using the class keyword. Here is the syntax to create a class:
// class person {
//     constructor(public name: string, public age: number) {
//     }


// }
// let p = new person("Ritik", 24);
// console.log(p.name);

// access modifiers in typescript
// In TypeScript, access modifiers are used to control the access to class members. Access modifiers define the visibility of class members.
// TypeScript supports the following access modifiers:
// 1. Public: Public members are accessible from anywhere.
// 2. Private: Private members are accessible only within the class that defines them.
// 3. Protected: Protected members are accessible within the class that defines them and in the derived classes.
// Here is an example of access modifiers in TypeScript:
// class person {
//     constructor(public name: string, private age: number) {
//     }

// }

// class employee extends person {
//     constructor(name: string, age: number, public empId: number) {
//         super(name, age);
//     }
// }

// let emp = new employee("Ritik", 24, 101);
// console.log(emp.name);
// console.log(emp.empId);
// in this example we have created a class person with two properties name and age. The age property is private, so it is accessible only within the class. We have created a class employee that extends the person class. The employee class has an additional property empId. We have created an object emp of the employee class and accessed the name and empId properties.
// In this example, we have created a class person with
// two properties name and age. The age property is private, so it is accessible only within the class. We have created a class employee that extends the person class. The employee class has an additional property empId. We have created an object emp of the employee class and accessed the name and empId properties.

// constructor in typescript
// A constructor in TypeScript is a special method that is called when an object is instantiated. Constructors are used to initialize the properties of an object.
// In TypeScript, you can create a constructor using the constructor keyword. Here is the syntax to create a constructor:
// class person {
//     constructor(public name: string, public age: number) {
//     }
// }
// let p = new person("Ritik", 24);
// console.log(p.name);
// In this example, we have created a class person with
// two properties name and age. The constructor of the class initializes
// the properties of the object. We have created an object p of the person class
// and accessed the name property.

// private constructor in typescript
// In TypeScript, you can make a constructor private to prevent the instantiation of a class. A private constructor is used to create a singleton pattern in TypeScript.
// In TypeScript, you can make a constructor private by using the private keyword. Here is an example of a private constructor:
// class Singleton {
//     private static instance: Singleton;
//     private constructor() {
//     }
//     public static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
// }
// let s1 = Singleton.getInstance();
// let s2 = Singleton.getInstance();
// console.log(s1 === s2); // Output: true
// In this example, we have created a class Singleton with a private constructor. The class has a static method getInstance that returns an instance of the class. We have created two objects s1 and s2 of the Singleton class using the getInstance method. The objects s1 and s2 are the same instance, so the output is true.

// protected constructor in typescript
// class person {
//     constructor(protected name:string , protected age : number){

//     }
// }
// class employe extends person {
//     constructor(name:string,age:number,public empId:number){
//         super(name,age);
//     }
// }
// let emp = new employe("Ritik",24,101);
// console.log(emp.name); // got error because name is protected so we can't access it outside the class.
// console.log(emp.age); // got error because age is protected so we can't access it outside the class.
// console.log(emp.empId); // got error because name and age are protected so we can't access them outside the class.
// In this example, we have created a class person with
// two properties name and age. The constructor of the class initializes
// the properties of the object. We have created an object p of the person class
// and accessed the name property.

// Inheritance in TypeScript
// Inheritance is a mechanism in TypeScript that allows a class to inherit properties and methods from another class. The class that inherits properties and methods is called a child class or subclass
// In TypeScript, you can create a class that inherits from another class using the extends keyword. Here is the syntax to create a class that inherits from another class:
// class person {
//     constructor(public name: string, public age: number) {
//     }
// }
// class employee extends person {
//     constructor(name: string, age: number, public empId: number) {
//         super(name, age);
//     }
// }
// let emp = new employee("Ritik", 24, 101);
// console.log(emp.name);
// console.log(emp.age);
// console.log(emp.empId);
// In this example, we have created a class person with
// two properties name and age. The class has a constructor that initializes
// the properties of the object. We have created a class employee that extends
// the person class. The employee class has an additional property empId. We have
// created an object emp of the employee class and accessed the name, age, and empId properties.

// readonly in typescript
// In TypeScript, you can make a property readonly to prevent it from being modified. A readonly property can only be initialized once.
// In TypeScript, you can make a property readonly by using the readonly keyword. Here is an example of a readonly property:
// class person {
//     readonly name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// let p = new person("Ritik");
// console.log(p.name);
// In this example, we have created a class person with
// a readonly property name. The name property is initialized in the constructor
// and cannot be modified after initialization. We have created an object p of the
// person class and accessed the name property.

// static in typescript
// In TypeScript, you can create static properties and methods in a class. Static properties and methods are associated with the class itself, not with the instances of the class.
// In TypeScript, you can create static properties and methods using the static keyword. Here is an example of a static property and method:
// class person {
//     static count: number = 0;
//     constructor(public name: string) {
//         person.count++;
//     }
//     static getCount(): number {
//         return person.count;
//     }
// }
// let p1 = new person("Ritik");
// let p2 = new person("John");
// console.log(person.getCount()); // Output: 2
// In this example, we have created a class person with
// a static property count and a static method getCount. The count property
// is incremented in the constructor, and the getCount method returns the count
// of the number of instances of the class.

// abstract class in typescript
// In TypeScript, an abstract class is a class that cannot
// be instantiated. Abstract classes are used to define a blueprint for other classes.
// In TypeScript, you can create an abstract class using the abstract keyword. Here is an example of an abstract class:
//  abstract class person {
//     constructor(public name: string) {
//     }
//     abstract greet(): void;
//  }

//     class employee extends person {
//         constructor(name: string, public empId: number) {
//             super(name);
//         }
//         greet(): void {
//             console.log("Hello " + this.name + " Your employee id is " + this.empId);
//         }
//     }
//     let emp = new employee("Ritik", 101);
//     emp.greet();
// In this example, we have created an abstract class person with

// static properties and methods in typescript
// In TypeScript, you can create static properties and methods in a class. Static properties and methods are associated with the class itself, not with the instances of the class.
// In TypeScript, you can create static properties and methods using the static keyword. Here is an example of a static property and method:
//  class person {
//     static id = "John";
//     static age = 30;

//  }
//     console.log(person.id);
//     console.log(person.age);
// In this example, we have created a class person with
// two static properties id and age. The id property is initialized with the value "John"
// and the age property is initialized with the value 30. We have accessed the static
// properties id and age using the class name.

// getter and setter in typescript
// In TypeScript, you can create getter and setter methods to get and set the values of class properties. Getters and setters are used to control the access to class properties.
// In TypeScript, you can create a getter method using the get keyword and a setter method using the set keyword. Here is an example of a getter and setter:
// class person {
//     private _name: string;
//     get name(): string {
//         return this._name;
//     }
//     set name(name: string) {
//         this._name = name;
//     }
// }
// let p = new person();
// p.name = "John";
// console.log(p.name);
// In this example, we have created a class person with
// a private property _name. We have created a getter method name to get the value of the property
// and a setter method name to set the value of the property. We have created an object p of the
// person class and set the value of the name property using the setter method. We have accessed the
// value of the name property using the getter method.

// function overloading in typescript
// In TypeScript, you can create function overloads to define multiple function signatures for a single function. Function overloading is used to provide type checking for different types of arguments.
// In TypeScript, you can create function overloads using the overload keyword. Here is an example of function overloading:
// function adcd ():void {
//     console.log("Hello World");

// }

// function sum(a: number, b: number): number;
// function sum(a: string, b: string): string;
// function sum(a: any, b: any): any {
//     return a + b;
// }
// console.log(sum(10, 20)); // Output: 30
// console.log(sum("Hello", "World")); // Output: HelloWorld
// In this example, we have created a function sum with
// two function signatures. The first function signature takes two arguments of type number
// and returns a number. The second function signature takes two arguments of type string and
// returns a string. The third function signature is the implementation of the function that takes
// any type of arguments and returns any type of value. We have called the function sum with
// different types of arguments and checked the output.

// generics in typescript
// In TypeScript, generics are used to create reusable components. Generics allow you to define a class, interface, or function with placeholders for the type of its properties, methods, or arguments.
// In TypeScript, you can create generics using the angle brackets <>. Here is an example of generics:

// function identity<T>(arg: T): T {
//     return arg;
// }

// let output= identity<string>("Hello World");
// console.log(output); // Output: Hello World
// In this example, we have created a function identity with a type parameter T. The function takes an argument of type T and returns the argument of type T. We have called the function identity with the type parameter string and the argument "Hello World".
// The output of the function is "Hello World".
// Generics are used to create reusable components in TypeScript. You can create a class, interface, or function with a type parameter that can be replaced with any type at the time of use.

//generics in class
// class person<T> {
//     constructor(public name: T) {

// }
// }
// let p = new person<string>("John");
// console.log(p.name); // Output: John
// let q = new person<number>(30);
// console.log(q.name); // Output: 30
// In this example, we have created a class person with
// a type parameter T. The class has a property name of type T. We have created an object p of the
// person class with the type parameter string and the value "John". We have created another object q of
// the person class with the type parameter number and the value 30. We have accessed the name property of
// the objects p and q.

//modules in typescript
// In TypeScript, modules are used to organize code into reusable units. Modules allow you to split your code into multiple files and import/export the code between files.
// In TypeScript, you can create a module using the export keyword. Here is an example of a module:
// // module.ts
// export function greet(name: string): void {
//     console.log("Hello " + name);
// }
// // app.ts
// import { greet } from "./module";
// greet("John");
// In this example, we have created a module greet in the file module.ts. The module exports a function greet that takes a name as an argument and logs a greeting message. We have imported the greet function in the file app.ts and called the function with the argument "John".
// Modules are used to organize code into reusable units. You can create a module with multiple files and import/export the code between files.

// decorators in typescript
// In TypeScript, decorators are used to add metadata to classes, methods, and properties. Decorators are a special kind of declaration that can be attached to a class declaration
// In TypeScript, you can create decorators using the @ symbol followed by the decorator name. Here is an example of a decorator:
// function log(target: any) {
//     console.log("decorator was called");
// }

// class person {
//   @log
//     greet() {
//         console.log("Hello World");
//     }
// }
// let p = new person();
// p.greet();

// In this example, we have created a decorator log that logs the method name when the method is called. We have applied the decorator to the greet method of the person class. When the greet method is called, the decorator logs the method name "greet".
// Decorators are used to add metadata to classes, methods, and properties in TypeScript. You can create decorators using the @ symbol followed by the decorator name.


