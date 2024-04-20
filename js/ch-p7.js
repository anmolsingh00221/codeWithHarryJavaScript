console.log("Practice set 7")

// Question 1 and 3

let ParentTag = document.querySelector('.parent').firstChild.nextSibling
let lastEle = document.querySelector('.parent').lastChild.previousSibling
console.log(ParentTag)
ParentTag.style.background = "red"
lastEle.style.background = "red"

let allLI = document.getElementsByTagName('li')
console.log(allLI.length)

// for (let i = 0; i < allLI.length; i++) {
//     allLI[i].style.background = "cyan"
// }
let color = "green"
bgColorChange(allLI, color)
bgColorChange(ParentTag, color)
bgColorChange(lastEle, color)


function bgColorChange(tagName, colorName) {
    if (tagName.length == 1) {
        tagName.style.background = colorName
    } else {
        for (let i = 0; i < allLI.length; i++) {
            tagName[i].style.background = colorName;
        }
    }
}


