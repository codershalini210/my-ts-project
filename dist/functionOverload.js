"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataStore = [
    { id: 1, name: "itemA", value: "Value 1" },
    { id: 2, name: "itemB", value: "Value 2" },
    { id: 3, name: "itemC", value: "Value 3" }
];
// The single implementation signature (must be compatible with all overloads)
function findDataItem(identifier) {
    if (typeof identifier === 'number') {
        return dataStore.find(item => item.id === identifier);
    }
    else {
        return dataStore.find(item => item.name === identifier);
    }
}
// Usage (TypeScript correctly infers the return type based on input)
const itemById = findDataItem(2); // itemById is DataItem | undefined
const itemByName = findDataItem("itemC"); // itemByName is DataItem | undefined
// const invalidItem = findDataItem(true); // Error: No overload matches this call.
if (itemById) {
    console.log(`Found by ID: ${itemById.name}`); // Output: Found by ID: itemB
}
if (itemByName) {
    console.log(`Found by Name: ${itemByName.id}`); // Output: Found by Name: 3
}
//# sourceMappingURL=functionOverload.js.map