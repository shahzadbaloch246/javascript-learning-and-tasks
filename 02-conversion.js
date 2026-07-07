// ===== Datatype Conversion =======

// Quick Reference Notes:
// "33" -> number
// "33gas" -> NaN (Not a Number) but typeof will still be number
// null -> 0 (converted to number)
// undefined -> NaN
// true -> 1; false -> 0
// "1" -> true; "" -> false; "jxn" -> true

let id = 3537
let newval = String(id) // Number to String conversion

console.log(id)
console.log(typeof newval)
console.log(newval)