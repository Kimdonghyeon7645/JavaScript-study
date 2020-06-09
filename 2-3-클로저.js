/*
클로저(closure)는 함수에 함수가 있는 구조로, 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 말한다.
이 클로저가 js의 고난이도 테크닉(기술)을 구사할 때 필수적인 개념으로 쓰인덴다.

내부함수? 외부함수? 맥락? 뭔소린지 알아보도록 하자.
*/

function outter(){
    function inner(){
        var title = '즐기다보면 도착해있습니다.'
        alert(title)
    }
    inner()
}
outter()
/*
위 코드를 보면 함수안에 함수를 선언한 것을 볼 수 있는데,
js에선 이렇게 함수에 함수를 중첩해서 사용할 수 있으며, 여기서 함수안에 정의된 함수(inner)를 내부함수라 하며,
그 내부함수를 가지고 있는 함수(outter)를 외부함수라고 비교해서 말한다.

여기서의 독특한 면은, 외부함수의 값들을 내부함수에서도 그대로 사용할 수 있다. (아래 참고)
*/
function outter(){
    var title = '즐기다보면 도착해있습니다.'
    function inner(){
        alert(title)
    }
    inner()
}
outter()

