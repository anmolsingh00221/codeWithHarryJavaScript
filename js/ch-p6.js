console.log("JavaScript In The Browser")

// Question 1,2,3 :- 
// let age = parseInt((prompt("Enter a value")))
// while (true) {

//     if(age < 0){
//         console.error("This is an error")
//     }
//     if (age > 18) {
//         alert("They can drive")

//     } else {
//         alert("They can  not drive")
//     }
//     let conform = confirm("Do you want to see again")
//     if (conform == false) {
//         break     
//     }else{
//         age = parseInt((prompt("Enter a value")))
//     }
// }


// Question 4 :- 
// let no = parseInt((prompt("Enter a value")))

// while (true) {
//     if (no != 4) {
//         console.log("Try Again"  + "</br>")
//     }else{
//         location.href = "https://www.google.com/"
//         break;
//     }
//     no = parseInt((prompt("Enter a value")))
// }


// Question 5
let ColorValue = prompt("Enter a ColorValue")
while (true) {
    document.body.style.backgroundColor = `${ColorValue}`;
    let Ifconfirm = confirm("do you want prompt again")
    if (Ifconfirm == true) {
        ColorValue = prompt("Enter a ColorValue")
    } else {
        break;
    }
}