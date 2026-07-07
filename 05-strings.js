// ======= String Operations =====

let name = new String('shahzad-name- Ali'); // Creating a String Object
let gpa = new String('3.02');

// String Interpolation (Using Backticks)
console.log(`My name is ${name} and my gpa is ${gpa}`);

// Methods
console.log("Length:", name.length);
console.log("Uppercase:", name.toUpperCase());
console.log("Character at index 2:", name.charAt(2));
console.log("Index of 'd':", name.indexOf('d'));
console.log("Trimmed:", name.trim());

let nickname = name.substring(4, 7); // Does not accept negative values
console.log("Substring:", nickname);

let nickname1 = name.slice(-7, 12);  // Accepts negative values
console.log("Slice:", nickname1);

// URL Replace and Includes
let url = "https:/.com?shahzad20%khanurl";
console.log("Replaced URL:", url.replace('20%', '-'));
console.log("Does it include 'khan'?", url.includes('khan'));

// Split String
console.log("Split array:", name.split('-'));