// switch(//조건식이 참이면) {
//   case 1 : 실행문
//   break; // break문으로 꼭 끝내주지 않으면 마지막 case의 결과만 나옴
//   case 2 : 실행문
//   break;
//   case 3 : 실행문
//   break;
//   case 4 : 실행문
//   break;
// }
// if > 둘 중에 하나
// switch > 여러가지의 후보군을 줄 수 있음

// const subject = prompt("신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("HTML을 신청하셨습니다!");
//       break;
//     case "2":
//       alert("CSS를 신청하셨습니다!");
//       break;
//     case "3":
//       alert("JS를 신청하셨습니다!");
//       break;
//     default:
//       alert("잘못 입력하셨습니다");
//       location.reload();
//   }
// } else {
//   alert("취소하셨습니다");
// }

// === switch 예제 1 ===
// 사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 값을 받아주세요
// 쇼핑몰 후보 : 쿠팡 / G마켓 / 11번가 / 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군 안에 존재한다면, 확인 버튼 누른 후 prompt창에 확인 버튼을 클릭한 순간 해당 쇼핑몰로 바로 이동하게 만들어보세요
// window 객체 안에 location이라는 객체는 어딘가로 이동하도록 해주는 객체
// location이라는 객체 안에는 href라는 속성이 있는데 이 속성은 경로를 지정해주는 속성
// 만약에 쿠팡을 사용자가 선택했다면 location.href = "http://www.coupang.com"걸과값을 설정하면 쿠팡 사이트로 이동할 수 있습니다.

// 1. 사용자에게 쇼핑몰 값 받기
// 2. 후보군 지정해주기
// 3. 해당 쇼핑몰로 이동하게 해주기

const shop = prompt(
  "즐겨찾는 쇼핑몰은 어디인가요?",
  "1-쿠팡, 2-G마켓, 3-11번가 4-마켓컬리"
);

if (shop !== null) {
  switch (shop) {
    case "1":
      alert("쿠팡을 선택하셨습니다");
      location.href = "http://www.coupang.com";
      break;
    case "2":
      alert("G마켓을 선택하셨습니다");
      location.href = "https://www.gmarket.co.kr/";
      break;
    case "3":
      alert("11번가를 선택하셨습니다");
      location.href = "https://www.11st.co.kr";
      break;
    case "4":
      alert("마켓컬리를 선택하셨습니다");
      location.href = "https://www.kurly.com/main";
      break;
  }
}
