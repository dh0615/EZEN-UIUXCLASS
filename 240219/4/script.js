// 콜백함수
// 함수 안에 또 다른 함수를 호출할 때 부르는 용어

/* const btn = document.querySelector("button");
const display = () => {
  alert("오늘도.. 화이팅^^ 입니다.");
};
btn.addEventListener("click", display); */
// display = 콜백함수
// 화살표 함수로 쓰기 위해 display를 위에 정의

/* 이렇게 써도 됨 
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("오늘도.. 화이팅^^ 입니다.");
}); */

/* const showData = (name, age) => {
  alert(`안녕하세요.. ${name}님 나이가 ${age}살 이군요..`);
};

const getData = (callback) => {
  const userName = prompt("이름을 입력하세요.");
  const userAge = prompt("나이를 입력하세요.");
  callback(userName, userAge);
};

getData(showData); */

//showData();가 콜백함수가 된다면 인자값을 주지 않아도 된다.
// getData의 콜백함수가 알아서 인자값을 받아올 것이기 때문에

//------------------------------------
/* const init = () => {
  return function (a, b) {
    return a - b > 0 ? a - b : b - a;
  };
};
console.log(`init(30, 20) : ${init(30, 20)}`); */

/*  */
// const addNum = (a, b) => a + b;

// console.log(addNum(1, 3, 5, 7));
// 함수의 매개번수는 왼쪽부터 차례로 가져감 앞에서부터 2개 가져가서 1+3 = 4 나옴

const addNum = (
  ...numbers /* 텍스트는 의미 x */ /* ...은 인수가 몇개든지 다 받아서 함수로 구현하겠다는 뜻 */ /* = 스프레드 연산자 (이거는 반드시 배열형태로 밖에 들어오지 못함) */
) => {
  let sum = 0; /* NaN으로 나오지 않게 하기 위해서 let sum = 0 써줌 (앞에 관련 내용 나옴) */
  for (let number of numbers) /* for...of = 배열 (스프레드 연산자는 배열형태니까) */ {
    sum += number;
  }
  return sum;
};
console.log(addNum(1, 3));
console.log(addNum(1, 3, 5, 7));
