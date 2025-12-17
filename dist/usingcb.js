"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processNumbers(numbers, callback) {
    numbers.forEach((n, i) => {
        const processedValue = n * 2;
        callback(processedValue, i);
    });
}
// Example callback implementations
const logProcessedValue = (value, idx) => {
    console.log(`Index ${idx}: Processed value is ${value}`);
};
// Usage with correct callback
processNumbers([1, 2, 3, 4], logProcessedValue);
//# sourceMappingURL=usingcb.js.map