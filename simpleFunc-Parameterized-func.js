// Simple Function And Parameterized functions

// simple function
function simpleFunc(){
    var x = 5;
    var y = 6;
    var add = x + y;
    console.log(add);
}
simpleFunc();

// Parameterized functions
function paramFunc(x,y){
    var add  = x + y;
    return add
}
const res = paramFunc(30,20);
console.log(res);