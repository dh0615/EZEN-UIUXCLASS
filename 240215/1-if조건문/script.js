// if(조건식 => true (조건식이 참이어야)) {
//   // 실행문 실행됨 !
// }

// === if문 ===
// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }

// === if...else 문 ===
// const userInput = prompt("당신의 이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하셨습니다");
// } else {
//   alert(`${userInput}님 환영합니다🙂`);
// }
// null = 아무것도 안쓰고 취소 > 필요한 값이 아닌게 들어옴

// === else...if문 ===
// const score = Number(prompt("프로그램 점수 : "));

// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C 학점");
//   }
// }
// if (score != null) = 취소를 누르지 않았다면 = 예외 조항 처리
// if문 중첩사용 가능 = 반복해서 if문 안에 또다른 if문이 들어올 수 있다

// cf) 삼항 조건 연산자 VS if ~~문 ?? >> 자료구조 & 알고리즘

// -------------------------
// 조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지 홀수인지를 확인한 이후 알림창을 활용해서 사용자에게 짝수 혹은 홀수입니다. 라는 메세지 출력

// 사용자에게 숫자 받기
// 짝수인지 홀수인지 판단하기
// 메세지 출력

// const userPickNum = prompt("숫자를 입력하세요");

// if (userPickNum % 2 === 0) {
//   alert("짝수입니다");
// } else (userPickNum % 2 !== 0) {
//   alert("홀수입니다");
// }

// 가장 좋은 변수명 = 식별자는 명시적 & 직관적
// 1) 예약어 : 이미 JS & Window 사용 중인 고유명사
// = document , window .. 이런거 쓰지말기
// 2) 변수명 작명 가장 앞에 사용할 수 있는 것들 = $, _, 영문자 가능 (숫자, 특수문자 절대불가 !!)
// 3) 변수명은 반드시 대,소문자 구분

// 작명하는 방법
// 1. camel 표기법 ex) const userPickNum
// 2. snake 표기법 ex) user_picknum
// 3. 헝가리언표기법 ex) Userpicknum : 변수명 맨앞만 대문자

// === 조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지 홀수인지를 확인한 이후 알림창을 활용해서 사용자에게 짝수 혹은 홀수입니다. 라는 메세지 출력 ===

// === if문 ver.. ===
// const userNum = prompt("숫자를 입력하세요 !!");

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   if (resetnum % 2 === 0) {
//     alert("당신이 선택한 숫자는 짝수입니다");
//   } else {
//     alert("당신이 선택한 숫자는 홀수입니다");
//   }
// } else {
//   alert("취소하셨습니다");
// }
// 위쪽에 Number함수 주니까 boolean도 숫자로 줘서 취소하셨습니다라는 것도 숫자로 인식해서 Number함수를 null값 통과한 이후에 써줌

// === 삼항조건연산자 ver,,, ===
// const userNum = prompt("숫자를 입력하세요 !!");

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   resetnum % 2 === 0 ? alert("짝수입니다") : alert("홀수입니다");
// } else {
//   alert("취소하셨습니다");
// }

// === 예제 2 ===
// 시용자에게 1-12 까지의 숫자 중 하나를 받으세요. 그리고 전달받은 숫자에 따라서 다음과 같은 알림메세지가 출력되게 해주세요

// 사용자가 입력한 숫자 : 9-11 > 알림창에 독서의 계절.. 가을이네요 ^^
// 사용자가 입력한 숫자 : 6-8 > 알림창에 여행하기.좋은.. 여름이네요^^
// 사용자가 입력한 숫자 : 3-5 > 알림창에 햇살.가득한 봄이네요 ^^
// 사용자가 입력한 숫자 : 12-2 > 알림창에 스키의 계절.. 겨울이네요 ^^

// 사용자에게 4가지 기준에 따른 숫자 받기
// 해당 숫자기준에 따른 메세지 출력하기

// const userNum = Number(prompt("숫자를 입력하세요 !!"));
// if (userNum != null) {
//   if ((userNum === 9, 10, 11)) {
//     alert("독서의 계절.. 가을이네요 ^^");
//   } else if ((userNum === 6, 7, 8)) {
//     alert("여행하기.좋은.. 여름이네요^^");
//   } else if (userNum === 3,4,5) {
//     alert("햇살.가득한 봄이네요 ^^");
//   } else (userNum ===12,1,2) {
//     {
//       alert("스키의 계절.. 겨울이네요 ^^");
//   }
// }

// let month = prompt("현재는 몇월인가요??", "ex) 2");
// // const쓰면 재할당 못하기 때문에
// if (month != null) {
//   // 이걸 썼기 때문에 prompt 앞에 Number 안줌
//   month = Number(month);
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절.. 가을이네요 ^^");
//   } else if (month >= 6 && month <= 8) {
//     alert("여행하기.좋은.. 여름이네요^^");
//   } else if (month >= 3 && month <= 5) {
//     alert("햇살.가득한 봄이네요 ^^");
//   } else if (month >= 13) {
//     alert("존재하지 않는 월입니다;");
//   } else {
//     alert("스키의 계절.. 겨울이네요 ^^");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// && = and연산자
// || = or연산자

// === 예제 3 ===
// 사용자에게 아이디와 패스워드 값을 받으세요 그리고 해당 아이디와 패스워드 값이 다음과 같다면 "반갑습니다! 어서오세요 @.@" 라는 알림메세지를 출력해주세요

// id : ezenit / pw : 0615

// 그런데 id만 일치하고 pw가 틀렸을 경우에는 "비밀번호를 확인해주세요!" 라는 알림메세지를 출력해주시고, 만약 id와 pw 둘 다 틀렸을 경우에는 "아이디를 확인해주세요!" 라는 알림메세지를 출력해주세요

//1. 사용자에게 아이디, 비밀번호값 각각 받기
// 2. 아이디가 ezenit , 비밀번호가 0615와 같은지 확인하기
// 3. 둘 다 같으면 "반갑습니다! 어서오세요 @.@"
// 4. 아이디만 같으면 "비밀번호를 확인해주세요!"
// 5. 둘 다 틀리면 "아이디를 확인해주세요!"출력하기

// let userId = prompt("아이디를 입력해주세요");
// let userPass = prompt("비밀번호를 입력해주세요");

// if (userId === "ezenit" && userPass === "0615") {
//   alert("반갑습니다! 어서오세요 @.@");
// } else if ((userId === "ezenit", userPass !== "0615")) {
//   alert("비밀번호를 확인해주세요!");
// } else if ((userId !== "ezenit", userPass === "0615")) {
//   alert("아이디를 확인해주세요!");
// } else {
//   alert("취소하셨습니다");
// }

const id = "ezenit";
const pw = "1234";

const userId = prompt("당신의 아이디는 무엇인가요?");

if (userId === id) {
  const userPw = Number(prompt("당신의 비밀번호는 무엇인가요?"));
  if (userPw === pw) {
    alert(`${userId}님 반갑습니다~`);
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
} else {
  alert("아이디가 일치하지 않습니다.");
  location.reload();
  /* window. window객체 생략 가능location.reload(); */ //reload 안썼을 때는 새고 했을 때 다시 알림창이 떴는데 reload 쓰니까 맞을 때까지 다시 입력할 수 있게 해줌
}
