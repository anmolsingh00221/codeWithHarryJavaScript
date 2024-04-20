console.log("Hello World!")
// Question 1 and 2
// let userInput = parseInt(prompt("Enter a Value"));
// let arr = [12.12, 134, 43, 632, 65]

// do {
//     if (userInput == '' || userInput == null || userInput == 1) {
//         console.log("Loop Ended")
//         break;
//     }
//     userInput = parseInt(prompt("Enter a Value"));
//     arr.push(userInput)
//     console.log(arr)
// } while (true);

// Question 3
let arr = [100, 101, 2900, 1020, 300, 333, 5432, 2099]
let numDivisbleBy10 = arr.filter((value, idx, arr) => {
    return value % 10 == 0;
})
console.log(numDivisbleBy10)

// Question 4
const arr1 = [3, 4, 5, 6, 7]
let squareOfArr1 = arr1.map((value) => {
    return value * value
})
console.log(squareOfArr1)

// Question 5
const FactorialArr1 = arr1.reduce((total, num) => {
    return total * num
}, 1);
console.log(FactorialArr1)