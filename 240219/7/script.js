const imgTag = document.querySelector("img");
let num = 1;

const gallery = (direct) => {
  if (direct) {
    if (num === 9) return;
    num++;
  } else {
    if (num === 1) return;
    num--;
  }

  imgTag.setAttribute(
    /* 앞에 붙은 해당 요소에 속성을 부여하겠다는 뜻 */ "src",
    `./images/pic_${num}.jpg`
  );
};
