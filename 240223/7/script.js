const tsNode = document.createElement("p");
const tsTextNode = document.createTextNode("Typesctipt");
tsNode.appendChild(tsTextNode);

const basisNode = document.querySelectorAll("p")[0];
console.log(basisNode);

document.body.insertBefore(tsNode, basisNode);
