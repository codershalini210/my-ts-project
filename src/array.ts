let numbers :number[]=[1,2,6]
let names: string[] = ["Alice", "Bob"]
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(names[0])
console.log(names[1])
names.push("John")
console.log(names[2])
let mixed :(number|string)[] = ["Ron",101]
mixed.push("Maria")
console.log(mixed)
let userTuple: [number, string, boolean]
userTuple=[101,"Bob",true]
// userTuple[3] = "25"
console.log(userTuple[0] )
console.log(userTuple[1] )
console.log(userTuple[2] )