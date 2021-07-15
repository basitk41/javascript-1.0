const arr = [1,2,2,3,3,3,4,4,5,6,6];

const duplicateValue= (data) =>{
    return [...new Set(data)];
    //return data.filter((value, index)=>data.indexOf(value)===index)
}
console.log(duplicateValue(arr)) 