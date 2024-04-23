const obj={
    name:'Anu'

}
obj.name='Aju';
//obj={}
console.log(obj.name);

let obj2={
    name:'Anu',
    Address:'chennai'
}
//obj2={};
console.log(obj2);
//Regular fn
let regular=function(){
return "hello";
}
console.log(regular());
//Arrow fns:
hello=()=>"Hello world!!";
console.log(hello())


//passing parameters
const bonusfn=(m,b)=>10*m+b;
console.log(bonusfn(10,100))

//
let emp={
    id:101,
    id:1,
    greet:function(){
        // var self=this;
        // console.log(this);
        setTimeout(()=>{
            console.log(this);
console.log(this.id)
        },1000);

    }
    
}
emp.greet();