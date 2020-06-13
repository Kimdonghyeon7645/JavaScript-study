alert(true)
alert(false)
/*
Boolean(불린), 비교연산자의 결과로 나왔던 true(참) 과 false(거짓) 두가지가 바로 불린이다.

문자(string)와 숫자(number)와 같이 불린(boolean)도 데이터 형(자료형)중 하나인데,
특징은 올 수 있는 값이 true(참) 과 false(거짓)밖에 없다. 
이러한 불린은 제어문에서 핵심적인 역할로 쓰인다.
*/

if(true){
    alert('if 문 실행!')
}

if(false){
    alert('if 문 실행!')
} else {
    alert('if 문 대신으로 else 문 실행!')
}

if(false){
    alert('if 문 실행!')
} else if(true){
    alert('else if 문 실행!')
} else if(ture){
    alert('다음 else if 문 실행!')
} else {
    alert('else 문 실행!')
}
/*
조건문은 제어문에서 조건에 따라 코드를 실행하는 문으로, 분기문이라고도 한다.
대표적으로 if문이 있는데,

if(조건식){
    조건식이 참일경우 실행할 코드
}
와 같은 형태로 실행된다.
이때 조건식 안의 값은 불린(boolean)이 오며, 불린으로 반환하는 연산식이나, 변수도
조건식 안에 들어올 수 있다.

(
사실 불린이 아닌 값도 들어 올수도 있다. 다른 데이터 형(자료형)의 값들은
그에 맞게 불린으로 간주해서 사용한다.
0, ''(빈문자열), undefined(정의되지않은값), (값이할당되지않은변수), null(널), NaN(Not a Number, 숫자가 아닌값)
)


if(조건식){
    조건식이 참일경우 실행할 코드
}else{
    조건식이 거짓일경우 실행할 코드
}
와 같이, else 문은 위의 조건문이 실행되지 않았을 때 실행된다.

if(조건식){
    조건식이 참일경우 실행할 코드
}else if(조건식{
    조건식이 참일경우 실행할 코드
}
else if는 else 처럼 위의 조건문이 실행되지 않았을 때 실행되며, 
else if는 여러개가 올 수 있다. else 와 마찬가지로 맨앞에는 항상 if가 와야된다.


이러한 조건문은 중첩될 수도 있고, 다양하게 사용될 수 있다.
대신 항상 else 와 else if문은 먼저 if문이 앞에 있어야 사용할 수 있다.
*/

alert(false && false)   //false
alert(true && false)   //false
alert(true && true)   //true

alert(false || false)   //false
alert(true || false)   //true
alert(true || true)   //true

alert(!false)   //true
alert(!true)   //false
/*
조건식에 들어올 수 잇는 연산식에는, true 아니면 false 로 반환되는 비교연산자의 연산식도 있지만,
마찬가지로 true, false(불린)으로 반환되는 논리연산자의 연산식도 올 수 있다.

논리연산자는 말그대로 논리연산(불 연산, Boolean Operation)을 수행한다.
논리연산자의 종류에는 아래와 같다.

&& 는 좌항과 우항 모두 참일때만 참을 반환하고, 나머지는 거짓을 반환한다.
(and연산(~그리고~), 논리곱을 수행)

|| 는 좌항과 우항 둘중 하나라도 참이면 참을 반환하고, 둘다 거짓일 때만 거짓을 반환한다.
(or연산(~또는~), 논리합을 수행)

! 는 불린(boolean)의 값을 반전, 역전시킨다. 참이면 거짓으로, 거짓이면 참으로 반환한다.
(not연산(~가아닌), 논리부정을 수행)


이러한 논리연산자도 일반적인 사칙연산의 혼합(2-1*4)처럼 혼합해서 사용할 수 있다.
*/
