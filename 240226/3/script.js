// const today = new Date();
// const nowMonth = today.getMonth() + 1;
// const nowDate = today.getDate();

// document.write("<h1>오늘 날짜 정보..<h1/>");
// document.write(`현재 월 : ${nowMonth}월 <br />`);
// document.write(`현재 일 : ${nowDate}일 <br />`);

// const open = new Date("2024-01-09");
// const theMonth = open.getMonth() + 1;
// 1월은 0이 출력되니까.. +1
// const theDate = open.getDate();

// document.write("<h1>개강일 날짜 정보..<h1/>");
// document.write(`개강일 월 : ${theMonth}월 <br />`);
// document.write(`개강일 일 : ${theDate}일 <br />`);

// 밀리초
// 1밀리초 = 1/1000초
// 1초 = 1000밀리초
// 1분 = 60초 = 60000밀리초
// 1시간 = 60분 = 3,600,000밀리초
// 1일 = 24시간 = 24*60*60*1000밀리초

const today = new Date();
const nowYear = today.getFullYear();
const theDate = new Date(nowYear, 11, 31);
/* 1씩 차감되니까 12월 출력하고 싶으면 11작성 */
/* theDate = 1970년 1월 1일 부터 오늘까지의 밀리초 */
const diffDate = theDate.getTime() - today.getTime();
/* 오늘부터 24년 12월 31일까지 남은 시간이 밀리초로 표시 */
const result = Math.floor(diffDate / (24 * 60 * 60 * 1000));
/* 308.~~나옴 = 308일 남았다는 뜻 */
/* Math.floor()을 써서 소수점 지워줌 */
console.log(result);

document.write(`연말 D-day : ${result}일..`);
