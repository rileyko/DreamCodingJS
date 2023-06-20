// 2. Variable 선언 : Let, Const
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

// 4. Data Type
// --- Primitive ---
// number : 소수, 정수
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`); // number
console.log(`value: ${size}, type: ${typeof size}`); // number
// number :
// infinity : 양의 무한대
// -infinity : 음의 무한대
// NaN(Not a Number) : 숫자가 아닌 값을 나눌때 나옴
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity); // number
console.log(negativeInfinity); // number
console.log(nAn, typeof nAn); // number
// number : bigInt
const bigInt = 1111231242134134n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // bigint

// string
const char = "c";
const goranee = "goranee";
const greeting = "hello " + goranee;
console.log(`hi ${goranee} !`); // template literals : 백틱(`) 기호를 사용해 문자열 내에 변수 값 넣기

// boolean
// false : 0, null, undefined, NaN, ''
// true : false가 아닌 값
const canRead = true; // true
const test = 3 < 1; // false
console.log(canRead);
console.log(test);

// null : null으로 정의한 값
let nothing = null;
console.log(nothing, typeof nothing);

// undefined : 선언은 했는데 값이 정해지지 않음
let x;
console.log(x, typeof x);

// symbol : 우선순위를 주고 싶을 때 고유 식별자를 주기 위해 사용
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id"); // for로 동일 심볼 만들기
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${symbol1}`); // VM108:4 Uncaught TypeError: Cannot convert a Symbol value to a string at <anonymous>:4:24
console.log(`value : ${symbol1.description}`); // value : id

// --- Object
// const이어서 오브젝트는 변경을 못하지만, 변수에 할당된 값은 변할 수 있음
const woolim = { name: "riley", age: "20" };
console.log(woolim, typeof woolim); // {name: 'riley', age: '20'} 'object'
woolim.weight = 38;
console.log(woolim, typeof woolim); // {name: 'riley', age: '20', weight: 38} 'object'
woolim.age = 22;
console.log(woolim, typeof woolim); // {name: 'riley', age: '20'} 'object'

// 5. Dynamic typing : 런타임에서 타입이 정해짐
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 7;
console.log(`value: ${text}, type: ${typeof text}`); // value: 7, type: number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = "10" / "5";
console.log(`value: ${text}, type: ${typeof text}`); // value: 2, type: number
