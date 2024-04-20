console.log("10 Question of Array");

// Question 2 :- remove duplicate from sorted arrays
let dArr = [1,1,3,5,3,6,4,3,4,2, 2,3,2]
let removeDuplicateValue = removeDuplicate(dArr)
console.log(removeDuplicateValue)

function removeDuplicate(arr){
    let update = [...new Set(arr)]
    return update.sort()
}

let array = [1, 2, 2, 3, 4, 4, 5, 23,43,23,23,53,12,2];
let uniqueArray = array.filter((value, idx)=>{
    return array.indexOf(value) === idx
})
// let uniqueArray = array.filter((value, index) => array.indexOf(value) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]





// Question 1 :- marge two sorted arrays

let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8,10]

let arr3;

let value = margeTwoArr(arr1, arr2)
console.log(value)


function margeTwoArr(arr1 , arr2) {
    arr3 = [...arr1, ...arr2]    
    return arr3.sort(AcendingOrder);
}
function AcendingOrder(a, b) {
    return a - b; 
}

// function mergeArrays(arr1, arr2, n1, n2, arr3) {
//     var i = 0, j = 0, k = 0;

//     // traverse the arr1 and inset its eleemnt in arr3 
//     while (i < n1) {
//         arr3[k++] = arr1[i++]
//     }

//     // now traverse arr2 and insert in arr3
//     while (j < n2) {
//         arr3[k++] = arr2[j++]
//     }

//     // sort the whole array arr3
//     arr3.sort();

// }

// var arr1 = [1, 3, 5, 7];
// var n1 = arr1.length

// let arr2 = [2, 4, 6, 8];
// let n2 = arr2.length

// let arr3 = new Array(n1 + n2)
// mergeArrays(arr1, arr2, n1, n2, arr3)

// console.log("Array after merging")
// for (let i = 0; i < n1 + n2; i++) {
//     console.log(arr3[i] + " ")
    
// }