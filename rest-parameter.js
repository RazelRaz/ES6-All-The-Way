// Rest parameter
function claculation(...numbers){
    let sum = 0;
    for (const i of numbers) {
        sum = sum + i;
    }
    console.log(sum);
    
    
}
claculation(3,4,6,7)