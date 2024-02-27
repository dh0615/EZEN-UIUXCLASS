const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  // 서버가 인식할 수 있는 JSON형태로 변환시켜주겠다는 뜻
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (input.value !== "") {
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = "";
//   }
// });를 리팩토링하면..

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  } else {
    handler();
  }
  todos = userTodos;
};

init();

form.addEventListener("submit", handler);

// 새로고침해도 값이 사라지지 않게하기 위해 localstorage 사용..
// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello");
// console.log(myData);
