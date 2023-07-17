"use strict";

// JavaScript는 동기적 실행 : 호이스팅 이후는 순서에 맞춰 실행
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000); // Async
console.log("3");

// Synchronous Callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous Callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("Async Callback"), 2000);

// Callback Hell
// 1. 가독성 떨어짐
// 2. 에러 처리, 디버깅 어려움
// 3. 유지보수 어려움

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "woodeem" && password === "gorani") ||
        (id === "deeming" && password === "pypy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "woodeem") {
        onSuccess({ name: "woodeem", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const UserStorage2 = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");
UserStorage2.loginUser(
  id,
  password,
  (user) => {
    UserStorage2.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
