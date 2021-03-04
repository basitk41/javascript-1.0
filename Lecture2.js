//undefined vs undeclared variables

// let a;
// console.log(a);
// let b;
// console.log(b);
// b = 10;

//Global vs Local

// {
//   a = 10;
//   let c = 20;
// }
// console.log(c);

//Variable Shadowing ( Same name => Global/Local )

// let a = 10;
// {
//  let a = 20;
//   console.log(a);
// }
// console.log(a);

// Accessing Global Variables as Local

// let a = 10;
// console.log(a);
// {
//   a = 20;
//   console.log(a);
// }
// console.log(a);

// Strict

// {
//   let a = 10;
// }
// console.log(a);

//Hoisting

// console.log(a);
// let a = 10; // => let a; console.log(a); a=10;

// Hi();

// function Hi() {
//   console.log("Rafi");
// }

//Let And Const

// let a = 10;
// const b = 20;
// a = 30;
// b = 40;

//
