/*
Object 객체란, 객체의 가장 기본적인 형태를 가진 객체로, 아무것도 상속받지 않은 순수 객체라 한다. js에서 값을 저장하는 기본 단위이기도 하다. 
사실 그래서 모든 js의 객체는 Object 객체를 상속받아서, 모든 객체는 Object 객체의 프로퍼티, 메서드를 가지고 있다.
(그래서 모든 객체는 Object의 프로퍼티, 메서드도 사용할 수 있다.)
*/
var nullObj1 = new Object()
var nullObj2 = Object()

/*
참고로 위같이 Object 생성자를 호출하고 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object

Object 생성자는 주어진 값의 객체를 생성합니다. 주어진 값이 null이거나 undefined면 빈 객체를 생성해 반환하고, 그렇지 않으면 값에 맞는 자료형의 객체를 반환합니다. 만약 값이 이미 객체이면 그 값을 그대로 반환합니다.

생성자가 아닌 맥락에서 호출하면 Object는 new Object()와 동일하게 동작합니다.
*/
