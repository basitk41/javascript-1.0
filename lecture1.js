// printing Hi.(console.log + alert + write + getElementById/Tag) (browser, node)......
// console.log("Hi");
// alert("Hi");
// document.write("Hi");
// let element = document.getElementById("root");
// element.innerHTML = "Hi";
// element.className = "divClass";

// for node type commond node filename.js and enter

//Comments(// ,/**/)........
// signle line comment
/*
multi line comments
*/
// this is
/* this
is
comment
*/

// case-sensitive(let a, let A)........
// let a = 10;
// let A = 20;
// console.log(a);
// console.log(A);

//Identifiers,Statements(Start with character,camel Notation,_$,0-9),(ends with ;)..........
// let firstName = "Abbas";
// let element = document.getElementById("root");
// element.innerHTML = firstName;
// element.style.backgroundColor = "blue";
// element.style.display = "none";
// console.log(element);

// scope of var and let...........
// let c=10;

// function hi(){
//     var a=10;
//     console.log(a);
//     if(true){
//         let b=2;
//         var c=3;
//     }
//     console.log(b);
//     console.log(c);

// }
// hi();

// function rafi() {
//   var a = 10;
//   if (true) {
//     var b = 20;
//     console.log("inside if loop a ", a);
//   }
//   console.log("outside if loop b ", b);
// }
// console.log(a);
// console.log(b);
// rafi();

// function rafi() {
//   let a = 10;

//   if (true) {
//     let b = 20;
//     console.log("inside if loop a ", a);
//     if (true) {
//       console.log(b);
//     }
//   }

//   console.log("outside if loop b ", b);
// }
// console.log(a);
// console.log(b);
// rafi();

// function rafi() {
//   a = 10;
//   if (true) {
//     console.log("inside if loop ", a);
//   }
// }
// rafi();
// console.log(a);

// datatypes(number(.NaN. ), string,boolean,null,undefinded, (array,function,object)=>object ) (typeof)........
// let a = "Abbas";
// let b = 10;
// let h = 10.5;
// let c = true;
// let d = null;
// let f = undefined;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof h);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof f);

// Expressions(2*2,2+2).........
// let a = "a";
// let b = 10;
// console.log(a / b);

// let a = 10;
// let b = a;
// a = 20;
// console.log(a);
// console.log(b);

// let array = [1, 2, 3];
// let copy = [...array];
// let array2 = array;
// array.push(4);
// array.push(5);
// console.log("Array 1 ", array);
// console.log("Copy ", copy);
// console.log("Array 2 ", array2);

// let a = 20;
// let b = 30;
// console.log(a * b);
