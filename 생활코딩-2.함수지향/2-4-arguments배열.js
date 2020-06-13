/*
함수에는 arguments 변수가 있고, 
그 안에는 함수를 호출할 때 입력한 인자들이 유사배열로 저장되어있덴다.

실제로 함수안에서 사용할 수 있도록 이름과 특성이 약속된 arguments는
함수로 전달된 인자값들을 순서대로 저장해서 []로, 원하는 인덱스의 원소(인자)를 가져오거나,
.length으로 인자의 개수를 알아낼 수 있다. 그래서 이것을 반복문과 응용해서 인자의 모든값을 순차적으로 출력할 수 있다.
*/

function func(){
    var i, sum = 0
    for(i = 0; i < arguments.length; i++){
        console.log(i + '번째 인자값 : ' + arguments[i])
        sum += arguments[i]
    }
    return sum
}
func(1, 2, 3, 4)    
/* js에선 착해서, 함수에서 정해준 매개변수와 다르게 인자값으로 넘겨줘도 오류를 발생하지 않는다.
물론 이 넘겨준 인자값은 arguments란 유사배열에 차곡차곡 저장해주는데, 이런 착함이 나중의 버그같은 문제를 발생시킬 수 있다.
(참고로 arguments는 정확하게는 arguments 객체의 인스턴스다.)
*/

function func2(a1){
    console.log('func2.length : ' + func2.length + ', arguments.length : ' + arguments.length)
}
func2()
func2(1)
func2(1, 2, 3)
/*
여기서 함수의 매개변수의 length도 2가지 종류가 있는데,
함수.length 같이 하면, 함수가 정의되었을 때의 인자 수를 말하며,
arguments.length 같이 하면, 함수가 호출되면서 실제 전달된 인자 수를 말한다.
*/