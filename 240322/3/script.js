const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7);

// face
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// eye(*left)
ctx.beginPath();
ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.arc(120, 80, 20, 0, (Math.PI / 180) * 360, false);
ctx.moveTo(200, 80);
/* 지금 내가 그렸던 요소에서 펜을 떼고 다시 움직이겠다는 뜻,, 아래처럼 오른쪽 만들기 위해 또 써주지 않고 한번에 쓸 수 있음 */
ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 360, false);
ctx.fill();
ctx.stroke();

// eye circle(*left)
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(120, 80, 10, 0, (Math.PI / 180) * 360, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 10, 0, (Math.PI / 180) * 360, false);
ctx.fill();
// eye circle(*left)
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(115, 76, 5, 0, (Math.PI / 180) * 360, false);
ctx.moveTo(200, 80);
ctx.arc(175, 76, 5, 0, (Math.PI / 180) * 360, false);
ctx.fill();

/* // eye(*right)
ctx.beginPath();
ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 360, false);
ctx.fill();
ctx.stroke();

// eye circle(*right)
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(180, 80, 10, 0, (Math.PI / 180) * 360, false);
ctx.fill();
 */

// mouth
ctx.beginPath();
ctx.arc(150, 150, 50, 0, (Math.PI / 180) * 180, false);
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
/* 선의 두께 */
ctx.stroke();
