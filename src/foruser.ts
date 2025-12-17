interface User {
readonly id: number; // Cannot be changed after creation
firstName: string;
lastName: string;
email?: string; // Optional
registerDate: Date;
// Method signature
getFullName(): string;
}

const newUser: User = {
id: 1,
firstName: "Jane",
lastName: "Doe",
registerDate: new Date(),
getFullName() {
return `${this.firstName} ${this.lastName}`;
}
};

console.log(newUser.getFullName()); // Jane Doe
// newUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// Object without optional email
const anotherUser: User = {
id: 2,
firstName: "Peter",
lastName: "Jones",
registerDate: new Date(),
getFullName() {
return `welcome  ${this.firstName} ${this.lastName}`;
}
};
anotherUser.firstName = "Maria"
// anotherUser.id = 25
console.log(anotherUser.getFullName())