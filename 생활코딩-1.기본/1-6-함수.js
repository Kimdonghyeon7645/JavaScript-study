function func() {
    alert('함수 실행!');
}
func();

/*
함수는

function 함수이름(매개변수){
    코드
    return 반환값
}
과 같은 형식으로 정의할 수 있다. (여기서 매개변수와 반환값은 생략할 수 있다.)
function 뒤에 함수이름이, 함수이름뒤에 ()와 ()안에 매개변수를 선언하고(매개변수는 여러개가 올 수 있다.)
그뒤에 {}가 오며, {}안에 함수가 실행될때 실행할 코드들을 적는다. 
return 반환값과 같이 하면, 함수의 반환값을 지정할 수 있다.

그리고 이렇게 함수를 정의했으면, 실행할 때는, 

함수이름(인자값)
과 같이 함수를 호출한다. 
(매개변수의 개수만큼 인자값을 넘길 수 있으며, 인자값은 차례대로 함수에 전달되서 매개변수에 저장된다.)
(매개변수가 없다면 호출할 때 인자값은 쓰지 않는다.)

이때 함수의 코드가 실행되며, 함수에 반환값이 있다면, 호출한 자리로 반환된다.
그래서 변수 = 함수(); 같이 하면, 함수의 반환값이 변수에 저장된다.
*/

var function2 = function func2(){
    alert('변수에 저장한 함수를 실행!');
}
func2();
function2();
/*
함수를 정의할 때 변수에 담아서 정의 할 수 있으며, 이럴 때는 함수를 호출 할 때
함수가 담긴 변수이름으로도 함수를 호출 할 수 있다.

함수를 익명함수로도 선언할 수 있는데, 말그대로 이름이 없는 함수로,
함수를 정의할 때 함수이름을 생략하고 정의한 함수다. 이 함수는 일회적으로 쓰며
이름이 없어서 호출할 수도 없기에 함수를 정의해서 변수에 담을 때 사용한다.
*/
