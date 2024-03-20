const pages = document.querySelectorAll(".page");
const footerBtns = document.querySelectorAll("#footer a");
/* 
footerBtns.forEach((footerBtn) => {
  footerBtn.addEventListener("click", () => {
    pages.forEach((page, index) => {
page.addEventListener()
      console.log("click");
    });
  });
}); */

footerBtns.forEach((footerBtn) => {
  footerBtn.addEventListener("click", () => {
    pages.forEach((page) => {
      page.style.translateX = "-100%";
    });
  });
});
