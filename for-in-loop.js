//for in loop is best for > object looping
var billGates = {age:56, work: 'Microsoft', position: 'CEO'}

for (const key in billGates) {
    // console.log(billGates[key]);
    console.log(key + " = " + billGates[key]);
}