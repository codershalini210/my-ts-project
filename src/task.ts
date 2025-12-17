interface Task{
    id:number;
    title:string;
    description:string;
    dueDate:string;
    status : 'pending'|'inprogress'|'complete';
    tags:string[];
    assignedto :string|string[];
}
let tasks:Task[]=[];
tasks.push({id:101,title:'sdfsd', description:'sdfsd',
    status:'complete',dueDate:'sdf',tags:['sdf'],assignedto:'das'})
console.log(tasks)