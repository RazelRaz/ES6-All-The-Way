//when you want to return a single value from an array
const myArray = [1,2,3,4];

const result = myArray.reduce((prevRes, currentVal) => {
    return prevRes + currentVal
}, 0)
console.log(result);