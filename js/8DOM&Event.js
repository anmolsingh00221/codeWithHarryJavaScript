let idFirst = document.getElementById("title")
console.log(idFirst)

/*
let innerHTMLofIdFirst = idFirst.innerHTML;
console.log(innerHTMLofIdFirst)

let outerHTMLofIDfirst = idFirst.outerHTML;
console.log(outerHTMLofIDfirst)

let tagNameidFirst = idFirst.tagName;
console.log(tagNameidFirst)

let NodenameIdFirst = idFirst.nodeName;
console.log(NodenameIdFirst)

let getAtt = idFirst.getAttribute("class")
console.log(getAtt)

let setAtt = idFirst.setAttribute("class", "SetBysetAttMethod")
console.log(setAtt)

// let CheckAtt = idFirst.hasAttribute("style")
let CheckAtt = idFirst.hasAttribute("id") //for ID return true, for class return true, for style return false because style attribute is not available there
console.log(CheckAtt)

// let removeAtt = idFirst.removeAttribute("class")
// console.log(removeAtt)

let allAtt = idFirst.attributes;
console.log(allAtt)

// let datasetValue = idFirst.dataset; // it will return name plus value
let datasetValue = idFirst.dataset.anmol; // it will return value
console.log(datasetValue);

*/

let div = document.createElement("div")
div.innerHTML = '<h2>This is create by createElement Method of js</h2>';
// idFirst.appendChild(div)

// idFirst.append(div) // inside end of the element
// idFirst.prepend(div) // inside the element in the starting 
// idFirst.before(div) // before the element 
// idFirst.after(div) // after the element
// idFirst.replaceWith(div) 

// idFirst.insertAdjacentHTML('beforebegin', 'before begin')
// idFirst.insertAdjacentHTML('beforeend', 'before end')
// idFirst.insertAdjacentHTML('afterbegin', 'after begin </br>')
// idFirst.insertAdjacentHTML('afterend', 'after end')
// idFirst.insertAdjacentText('beforebegin', 'before begin')
// idFirst.insertAdjacentText('beforeend', 'before end')
// idFirst.insertAdjacentText('afterbegin', 'after begin </br>')
// idFirst.insertAdjacentText('afterend', 'after end')
// idFirst.insertAdjacentElement('beforebegin', div)
// idFirst.insertAdjacentElement('beforeend', div)
// idFirst.insertAdjacentElement('afterend', div)
// idFirst.insertAdjacentElement('afterbegin', div)
// idFirst.remove();

// idFirst.className = "red text-dark";
// idFirst.classList.add("red")
// idFirst.classList.remove("red")
// let toggle = idFirst.classList.toggle("red")
// console.log(idFirst.classList.contains('red'))

let sum = (a, b, c) => {
    console.log("Yes, I am inside the sum function " + (a + b + c))
}
let timerId = setTimeout(sum, 5000, 5, 5, 5);

// let ask = prompt("do you want to cancel the execution of timerId (y, n)")
// if (ask == "n") {
//     clearTimeout(timerId) 
// }
 