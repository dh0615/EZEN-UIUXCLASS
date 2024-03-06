const member1 = ["HTML", "CSS"];
const member2 = ["HTML", "Javascript", "React"];
const member3 = ["Javascript", "Typescript"];

const subjects = [...member1, ...member2, ...member3];
console.log(subjects);
// 중복 출력!!ㅜㅜ
// Set()으로 해결하기..

const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});

console.log(resultList);

const result = document.querySelector("#result");
result.innerHTML = `
<ul>
  ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
// 배열에 있는 값을 문자열로 전환하기 위해 join()

// 1) 배열의 값을 복제하는 전개연산자구문 사용 (: 원본데이터값을 유지하기 위한 목적)
// 2) map() : 새로운 배열을 만들고자할 때 사용
// 3) join(구분자) : 배열의 데이터를 문자열로 변환
