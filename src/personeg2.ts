interface Person{
    id:number;
    name:string;
    contact:string;
}
interface User extends Person
{
    department:"HR"|"IT"|"Admin";
    email?:string;
}
let p :Person={id:0,name:"",contact:""};
p.id=101;
p.name="Ron";
p.contact="211212"
console.log(p)
let u :User={id:102,name:"John",department:"HR",contact:"+0405221",email:"John@gmail.com"}
console.log(u)