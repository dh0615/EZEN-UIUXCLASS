import products from "./products.js";

const button = document.querySelector("button");
/* button.addEventListener("click", () => {
  console.log("click");
});
 */
const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");
  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.className = "name";
  h3.innerText = product.name;

  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = price;

  div.append(h3, span);

  // li.appendChild(h3);
  // li.appendChild(span);
  li.append(div, img);
  // 이렇게 두가지 요소를 붙여서 쓸 수 있음
  ul.appendChild(li);
};
const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

// importData(); // 버튼 안눌러도 목록이 보여자개
button.addEventListener("click", importData);
