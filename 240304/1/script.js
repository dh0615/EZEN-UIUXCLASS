// 정규 표현식 =  Regular Expression
// 왜 사용하는가? 어떤 특정 패턴을 정의하고자 할 때, 그리고 그 패턴의 결과값을 도출하고자 할 때
// 구성 => 패턴[플래그]
// 패턴 => 알파벳 3개로 구성된 문자열
// 플래그 (*옵션) > 대문자, 소문자, 대소문자

/* let regexp = /\d{3}/;
// 어떠한 문자열 3개로 구성되어있는 패턴을 찾으라는 뜻
console.log(regexp.test("123")); // true
console.log(regexp.test("Hello")); // false */

// let regexp = new RegExp(/\d{3}/);
// console.log(regexp.test("123"));
// console.log(regexp.test("Hello"));

// let obj = {
//   title: "JS",
// };
// let obj01 = new Object();
// obj01.title = "TS";

/* let str = "ES2024 is powerful!";
console.log(str.match(/ES6/));
// str이라는 변수명 안에 ES6는 없기 때문에 null로 나옴
// str.replace(/ES2024/, "ES6");

console.log(/es/.test(str));
// false나옴
// 정규표현식은 대소문자를 가린다

console.log(/es/i.test(str));
// true나옴
// 대소문자 가리지 말고 i 다 찾으라는 뜻

console.log(str.match(/ES\d\d\d\d/));
///ES\d까지만 쓰면 ES2까지만 나왔는데 이렇게 쓰면 2024까지 배열형태로 찾아옴
 */

// let hello = "Hello, everyone.";

// console.log(/^h/i.test(hello));
// h로 시작하는 것 찾고 싶을 때 ^h
// 대소문자 상관하지 않고 h를 다 찾아오고 싶다
// true 나옴

// console.log(/one.$/.test(hello));
// $ = 특정한 패턴으로 끝나는 것 찾고 싶을 때
// console.log(/e.$/.test(hello));
// true
// console.log(/one$/.test(hello));
// 마침표 없으니까 false라고 나옴

// CSS학습 =>  Hex컬러 코드
// 컴퓨터는 컬러값을 최대 255까지 출력
// 16진수
// 0~9, a~f  :#fff VS #000
// let testStr = "ES2024";

// console.log(testStr.match(/[0-9]/g));
// ES2024 라는 문자열에 매칭되는 값을 배열로 찾아오라는 뜻
// ['2', '0', '2', '4'] 나옴
// console.log(testStr.match(/[0-9]/));
// g(global이라는 플래그)가 없으면 왼쪽부터 숫자를 찾기 시작해서 첫번째 나오는 숫자 2만 찾아옴
// console.log(testStr.match(/[^0-9]/g));
// ^ = 캐럿 쓰면 0-9까지의 숫자 제외한 나머지를 다 찾아오라는 뜻
// ['E', 'S'] 나옴

let str = "Oooops;";
// console.log(str.match(/\o\o/)); 와 console.log(str.match(/o{2}/)); 는 같은 의미

console.log(str.match(/o{2}/));
console.log(str.match(/o{2,}/));
// o가 2개 이상 값을 찾아달라는 뜻 o는 3개니까 ['ooo', index: 1, input: 'Oooops;', groups: undefined] 나옴
console.log(str.match(/o{2,4}/));
// o 최소2 최대4개 찾아달라는 뜻
// 근데 o는 3개니까 ['ooo', index: 1, input: 'Oooops;', groups: undefined] 나옴

//대문자 O도 찾고 싶다면..
console.log(str.match(/o{2,4}/i));
// 이렇게 쓰면 됨..

// 자주 사용하는 정규 표현식
// 숫자만 찾아오고자 할 때
/^[0-9]+$/;

// 양의 정수값만 찾아오고자 할 때
/^[1-9]\d*$/;

// 음의 정수값만 찾아오고자 할 때
/^\-[1-9]\d*$/;

// 숫자와 영문자만 찾아오고자 할 때
/^[a-zA-Z0-9]+$/;
