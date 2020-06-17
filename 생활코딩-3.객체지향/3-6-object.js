/*
Object 객체란, 객체의 가장 기본적인 형태를 가진 객체로, 아무것도 상속받지 않은 순수 객체라 한다. js에서 값을 저장하는 기본 단위이기도 하다. 
사실 그래서 모든 js의 객체는 Object 객체를 상속받아서, 모든 객체는 Object 객체의 프로퍼티, 메서드를 가지고 있다.
(그래서 모든 객체는 Object의 프로퍼티, 메서드도 사용할 수 있다.)
*/
var nullObj1 = new Object()
var nullObj2 = Object()
var obj3 = Object(3)

console.log(nullObj1)
console.log(nullObj2)
console.log(obj3)
/*
참고로 위같이 Object 생성자를 호출한다면, 객체를 생성한다.
생성자에서 인자값으로 아무값을 주지 않으면(null, undefined도 동일) 빈 객체를 생성해서 반환하고,
인자값으로 값을 넣으면, 값에 맞는 자료형의 객체를 반환한다. 

참고로 생성자로 Object로 호출(new Object())하지 않고, 걍 호출(Object())해도 생성자로 호출한 것과 동일하게 동작한다.
*/


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
