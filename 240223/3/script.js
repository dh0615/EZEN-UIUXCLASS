const newP = document.createElement("p");
const textNode = document.createTextNode("Typescript");
newP.appendChild(textNode);
document.body.appendChild(newP);
/* body에 자식요소로 newP (Typescript라는 단어) 새로 들어감 */

/* html안에서 사용할 노드(p)를 만들어서 newP라는 변수에 할당하겠다 */
/* 태그 노드를 만들 때 : createElement
텍스트 노드를 만들 때 : createTextNode*/
/* newP라는 요소에 child(자식을)를 끼워넣고 싶다 appendChild */
