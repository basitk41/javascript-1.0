const arr = [null,0,'',undefined,1,"a",2,3,4,0,'',null];
const countTruthy = (array) => {
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i]) count++;
    }
    return count
}
console.log(countTruthy(arr));