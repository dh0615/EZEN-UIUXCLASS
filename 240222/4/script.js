const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");

// form.addEventListener("submit", () => {});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("input[type='text']").value;
  const result = document.querySelector(".result");

  const count = word.length;
  result.innerText = count;

  if (count >= 10) {
    alert("어서오세요~");
  } else {
    alert("아이디는 10자 이상이어야합니다!");
  }
});
