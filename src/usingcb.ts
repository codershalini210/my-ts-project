// Define a type alias for the callback function signature
type NumberProcessorCallback = (processedValue: number, index: number) => void;
function processNumbers(numbers: number[], callback: NumberProcessorCallback): void {
numbers.forEach((n,i)=>
{
    const processedValue = n*2 ;
    callback(processedValue, i); 
}
)
}

// Example callback implementations
const logProcessedValue: NumberProcessorCallback = (value, idx) => {
console.log(`Index ${idx}: Processed value is ${value}`);
};

// Usage with correct callback
processNumbers([1, 2, 3,4], logProcessedValue);
