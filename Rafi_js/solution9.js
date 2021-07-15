const obj = {
    prop1:'abc',
    prop4:'gfc',
    prop2:23,
    prop3:false
}
const showProperties = (obj) => {
    for(let prop in obj){
        if(typeof obj[prop]==='string'){
            console.log(`${prop}:${obj[prop]}`);
        }
    }
}
// showProperties(obj);