// 슬라이드의 형태 총 4번에 걸쳐서 진행
// 1. 우 > 좌로 컨텐츠 슬라이딩 되어서 들어오는 슬라이드 (*수동)
// 2. 우 > 좌로 컨텐츠 슬라이딩 되어서 들어오는 슬라이드 (*자동)
// 3. 노드를 복제하는 방식 (*수동)
// 4. 노드를 복제하는 방식 (*자동)

const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

// slide count
const slideCount = slides.length;
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
}

// slide height
let topHeight = 0;

const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();

let currentIndex = 0;

const updateNav = () => {
  if (currentIndex === 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }

  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
};

const gotoSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  updateNav();
};

navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    gotoSlide(currentIndex - 1);
  } else {
    gotoSlide(slideCount - 1);
  }
});

navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    gotoSlide(currentIndex + 1);
  } else {
    gotoSlide(0);
  }
});

gotoSlide(0);
