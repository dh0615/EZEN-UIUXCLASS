// const str = "hello";
// const greeting = "안녕하세요..";
// const str01 = "Good Morning..";

// console.log(str.length);
// console.log(greeting.length);

// console.log(str01.charAt(3));
//특정한 인덱스 값에 존재하는 문자열을 찾아오라는 뜻
//------------------------------------

// const string = prompt("문자열을 입력하세요..");
// const letter = prompt("어떤 문자를 체크하겠습니까?");

// const counting = (str, ch) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다.`);
//------------------------------------

const str1 = "Good morning, Good afternoon, Good night";
str1.indexOf("morning");
// 문자열이 시작되어진 지점의 인덱스값을 찾아옴
console.log(str1.indexOf("morning"));
// 5가 출력됨 morning의 첫 스타트는 빈 공간 포함해서 5번째니까..

str1.indexOf("huchu");
console.log(str1.indexOf("huchu"));
// 존재하지 않는 단어는 -1 출력
// console.log(str1.indexOf("morning", firstIndex + 1));

const str2 = "Hello everyone";
console.log(str2.startsWith("Hello"));
// Hello로 시작하는 지 확인해줌
console.log(str2.startsWith("hello"));
// hello로 찾으면 false나옴
console.log(str2.startsWith("Hello ev"));
console.log(str2.startsWith("el", 1));
// 1번째 인덱스에서 시작하는 값이 el이 맞나요> = true
console.log(str2.startsWith("o", 4));

console.log("=== endswith ===");
console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("Everyone"));
console.log(str2.endsWith("one"));
console.log(str2.endsWith("lo everyone"));

console.log("=== includes ===");
console.log(str2.includes("every"));
console.log(str2.includes("one"));
// 매개변수로 들어온 문자가 존재하면 true, 아니면 false

console.log("=== trim methods ===");
const str3 = "ab cd ef";
const str3_1 = " ab cd ef ";
console.log(str3);
console.log(str3_1);
// 띄어쓰기도 문자열로 인식
console.log(str3_1.trim());
// 앞 뒤 문자열 띄어쓰기 한거 없애줌
console.log(str3_1.trimStart());
// 앞 문자열 띄어쓰기 한거 없애줌
console.log(str3_1.trimEnd());
// 뒤 문자열 띄어쓰기 한거 없애줌

console.log("=== Uppercase / Lowercase ===");
let str4 = "Good Morning";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

console.log("=== substring ===");
console.log(str4.substring(5, 8));
//5 6 7번째 인덱스를 찾아오라는 뜻..
//8번째 인덱스 바로 앞까지..
console.log(str4.substring(5));
// 5번째부터 끝까지 찾아옴
console.log(str4.substring(-5, 11));
//음수 값을 전혀 인식하지 못 함 > 음수 값이 들어오는 순간 0으로 치환

console.log("=== slice ===");
console.log(str4.slice(0, 4));
console.log(str4.slice(0));
console.log(str4.slice(-5, 11));
// rnin 나옴

console.log("=== split ===");
const str5 = "Hello everyone";
const array1 = str5.split(" ");
console.log(array1);
// 공백을 기준으로 문자를 나타내라는 뜻
// 위의 경우 Hello 따로 everyone 따로 나타남
//['Hello', 'everyone']
const array2 = str5.split("");
console.log(array2);
//  ['H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
// 사용자로부터 받은 문자의 값을 배열로 변환
