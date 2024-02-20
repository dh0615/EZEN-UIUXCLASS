// MAX_SAFE_INTEGER;
// MIN_SAFE_INTEGER;
// BigInt()
/* const testNum = Number.MAX_SAFE_INTEGER; 자바스크립트에서의 가장 큰 정수값
const testNum01 =
  Number.MIN_SAFE_INTEGER; 자바스크립트에서의 가장 큰 정수값
console.log(testNum); 9007199254740991
console.log(testNum01); -9007199254740991 */

/* if (inputData >= testNum) {
  alert("error");
}
 데이터가 과도하게 들어오면 막고자할 때 씀 */

/* const testNum02 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
// bigint라는 타입으로 재정의를해서 저 숫자 이상이 필요함을 나타냄
// 이걸 쓰려면 bigint끼리만 써야함 다른 수 ( 만약 +1n이 아니라 +1) 이렇게 쓰면 같이 쓸 수 없음
const testNum03 = BigInt(Number.MIN_SAFE_INTEGER);
console.log(testNum02);
// 9007199254740991n
console.log(testNum03); */

// 큰 수 표현하기//
/* const testNum04 = 14000000000000000000000000;
console.log(testNum04);

const testNum05 = 14e-3;
// 14e-3는 마이너스 제곱근이라서 0.014 나옴,,
// e2 = 10의 2승 14e2 = 1400
console.log(testNum05);
 */

/* DOM */
// DOM = 시스템
// Document Object Model
// 문서     객체    모델
// 문서객체모델시스템을 이해하겟다
// Document = html 문서
// Object = 프로그래밍의 모든 전과정 및 절차를 객체화 !!
// DOM을 이해해야 html을 자바스크립트로 컨트롤 할 수 있다

// 태그(html) = 선택자(css) = Node(javascript)
