// 2. Variable 선언
// Variable(변수) : 변경될 수 있는 값
// let (ES6에 추가됨)
// Mutable : 데이터 형태나 값이 바뀔 수 있음
let globalName = "길동";
{
    let localName = "우림"; // 변수 선언 및 할당
    console.log(localName);
    localName = "riley"; // 변수 재할당
    console.log(localName);
}
//console.log(localName); // is not defined 에러 발생!
console.log(globalName); // 제대로 출력

// var (쓰지마셈 !!!)
// 1. var hoisting : 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려 주는 것
// 2. block scope이 없음 : 블럭 안에 선언했는데도, 밖에서 사용 가능
{
    age = 4; // 변수 선언도 안했는데 할당이 되고
    var age; // 그 후에 변수 선언을 한다?! 😢
}
console.log(age);

// 3. Constants
// Immutable : 한번 할당하면 절대 값이 바뀌지 않음 (포인터가 잠겨있음)
// 장점 : 보안, 스레드로부터 보호, 휴먼 에러 감소
const daysInWeek = 7;
const maxNumber = 5;

//
