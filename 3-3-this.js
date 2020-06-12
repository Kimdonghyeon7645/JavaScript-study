/*
this는 함수 안에서, 함수의 호출 맥락(context)를 의미한다고 한다.
이 맥락이라는 말은, 함수를 어떻게 호출하는 것에 대한 상황에 따라서 this가 가리키는 대상이 달라진다는 말이다.

이해는 아래 예제들을 보면서 해보도록 하자.
*/

function func(){
    console.log(this)
}
func()  // 전역객체(window)가 출력
/*
함수를 기본적으로 호출했을 때, this는 전역객체인 window가 출력되는 것을 볼 수 있다.
그러나 함수가 객체에 소속되어있는 메서드인 경우, 호출했을 때 this는 그 소속되어있는 객체가 출력된다.
*/

var obj = {
    func : function(){
        console.log(this)
    }
}
obj.func()  // 소속되어있는 객체(obj)가 출력


/* 
그러면 생성자 함수는 this가 어떻게 될까? 
*/
var iam_this = null     // this 값을 저장하고 있는 전역변수 생성
function Func(){
    iam_this = this
}

var other_func = Func() // 생성자 함수를 일반함수로 호출
if(iam_this === window){
    console.log('this는 전역객체(window)')
}

var objt = new Func()   // 생성자 함수를 객체의 생성자로 호출
if (iam_this === objt){
    console.log('this는 생성자로 생성한 객체(objt)')
}

/*
생성자 함수를 일반함수로 호출해서 사용하면, 거기서의 this는 일반함수처럼 전역객체가 되고,
생성자 함수로 객체를 생성하면, 거기서 this가 바로 생성한 객체를 가리키게 된다.

이것을 보면, 
js는 객체를 생성자 함수로 만들수 있어서, 함수와 객체의 구분이 느슨해보였지만,
함수는 this가 전역객체고, 객체는 this가 해당 객체가 되는 구분을 알 수 있다.
*/

// 추가로 2-5.js 에서 함수의 다른 호출 방법에서 배웠던 apply와 call 메서드로, 
// 그때는 잘 몰랐지만, 그 메서드들의 첫번째 인자로 맥락(this)를 제어할 수 있는 것이다.