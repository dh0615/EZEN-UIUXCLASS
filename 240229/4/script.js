// 사용자가 이메일 주소를 입력하면 result공간에 사용자의 이메일 정보를 출력하게 해주세요
//단 이메일 주소 중 @ 앞의 내용을 세자리까지만 출력하게 해주세요 그리고 네번째자리부터는 ...으로 표기해주세요
// abcde@naver.com > abc..@naver.com
// 사용자로부터 이메일 주소 받기
// result에 출력하기
// 앞을 세자리까지만 출력하고 네번째부터는 ...

// const userMail = document.querySelector("#userEmail");
// console.log(userMail.substring(0, 3));
// const btn = document.querySelector("input[type=submit]");
// console.log(btn);
// const result = document.querySelector("#result");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
// });

//하.. 해설

// 전제조건 : 모든 이메일 주소에는 @이 존재한다
// 1. @이라는 문자열을 중심으로 앞, 뒤쪽 두개로 쪼갠다
// split함수
// 2. 앞쪽에 쪼개진 문자열에서 1~3번인덱스 까지만 정상출력 + ...
// substring 혹은 slice 함수
// 3. 뒤쪽에 쪼개진 문자열은 그대로 보관하고 있다가 앞쪽 문자열과 합친다.

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");
const button = document.querySelector("input[type=submit]");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = "";
  let domain = "";

  if (userEmail.value !== "") {
    userName = userEmail.value.split("@")[0];
    // @를 통해서 구분하겠다는 뜻
    userName = userName.substring(0, 3);
    domain = userEmail.value.split("@")[1];
    result.innerText = `${userName}****@${domain}`;
    userEmail.value = "";
  }
});
