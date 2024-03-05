// React => 구조 분해 할당
// const fruits = ["사과", "복숭아"];

// // const apple = fruits[0];
// // const peach = fruits[1];

// // const [apple, peach] = ["사과", "복숭아"];
// const [apple, peach] = fruits;
// console.log(apple, peach);

// const [teacher, ...students] = ["park", "lee", "jeong", "kim"];
// console.log(teacher, students);

// 객체의 구조분해 할당
// const member = {
//   name: "jeong",
//   age: 28,
// };
// const { username, age } = member;
// console.log(username, age);
// 객체의 구조분해 할당에서는 반드시 유의사항이 존재하는데
// 구조분해 할당 값을 전달받을 변수의 이름이 반드시 객체의 key명과 동일해야한다.
// 위의 경우 name이라고 안쓰고 username이라고 하니까 undefined나옴

//해결방법..
// const member = {
//   name: "jeong",
//   age: 28,
// };
// const { name: username, age } = member;
// console.log(username, age);
// 값을 가져온 이후에 다른 이름으로 쓰고 싶다면 name: 이렇게 써줌으로써 변수명을 바꿔줄 수 있다

const student = {
  name: "이후추",
  score: {
    history: 85,
    science: 98,
  },
  friends: ["lee", "jeong", "kim"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(history, f2);
