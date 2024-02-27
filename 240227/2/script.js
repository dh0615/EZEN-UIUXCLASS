// 나 : 가위 바위 보
// 컴퓨터 : 가위 바위 보 (랜덤)
// 나 & 컴 => 일치, 불일치
// 컴퓨터 => random => 1, 2, 3 중 하나 나오게 함

document.write("<h1>컴퓨터와 나의 가위바위보 맞추기 게임~<h1/>");

const game = prompt("가위, 바위, 보 중 선택하세요..", "ex. 가위 / 바위 / 보");
let gameNum = 0;

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 작성했습니다!");
    location.reload();
}

// const com = Math.random() * 3;
// random에 올 수 있는 가장 큰 소수 = 0.99999...
// *3 했을 때 나오는 가장 큰 정수 = 2
const com = Math.ceil(Math.random() * 3);
document.write(`<img src = "./images/math_img_${com}.jpg">`);

if (gameNum === com) {
  document.write("컴퓨터와 동일합니다..");
} else {
  document.write("컴퓨터와 동일하지 않습니다!");
}

console.log(gameNum, com);
