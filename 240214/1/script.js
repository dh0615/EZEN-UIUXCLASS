// 자료형
// 변수에 담겨질 수 있는 값의 형태를 의미!!
// 숫자형, 문자열, 논리형, 객체, 배열, 심벌, 함수
// 객체 => {key :  value} => property(프로퍼티 = 속성)

// 객체 >  배열
let arr = [1, 2, 3, 4];
let arrStr = ["a", "b", "c"];
let arr01 = [];

// index & length
// 사람 => 값을 입력 !! => 0, 1만 인식
// 비트 => 0, 1
// 바이트

// JS = "객체 지향" 프로그래밍 언어
// "절차 지향" => 고차함수

// console.log(arr);
// 1의 인덱스값 = 0
// 2의 인덱스값 = 1
// 3의 인덱스값 = 2
// 4의 인덱스값 = 3
/* console.log(arr[2]); */ // 이렇게 하면 인덱스값이 2인 3이 나옴

/* console.log(arrStr.length); */
// 배열의 아이템 총 개수를 찾고자 할 때
// 위의 경우에는 3이 나옴
// let arrStr = ["a", "b", "c"]; >> 3개니까..

// 심벌 = 유일무이한 값을 저장하고 관리하고 싶은 경우에 사용
// let var1 = Symbol();
// let var2 = Symbol();

// 비교연산자 => 서로 다른 피연산자를 비교할 때 사용하는 연산자

// console.log(var1 === var2);
// var1 , var2가 같은것인지 확인해보기 위해 작성 > false나옴

// e-commerce = 쇼핑몰
// 회원들의 개인정보 =>

let id = Symbol();

const member01 = {
  name: "Jeong",
  [id]: 214,
};
member01.id = 6789;

const member02 = {
  name: "Jeong",
  id: 214,
};
console.log(member02);
// []를 작성하지 않았을 때 다른 사람도 동일한 아이디를 똑같이 만들어서 약용할 가능성이 있으므로 앞뒤에 대괄호를 넣는 symbol값을 만들어서 유일무이한 아이디를 만들 수 있게끔 해줌
// 심벌은 데이터나 보안에 관련된 것이라 관련 직군인 사람이 주로 사용

// const member02 = {
//   name: "Kim",
//   id: "abc",
// };

/* let grade = Symbol("grade");  */ // 심볼에 라벨링
/* member01[grade] = "VIP"; */
/* console.log(member01); */
// grade라는 라벨을 붙여서 심볼
// 인식에 용이

/* const fnc = function () {
  console.log("test");
}; */ // = 익명함수 : 함수의 이름을 변수명으로 대체

/* function fnc01() {} */
// 함수는 이렇게 작성하는 것이 기본문법

// 자료형 변환 = 형변환
// promt() : 사용자에게 어떤 값을 받아올 수 있도록 해주는 함수
// 사용자가 아무리 숫자를 입력했다고 해도 문자열로 형 변환

// 원칙
// 1. 문자열 "+" 숫자형 => 무조건 문자열이 됨
/* let str = "20"; */
/* let num = 10; */

// let result = str + num;
// console.log(result); // 30아닌 2010 나옴

/* let result = Number(str) + num;
console.log(result); */ // Number라는 함수로 감싸주면 정상적으로 + 계산 가능
// Number() : 매개변수로 들어오는 값을 무조건 숫자로 형변환!!

/* let result01 = str - num;
console.log(result01); */ // 이건 10으로 잘 계산됨
// >> +를 제외한 - / * 연산자에서는 문자열과 숫자형을 피연산자로 가져오더라도 문자열이 되지않는다

/* console.log(Number(true)); */
// 프로그래밍 언어에서 1은 참
/* console.log(Number(false)); */
// 프로그래밍 언어에서 0은 거짓

// Number도 숫자로 바꾸지 못 하는 것,, = 문자열
/* console.log(Number("Hi!")); */ // > NaN 출력
/* console.log(Number("20")); */ // > 따옴표에 의존하는 문자인 경우에는 다시 숫자로 바꿔줌

//if (id !== NaN) {}
//id 값이 NaN이 아니면 ~를 실행시키라는 뜻,,

// Number() VS parseInt() VS parsrFloat()
// Number는 매개변수로 뭐가 들어오든지 모두 숫자로 바꿈

// const userAge = prompt("당신의 나이를 입력하세요!");
// console.log(typeof userAge); string 출력

// Number 아래 단계에 parseInt
// 소괄호 안에 들어온 값을 무조건 다 숫자로 바꿀 수 없음 ! > 숫자를 정수(*소수점이 없는 값)로 바꿔주는 역할
// const userAge = parseInt(prompt("당신의 나이를 입력하세요!"));
//console.log(typeof userAge);  number 출력

// console.log(parseInt(false));

// 소괄호 안에 들어온 값을 실수의 형태로 바꿔주는 역할
// const userHot = parseFloat(prompt("당신의 체온을 입력해주세요"));
// console.log(userHot);
//parseInt(prompt("당신의 체온을 입력해주세요"));
// 여기에 35.9 넣으면 소수점 생략하고 35만 나옴
// parseInt는 논리형 글자도 인식 못함
// 따라서 모든 것을 커버하는 Number를 많이 씀

// 숫자를 문자로 변환하는 법
// 쇼핑몰 10만개 의류 > 고유의 바코드 > 문자로 관리

// 1.toString()
let num = 10;
console.log(typeof num.toString());

// 2. String()
console.log(typeof String(false));

// toString() VS String()
// null & undefined을 읽을 수 있는지 없는지
let num01 = null;
// console.log(typeof num01.toString()); // null 읽지 못함

// console.log(typeof String(null)); // null 읽을 수 있음

// 문자 => 숫자 Number()
// 숫자 => 문자 String()

// 문자&숫자 => 논리 Boolean()

console.log(Boolean("hi"));
// null, undefined, 0 만 false 나머지는 다 true

// 사용자에게 화씨온도를 받아서 섭씨온도로 변환 시킨 후 웹브라우저 화면에 섭씨온도 출력
// 공식 = 섭씨온도 = (화씨온도 -32) /1.8

const fah = Number(prompt("화씨온도를 입력하세요!"));
// const fah = parseFloat(prompt("화씨온도를 입력하세요!"));

// const cel = (fah - 32) / 1.8;
const cel = ((fah - 32) / 1.8).toFixed(1); // 소수점 첫번째 자리까지 나오게 하기 위해서 tofixed 사용
document.write(`화씨 ${fah}도는 섭씨 ${cel}도 입니다`);
