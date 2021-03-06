/*
전역 객체, Global object는 특수한 객체로, 
모든 전역변수, 함수와 객체는 이 전역객체의 프로퍼티에 해당한다.
*/

function func(){
    alert('전역객체가 어딨따고')
}
func()
window.func()   // 전역객체(웹브라우저에서의 window)를 통해 함수를 호출

var oj = {
    func : function(){
        alert('객체에 숨어있으면 전역객체가 못찾겠지?')
    }
}
oj.func()
window.oj.func()    // 전역객체를 통해 다른 객체의 메서드를 호출

/*
객체를 따로 명시하지 않으면, 전역객체의 프로퍼티로, 객체를 만들었데도 그 객체가 전역객체의 프로퍼티가 된다.
물론 위의 코드중에서 alert()는 웹 브라우저의 호스트 환경에서만 존재하는 API이고, window라는 전역객체도 마찬가지다.

전역객체의 이름도 호스트 환경에 따라서 달라진다.
웹브라우저 환경의 전역객체 = window
node.js 환경의 전역객체 = global
*/