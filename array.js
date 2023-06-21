"use strict";

// Array

// 1. 배열 선언하기
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index 사용하기
const fruits = ["🍎", "🍌", "🍊"];
console.log(fruits);
console.log(fruits.length); // 배열의 길이
console.log(fruits[0]); // 첫번째 요소의 값
console.log(fruits[10]); // 없는 인덱스인 경우 undefined
console.log(fruits[fruits.length - 1]); // 배열의 마지막 요소 값

// 3. 배열 루프문 돌리기
// 3-1.for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 3-2.for (let arr of array)
for (let f of fruits) {
    console.log(f);
}
// 3-3.forEach(콜백함수, 파라미터(옵션)) : 콜백함수를 value 마다 호출해주고 value, 인덱스 반환해줌
// 즉, 배열을 전달해주면 내가 지정한 함수 값을 출력해줌 !
fruits.forEach((fruit) => console.log(fruit)); // 한 줄만 있는 arrow function은 {}도 생략 가능!

// 4. 배열에 요소를 추가, 삭제, 복사
// shift/unshift는 push/pop보다 매우 느림 -> push/pop은 빈 공간에 넣고 빼는건데, shift/unshift는 기존 데이터를 뒤로 밀고 맨앞에서 처리하고 다시 기존걸 처리해서 그럼
// push : 배열 마지막에 요소 추가하기
fruits.push("🍓", "🍑");
console.log(fruits);
// pop : 배열 마지막 요소 빼내기
fruits.pop(); // 마지막 요소 뺌
fruits.pop();
console.log(fruits);
// unshift : 배열 처음에 요소 추가하기
fruits.unshift("🍓", "🍑");
console.log(fruits); // 맨앞에 추가됨
// shift : 배열 처음 요소 빼내기
fruits.shift(); // 맨 처음 요소 뺌
console.log(fruits); // 맨앞에 추가됨
// splice(시작인덱스, 몇개까지 지울건지, 추가할 요소들) : 지정된 위치의 아이템 지우고, 그 위치에 요소들을 추가함
fruits.splice(1, 1); // 개수 지정 안하면 : 지정한 인덱스부터 모든 인덱스를 지워버림
console.log(fruits);
fruits.splice(1, 1, "🥑", "🫐");
console.log(fruits);
// 배열.concat(이어붙일 배열) : 배열 이어붙이기
const fruits2 = ["🍏", "🍇"];
const newFruits1 = fruits.concat(fruits2); // fruits 배열에 fruits2 배열을 이어붙임
console.log(newFruits1);
const newFruits2 = fruits.concat("🍅"); // 문자열도 가능
console.log(newFruits2);

// 5. Searching
// 배열.indexOf(요소) : 인덱스를 통해 배열 요소 위치 찾기 (Integer 반환)
console.clear(); // 콘솔 내용 지우기
console.log(fruits); // 배열요소 출력
console.log(fruits.indexOf("🫐")); // 인덱스 찾기
console.log(fruits.indexOf("✨")); // 없는 요소는 -1 반환
// 배열.includes(요소) : 배열 내에 요소가 포함되어있는지 (Boolean 반환)
console.log(fruits.includes("🫐")); // 있으니까 true
console.log(fruits.includes("✨")); // 없으면 false
// 배열.lastIndexOf(요소) : 동일한 요소가 여러개 들어가있을 때 마지막 인덱스를 반환 (Integer 반환)
console.clear();
fruits.push("🫐"); // 마지막에 요소 추가
console.log(fruits.lastIndexOf("🫐")); // 마지막 인덱스인 4 반환
