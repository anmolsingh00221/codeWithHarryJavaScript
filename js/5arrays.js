console.log("Chapter 5 : Arrays ")

/* 
const fruits = ["Banana", "Apple", "Orange", "Mango"]
const n = [1, 7, 9]
let arraysType = typeof n;

console.log(arraysType)

// toString :- Converts an array to a string of comma sepparated values
let no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arraystr = no.toString();
console.log(arraystr)
// join() :- joins all the array element using a separator
let joinStr = no.join("-");
console.log(joinStr)
// pop :- change the original arrays , remove last element from the arrays, and return pop value
let popValue = no.pop();
console.log(popValue)
// push : Change the original arrays, adds a new element at the end of the arrays , return new array length
let pushMethod = no.push("Hello World!") 
console.log(pushMethod)
console.log(no)
// Shift :- Change the original arrays, remove first element and retrun it 
let shiftValue = no.shift();
console.log(shiftValue)
console.log(no)
// unshift : adds element to the beginning returns new array length
let unshiftValue = no.unshift("I am the Best")
console.log(unshiftValue)
console.log(no)
// delete
delete no[4];
console.log(no)

// concat() : Used to join array sto the given arrays
// let concatArrays = no.concat(fruits)
let concatArrays = [...no, ...fruits]
console.log(concatArrays)

// Sort() :- Sort() Method is used to sort an array alphabetically
let Array = concatArrays.sort((a, b) => {
    return b - a
    // return a - b
});

console.log(Array)


// splice method : splice can used to add new items to an arrays, it return remove items and change the Original Arrays
let Arr1 = ["Hello World", "Kya Bolti Public", 23, 24, 35, 66, 78];
let spliceValue = Arr1.splice(2,4,101,102,103,104)
console.log(spliceValue)
console.log(Arr1)

// slice : last element not comes, can not change original Array
let sliceArr = Arr1.slice(0,4)
console.log(sliceArr)

// reverse :- Reverse the elements in the source arrays. Change the original arrays 
let reverseArr = Arr1.reverse();
console.log(reverseArr)
*/

// forEach loop - calls a function, once for each array element
// let Names = ["Anmol", "Rohit", "Raju", "Thomas"]
// let sum = 0;
// let totalSum = Names.forEach((value, index, arr) => {
//     console.log(` ${index} - ${value}`)
//     sum = sum + index
// });

// console.log(sum)

// map() :- addtion 
// const numbers = [4, 9, 16, 25]
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr)

// const multipleOfTen = numbers.map((value, index, arr)=>{
//     return value * 10
// })
// console.log(multipleOfTen)

// // filter() : works on boolean conditions
// let ages = [23, 25, 64, 34, 63, 25, 73, 34];
// let result = ages.filter((age, index, arr)=>{
//     return age >= 60;
// })

// console.log(result)

// // reduce 
// let Nums = [175,50,25];
// let sumofNums = Nums.reduce((total, num)=>{
//     return total - num;
// },1000);

// console.log(sumofNums)

// Array.from 
// let str = `abcdefghijklmnopqrstuvwxyz`
// let obj = {
//     name : 'Anmol',
//     age  : 21,
//     salary : "1cr",
// }

// let arr = Array.from(str)
// console.log(str)
// console.log(arr)

// for of
let numbers = [23, 24, 25, 26, 27]
console.log(numbers)
for (const items of numbers) {
    console.log(items);
}
for (const items in numbers) {
    console.log(items);
}