// ===== Variables & Datatypes Intro =======

const id = 2233
let name = "Shahzad"
let sgpa = 3.02
let login = true
let bignum = 289823n

gpa = sgpa + 0.08
bignum = 345n
let nextsemestergpa // Without initialization, it is "undefined"

// Important Notes:
// 1. Due to block/function scope problems, always use 'let', not 'var'
// 2. Without using let/var, variables gain global memory (bad practice)
// 3. If you don't give a value to a variable, its datatype is "undefined"

console.log(id, name, sgpa, gpa, login, bignum, nextsemestergpa)
console.table([id, name, sgpa, gpa, login, bignum, nextsemestergpa])

// ===== Datatype Check =====





// "use strict" -> Tells the engine to use the newer version of JS code

let temp = null // null means value is empty, not 0
let semgpa      // undefined

console.table([typeof id, typeof name, typeof sgpa, typeof gpa, typeof login, typeof bignum, typeof nextsemestergpa])