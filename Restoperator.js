
//normal function
// let colors=function(){
// for(let i in arguments){
//     console.log(arguments[i]);
// }
// }
// colors('Red');
// colors('Red','green');colors('Red','yellow');

//Rest operator
let colors=function(...color){
    for(let i in arguments){
        console.log(color[i]);
    }
    }
    colors('Red');
    colors('Red','green');colors('Red','yellow');