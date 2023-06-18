// Function (함수)
// 재사용이 가능한 기능으로, 한가지의 Task나 값을 계산하기 위해 사용
// 하나의 함수는 한 가지의 일만 하도록 만들어야함!
// JS에서 function은 Object임 ! -> 함수를 변수에 할당, 파라미터 전달, 리턴 모두 가능!

// 1. 함수 선언
// function 함수명(인풋1, 인풋2, ...){로직 return 아웃풋;}
// 함수명 : 동사형태로 이름 지정 (ex: doSomething)
function printHello(){
    console.log('Hello');
} // 인풋 없는 함수 선언
printHello(); // 호출

function log(message){
    console.log(message);
} // 인풋있는 함수 선언
log('안녕 우딤'); // 호출

// 2. 파라미터
// Premitive : 메모리에 value가 저장되어 있기 때문에 value 전달
// Object : 메모리에 reference가 저장되기 때문에 Reference가 전달
function changeName(obj){
    obj.name = 'coder'
}
const woodeem = {name : 'woodeem'};
changeName(woodeem);
console.log(woodeem);

// 3. Default Parameters
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi ~!');

// 4. REST parameters
// ...변수 : 배열 형태로 전달됨
function printAll(...args){
    for (let i=0; i < args.length; i++) {
        console.log(args[i]);
    }
}
function printAll(...args){
    for (const arg of args) {
        console.log(arg);
    }
}
function printAll(...args){
    args.forEach((arg) => console.log(arg)) ;
}
printAll('woodeem', 'coding', 'riley'); // Object 형태

// 5. Local Scope
// Scope : 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. 
// Closure : 중첩된 함수에서 자식 함수가 부모 함수에서 정의된 변수에 접근 할 수 있는 함수
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'Hello~';
    }
    // console.log(childMessage); // childMessage is not defined
}
printMessage();
// console.log(message); // message is not defined 에러 발생! 지역변수!
console.log(globalMessage); // 전역변수니까 에러없이 잘 실행 ~

// 6. 리턴
// 참고로, return이 없으면 return undefined를 의미함
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(result);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early Return, Early Exit
// 긴 로직을 block안에서 쓰면 가독성이 떨어지니까, If에서 빨리 리턴해버리고 그 후에 처리
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // 긴 로직 수행
}

// First-Class Function
// 함수를 변수에 선언하거나 파라미터로 선언하거나 리턴할 수 있음

// 1. Function Expression (함수 표현식)
// Function Expression : 할당 후 호출 <-> 함수 선언 : 함수 선언 전 호출 가능(hoisting)
// Anonymous Function : 이름 없는 함수 <-> Named Functino : 이름 있는 함수
const print = function(){ // Anonymous Function
    console.log('print');
}; // 함수명 없이 함수를 변수에 직접 선언
print(); // 함수 호출
const printAgain = print; // 함수 할당
printAgain(); // 함수 호출
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function
// Callback 함수 : 함수를 전달해서 상황에 맞으면 전달된 함수를 부르는 것
// 아래 예시에서는 printYes, printNo가 콜백함수
function randomQuiz(answer, printYes, printNo){
    if (answer === '정답'){
        printYes();
    } else {
        printNo();
    }
}
const printYes = function(){
    console.log('Yes!');
} // Anonymous Function
const printNo = function print(){
    console.log('No!');
    // print(); // -> Call Stack이 가득 차버림 !! XXX
} // Named Function : 디버깅에서 함수명을 보기위해 표시하거나 
    // 함수 내에서 자기 스스로 호출할 때(재귀) 사용
randomQuiz('wrong', printYes, printNo);
randomQuiz('정답', printYes, printNo);

// Arrow Function
// 항상 Anonymous Function 사용 !!
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleDevide = (a, b) => {
    // 여러 로직일 경우 블럭({}) 사용
    if (b != 0) {
        return a / b;
    }
    return '분모는 0이 될 수 없습니다.';
};
console.log(simpleDevide(6,0));

// IIFE (Immediately Invoked Function Expression)
// 함수를 선언함과 동시에 호출하는 것
(function hello(){
    console.log('IIFE');
})();

// -----Quiz-----
// 계산기 함수 만들기 !
    // calculate(command, a, b)
    // command : add, substract, divide, multiply, remainder
function calculate(command, a, b){
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default: // else
            return '그런 command는 없슴둥!';
    }
}
console.log(calculate('?', 2, 4));