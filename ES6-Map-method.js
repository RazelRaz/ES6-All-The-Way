const myMap = new Map();
myMap.set('key1', 'ManUtd')
myMap.set('key2', 'spurs')
myMap.set('key3', 'Arsenal')

// delete( Method)
// myMap.delete('key1');
// myMap.clear();
// for (const iterator of myMap.values()) {
//     console.log(iterator);
// }
// console.log(myMap.get('key3'));

// has(key) Method
if(myMap.has('key3')){
    console.log('Available');
} else {
    console.log('Not Found');
}