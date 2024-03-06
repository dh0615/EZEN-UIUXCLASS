// Map 객체 => 2015년 ES6
// arr.map()

// Map 객체가 나오게 된 이유
// 1) JS객체 => 일반객체 > 배열객체

// 2) 일반객체
// 장점 : key, value값을 가지고 있는 한쌍의 프로퍼티 형식으로 되어있다 > 그만큼 데이터를 체계적으로 보관/관리/사용할 수 있는 기반이 된다
// 단점 : for...in이라는 반복문을 쓸 수 있기는 하나 객체 안에 있는 value값만을 찾아와서 직접적으로 반복문을 돌릴 수 있는 방법이 없다
// 배열 안의 아이템은 고유의 인덱스값을 가지고 있으나 객체 안에 구성되어있는 아이템들은 인덱스 번호를 할당받지 못한다

// 3) 배열객체
// 장점 : 배열 안에 포함되어있는 아이템들이 고유의 인덱스 값을 가지고 있으며 for문을 활용한 반복문으로 업무의 효율성을 극대화할 수 있다는 장점이 있다
// 단점 : 배열은 객체처럼 key와 value형태로 구성된 체계적인 데이터 관리 x

// Solution : 일반객체와 배열객체의 장점만 모아서 하나로 만들어주면 어떨까?
// >>> Map객체

// key, value 값으로 구성된 아이템을 가질 수 있다.
// 각 아이템별 인덱스 값을 할당
// for의 반복문을 활용해서 언제든지 값을 추출해올 수 있다

// Map객체 생성방법 1
// const bag = new Map();
// bag.set("color", "red");

// console.log(bag);

// Map객체 생성방법 2
const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

myCup.set("type", "mini").set("purpose", "daily");

console.log(myCup);

console.log(myCup.size);
// 5 출력
// size = Map객체가 갖고 있는 아이템의 개수

console.log(myCup.get("color"));
// get() : 매개변수 안에 들어온 키에 매칭되어지는 값을 찾아오는 역할
// set()과는 반대의 역할을 한다고 보면 됨

//has() : 앞에 붙은 객체의 매개변수가 존재하면 true, 아니면 false
console.log(myCup.has("color")); // true
console.log(myCup.has("variable")); // false

myCup.delete("type");
// 해당 key값만 삭제
// myCup.clear()
// 모든 값 삭제

console.log(myCup);

console.log(myCup.keys());
// MapIterator {'color', 'material', 'capacity', 'purpose'}
// 이렇게 출력

for (let key of myCup.keys()) {
  console.log(key);
}
// color
// material
// capacity
// purpose
// 이렇게 출력
// 배열과 같이 내부 아이템을 한개씩 찾아와서 반복순회할 수 있도록 해주는 객체 => 이터레이터 객체

for (let value of myCup.values()) {
  console.log(value);
}
// white
// ceramic
// 300ml
// daily

for (let value of myCup.entries()) {
  console.log(value);
}
//배열형태로 key, value값 모두 찾아옴
// ['color', 'white']
// ['material', 'ceramic']
// ['capacity', '300ml']
// ['purpose', 'daily']

// 하지만,, Map객체의 단점..
// 데이터의 중복을 막을 수 없다!!!
// 동일한 데이터 하나의 객체 안에 들어오면 안되는 상황

// 일반객체의 장점 + 배열객체 장점 + Map객체의 장점 + 데이터의 중복도 막을 수 있는건 없을까? = Set()의 등장..

const numSet1 = new Set();
numSet1.add("one").add("two");
console.log(numSet1);

const numSet2 = new Set([1, 2, 3]);
console.log(numSet2);
console.log(numSet2.has(2));
// has() : 앞에 있는 객체 안에 다음과 같은 아이템이 있으면 true, 없으면 false

numSet2.delete(1);
numSet2.clear();
console.log(numSet2);
