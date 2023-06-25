//remember
//for in loop is for = object
//for of loop is for  = array

const lang = {
    name: 'JavaScript',
    creator: 'Brenden Eich',
}

// for in
for (property in lang) {
    console.log(property);
}

// for of
const numbers = [2,3,4,5];
for (const number of numbers) {
    console.log(number);
}