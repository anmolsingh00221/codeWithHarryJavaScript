
/*
// Synchronous Tasks
// let a = prompt("What is your name?");
// let b = prompt("Whatis your age?");
// let c = prompt("What is your favorite color?");

// console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronous Tasks
console.log("Start")
setTimeout(function () {
    console.log("hey i am good")
}, 3000)
console.log("End")
*/

/* 
// Callbacks

function loadScript(src, callback) {
    let script = document.createElement("script")
    script.src = src;
    script.onload = function () {
        console.log("Loaded Script With SRC : " + src)
        callback(null, src)
    }
    script.onerror = function () {
        // console.log("Error Loading Script With SRC : " + src)
        callback(new Error("Script in not loaded, got some Error " + src))
    }
    document.body.appendChild(script)
}

function Hello(error, src) {
    if(error){
        console.log(error)
        return
    }
    alert("Hello World! : " + src)
}

function goodMorning(error, value) {
    if(error){
        console.log(error)
        return
    }
    alert("Good Morning with src : " + value)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", goodMorning)
*/

/* 
// Promise  
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log("I am a promise and am fulfilled")
//         // resolve(true)
//         reject(new Error("I am p1 and i am rejected"))

//     }, 5000);
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("I am a promise and am rejected")
//         reject(new Error("I am an error"))
//     }, 5000);
// })


// console.log(p1, p2)
// to get the value
// p1.then((value) => {
//     console.log(value)
// })

// to catch the value 
// p2.catch((error) => {
//     console.log("This is an error and we have solved this")
// })

// get and catch the value of promise
p1.then((value) => {
    console.log(value)
}, (error)=>{
    console.log("I am p1 and i am rejected in error ")
})
*/


function loadScript(src){
    let srcipt = document.createElement("script");
    srcipt.src = src;
    srcipt.onload = ()=>{
        console.log("Script loaded : " + src)
    }
    document.body.appendChild(srcipt);
} 

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")

