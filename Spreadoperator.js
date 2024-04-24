let displaycolors=function(message,...colors){
    console.log(message);
    for(i in colors){
        console.log(colors[i]);
    }
}
let message="list of colors";
let colorarray=['Red','orange','blue'];
displaycolors(message,...colorarray);

let string="Anu"
let char={...string}
console.log(char[1])

//Example 3
let obj=[{
    name:"Anu",
    Address:"chennai"
},
{
    name:"Anup",
    Address:"delhi"
}
]
let arr={...obj}
console.log(arr);