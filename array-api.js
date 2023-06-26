// 배열.join('구분자') : 배열을 구분자로 이어진 문자열로 만들어줌 (구분자 없을 경우 콤마로 이어줌)
{
    const fruits = ["apple", "banana", "orange"];
    const result = fruits.join(" and ");
    console.log(result);
}

// 문자열.split('구분자', limit) : 문자열을 구분자로 나누어진 배열로 만들어줌 (limit 지정시 배열 사이즈 지정)
{
    const fruits = "🍎, 🥝, 🍌, 🍒";
    const result = fruits.split(","); // 콤마로 구분하여 배열 생성
    console.log(result);
    const result2 = fruits.split(",", 2); // 콤마로 구분하여 2개의 요소로만 이루어진 배열 생성
    console.log(result2);
}

// 배열.reverse() : 배열 순서를 뒤집어줌 (원본 자체를 뒤집어버림)
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // 배열 순서 뒤집어짐
    console.log(array); // 원본 배열도 순서가 바뀌어있음!
}

// Q4. 배열.slice(시작인덱스, 마지막인덱스) : 앞에있는 특정 요소들을 제외한 나머지만 남은 새로운 배열 생성
// 마지막 인덱스는 제외시킴!
{
    const array = [1, 2, 3, 4, 5];
    // splice : 원본 자체를 변경시켜버림 !
    const result = array.splice(0, 2); // 인덱스 0부터 2개 지우기 // 배열 자체가 변경됨
    console.log(result); // 삭제된 인덱스 0,1 요소 리스트 리턴
    console.log(array); // 남아있는 요소들 리턴
    // slice : 배열에서 원하는 부분만 리턴!
    const array2 = [1, 2, 3, 4, 5];
    const result2 = array2.slice(2, 5); // 마지막인덱스 + 1로 지정
    console.log(array2); // 원본은 그대로!
    console.log(result2); // 마지막 3,4,5만 담겨있음!
}
// 배열 연습
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, false, 80),
    new Student("C", 30, true, 90),
    new Student("D", 40, false, 66),
    new Student("E", 18, true, 88)
];
// 배열.find(불린값으로 리턴되는 콜백함수) : 콜백함수가 리스트 요소들에 호출되고, true를 리턴하면 바로 그 값 리턴
{
    const result = students.find((student) => {
        return student.score >= 90;
    }); // arrow function 정의 ! // 학생들 중 90점 이상인 학생만 출력
    console.log(result);
}
// 배열.filter(불린값으로 리턴되는 콜백함수) : 콜백함수가 리스트 요소들에 호출되고, true인 것들을 리스트로 묶어 리턴
{
    const result = students.filter((student) => student.enrolled);
    // 학생들 중 등록이 된 학생들만 출력
    console.log(result);
}

// 배열.map() : 콜백함수가 리스트 요소들에 호출되고, 함수를 거쳐 배열 내 요소들을 변환해줌
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// 배열.some() : 콜백함수 결과가 true인 것이 있는지 확인 (true/false 리턴)
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
}
// 배열.every() : 콜백함수 결과가 모두 true인지 확인 (true/false 리턴)
{
    const result = students.every((student) => student.score >= 50);
    console.log(result);
}

// 배열.reduce() : 배열에 있는 모든 값을 누적하여 계산
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0); // 시작값은 0이고, 반복 호출됨
    console.log(result / students.length); // 평균
}
// 배열.reduceRight() : 배열의 맨 뒤부터 시작해서 누적
{
    const result = students.reduceRight((prev, curr) => prev + curr.score, 0);
    console.log(result); // 누적합
}

// 여러 함수 동시 이용하기 1
{
    const result = students
        .map((student) => student.score) // 학생들을 점수로 변환
        .filter((score) => score >= 50) // 50점 이상만 걸러옴
        .join(); // 문자열로 이어붙임
    console.log(result);
}

// 여러 함수 동시 이용하기 2
// 배열.sort((a, b) =>  a - b) : 배열을 정렬함, a와 b 중 b가 크면 음수이므로 a, b 순서로 정렬
{
    const result = students
        .map((student) => student.score) // 점수로 변환
        .sort((a, b) => a - b) // 오름차순 정렬
        .join(); // 이어붙이기
    console.log(result);
}
