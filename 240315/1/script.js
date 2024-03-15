const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

const getLocal = () => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";

    newTodo.append(completeButton, deleteButton);
    todoList.appendChild(newTodo);
  });
};
document.addEventListener("DOMContentLoaded", getLocal);

const saveToLocal = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

console.log(todoInput, addButton, todoList);

const addTodo = (e) => {
  e.preventDefault();
  if (todoInput.value !== "") {
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";

    newTodo.append(completeButton, deleteButton);
    todoList.appendChild(newTodo);
    saveToLocal(todoInput.value);
    todoInput.value = "";
  }
  /* 아무것도 입력하지 않았을 때 작동되지 않도록 예외조항처리 */
};

addButton, addEventListener("submit", addTodo);
