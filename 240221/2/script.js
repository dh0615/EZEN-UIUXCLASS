/* const major = document.querySelector("#major");
console.log(major.options);

const displaySelect = () => {
  const selectedText = major.options[major.selectedIndex].innerText;
  alert(`${selectedText}를 선택했습니다~~`);
};
//  options select태그 안의 내용을 배열로 찾아온다
//  major.options[major.selectedIndex]  선택한 요소의 index값을 찾아옴
// innerText 변수에 담아놓기

major.onchange = displaySelect;
// onchange 해당 요소 안의 값이 변경된다면 다음과 같은 함수를 실행시켜라 */

/* const subject = document.testForm.subject;
console.log(subject); */

/* const checked = document.querySelector("input[name='subject']:checked");
// 따옴표구분하기.. '' ""
console.log(checked); 
> 이벤트가 존재하지 않기 때문에 못찾아옴 
콘솔창에서 document.querySelector("input[name='subject']:checked"); 써주면 나옴*/

const checked = document.querySelector("input[name='subject']:checked");
