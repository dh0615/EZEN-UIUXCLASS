// input:text 입력칸 인식시켜주기
// input:submit 버튼 인식시켜주기
// submit 버튼 누르면 빈칸에 li들이 추가되도록 해주기

// const text = document.querySelector(".text");
// const submit = document.querySelector(".submit");
// const result = document.querySelector(".result");

// submit.onclick = () => {};

// ---------------해설..
// 1. 사용자가 입력하는 값을 찾아오기 위해 입력창 정의
// 2. 사용자가 클릭할 버튼 정의
// 3 . 버튼을 클릭했을 때 이벤트에 대한 기능 정의
// 4. li태그 DOM에서 생성 => 입력창을 통해서 전달받은 값을 li태그에 삽입시켜주고 => ul 태그 자식 요소로 사용해야한다
// 5. 사용자가 입력한 값을 출력할 공간에 대한 정의 필요

const form = document.querySelector("form");
const input = document.querySelector("form input[type='text']");
const ul = document.querySelector("ul");

const formFnc = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
    /* 값이 입력된 후에 기존에 내가 작성한 것은 자동으로 지워집 */
  }
};

form.onsubmit = formFnc;

// value : 이벤트가 있어야만 값을 찾아올 수 있음
// (이벤트 이전에 주면 안됨)
