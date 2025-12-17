"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newUser = {
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
const anotherUser = {
    id: 2,
    firstName: "Peter",
    lastName: "Jones",
    registerDate: new Date(),
    getFullName() {
        return `welcome  ${this.firstName} ${this.lastName}`;
    }
};
anotherUser.firstName = "Maria";
// anotherUser.id = 25
console.log(anotherUser.getFullName());
//# sourceMappingURL=foruser.js.map