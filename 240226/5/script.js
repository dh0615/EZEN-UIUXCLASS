// 사용자로부터 오늘부터 며칠 간 만보걷기를 했는지를 물어보고 임의의 날짜를 받으세요
// 00일 연속 달성이 출력될 수 있도록 해주세요

// const userDay = prompt("며칠 간 만보 걷기를 하셨나요?", "ex.2024-02-14");
// const result = document.querySelector("#result");

// const today = new Date();
// const walkDay = userDay - today;

// document.querySelector(`#result${userDay}`)

// 하.. 해설
const userQuery = prompt(
  "만보 걷기를 시작한 날짜를 입력해주세요!",
  "ex.2024-02-14"
);
const today = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;
