"use strict";

// Promise
// 비동기 처리를 하기위해 사용하는 자바스크립트 오브젝트
// State : Pending -> fulfilled / Rejected
// Producer vs Consumer

// 1. Producer
// 주의 : Producer가 생성될때 자동으로 Executor가 실행됨!
const promise = new Promise((resolve, reject) => {
  // doing some heavy work : 네트워크 통신, 파일 읽기, ...
  console.log("doing something...");
  setTimeout(() => {
    // resolve("woodeem");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumer : then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  }) // 성공 작업 다루기 // then은 Promise를 리턴함
  .catch((error) => {
    console.log(error);
  }) // 실패 작업 다루기 // then이 리턴한 promise를 처리
  .finally(() => {
    console.log("finally");
  }); // 성공 실패 여부와 상관없이 마지막에 실행

// 3. Promise Chaining
// then은 값 뿐만 아니라 Promise를 연결할 수도 있음
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        // resolve(`${hen} => 🥚`)
        reject(new Error(`Error! ${hen} => 🐣`)),
      1000
    );
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

getHen() //
  .then(getEgg) // 값을 바로 받아와서 리턴하는 경우에는 함수 이름만 넣어도됨
  .catch((error) => {
    return "🍞";
  }) // Error Handling
  .then(cook)
  .then(console.log);
