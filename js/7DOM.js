console.log("Helllo World kYA BOLTI PUBLIC")

console.log(document.body.firstChild)
console.log(document.body.childNodes)
console.log(document.body.lastChild)
let nodeValues = Array.from(document.body.childNodes)
console.log(nodeValues)
console.log(document.body.firstChild.nextSibling)
console.log(document.body.firstChild.previousSibling)

console.log(document.firstChild.parentNode)
console.log(document.firstChild.parentElement)


console.log(document.body.firstChild.nextElementSibling)

let eleMent = document.querySelector('.child')
console.log(eleMent)
console.log(eleMent.parentNode)
console.log(eleMent.parentElement)