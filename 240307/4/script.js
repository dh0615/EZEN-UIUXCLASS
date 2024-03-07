// console.log("시작");
// add();
// console.log("실행 중..");
// console.log("끝");

// 예외 조항 처리
/* try {
  // 실행시키고자 하는 실행문 모두 작성
  console.log("시작");
  add(); // add는 존재하지 않으니까 넘어가지 않음
  console.log("실행 중..");
} catch (err) {
  // 정상적이지 못한 실행문
  console.log(`오류 발생 : ${err}`);
  console.log(`오류 발생 : ${err.name}`);
  console.log(`오류 발생 : ${err.message}`);
} finally {
  // 정상적이든 아니든 일단 종료
  console.log("끝");
}
 */

const json = `{"grade":3, "age":25}`;

try {
  const user = JSON.parse(json);
  if (!user.name) {
    throw "사용자 이름이 없습니다";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("통신완료");
}
// throw : 발생한 에러의 메세지를 커스터마이징 할 수 있게끔 도와주는 것
