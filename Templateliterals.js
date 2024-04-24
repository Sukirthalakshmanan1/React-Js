let user="suki";
let surname="laksh"
let greet=`Welcome ${user.concat(surname)}`;
console.log(greet);

let name="Anu";
let id=1;
let url="https://localhost:44349/swagger"+id+"/"+name;
let url2=`https://localhost:44349/swagger/${id}/${name}`;
console.log(url);
console.log(url2);
