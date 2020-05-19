window.alert('와')
alert('우')

a= '전역변수'
alert(window.a)
/* 
Window 객체는 모든 객체(DOM, BOM, JavaScriptCore 할것 없이)가 소속되있는 객체고, window 객체는 모든 객체를 자식으로 가진다. 
window 객체는 또한 전역객체라고 하는데, 그렇기에 document 라고 해도 자동으로 window.document 와 같아지는 것이다.
객체를 사용할 때 모든 객체의 부모? 가 되는 것이 바로 window 이며,
전역 변수, 전역 함수도 알고보면 window 객체의 속성(프로퍼티)이고 메서드인 것이다.

이런 Window 객체는 식별자 window를 통해서 객체를 얻을 수 있고, 전역객체이기에 생략 가능하다.
Window 객체의 메서드 alert()를 호출할 때도 window.를 붙여서 해도 되지만, 붙이지 않아도 의미가 같다.
*/