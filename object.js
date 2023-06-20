// Object
// JS 데이터 타입 중 하나로 관련있는 데이터 및 기능의 모음
// 거의 모든 JS의 오브젝트들은 오브젝트의 인스턴스임

// 1. Literals and Properties
// { key : value };
// --> Key와 Value의 집합체
// --> Key : 우리가 접근할 수 있는 변수 (Property)
// --> Value : Property가 가지고 있는 값

// Object로 관리 안할때
const myName = "woodeem";
const age = 20;
print(myName, age);
function print(myName, age) {
    console.log(myName);
    console.log(age);
} // 하나씩 쓰면 휴먼에러가 발생할수도 있고, 관리도 어려움!

// Object로 관리할때
const woodeem = { myName: "woodeem", age: 20 };
function print(person) {
    console.log(person.myName);
    console.log(person.age);
} // 함수 정의시 클래스만 전달 !
print(woodeem); // 함수를 호출할때 인스턴스만 전달하면 됨

// 오브젝트 선언
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object contructor' syntax

// JS는 다이나믹 클릭 타입 언어로서, Runtime때 동적으로 타입이 정해짐
const woodeem2 = { myName: "goranee", age: 20 }; // 이미 클래스를 정의해놓고
woodeem2.hasJob = true; // 뒤늦게 속성을 추가해도
console.log(woodeem2); // 작동 하긴 함 => 비추!!!
delete woodeem2.hasJob; // 심지어 프로퍼티 삭제까지 됨;;
console.log(woodeem2); // => 비추!!!

// 2. Computed Properties
// 오브젝트의 프로퍼티 접근하기
console.log(woodeem2.myName); // Key에 해당하는 값을 받아오고 싶을 때 사용, 즉 걍 코딩할때 사용!
console.log(woodeem2["myName"]); // Computed Property를 쓸때는 String 타입으로 키를 지정 ! // 어떤 키가 필요한지 모를때 사용
woodeem2["hasJob"] = true; // Computed Property를 이용해 key, value 선언
console.log(woodeem2["hasJob"]);
function printValue(obj, key) {
    console.log(obj[key]); // Computed Property
} // 오브젝트에 특정 키가 들어있는지 확인할때 사용!
printValue(woodeem2, "myName"); // 동적으로 key의 value를 받아올때 Computed Property 사용

// 3. Property value shorthand
const person1 = { name: "밍퐁", age: 32 };
const person2 = { name: "우퐁", age: 27 };
const person3 = { name: "영퐁", age: 32 };
function Person(name, age) {
    // 순수하게 오브젝트를 생성하는 함수들은 클래스처럼 함수명이 대문자로 시작
    return {
        name, // key와 value의 이름이 동일하면 name : name으로 안써두됨!
        age
    };
} // JS에 클래스 개념이 없을 때 사용한 방법
const person4 = Person("밍포잉", 4);
console.log(person4);

// 4.Constructor Function
function Person(name, age) {
    // 순수하게 오브젝트를 생성하는 함수들은 클래스처럼 함수명이 대문자로 시작
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
const person5 = new Person("우포잉", 24);
console.log(person5);

// 5. in Operator : 프로퍼티가 있는지 체크 (오브젝트 내에 키가 있는지 체크)
console.log("name" in person5); // 프로퍼티 있으니까 true
console.log("weight" in person5); // 프로퍼티 없는거라 false
console.log(person5.weight); // undefined

// 6. for..in cs for..of
// for (key in obj) : 모든 키들을 받아서 일들을 처리하고 싶을때 사용
for (key in person5) {
    console.log(key);
}
// for (value of iterable) : 순차적으로 이루어진 데이터들을 루프문에 돌림
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
} // 길이 계산하고, 배열에서 한개씩 조회해야되서 비추
for (arr of array) {
    console.log(arr);
} // 배열에 있는 모든 값들을 간단히 불러냄

// 7. Cloning
// 오브젝트 복사 : 같은 프로퍼티를 가리킴
const user = { name: "우지미", age: "13" };
const user2 = user; // 동일한 Key, Value를 바라보게됨
user2.name = "아름이";
console.log(user); // user2에서 바꾼값 적용

// 오브젝트 복제 : 매뉴얼하게 오브젝트 복제
const user3 = {};
for (key in user) {
    user3[key] = user[key];
} // user에 있는 key를 돌면서 key, value 할당
console.clear();
console.log(user3);

// 오브젝트 복제 : Object.assign(타겟오브젝트, 원본오브젝트);
const user4 = {};
Object.assign(user4, user);
console.log(user4);
const user5 = Object.assign({}, user); // 위 코드와 동일
console.log(user5);
user5.name = "봉봉이";
console.log(user5.name); // 봉봉이
console.log(user.name); // 아름이

// Object.assign() 예시
const fruit1 = { color: "red" };
const fruit2 = { color: "yellow", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 같은 프로퍼티를 보유했을 때 가장 마지막에 있는 오브젝트의 값을 덮어씀!
console.log(mixed.color);
console.log(mixed.size);
