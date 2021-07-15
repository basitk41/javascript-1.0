

// function fizbux(){
//     if(input%3==0){
//         return `divide by 3 fizz`
//     }
//     else if(input%5==0){
//         return `divde by 5 buzz`
//     }
//     else if(input%3==0 && input%5==0){
//             return 'divided by both'  
//     }
//     else {
//         return `not`
//     }
// }
// console.log(fizbux())
// document.write(fizbux())
// main()

// function fizbuz(input){
//     if(typeof input ==='number'){
//         if(input%3==0 && input%5==0) return "fizzbuzz";
//         else if(input%3==0) return "fizz";
//         else if(input%5==0) return "buzz";
//         else return input;
//     } else return "Not a number";
    // if(input%3==0){
    //     return `divide by 3 fizz`
    // }

    // else if(input%5==0){
    //     return `divde by 5 buzz`
    // }
    // else if(input%3==0 && input%5==0){
    //         return 'divided 3 and 5 fizzbuzz'  
    // }
    // else {
    //     return `not`
    // }
// }
// console.log(fizbuz(20));
// let input = parseInt(prompt('Enter number'));
// document.write(fizbuz(input))


function fizzbuzz(input){
    if(typeof input === 'number'){
        if(input%3==0 && input%5==0) return 'fizzbuzz'
        else if(input%3==0) return 'fizz'
        else if(input%5==0) return 'buzz'
        else return input;
    }
    else return 'Not a number'
    
}
// document.write(fizzbuzz(13))

// const check = () => {
//     const p = document.getElementById("demo");
//     const input = document.getElementById("speed").value;
//     const result = fizzbuzz(input);
//     p.innerHTML = result;
//     }
    
