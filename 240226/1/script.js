const btn = document.querySelector("button");
const popupWidth = 600;
const popupHeight = 500;

btn.addEventListener("click", () => {
  const left =
    (window.screen.availWidth - popupWidth) /
    2; /* (전체 가용할 수 있는 너비 -600) / 2 = 수직정렬하겠다 */
  const top =
    (window.screen.availHeight - popupHeight) /
    2; /* (전체 가용할 수 있는 높이 -500) / 2 = 수평정렬하겠다 */
  window.open(
    "popup.html",
    "event",
    `width = ${popupWidth} height = ${popupHeight} left = ${left} top = ${top}`
  );
});
