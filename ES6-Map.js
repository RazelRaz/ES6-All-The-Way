const myMap = new Map();
myMap.set('key1', 'ManUtd')
myMap.set('key2', 'spurs')
myMap.set('key3', 'Arsenal')

// console.log(myMap.values());
// console.log(myMap.keys());

for (const iterator of myMap.values()) {
    console.log(iterator);
}