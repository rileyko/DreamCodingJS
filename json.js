// JSON
// JavaScript Object Notation

// 1. Object -> JSON
// stringify(오브젝트, replacer함수)
// replacer함수는 옵션으로, 콜백 함수를 넣어 기존 값을 조작해서 JSON 만들때 사용
// ex : Boolean 타입
let json = JSON.stringify(true);
console.log(json);
// ex : List
json = JSON.stringify(["🍎", "🍌"]); // 작은 따옴표 -> 큰 따옴표
console.log(json);
// ex : Object
const cat = {
  name: "ranhee",
  color: "white",
  size: "null",
  birthDate: new Date(), // Date는 String으로 변환됨
  //   symbol: Symbol("id"), // JavaScript만 있는 데이터이기 때문에 제외됨
  jump: () => {
    console.log(`${this.name} can jump!`);
  }, // 함수는 데이터가 아니기 때문에 제외됨
};
json = JSON.stringify(cat); // Obj
console.log(json); // key, val 모두 큰 따옴표로 출력
json = JSON.stringify(cat, ["name"]); // 프로퍼티만 따오기
console.log(json); // key, val 모두 큰 따옴표로 출력
json = JSON.stringify(cat, (key, value) => {
  console.log(`key: ${key}, value: ${value}`); // 최상위에 Object로 묶임
  return key === "name" ? "woodeem" : value; // 콜백함수를 통한 데이터 변환
});
console.log(json);

// 2. JSON -> Object
// parse(JSON, reviver함수)
// reviver함수는 옵션으로, 콜백 함수를 넣어 기존 값을 조작해서 오브젝트 만들때 사용
// JSON으로부터 object 만들기
const obj = JSON.parse(json);
console.log(obj);
// 함수 호출
cat.jump(); // 기존 오브젝트의 함수 호출
// obj.jump(); // JSON으로부터 변환해 만든 오브젝트는 함수가 포함되지 않기 때문에 오류 발생
// date 형식
console.log(cat.birthDate.getDate()); // Date 객체 관련 함수 잘 작동
// console.log(obj.birthDate.getDate()); // Date가 String 형식으로 변환되었기 때문에 오류 발생
// Date 변환 콜백함수
// 콜백함수로 Date 형식 맞춰 반환하기
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value; // 키가 birthDate이면 Date 객체 생성
});
console.log(obj2);
console.log(obj2.birthDate.getDate()); // Date 함수도 잘 작동!
