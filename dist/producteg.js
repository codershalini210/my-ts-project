"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let p1 = {
    id: 101,
    name: 'keyboard',
    price: 252,
    instock: true
};
let p2 = {
    id: 102,
    name: "HardDisk",
    price: 360,
    instock: false
};
function showProduct(pro) {
    console.log(`name:${pro.name}, id : ${pro.id}`);
    console.log(`price: ${pro.price}`);
    pro.instock ? console.log('available') : console.log("out of stock");
}
showProduct(p1);
showProduct(p2);
//# sourceMappingURL=producteg.js.map