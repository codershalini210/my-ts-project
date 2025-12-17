interface Product{
    id:number;
    name:string;
    price:number
    instock:boolean;
}
let p1:Product={
    id:101,
    name:'keyboard',
    price:252,
    instock:true
}
let p2:Product={
    id:102,
    name:"HardDisk",
    price:360,
    instock:false
}
function showProduct(pro:Product):void{
    console.log(`name:${pro.name}, id : ${pro.id}`);
    console.log(`price: ${pro.price}`)
    pro.instock? console.log('available'):console.log("out of stock")
}
showProduct(p1)
showProduct(p2)