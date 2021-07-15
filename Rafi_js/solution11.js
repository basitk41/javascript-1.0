// function add_Data(){
//     var s1 = document.getElementById('python').value;
//     var s2 = document.getElementById('java').value;
//     var s3 = document.getElementById('javascript').value;
//     var total = s1+s2+s3;
//     var avg = total/3;
//     var grade = '';
//     if(avg>=1 && avg<=50){
//          grade =  'F';
//     }else if(avg>=51 && avg<=60){
//          grade = 'D';
//     }else if(avg>=61 && avg<=70){
//          grade = 'C' ;
//     }else if(avg>=71 && avg<=80){
//          grade = 'B';
//     }else if(avg>=81 && avg<=90){
//          grade = 'A';
//     }else if(avg>=91 && avg<=100){
//          grade = 'A++';
//     }
//    document.getElementById('demo').innerHTML= total + " " + avg +" " +grade; 
// }

const marks=[100,98,99]; 

let avg = marks.reduce((value,a)=>{
    return a+=value;
},0)/marks.length 
console.log(avg);
//document.write('Average is:'+ avg +'<br>')
//console.log(avg) 
let grade = '';
if(avg>=1 && avg<=50){ grade = 'F' }
else if(avg>=51 && avg<=60){grade ='D'}
else if(avg>=61 && avg<=70){grade = 'C'}
else if(avg>=71 && avg<=80){grade ='B'}
else if(avg>=81 && avg<=90){grade ='A'}
else if(avg>=91 && avg<=100){grade ='A'}

//document.write('Grade is:'+ grade +'<br>')
console.log(grade);