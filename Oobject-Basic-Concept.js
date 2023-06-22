// simple object
var billGates = {age:56, work: 'Microsoft', position: 'CEO'}
console.log(billGates['position']);

// nested object
var billGatesPro = {
    shirt: {
        color: 'White',
        brand: 'D&G',
        price: '120USD',
    },

    glass: {
        color: 'Black',
        brand: 'Armani',
        price: '59USD',
    },

    face: {
        shape: 'Round',
        teeth: 'White',
        color: 'Bright'
    }
}

console.log(billGatesPro['glass']['brand']);