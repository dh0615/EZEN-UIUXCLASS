// 제목, 저자 값 받기
// 저장하기 버튼 인식시켜주기
// 취소하기 버튼 인식시켜주기
// result 인식시켜주기
// 삭제 버튼 인식시켜주기
// 저장하기 누르면 아래에 값이 출력되게 (제목 - 저자)
// 삭제 누르면 사라지게

// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const result = document.querySelector("#bookList");
// const cancel = document.querySelector("input[type='reset']");
// const save = document.querySelector("input[type='submit']");

// save.addEventListener("click", () => {
//   const =
// })

// const formFnc = (e) => {
//   e.preventDefault();
//   if (input.value !== "") {
//     const li = document.createElement("li");
//     li.innerText = input.value;
//   }
// };

// const deleteBtn = document.querySelector("#bookList span");

// --------하.........해설ㅜ.ㅜ---------
// 1. 사용자가 입력한 제목과 저자의 값을 찾아와야한다.
// = input에서 값을 찾아올 때 > value로 찾아와야한다

// 2. 이벤트가 작동하도록 해주는 저장하기 버튼에 대한 정의가 필요하다
// button > click이라는 이벤트로 가게 할 것인지
// form > submit이라는 이벤트로 가게 할 것인지 >> form을 써줬으니까 이걸 써주는게 정석이라서const save = document.querySelector("input[type="submit"]이 아니라 form을 써준다);

// e.preventDefault()

// 3. 찾아온 값을 출력해주도록 도와주는 이벤트 함수가 필요하다
// = addEventListner

// 4. 출력할 공간에 대한 정의가 필요하다
// = queryselector

// 5. 삭제하기 버튼에 대한 정의가 필요하다
// = createElement, appendChild

// 6. 삭제하기 버튼이 복수로 생성되기 때문에 반복문을 사용해서 클릭한 삭제 버튼을 찾아오기 위해서 this객체를 쓸 것인지 안쓸것인지 결정해야한다. 그래야 클래스 함수를 쓸 것인지 화살표 함수를 쓸 것 인지 결정할 수 있기 때문에

// 7. 삭제하기 버튼 클릭 시 목록 삭제 이벤트 함수가 필요하다
// = parentNode, removeChild

const save = document.querySelector("form");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML; /* text와 html 다 찾을 수 있다 span은 html태그니까 이걸로 써줌 
  삭제하기 만들어줘야하니까 이걸로 써줌 innerText가 아니라*/
  li.innerHTML = `
  ${title.value} - ${author.value}
  <span>삭제</span>
  `;
  bookList.appendChild(li);
  title.value = "";
  author.value = "";
  /* 값을 넣고 저장하기 눌러도 계속 밑줄에 남아있으니까 저장하기 누르면 사라지게 하기 위해서 */

  const delButtons = document.querySelectorAll("span");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(
        this.parentNode
      ); /* 바로 remove안쓰고 이렇게도 쓸 수 있다.. 체이닝기법 this.parentNode.parentNode.removeChild(this.parentNode) = 결국 li를 가리키는 말*/
    });
  }
});
