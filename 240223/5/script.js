const newImg = document.createElement("img");
const srcNode = document.createAttribute("src");
srcNode.value =
  "https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png";
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);
console.log(newImg);

/* createAttribute를  setAttribute를 이용해서 세팅*/
