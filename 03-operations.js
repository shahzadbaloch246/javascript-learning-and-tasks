// ======= Operations =====

let x = 90;
let y = 10;
let z = x + y;

console.log("Addition:", z);
console.log("Subtraction:", 5 - 3);
console.log("Multiplication:", 4 * 3);
console.log("Power (4^2):", 4 ** 2);
console.log("Division:", 8 / 2);
console.log("Remainder/Modulus:", 9 % 2);

let str1 = "shah";
let str2 = "zad";
let str3 = str1 + str2;
console.log("String Concatenation:", str3);

// Advanced Operations & Quirks
console.log("1" + 2 + 3 + 4); // Output: "1234" (If first is string, all treated as string)
console.log(2 + 3 + 4 + "9"); // Output: "99" (First adds numbers, then merges string)

let n1 = 8;
n1++; // post-increment
++n1; // pre-increment
console.log("Incremented Number:", n1);

console.log("Precedence Example:", 2 + 3 * 9 / 3);