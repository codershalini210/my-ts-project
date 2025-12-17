interface Product{
    id:number;
    name:string;
    category:string;
}
let products :Product[]=[
    {id:1,name:'Laptop',category:'Computer and Accessories'},
    {id:2,name:'keyboard',category:'Computer and Accessories'},
    {id:3,name:'TV',category:"Electronics"},
    {id:4,name:'AC',category:"Electronics"},
    {id:5,name:'TV',category:"Electronics"},
]
function fetchProductById(id:number):Product|undefined
{
    let p : Product |undefined
    p= products.find((px)=>px.id===id)
     return p 
}
function searchProductsByName(name:string):Product[]
{
    let pros:Product[]=[]
    pros = products.filter((x)=>x.name===name)
    return pros
}
function addProduct(p :Product):boolean
{
    products.push(p)
    return true;
}
console.log(addProduct({id:101,name:"sdf",category:"sfsd"}))
console.log(searchProductsByName("TV"))
console.log(searchProductsByName("sdf"))
console.log(fetchProductById(3))
console.log(fetchProductById(45))

// `addProduct`: Takes `newProduct: Product`, returns `boolean` (success/failure).
// Simulate adding to a list.
// Ensure all parameters and return types are correctly annotated.
// Introduce a deliberate type error when calling one of the functions and observe TypeScript's feedback.