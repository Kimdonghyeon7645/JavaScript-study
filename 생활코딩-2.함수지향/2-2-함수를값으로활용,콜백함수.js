/*
js에서는 함수도 객체이며, 값이다.
다른 언어에서도 함수는 있지만, js처럼 함수를 값으로 사용하는 것은 없었을 것이다.
*/
a = {
    b: function(){}
}
/*
위같이 함수가 변수 a에 저장됬는데, 
객체의 속성 b에 매칭되는 값으로 함수가 쓰이는 것을 메서드(method)라고 한다. (객체 안에 있는 함수)

또, 함수는 값이기에, 다른 함수의 인자로 전달 될 수 있다.
*/
function haha(func, num){
    return func(num)
}
function hoho(n){
    return n + '를 반환!'
}
console.log(haha(hoho, 3))


/*
또한 함수를 배열의 원소 값으로 사용하거나,
*/
var func_list = [
    function (inpt){
        return inpt + 1
    },
    function (inpt){
        return inpt - 1
    },
]
console.log(func_list[0](1))
console.log(func_list[1](1))


/*
함수의 리턴값으로 함수를 사용할 수도 있다. 
*/
function wow(n){
    var w = function(num){
        return num * num
    }
    return w(n)
}
alert(wow(5))


/*
콜백 함수 :
함수의 인자로 함수를 전달하는 것을 콜백이라한다.
이 인자로 넘겨주는 함수를 콜백함수라고 하는데, 콜백함수는 js에서 중요한 문법중 하나로, 다양하게 쓰인다.

인자로 함수를 넘겨받는 js의 내장함수에 콜백함수를 인자로 넘겨서, js 내장함수를 원하는 동작으로 사용할 수도 있으며,
*/
function sortNumber(a, b){
    return b - a
}
alert([0, 19, 17, 99].sort(sortNumber))

/*
그리고 콜백함수라면 비동기처리로 유용하게 쓰이는데,
비동기 처리는 순서대로 작업이 시간이 오래걸리더라도 기다렸다가 처리하는 동기처리가 아닌,
작업이 완료될때까지 그것만 기다리지 않고, 다른것도 할 수있게 하는 처리방식이다.
여기서 작업이 끝났을 때, 실행될 다른 작업을 등록해둘 수 있는데, 여기서 콜백을 사용하는 것이다.
*/
func = function(a, b, callme){
    var out = a + b
    callme(out)
}
func(2, 3, function(num){
    console.log('결과 값 : ' + num)
})