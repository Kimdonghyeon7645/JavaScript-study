/*
함수를 배울때, 기본적으로 함수는 
함수명()
과 같이 함수에 ()를 붙이고, 필요에 따라 괄호에 인자값을 넘겨주어서 해당함수를 호출했었다.
사실 근데 js에서는 이 말고도 함수를 특별한 방법으로도 호출할 수 있다.
*/

function wow(a, b){
    return a + b
}
console.log(wow.apply(null, [2, 1]))
/*
위같이 함수를 함수명() 과 같은 형식이 아니라, 메서드 .apply()를 사용했는데, 
실행결과를 보면 함수가 호출된 것을 볼 수 있다.

이렇게 되는 이유는, 함수는 js에서 객체이기 때문이다. 모든 함수는 Function이란 객체의 인스턴스인데,
지금 만들어준 wow함수도 마찬가지며, 기존에 Function 객체가 가지고 있던 메서드들을 그래서 wow함수가 사용할 수 있는 것이다.

이렇게 메서드를 상속받아서, 그것으로 함수를 호출할 수도 있는데, 그 방법으로는,
Function.apply, Function.call 메서드를 사용하는 방법이 있다.
*/

console.log(wow.apply(null, [2, 2]))
console.log(wow.call(null, 2, 3))
/*
위같이 .apply() 메서드와 .call() 메서드를 사용하는 것은 비슷하다.
두 메서드 모두, 함수를 호출하는 역할이며, 넘겨주는 인자값도 동일하다.
두번째 인자로, 함수를 호출할 때 넘겨줄 인자값들을 배열로 묶으면 apply, 그냥 ,으로 나열하면 call이 된다. (함수를 호출할 때 넘겨줄 인자값이 없으면 생략한다.)
첫번째 인자는 두 함수 모두 동일한데, 근데 왜 인자값으로 null을 넘겨줄까?

사실 두 메서드의 첫번째 인자값은, 호출하려는 함수를 어떤 객체를 대상으로 할지 정해주는 것이다.
뭔소리냐면, 첫번째 인자값으로, 객체명을 넘겨주면, 함수는 그 객체의 메서드로 동작한다.
다른말로는, 호출하는 함수가 this값을 첫번째 인자로 넘겨준 객체로 가지는 것이다.
*/

function print(){
    console.group('\n\nthis 값 :')
    console.log(this)
    console.groupEnd()
}
haha = {1:'ppap', 2:'I will go home'}
print()     // 기본 함수 호출
print.call(haha)    // 함수를 haha 객체의 메서드로 호출
/*
그래서 apply, call 메서드를 활용해서 호출하는 함수를, 특정 객체(첫번째 인자값)의 메서드로 호출해줄 수 있다.
반대로, 첫번째 인자값으로 null을 넘겨주면, 전역객체(브라우저에선 window 객체)의 메서드로 호출하기에, 일반 함수의 호출과 다를게 없는 것이다.

이러한 첫번째 인자로 넘겨주는 대상이되는 객체를 맥락이라고도 한다.
참고 : https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd
*/