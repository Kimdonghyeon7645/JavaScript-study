/*
클로저(closure)는 함수에 함수가 있는 구조로, 내부함수가 외부함수의 맥락(context, 컨텍스트 = 지역변수등)에 접근할 수 있는 것을 말한다.
이 클로저가 js의 고난이도 테크닉(기술)을 구사할 때 필수적인 개념으로 쓰인덴다.

내부함수? 외부함수? 뭔소린지 알아보도록 하자.
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

/*
여기서 클로저란 개념이 나오는데, 위같은 내부함수와 외부함수의 구조에서,
내부함수는 외부함수의 지역변수를 위의 예시처럼 접근할 수 있는데, 외부함수가 호출후에 실행이 끝나 외부함수가 소멸된 후에도,
내부함수는 외부함수의 변수에 접근할 수 있는 것을, 
이 메커니즘(구조, 체제)를 클로저라고 한다. 
*/
function outter(){
    var title = '난 외부함수의 변수다!'  
    return function(){        
        alert(title)
    }
}
inner = outter()
inner()
/*
위 코드를 보면, 외부함수는 내부함수를 만들어서 반환하는 구조를 가지고 있다.
그래서 외부함수를 호출했을 때, (outter()) 외부함수는 내부함수를 반환하고 소멸하는데,
신기한 것은, 반환한 내부함수가 이미 소멸한 외부함수의 변수를 이용하는 것이다.

사실 그래서 클로저는 내부함수가 외부함수의 지역변수에 접근할 수 있어서, 
외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때 까지는 소멸되지 않는 특성을 말한다.
*/

function outter(name){
    return {
        get_name : function(){
            return name
        },
        set_name : function(_name){
            name = _name
        }
    }
}

donghyeon = outter('dongdong')
dupang = outter('pangpang')

alert(donghyeon.get_name())
alert(dupang.get_name())

donghyeon.set_name('dongyee')
alert(donghyeon.get_name())
alert(dupang.get_name())
/*
클로저는 위같이 사용할 수 있는데, 이처럼,

- 클로저는 객체의 메서드로도 사용할 수 있다.
위같이 외부함수의 리턴값으로 기본 내부함수가 아닌, 객체를 리턴해서, 그 객체의 메서드를 내부함수로 클로저를 사용할 수 있다.

- 같은 외부함수로 만들어진 여러개의 내부함수(메서드)는 외부함수의 지역변수를 공유한다.
donghyeon = outter('dongdong') 으로 호출되서 변수에 담긴 객체에서, 객체의 두 메서드(내부함수) get_name과 set_name은 서로 같은 객체이므로,
같은 외부변수의 값을 공유한다.

- 외부함수의 정의는 같아도, 만들어진(호출)게 다른 경우는, 서로 다르다.
donghyeon, dupang 은 각각 따로 호출해서 만들어진 객체므로, 서로 독립된 상태다. 
외부함수가 호출될 때마다, 반환값인 새로운 클로저(여기선 객체)와 외부함수의 지역변수가 새로 생성된다.

- 위같이 외부함수의 지역변수를, 특정 메서드를 통해서만 할 수 있게 해줌으로써, private 속성을 사용할 수 있다.
여기서 보면 객체의 특정 메서드를 통해서만 외부함수의 지역변수 값(name)을 접근할 수 있는데, 이렇게 하면 원래 js에선 지원하지 않는,
private한 속성을 만들고 사용할 수 있다.
*/

var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i
    }
}
for(var index in arr) {
    console.log(arr[index]())
}
/*
참고로, 위같은 코드는 스코프가 두개고, 안에 함수가 있어서 클로저 같지만, 클로저가 아니다.
함수가 함수 외부에 있는 변수(컨텍스트)에 접근하는 것은 맞지만, 그 접근하는 변수가, 외부함수의 변수가 아닌, for의 전역변수다.
사실상 외부함수, 내부함수의 구조가 아니기 때문에 위에서 i는 전역변수 i를 가리키고, 따라서 출력도 5가 5번 반복되서 출력된다.
*/
var arr2 = []
for(var i = 0; i < 5; i++){
    arr2[i] = function(id) {    // 외부함수에 매개변수 전달받음
        return function(){
            return id   // 그 외부함수 지역변수를 출력
        }
    }(i)    // 외부함수에 인자값 전달
}
for(var index in arr2) {
    console.log(arr2[index]())
}
/*
따라서 제대로 클로저 형식을 만들려면 위 코드와 같이 함수에 함수를 만들어줘야된다.
단순히 스코프가 두개면 내부함수가 클로저 구조가 되는 것이 아니라는 것을 명심하자.
*/