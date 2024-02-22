document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code: ${e.code}, 
  key: ${e.key}
  `;
});
// keydown아니고 keypress로 쓰고 한영키 누르면 안먹음
