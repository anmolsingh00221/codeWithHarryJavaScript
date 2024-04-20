
console.log("Hello World!")

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const keys = Object.keys(person);
console.log(keys)

// Question 1
let obj = {
    harry: 98,
    rahul: 70,
    Aakash: 7
}

for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("The marks of " + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]])
}

// Question 2
for (const i in obj) {
    console.log(i)
}

// Question 3
let correctNumber = 0;
let randomNumber = Math.floor(Math.random() * 10)
while (correctNumber != randomNumber) {
    console.log("Try Again \n")
    randomNumber = Math.floor(Math.random() * 10)
}

// Question 4
function meanofFive(a, b, c, d, e) {
    return (a + b + c + d + e) / 5;
}

console.log(meanofFive(23, 4, 56, 78, 5))
console.log(meanofFive(10, 20, 30, 40, 50))