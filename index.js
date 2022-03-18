// Write your code here!
const main = document.querySelector("main#main")
console.log(main)
main.remove();

const newHeader = document.createElement("h1")
newHeader.id = "victory";


newHeader.innerHTML = "erika is the champion";
document.body.append(newHeader)
console.log(newHeader);