

// If `zipCode` is provided, include it. Call it with and without `zipCode`. -->
function formatAddress(street:string,city:string,zipcode?:string):string{
let address = "";
zipcode!=undefined?address=`street :${street} city: ${city} zipcode:${zipcode}`:address=`street :${street} city: ${city}`
return address
}
console.log(formatAddress('abc','pqr',"121315"))
console.log(formatAddress("xyz","mno"))