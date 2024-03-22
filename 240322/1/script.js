const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// === 사각형 ===
// // getContext() 2차원의 어떤 컨텐츠를 만들겠다는 선언하기 위한 함수
// ctx.fillStyle = "rgb(244,197,207)";
// // 색을 넣겠다는 정의
// ctx.fillRect(10, 10, 200, 100);
// // 사각형에 채우겠다는 뜻 (시작 지점 = 10,10 / 종료 지점 = 200,100)
// ctx.strokeStyle = "#c77d6b";
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "paleturquoise";
// ctx.fillRect(50, 50, 120, 100);

// ctx.clearRect(70, 80, 80, 45);

// JS 세계관..
// 시간 : 1초 / 밀리초 1000밀리초 = 1초
// 2. 각도 1도 45도 => deg x
// radian => 라디언/래디언
// 호도법
// 1래디언 = 우리가 일상에서 이야기하는 180도 = PI / 180
// 2래디언 = 360도 = PI * 2
// 1래디언 = PI / 180 = 우리가 평상시에 쓰는 180도로 계산하겠다..라고하면 = (PI / 180) * 180을 해줘야함 = 결론적으로 (PI * 1)
// 자바스크립트에서 canvas API를 이용하여 표현한다면  Math.PI * 1

// 즉, 2래디언 = (PI / 180) * 360 =>  PI * 2 = 우리가 이야기하는 360도
// 자바스크립트에서 canvas API를 이용하여 표현한다면  Math.PI * 2

// 90도 = Math.PI * 0.5
// 270도 = Math.PI * 1.5
// console.log(ctx);

// const radians = (Math.PI / 180) * 180; // = 180도를 의미함
// 래디언의 단위를 활용해서 우리가 쓰고싶은 각도를 쓰는 공식;

// === 삼각형.. ===
// ctx.beginPath();
// 점을 찍겠다는 선언 (선언부)
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
//50,50 에서 200,200으로 움직이겠다는 뜻
// ctx.stroke();
// 종결부

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.closePath();
// 직접적으로 선언하지 않아도 알아서 첫번째 점과 마지막 점을 이어서 종결하도록 해줌
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.fillStyle = "rgb(244,197,207)";
// ctx.fill();
// ctx.stroke();

// === 원.. ===
ctx.fillStyle = "rgb(244,197,207)";
ctx.strokeStyle = "#c77d6b";

ctx.beginPath();
ctx.arc(
  200,
  150,
  100,
  0 /* 원의 시작점의 각도 */,
  Math.PI * 2 /* 360도를 돌겠다 */,
  true /* 시계방향인지 반시계방향인지 // true = 반시계방향 */
);

ctx.closePath();
ctx.fill();
ctx.stroke();
