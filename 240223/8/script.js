/* const heading = document.querySelector("h1");
const parentH1 = heading.parentNode;
console.log(parentH1); */
/* heading.addEventListener("click", () => {
  heading.remove();
});
 */

/* const items = document.querySelectorAll("li");
/* console.log(items); */
/* for (let item of items) {
  item.addEventListener("click", () => {
    item.parentNode.removeChild(item);
  });
} 
 */
//this 객체..
// 단, 조건 !! : 현재 선택한 li태그를 this 객체로 대체해서 사용할 수 있음, 단, 클래스함수를 사용할 때에만 가능!!
// 화살표 함수를 사용할 때에는 this객체가 이벤트를 실행시키는 당사자가 주체가 되는 것이 아니라 window객체가 this가 됩니다
// >> 화살표 함수 쓸 때는 this 쓰면 적용 안됨 ㅜㅠ

const items = document.querySelectorAll("li");
/* console.log(items); */
for (let item of items) {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });
}
