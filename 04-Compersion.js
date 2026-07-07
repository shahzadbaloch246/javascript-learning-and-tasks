// ======= Comparisons =====

console.log(8 == 8);   // true
console.log(8 > 9);    // false
console.log(4 >= 2);   // true
console.log(9 != 2);   // true

// Different Datatypes Comparison
console.log("2" > 1);  // true (Engine converts string to num)

// Null and Undefined Quirks
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true (Comparison treats null as 0)

console.log(undefined >= 0); // false (All undefined comparisons are false)

// Strict Check (===) -> Checks both value AND datatype
console.log(8 == "8");   // true
console.log(8 === "8");  // false

// Interview Question:
console.log("Type of null is:", typeof null); // "object"

// Symbol Uniqueness
let s1 = Symbol('123');                                                                                
let s2 = Symbol('123');
console.log("Are symbols equal?", s1 === s2); // false (Each symbol returns a unique type)