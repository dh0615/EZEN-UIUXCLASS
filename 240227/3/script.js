const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const yourChoice = document.querySelector(".your-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];

const show = (user, computer, message) => {
  yourChoice.innerText = user;
  computerChoice.innerText = computer;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    message = "무승부..";
    /* message는 전역스코프라서 let을 이용한 재할당이 불가능한.. 그래서 그냥 message라고 쓴.. */
  } else {
    switch (user + computer) {
      /* 문자 + 문자는 산술연산자가 아니라 문자열로 나타남 더하는게 아니라 추가한다는 뜻.. */
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리!";
        break;
    }
  }
  show(user, computer, message);
};

const play = (e) => {
  const user = e.target.innerText;
  // console.log(e.target.innerText);
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
  console.log(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});

console.log("click");
