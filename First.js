console.log('Hello');
//Example 1 Hoisting
function GreetPerson(name){
    let g;
    if(name=='Anu'){
        var greet="Hello "+name;
        g="Hello"+name;

    }else{
        var greet="Hello"+name;
        g="Hello"+name;
    }
    console.log(greet);
    console.log(g);
}
GreetPerson('Krish');

function num(n1,n2){
    var total=n1+n2;
    console.log("Result is"+total);

}
num(10,20);

//Example 2 Redeclarations
var c=10;
var c=30;
let a=10;
//let a=9;

//Example 3
for(let  i=0;i<=4;i++){
    setTimeout(
        function (){
            console.log(i);
        },
        1000
    )
}

for(var i=1;i<=4;i++){
    console.log(i);
}