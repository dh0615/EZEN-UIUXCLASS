//jQuery 플러그인 !
// 1. scrollTo
// 2. wow
// 3. parallax
// 4. fullpage

$("nav a").click(function (e) {
  $.scrollTo(this.hash || 0, 1500);
  e.preventDefault();
});
