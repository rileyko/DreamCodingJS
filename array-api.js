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

// 배열.find(불린값으로 리턴되는 콜백함수, Arg) : 콜백함수가 리스트 요소들에 호출되고, true를 리턴하면 바로 그 값 리턴
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
  new Student("E", 18, true, 88),
];
{
  const result = students.find((student) => {
    return student.score >= 90;
  }); // arrow function 정의 ! // 학생들 중 90점 이상인 학생만 출력
  console.log(result);
}

// Q6. make an array of enrolled students
{
  let enrolledList = [];
  const result = students.find((student) => {
    if (student.enrolled === true) {
      enrolledList.push(student);
    }
    return enrolledList;
  });
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
