// hoisting - upore tule dewa

// var LANGUAGE = "JAVA";
// var language = "JavaScript";

// function getLanguage(){
//     if(!language) {
//         var language = LANGUAGE;
//     }
//     return language;
// }

// console.log(`I love ${getLanguage()}`);

let LANGUAGE = "JAVA";
let language = "JavaScript";

function getLanguage(){
    if(!language) {
        let language = LANGUAGE;
    }
    return language;
}

console.log(`I love ${getLanguage()}`);