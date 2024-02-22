const box = document.querySelector("#box");
box.addEventListener("click", (e) => {
  alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
});

// pageX , pageY = 좌표값을 출력해줌
