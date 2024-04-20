// console.log("Kya bolti public")

/*
function loadedScript(src, callback) {
    let script = document.createElement("script")
    script.src = src
    script.onload = () => {
        console.log("script loaded")
        callback(null, src)
    }
    script.onerror = () => {
        console.log("Script has got some error")
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script)
}

function goodMorning(error, src) {
    if (error) {
        console.log(error)
        sendEmergencyMessageToCeo()
        return
    }
    console.log("Good Moring " + src)
}
*/

/* 
// Pyramid of DOM 
loadedScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src) {
    if (error) {
        console.log(error)
        // sendEmergencyMessageToCeo()
        return
    }
    console.log("Script 1")
    loadedScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src) {
        if (error) {
            console.log(error)
            // sendEmergencyMessageToCeo()
            return
        }
        console.log("Script 2")
        loadedScript("https://cdn.ssjsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src) {
            if (error) {
                console.log(error)
                // sendEmergencyMessageToCeo()
                return
            }
            console.log("Script 3")
            loadedScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src) {
                if (error) {
                    console.log(error)
                    // sendEmergencyMessageToCeo()
                    return
                }
                console.log("Script 4")
                loadedScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src) {
                    if (error) {
                        console.log(error)
                        // sendEmergencyMessageToCeo()
                        return
                    }
                    console.log("Script 5")
                    console.log("Good Moring " + src)
                })
            })
        })
    })
})

*/

/* 

let promise = new Promise(function (resolve, reject) {
    console.log("Hello Inside promise")
    resolve(56)
})


console.log("Hello One")
setTimeout(function () {
    console.log("Hello two in 2 seconds")
}, 2000)
console.log("Hello Three is there")

console.log(promise)
*/

/* 

console.log("we will see state of promises")

let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("I am a promise and I am fulfilled")
        resolve(true)
    }, 5000);
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("I am a promise and I am rejected")
        reject(new Error("I am an error"))
    }, 5000);
})


p1.then((value) => {
    console.log(value)
})

// p2.catch((value) => {

//     console.log("Some error occured in p2")
//     console.log(value)
// })


p2.then((value)=>{
    console.log(value)
}, (error)=>{
    console.log("Error is Handling Now don't disturb it")
    console.log(error)
})

*/

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds")
        resolve(56)
    }, 2000);
})
p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject)=>{
        resolve("Promise 2")
    })
    return p2
}).then((value)=>{
    console.log(value)
    return 2
}).then((value)=>{
    console.log("We are inside 3rd promise ")
    console.log(value)
})

