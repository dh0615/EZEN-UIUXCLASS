// 오늘 옆에 있는 친구들과 점심
//짜장면, 돈가스, 부대찌개, 회덮밥, 마라탕
// 상기 메뉴가 후보
// 상기 메뉴 중 랜덤으로 1개 선택할 수 있게끔 웹 브라우저에 출력될 수 있도록 코드 작성

/* const menuArray = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
const menuSelect = Math.ceil(Math.random() * menuArray.length); */
/* 
const menu = Math.ceil(Math.random() * 6);
document.write(`메뉴는.. ${menu}입니다..`);

let menuNum = 0;
switch (menuArray) {
  case "짜장면":
    menuNum = 1;
    break;
  case "돈가스":
    menuNum = 2;
    break;
  case "부대찌개":
    menuNum = 3;
    break;
  case "회덮밥":
    menuNum = 4;
    break;
  case "마라탕":
    menuNum = 5;
    break;
}

console.log(menuSelect); */

// 하.. 해설
const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕", "김치찌개"];
const menuNum = Math.floor(Math.random() * menu.length);
const result = menu[menuNum];
document.write(result);
