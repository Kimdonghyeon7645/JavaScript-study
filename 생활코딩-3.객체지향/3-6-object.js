/*
Object 객체란, 객체의 가장 기본적인 형태를 가진 객체로, 아무것도 상속받지 않은 순수 객체라 한다. js에서 값을 저장하는 기본 단위이기도 하다. 
사실 그래서 모든 js의 객체는 Object 객체를 상속받아서, 모든 객체는 Object 객체의 프로퍼티, 메서드를 가지고 있다.
(그래서 모든 객체는 Object의 프로퍼티, 메서드도 사용할 수 있다.)
*/
var nullObj1 = new Object()
var nullObj2 = Object()
var obj3 = Object(3)
// 보통 빈객체를 Object() 대신 {}으로 생성한다.

console.log(nullObj1)
console.log(nullObj2)
console.log(obj3)
/*
참고로 위같이 Object 생성자를 호출한다면, 객체를 생성한다.
생성자에서 인자값으로 아무값을 주지 않으면(null, undefined도 동일) 빈 객체를 생성해서 반환하고,
인자값으로 값을 넣으면, 값에 맞는 자료형의 객체를 반환한다. 

참고로 생성자로 Object로 호출(new Object())하지 않고, 걍 호출(Object())해도 생성자로 호출한 것과 동일하게 동작한다.
*/

console.log(Object.length)  // 1의 값 가짐
console.log(Object.prototype)   // Object 형 모든 객체에 추가한 속성 값
/*
위같이 Object 객체는 다양한 속성과 메서드를 가지고 있다.
- 자세한 내용 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object 참고

그리고 Object 객체를 확장해서, 모든 객체가 접근할 수 있는 API(기능, 메서드)를 만들 수 있다.
*/

Object.prototype.haha = function(n){    // Object 객체에 메서드를 추가(API 확장)
    for(var yoso in this){
        if(this[yoso] === n){
            console.log('객체안에 넘겨준 값이 존재합니다!')
            return true
        }
    }
    console.log('객체안에 넘겨준 값이 존재하지 않습니다!')
    return false
}

var ob1 = {'name':'반야', 'live': 'daejeon'}
var ob2 = ['보리', '살타', '바라밀']
console.log(ob1.haha('반야'))
console.log(ob2.haha('반야'))
/*
위같이 말인데, 
Object 객체를 확장하면 모든 객체에 영향을 주기에, 혼란을 만들 수 있어서 안 쓰는 것이 바람직하다.

여기서 Object 객체에서 확장된 속성인지, 아님 원래 객체에 있던 속성인지 혼란스러울 때 구분할 방법으로는,
hasOwnProperty() 가 있다.
이 메서드의 인자값으로 속성명을 넘겨주면, 해당 속성명이 객체의 속성인지 아닌지를 true, false으로 반환한다.
여기서 Object 객체에서 확장된 속성처럼 prototype으로 상속받은 객체는 false가 된다.
*/