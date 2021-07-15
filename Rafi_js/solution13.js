// for (var counter = 2;
//      counter <= 20; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//                 document.write(counter)
//                 document.write("<br>")
//     }
// }

const  prime = () => {
    var num= document.getElementById('speed').value;
    var primenum ;
    for(var i =2; i<=num; i++){
        primenum=true;

        for(var j=2; j<=i/2; j++){
            if(i%j==0){
                primenum=false;
                break;
            }
        }
        if(primenum==1){
            document.write(i +'<br>')
        }
    }
}

// document.write(prime(20)) 