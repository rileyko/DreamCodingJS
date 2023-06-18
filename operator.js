// 1. 문자열 합치기
console.log('my' + 'cat');
console.log('1' + 2); // 문자열 + 숫자 = 문자열 + str(숫자)
console.log(`String Literals: 1 + 2 = ${1 + 2}`); // 변수값을 계산해서 문자열로 변환
// 1.1 백슬래쉬 (\)
console.log('우디밍\'s 코드'); // \', \" : 따옴표 앞에 \없으면 "SyntaxError: missing ) after argument list" 에러 발생
console.log('우디밍\'s \n 코드'); // \n : 줄바꿈
console.log('우디밍\'s \t 코드'); // \t : 탭

//2. 숫자 연산자
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 2); // 나누기
    console.log(1 / '셋'); // 숫자 / 문자 = NaN
    console.log('둘' / 2); // 문자 / 숫자 = NaN
    console.log('2' / 2); // '숫자' / 숫자 = 정상 출력
console.log(1 * 1); // 곱하기 // 이외 연산 나누기와 동일
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 승

//3. ++, -- : 증감연산자
let counter = 2;
const preIncrement = ++counter; // PreIncrement : ++변수
    // counter = counter + 1; // 1을 더한 값을 변수에 할당
    // preIncrement = counter; // 지정한 변수에 그 값을 할당
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3, 3
counter = 2;
const postIncrement = counter++; // PreIncrement : 변수++
    // postIncrement = counter; // 변수 먼저 할당 후,  
    // counter = counter + 1; // 1을 더함
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 2, 3
counter = 2;
const preDecrement = --counter; // PreIncrement : ++변수
    // counter = counter - 1; // 1을 뺀 값을 변수에 할당
    // preIncrement = counter; // 지정한 변수에 그 값을 할당
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 1, 1
counter = 2;
const postDecrement = counter--; // PreIncrement : 변수++
    // postIncrement = counter; // 변수 먼저 할당 후,  
    // counter = counter - 1; // 1을 빼줌
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // 2, 1

//4. = : 할당 연산자
let x = 3;
let y = 6;
console.log(x += y);  // x = x + y // 3+6
console.log(x -= y);  // x = x - y // 9-6
console.log(x *= y);  // x = x * y // 3*6
console.log(x /= y);  // x = x / y // 18/6

// 5. <, >, <=, >= : 비교연산자
console.log(10 < 6); //false
console.log(10 <= 6); //false
console.log(10 > 6); //true
console.log(10 >= 6);  //true

// 6. || (or), && (and), ! (not) : 논리 연산자
// 함수 등 연산이 많은 것은 가장 뒤에 위치해야함!
const value1 = false;
const value2 = 4 < 2; // false
function check(){
    for (let i = 0; i < 5; i++) {
        console.log('😱');
    }
    return true;
} // i=0 할당 후 1씩 더하면서 돌리다가 i = 5가 되면 true를 반환
console.log(`or: ${value1 || value2 || check()}`); // || (or) : 3개 중 1개라도 true면 true를 반환 
console.log(`and: ${value1 && value2 && check()}`); // && (and) : 3개 모두 true면 true를 반환 <- Null 체크 할 때 자주 사용 (nullObj && nullObj.var)
console.log(!value1); // ! (not) : 값을 반대로 바꿔줌

// 7. ==, != : 동등 연산자
const stringFive = '5';
const numberFive = 5;
// loose equality : 타입 conversion 해준뒤 값 비교
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
// strict equality : 값과 타입 모두 체크 🌟
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true
// 오브젝트의 equality
const woodeem1 = {name : 'woodeem'};
const woodeem2 = {name : 'woodeem'}; // 실제로 woodeem1과 2는 각각 다른 레퍼런스를 갖고 있고, 서로 다른 오브젝트를 가르키고 있음
const woodeem3 = woodeem1; // woodeem1의 레퍼런스를 가르키고 있음
console.log(woodeem1 == woodeem2); // false -> 레퍼런스가 다르니까!
console.log(woodeem1 === woodeem2); // false -> 타입이든 뭐든 역시 레퍼런스가 다름!
console.log(woodeem1 === woodeem3); // true -> 레퍼런스가 같음 !

// -----Quiz-----
console.log(0 == false); // true
console.log(0 === false); // false -> 숫자, 불린
console.log('' == false); // true
console.log('' === false); // false -> 문자, 불린
console.log(null == undefined); // true
console.log(null === undefined); // false -> 오브젝트, undefined

// 8. if : 조건 연산자
// if, else if, else
const myName = 'riley';
if (myName === 'woodeem'){
    console.log(`안녕, ${myName} ~!`);
} else if (myName === 'riley') {
    console.log('라일리 하이');
} else {
    console.log('님 ㄴㄱ?')
}

// 9. ? : 삼항 연산자(Ternary Operator)
// 간단할때만 쓰는 조건문 -> 복잡하면 if로 하셈
// 조건 ? 참일때값 : 거짓일때값;
console.log(myName === 'riley' ? '라일리!' : '누구?'); 
console.log(myName === 'riley' ? true : '누구?'); // 형태 달라도 됨

// 10. Switch문 (switch case)
// if가 여러개거나, enum-like 값 체크, 타입 체크를 수행할 때 사용
const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log('Go Away!');
        break;
    case 'Chrome':
    case 'Firefox': // Chrome, Firefox는 똑같은 반응
        console.log('Love You!');
        break;
    default: // else
        console.log('Same All!');
        break;
}

// 11. 반복문(Loops)
// While : false가 나오기 전까지 무한대로 반복 -> 조건이 맞을때만 실행하고 싶을때!
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--; // i = i - 1
}
// do - While : 블럭 먼저 실행(do) 후, 조건 확인(while) -> 블럭 먼저 실행하고 싶을때!
do {
    console.log(`do while : ${i}`);
} while (i != 0);
// For :
// for(시작문장; 조건; step)
// 시작 문장은 한번만 호출!! 블럭 실행 전 조건을 검사하고, 블럭이 실행되면 step을 실행
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i - 2) {
    // inline 변수 선언 (지역변수)
    console.log(`inline variable for: ${i}`);
}
// nested loop (중첩)
// O(n^2), 즉 CPU에 좋지 않음!!!
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// -----Quiz-----
// break, continue : 루프문을 끝낼 수 있음
    // break : 루프를 완전히 끝내버림
    // continue : 지금거만 스킵하고 다시 다음 스텝으로 넘어감
// Q1. 0에서 10까지 수 중 짝수만 출력(Continue 사용)
for (let i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        continue;
    } 
    console.log(`i: ${i}`)
}
// Q1. 0에서 10까지 수 중 8에 도달하면 출력을 멈추는 루프문(Break 사용)
for (let i = 0; i <= 10; i++){
    if(i > 8){
        break;
    }
    console.log(`i: ${i}`);
}