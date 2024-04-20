
console.log("Hello World")
// Question 1
let age = 11;
if (age > 10 && age < 20) {
    console.log(`age lies between 10 and 20`)
} 

// Question 2
let day;
switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;

        
    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "Wednesday";
        break;

    case 4:
        day = "Thursday";
        break;

    case 5:
        day = "Friday";
        break;

    case 6:
        day = "Saturday";
        break;

    default:
        break;
}

console.log(day)


// Question 3 
let num = 32;
if (num % 2 === 0 && num % 3 === 0) {
    console.log(`number is divisible by 2 and 3`);
}else{
    console.log(`number is not divisible by 2 and 3`);
}


// Question 4
// let num = 32;

// if (num % 2 === 0 || num % 3 === 0) {
//     if (num % 2 === 0) {
//         console.log(`Number is divisible by 2`)
//     } else {
//         console.log(`Number is divisible by 3`)
        
//     }
    
// }


// Question 5
let drive = false;
console.log(drive == true ? "You can drive" : "you can not drive" )