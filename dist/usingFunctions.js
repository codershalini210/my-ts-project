"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hi() {
    console.log("hello world how are you today");
}
function add(a, b) {
    return a + b;
}
function greet(name) {
    console.log(`welcome ${name}`);
}
function sendEmail(to, subject) {
    // condition?'statement when condition is true':'statement when condition ois false'
    (subject != undefined) ? console.log(`mail ${subject} sent to : ${to}`) : console.log(`mail sent to : ${to}`);
    // if(subject!=undefined)
    // {
    //     console.log(`mail ${subject} sent to : ${to}`)
    // }
    // else
    // {
    //     console.log(`mail sent to : ${to}`)
    // }
}
function calculateDiscount(price, discountPercentage = 0.1) {
    return price * (1 - discountPercentage);
}
function concatenateStrings(...args) {
    return args.join(" ");
}
console.log(concatenateStrings("Hello", "TypeScript", "World"));
console.log(concatenateStrings("One"));
console.log(concatenateStrings("we ", "are", "learning", "ts"));
console.log(calculateDiscount(100)); // 10% discount
console.log(calculateDiscount(100, 0.25)); // 25% discount
sendEmail('john@gmail.com', 'Meeting Details');
sendEmail('Maria@outlook.com');
// hi();
// greet('John')
// console.log("sum of 5 and 10 is ",add(10,5))
//# sourceMappingURL=usingFunctions.js.map