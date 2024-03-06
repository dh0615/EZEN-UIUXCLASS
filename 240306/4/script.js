const button = document.querySelector("button");
const result = document.querySelector("#result");

function* train() {
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "부발";
  yield "세종대왕릉";
  yield "여주";
}

const gyeonggang = train();
// gyeonggang은 이제 제너레이터가 되었으므로 next() 쓸 수 있다

const trainChange = () => {
  let current = gyeonggang.next();
  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점..";
    button.setAttribute("disabled", "disabled");
  }
};

button.addEventListener("click", trainChange);
