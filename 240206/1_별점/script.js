// jQuery 구현

// $(".stars .fa-star").click(function () {
//   $(this).addClass("active");
//   $(this).prevAll().addClass("active");
//   $(this).nextAll().removeClass("active");

//   const num = $(this).index();
//   const starRate = num + 1;
//   $(".print").text(starRate);

//   if (starRate === 1) {
//     $(".print").html("별로예요!" + '<img src="./images/star-lv1.png"/>');
//   } else if (starRate === 2) {
//     $(".print").html("보통이에요" + '<img src="./images/star-lv2.png"/>');
//   } else if (starRate === 3) {
//     $(".print").html("그냥그래요" + '<img src="./images/star-lv3.png"/>');
//   } else if (starRate === 4) {
//     $(".print").html("마음에 들어요 " + '<img src="./images/star-lv4.png"/>');
//   } else if (starRate === 5) {
//     $(".print").html("아주 좋아요!" + '<img src="./images/star-lv5.png"/>');
//   }
// });

// Javascript 구현
const stars = document.querySelectorAll(".stars .fa-star");
const print = document.querySelector(".print");
/* const test =
  document.getElementById; getElementById = 반드시 문서에서 1개 밖에 못 찾으니까 html에서 id를 하나만 줘야한다 */
const imgs = [
  "./images/star-lv1.png",
  "./images/star-lv2.png",
  "./images/star-lv3.png",
  "./images/star-lv4.png",
  "./images/star-lv5.png",
];

Element.prototype.previousElementSiblingAll = function () {
  let siblings = [];
  let current = this.previousElementSibling;
  while (current !== null) {
    siblings.push(current);
    current = current.previousElementSibling;
  }
  return siblings;
};

stars.forEach((star) => {
  star.addEventListener("click", function () {
    stars.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");

    const preStars = Array.from(this.previousElementSiblingAll());
    preStars.forEach(function (preStar) {
      preStar.classList.add("active");
    });

    const num = Array.from(stars).indexOf(this);
    const starRate = num + 1;
    if (starRate === 1) {
      print.innerHTML = `"별로예요.." <img src=${imgs[0]}>`;
    } else if (starRate === 2) {
      print.innerHTML = `"보통이에요" <img src=${imgs[1]}>`;
    } else if (starRate === 3) {
      print.innerHTML = `"그냥그래요" <img src=${imgs[2]}>`;
    } else if (starRate === 4) {
      print.innerHTML = `"맘에 들어요!" <img src=${imgs[3]}>`;
    } else if (starRate === 5) {
      print.innerHTML = `"아주좋아요!" <img src=${imgs[4]}>`;
    }
  });
});
