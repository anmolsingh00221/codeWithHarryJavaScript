console.log("CallBacks, Promises & Async/Await");

// Syncronous Programming
// let a = prompt("What is your name ?")
// let b = prompt("What is your age ?")
// let c = prompt("What is your favorite colro?")
// console.log(a + " is " + b + " years old and has " + c + " favorite color.")

// Asynchronous programming
// console.log("start")
// setTimeout(() => {
//     console.log("Hey I am good");
// }, 3000);
// console.log("end")

// callbacks
// function loadScript(src, callback) {
//     let script = document.createElement("script")
//     script.src = src;
//     script.onload = function () {
//         console.log("loaded script with src " + src)
//         callback(null, src);
//     }

//     script.onerror = function () {
//         callback(new Error("SRC got some error"))
//     }

//     document.body.appendChild(script)
// }

// function hello(error, src) {
//     alert("Hello World! " + src)
// }

// function goodMorning(src) {
//     alert("goodMorning " + src)
// }



// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", goodMorning)
// error 
// loadScript("https://cdn.jsdelivsdssd r.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", goodMorning)

// function calculateBMI(weight, height) {
//     // Convert height to meters
//     var heightInMeters = height / 100; // Assuming height is in centimeters

//     // Calculate BMI
//     var bmi = weight / (heightInMeters * heightInMeters);

//     // Round BMI to two decimal places
//     bmi = parseFloat(bmi.toFixed(2));

//     return bmi;
// }

// // Example usage:
// var weight = 70; // in kilograms
// var height = 175; // in centimeters
// var bmi = calculateBMI(weight, height);
// console.log("BMI:", bmi);


// const loadedScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.type = "text/javascript"
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = () => {
//             resolve("Script has been loaded sir ")
//         }
//         script.onerror = () => {
//             reject("Error is there Give reply")
//         }
//     })
// }

// let p1 = loadedScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")

// p1.then((value)=>{
//     console.log(value)
//     return loadedScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// }).then((value)=>{
//     // console.log(value)
//     console.log("Second script loaded sir")
// }).catch((error)=>{
//     console.log(error)
//     console.log("We are sorry but we are having problems loading this scirpt")
// })