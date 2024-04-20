console.log("har har mahadev")

// Question 1
console.log("har\"".length) //Answer : 4, because there is Escape Sequence Character 

// Question 2
// includes : The includes() method returns true if a string contains a specified string. Otherwise it returns false. The includes() method is case sensitive.

let text = "Hello world, wcelcome to the universe.";
// let result = text.includes("World"); //false
let result = text.includes("world"); //true
console.log(result)

// startsWith : The startsWith() method returns true if a string starts with a specified string. Otherwise it returns false. The startsWith() method is case sensitive.
let text1 = "Hello world, welcome to the universe.";
let text1startsWith = text1.startsWith("hello");
console.log(text1startsWith)

// endsWith : The endsWith() method returns true if a string ends with a specified string. Otherwise it returns false. The endsWith() method is case sensitive.
let text2 = "Hello World";
let result2 = text2.endsWith("World");
console.log(result2);

// Question 3
let str = "This Is string learning day"
let lowerStr = str.toLowerCase()
console.log(lowerStr)

// Question 4
let str1 = "Please give Rs 1000"
let rupees = str1.slice(str1.length - 4)
console.log(rupees)

// Question 5 :- No , and it also not return any error
let str2 = "Let's try to change the given number"
str2[2] = 23;
console.log(str2)