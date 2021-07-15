// var a= 30;
function rafi() {

  if (true) {
    let b = 20;
    b=30;
    // var a =40;
    if (true) {
      console.log("inside if" ,b);
     
    }
    
  } 
//   console.log("outside if loop b ", b);
}
// console.log("inside function a " ,a);

rafi();

//var:  when we take var inside function we cant access it outside
// the function it will give message of undefined.
// let: when we take take let inside scope it works only in that scope
// it doesnt work outside that scope the example is above.
// In let we can assign another value to that variable.
// but not in constant(const)




