
// Question 1
// let nice = document.getElementById('n')
// let awesome = document.getElementById('a')
// let good = document.getElementById('g')

// nice.addEventListener('click', clickOnBtn)
// awesome.addEventListener('click', clickOnBtn)
// good.addEventListener('click', clickOnBtn)

// function clickOnBtn(event) {
//     const clickedButtonValue = event.target.value;
//     console.log(clickedButtonValue)

//     if (clickedButtonValue == "Looking Nice") {
//         console.log("Yes I am inside the Looking Nice")
//     } else if (clickedButtonValue == "Looking Good") {
//         console.log("Yes I am inside the Looking Good")
//     } else if (clickedButtonValue == "Looking Awesome") {
//         console.log("Yes I am inside the Looking Awesome")
//     }

// }


// Question 3




// let google = document.getElementById("google")
// let twitter = document.getElementById("twitter")
// let facebook = document.getElementById("facebook")
// let instagram = document.getElementById("instagram")

// google.addEventListener('click', transferLink)
// twitter.addEventListener('click', transferLink)
// instagram.addEventListener('click', transferLink)
// facebook.addEventListener('click', transferLink)

// google.addEventListener('mouseover', changeSize)
// twitter.addEventListener('mouseover', changeSize)
// instagram.addEventListener('mouseover', changeSize)
// facebook.addEventListener('mouseover', changeSize)

// function transferLink(event) {
//     let linkBtn = document.getElementsByClassName('linkBtn')
//     const clickedButtonValue = event.target.value;
//     console.log(clickedButtonValue)

//     if (clickedButtonValue == "Google") {
//         location.href = "https://google.com/"
//         window.open("https://google.com", "_blank")
//     } else if (clickedButtonValue == "Twitter") {
//         location.href = "https://twitter.com/"
//     } else if (clickedButtonValue == "Instagram") {
//         location.href = "https://instagram.com/"
//     } else if (clickedButtonValue == "FaceBook") {
//         location.href = "https://facebook.com/"
//     }

//     for (let i = 0; i < linkBtn.length; i++) {
//         linkBtn[i].setAttribute("target", "_blank")
//     }
// }


// function changeSize(event) {
//     const getValues = event.target.value;

//     google = document.getElementById("google")
//     twitter = document.getElementById("twitter")
//     facebook = document.getElementById("facebook")
//     instagram = document.getElementById("instagram")

//     if (getValues == "Google") {
//         google.style.cursor = "pointer"

//         console.log(getValues)
//     } else if (getValues == "Twitter") {
//         twitter.style.cursor = "pointer"
//         console.log(getValues)
//     } else if (getValues == "Instagram") {
//         instagram.style.cursor = "pointer"
//         console.log(getValues)
//     } else if (getValues == "FaceBook") {
//         facebook.style.cursor = "pointer"
//         console.log(getValues)
//     }



// }


let linkBtns = document.querySelectorAll('.linkBtn');

linkBtns.forEach(btn => {
    btn.addEventListener('click', transferLink);
    btn.addEventListener('mouseover', changeSize);
});

function transferLink(event) {
    const clickedButtonValue = event.target.value;
    console.log(clickedButtonValue);

    if (clickedButtonValue === "Google") {
        window.open("https://google.com", "_blank");
    } else if (clickedButtonValue === "Twitter") {
        window.open("https://twitter.com", "_blank");
    } else if (clickedButtonValue === "Instagram") {
        window.open("https://instagram.com", "_blank");
    } else if (clickedButtonValue === "Facebook") {
        window.open("https://facebook.com", "_blank");
    }
}

function changeSize(event) {
    event.target.style.cursor = "pointer";
    console.log(event.target)
    console.log(event.target.value)
}

// question 5
function toggleGlow() {
    var bulb = document.getElementById('bulb');
    bulb.classList.toggle('glowing');
}
