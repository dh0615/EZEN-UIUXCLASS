// for(초기값; 조건식; 증감문) {
//   실행문
// }
// 배열, 객체 같은 반복시키는 아이템이 있는 경우에만 for문, forEach문 사용

// --- for문 ---
// const students = ["Lee", "Kim", "Jeong", "Park"];
// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, `);
// }
// students.length = 4

// --- forEach문 ---
// 배열.forEach(function(배열 안에 있는 각각의 아이템) {
//   실행문
// })

// const students = ["Lee", "Kim", "Jeong", "Park"];
// students.forEach(function (student /* 변수명 */) {
//   document.write(`${student}, `);
// });

// ===예제 1===
// for문을 활용해서 구구단 출력하기
// for문도 if문과 마찬가지로 중첩해서 사용 가능
// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + "[ 구구단 " + a + "단 ]" + "<h2/>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(a + "x" + b + " = " + a * b);
//     document.write("<br/>");
//   }
// }

// === 예제 2 ===
// 중첩 for문을 활용해서 5행 5열 테이블
// let num = 1;

// let t = "<table border=1>";
// for (let i = 1; i <= 5; i++) {
//   t += "<tr>";
//   for (let k = 1; k <= 5; k++) {
//     t += "<td>" + num + "</td>";
//     num++; // 1만 나오니까 반복될 때마다 숫자가 증가하도록 해줌
//   }
//   t += "</tr>";
// }
// t += "</table>";
// document.write(t);

// --- for...in문 / for...of문 ---
// for in => 객체 전용
// for of => 배열 전용

// for...in문
// const gitBook = {
//   title: "깃 & 깃허브",
//   pubDate: "2024-02-15",
//   pages: 272,
//   finished: true,
// };

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]}<br/>`);
// }

// for...of문
// const students = ["Kim", "Lee", "Park", "Choi"];

// for (student of students) {
//   document.write(`${student}, `);
// }

// --- while 문 ---
// while (조건식 => true) {
//   실행문;
// }

/* let stars = Number(prompt("별점을 매겨주세요 !"));
while (stars > 0) {
  document.write("*");
  stars--;
} */
// 조건식 안의 값이 참이면 무한으로 반복한다
// 0 누르면 아무것도 안뜸 // false가 뜨기 때문

// --- do...while문 ---
// let stars = Number(prompt("별점을 매겨주세요 !"));
// do {
//   document.write("*");
//   stars--;
// } while (stars > 0);
// 0점을 주면 별 1개가 뜸
// 일단 실행시키고 나서 while문

// JS에서 for문으로 css컨트롤하기
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     /* 5의 배수이지만 7의 배수는 아닌 것들 35, 70 */ document.write(
//       "<p class='red'>" + i + "</p>"
//     );
//   } else if (i % 7 == 0 && i % 5 != 0) {
//     document.write("<p class='green'>" + i + "</p>");
//   } else {
//     document.write("<p class='aqua'>" + i + "</p>");
//   }
// }

// --- break문 & continue문 ---
// break문 예시
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   } else {
//     document.write(i, "<br/>");
//   }
// }
// 5까지만 출력함

// continue문 예시
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else document.write(i, "<br/>");
// }
//1 3 5 7 9 출력
// 짝수 건너 뛰라는 의미
// continue = 스킵하고 다음 실행문 진행시키라는 뜻

// 사용자에게 숫자를 하나 전달 받으세요!!
// 해당 숫자가 소수인지 아닌지를 식별한 후 해당 숫자가 소수라면 웹 브라우저 화면에 "00숫자는 소수입니다" 라고 출력해주세요

// 소수 : 1과 자기 자신으로만 나눠질 수 있는 숫자
// 단락회로평가 : 특정값이 논리형값으로 true냐 false냐를 기준으로 잡고 나머지의 값들을 판단해보는 것

// const number = Number(prompt("숫자를 입력하세요!"));

// let isPrime; /* 선언만 하고 할당하지 않은 상태에서 특정 상태에서 true를 정해주고 그 기준을 바탕으로 함 */

// if (number === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
// }

// if (isPrime) {
//   document.write(`${number}는 소수입니다.`);
// } else {
//   document.write(`${number}는 소수가 아닙니다.`);
// }

// 웹브라우저 화면에 아래에 보이는 배열 아이템 중 10 이상되는 숫자만 출력해주세요
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (let i = 1; i >= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (
//   let i = 0;
//   i < arr.length;
//   i++
// ) /* arr 배열 끄집어오는게 목적 각각 index라는 값을 갖고 있고 index는 0부터 시작함 */
// /* i < arr.length를 써줌으로써 배열들을 가져옴 */
// {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}, `);
//   }
// }

// 사용자에게 1보다 큰 수를 하나 전달받으세요 그리고 그 숫자 안에 있는 짝수들만 더해서 웹브라우저 화면에 출력해주세요

// 1. 사용자에게 1보다 큰 숫자 받기
// 2. 받은 수 중 짝수만 가져오기
// 3. 짝수들 다 더해주기
// 4. 화면에 출력하기

// const number = Number(prompt("숫자를 입력하세요!"));

// for (let i = 0; i >= 1; i++) {
//   if (i % 2 ==0) {
//     doc
//   }
// }

const number = Number(prompt("1보다 큰 숫자를 입력해주세요!"));

let sum = 0;
/* sum에 아무의미 없는 숫자를 지정해서 숫자가 될 수 있게끔 만들어줌 */
console.log(sum + 1);
for (let i = 1; i <= number; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    sum += i;
    /* sum = sum + i 를 줄이면 sum += i */
    document.write(`${i} --- ${sum} <br/>`);
  }
}
