// async & await

// 1. async
// promise
function fetUserPromise() {
    return new Promise((resolve, reject) => {
        resolve("woodeem");
    });
}
const user = fetUserPromise();
user.then(console.log);
// async
// async 주석만 붙이면 Promise를 쉽게 만들어줌
async function fetUserAsync() {
    return "woodeem";
}
const user2 = fetUserAsync();
user.then(console.log);

// 2. await
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getIPhone() {
    // async니까 promise 반환
    await delay(1000); // 끝날때까지 기다림
    return "📱";
}
async function getMac() {
    await delay(1000);
    return "💻";
}
async function pickApples() {
    // 병렬 처리 // 둘다 필요할 경우
    const iphonePromise = getIPhone(); // 즉시 실행
    const macPromise = getMac(); // 즉시 실행
    const iphone = await iphonePromise; // 기다림
    const mac = await macPromise; // 기다림
    return `${iphone} + ${mac}`;
}
pickApples().then(console.log);

// 3. Promise APIs
function pickAllApples() {
    // Promise.all([함수]) : 배열에 선언된 함수를 거친 모든 promise 반환
    return Promise.all([getIPhone(), getMac()]).then((apples) => apples.join(" + "));
}
pickAllApples().then(console.log);

function pickOnlyOne() {
    // Promise.race([함수]) : 배열에 선언된 함수를 거쳐 가장 먼저 나온 promise 반환
    return Promise.race([getIPhone(), getMac()]);
}
pickOnlyOne().then(console.log);
