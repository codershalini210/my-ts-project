"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let products = [
    { id: 1, name: 'Laptop', category: 'Computer and Accessories' },
    { id: 2, name: 'keyboard', category: 'Computer and Accessories' },
    { id: 3, name: 'TV', category: "Electronics" },
    { id: 4, name: 'AC', category: "Electronics" },
    { id: 5, name: 'TV', category: "Electronics" },
];
function fetchProductById(id) {
    let p;
    p = products.find((px) => px.id === id);
    return p;
}
function searchProductsByName(name) {
    let pros = [];
    pros = products.filter((x) => x.name === name);
    return pros;
}
function addProduct(p) {
    products.push(p);
    return true;
}
console.log(addProduct({ id: 101, name: "sdf", category: "sfsd" }));
console.log(searchProductsByName("TV"));
console.log(searchProductsByName("sdf"));
console.log(fetchProductById(3));
console.log(fetchProductById(45));
// `addProduct`: Takes `newProduct: Product`, returns `boolean` (success/failure).
// Simulate adding to a list.
// Ensure all parameters and return types are correctly annotated.
// Introduce a deliberate type error when calling one of the functions and observe TypeScript's feedback.
//# sourceMappingURL=forProduct.js.map