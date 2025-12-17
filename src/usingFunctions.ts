function hi():void
{
    console.log("hello world how are you today")
}
function add(a:number,b:number):number
{
    return a+b
}
function greet(name:string):void{
    console.log(`welcome ${name}`)
}
function sendEmail(to:string,subject?:string):void{
    // condition?'statement when condition is true':'statement when condition ois false'
    (subject!=undefined)?console.log(`mail ${subject} sent to : ${to}`):console.log(`mail sent to : ${to}`)
    // if(subject!=undefined)
    // {
    //     console.log(`mail ${subject} sent to : ${to}`)
    // }
    // else
    // {
    //     console.log(`mail sent to : ${to}`)
    // }
}
function calculateDiscount(price: number, discountPercentage: number = 0.1): number {
return price * (1 - discountPercentage);
}
function concatenateStrings(...args: string[]): string {
return args.join(" ");
}
type MyFunc = (a: number, b: number) => number;

console.log(concatenateStrings("Hello", "TypeScript", "World"));
console.log(concatenateStrings("One"));
console.log(concatenateStrings("we ","are","learning","ts"))

console.log(calculateDiscount(100)); // 10% discount
console.log(calculateDiscount(100, 0.25)); // 25% discount
sendEmail('john@gmail.com','Meeting Details')
sendEmail('Maria@outlook.com')
// hi();
// greet('John')
// console.log("sum of 5 and 10 is ",add(10,5))