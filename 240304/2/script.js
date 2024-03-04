// 문자열 + 메서드
// 문자열 값 => 배열 값 전환 메서드 함수

// 외부에서 가져오는 값 : JSON형식의 데이터이거나 / 문자열
// 사용자가 직접 입력한 값
// 서버라는 공간, 호스팅 값

// 배열
//  FE & UIUX PB.. => DOM을 활용할 수 있어야한다.
// HTML => NodeList => 유사 배열의 형태

/* // 문자열 값을 배열 값 전환 메서드 함수
// 1. split() : 문자열을 특정 구분자로 나눠서 배열의 아이템으로 전환하는 메서드 함수
const str5 = "Hello, everyone";
const array2 = str5.split("");
console.log(array2);
// ['H', 'e', 'l', 'l', 'o', ',', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
// 문자를 구분자를 기준으로 배열함

// 2. 전개연산자 : 전개연산자 구문을 활용해서 배열로 전환하는 방법
// 가장 많이 사용하는 방법
const array3 = [...str5];
console.log(array3);
// 위와 동일하게 나옴

// 3. Array.from(문자열) : Array 프로토타입을 활용해서 배열로 전환하는 방법
// 유사배열화 시킬 때
const array4 = Array.from(str5);
console.log(array4);
// 위와 동일하게 나옴

// 배열을 문자열로 변환하는 방법
// 1. join()
const str6 = array4.join("");
console.log(str6);
// 다시 문자열로 바뀌어서 Hello, everyone이렇게 출력됨
 */

const string = prompt("영문 소문자로 된 문자열을 입력하세요");
// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// 해당 인덱스부터 끝까지의 값을 찾아오라는 뜻
// const result = firstCh + remainStr;

// const result = [string[0].toUpperCase()];
// 0번째 인덱스 값을 가지고 있는 배열
const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
// 0번째 인덱스 , 1번째부터 끝까지의 인덱스 값을 가져와서 join을 이용해서 문자로 바꿔줌
document.write(result);
