const elements = document.querySelectorAll("*");
/* * = 전체선택자처럼 파일 안에 있는 요소들 다 찾아옴 */
for (let element of elements) {
  element.addEventListener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.currntTarget : ${e.currentTarget.tagName}`
    );
  });
}
