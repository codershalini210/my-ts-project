let numbers:number[]=[10, 20, 30]
numbers.push(40)
// numbers.push("fifty")
let mixedArray:(number|string)[]=[10,"fifty",30]
mixedArray.push("sixty")
let coordinates:[number, number, string]=[40.7128, -74.0060, "NYC"]
console.log(coordinates[2])