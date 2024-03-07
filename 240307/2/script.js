const xhr = new XMLHttpRequest();
// new 줌으로써 객체가 됨을 알 수 있음
xhr.open("GET", "student.json", true);
// true = 비동기로 찾아온다
//student.json 를 GET할 것이며 비동기 방식으로 찾아올 것이다.
xhr.send();

console.log(xhr);

// JS DOM = EVENT
// ex. 특정 버튼 누르기 / 마우스 올리기..
// 이벤트 생성 방식
// 1. 이벤트 핸들러
// ex. button.onclick = function() {}..
// 2. addEventListner()

// onreadystatechange
// 클라이언트가 서버에 데이터를 요청하고, 서버에서 데이터를 전송해주는 과정 속에서 데이터가 이동될 때마다 실행되는 이벤트 핸들러

// readystate :  값
// 0 : 클라이언트가 서버에 아무런 요청을 하지 않은 단계
// 1 : 클라이언트가 서버에 자료를 요청하고 성공한 상태
// 2 : 클라이언트가 서버에 자료를 요청한 이후 서버가 클라이언트 측에 응답메세지를 헤더로 전송한 상태
// 3 : 서버에서 클라이언트 측으로 데이터가 전송 중인 상태
// 4 : 서버가 정상적으로 클라이언트 측에 데이터를 전송완료했고, 이제 클라이언트 측에서 데이터를 마음껏 사용할 수 있는 상태

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student = JSON.parse(xhr.responseText);
    console.log(student);
    document.write(`${student.name}학생은 ${student.grade}학년 입니다`);
  }
};
