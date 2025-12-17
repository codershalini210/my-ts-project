let userInput: unknown;
userInput = "test"
// userInput = 123
if (typeof userInput === 'string')
{
console.log(userInput.toUpperCase());
}
else
{ 
    if(typeof userInput ==='number')
    {
console.log(userInput * 2)
    }
}