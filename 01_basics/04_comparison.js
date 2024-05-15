// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 2);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // false
// console.log(null == 0); //false
// console.log(null >= 0); //true 
/* The reason is that an equality check == and comparisons >,<,>=,<= work differently. 
Comparisons convert null to a number, treating it as 0. 
That's why (3) null >= 0 is true and (1) null > 0 is false */

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0); 
// all above three will give false


// ***Strict Equality Check *** => It checks both data type and value

console.log(2 === 2);
console.log("2" === 2);
