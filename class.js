'use strict';
// OOP
    // class : template, object : instance of class
// JS는 기존에 클래스를 정의하지 않고 오브젝트를 만들 수 있었음 (Prototype Based)

// 1. Class 선언
class Person {
    // constructor (생성자) : 오브젝트를 만들때 필요한 데이터를 전달
    constructor(name, age) {
        // fields : 전달된 데이터를 할당함
        this.name = name;
        this.age = age;
    }
    // methods 
    speak(){
        console.log(`${this.name}, hello ~!`); // Class에 있는 변수 사용
    }
}
const woolim = new Person('woolim', 20);
console.log(woolim.name, woolim.age);
woolim.speak();

// 3. Getter & Setters
// Getter : 사용자가 입력한 값
// Setter : 그 값을 받아서 우리가 설정하는 값
    // Set은 값을 설정하기 때문에 parameter로 value를 받아와야함!
// getter, setter에 있는 변수를 생성자에 있는 변수와 동일하게 지을 경우 계속 함수를 호출하기 때문에 Call Stack 다 차버림
    // 따라서 _변수 와 같은 모양으로 지정
// _ : 자바스크립트의 식별자로, 이름과 같은 방식으로 객체를 식별한다는 것
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        // Error 발생시키는 문장
        // if (value < 0){
        //     throw Error('나이가 왜 음수냐?');
        // } 
        this._age = value < 0 ? 0 : value; // 삼항 연산자로 처리
    }
}
const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age); // _없이 사용가능 !

// 3. Fields (public, private)
// 생성자 없이 필드를 정의하게 되면 기본값이 public 변수이고, 
// #를 붙이면 private 변수가됨
class Experiment {
    publicField = 2; // 클래스 내부/외부 상관없음!
    #privateField = 0; // 클래스 내부에서만 접근, 변경, 읽기가 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined


// 4. static properties & static methods
// class가 가지고 있는 고유한 값과 데이터에 상관없이 동일하게 반복적으로 사용되는 메소드의 경우 static을 사용
// 오브젝트에 상관없이 클래스와 자체적으로 연결됨, 즉 오브젝트마다 할당되는게 아니라! 클래스 자체에 할당
// 즉, Object에 상관없이 공통적으로 Class에서 쓸 수 있는 부분에 사용!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding


// 5. 상속 (Inheritance)
// 클래스를 extend해서 다른 클래스를 생성
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape {} // 상속
const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()
console.log(rectangle.getArea());

class Triangle extends Shape { // 상속 
    draw() {
        super.draw(); // 부모 (Shape) 클래스의 함수 상속
        console.log('🔺'); // 오버라이딩 (다형성)
    }
    getArea() {
        return (this.width * this.height) / 2; // Shape 클래스의 메소드 오버라이딩 (다형성)
    }
    toString() {
        return `Triangle's color : ${this.color}`; // Object 클래스의 메소드 오버라이딩
    }
} 
const triangle = new Triangle(20, 20, 'red')
triangle.draw()
console.log(triangle.getArea());

// 6. Class Checking : instanceOf
// 오브젝트 instanceOf 클래스
// 해당 오브젝트가 특정 클래스에 의해 만들어진 인스턴스인지 아닌지를 확인하는 것!
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true -> triangle은 Triangle 클래스로 만들어졌고, Triangle이 Shape 클래스를 상속받았기 때문!
console.log(triangle instanceof Object); // true -> Object는 최상위 오브젝트 클래스! 따라서 JS의 모든 오브젝트는 Object를 상속했음
console.log(triangle.toString()); // [object Object] -> 오브젝트의 함수 사용한 것임
