const icons = document.querySelectorAll(".sns a");
console.log(icons);
for (let icon of icons) {
  icon.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelector(".fa-brands").classList.add("active");
  });
  icon.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector(".fa-brands").classList.remove("active");
  });
}
/* 이벤트가 발생될 때 원이 아니라 아이콘을 찾아와야하니까 e.target이 아니라 e.currentTarget를 준다 */