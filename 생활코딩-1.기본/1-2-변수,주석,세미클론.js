var ha = 'ha' 
alert(ha)
alert(ha + ha + ha)
var num = 10
alert(num - 5)

/*
변수(Variable)는 값(문자, 숫자같은) 값을 담는 컨테이너(용기, 그릇)이다.
값을 저장할 필요가 있을 때 변수에 값을 담으며, 변수에 담긴 값은 언제든지 바꿀 수 있다.(가변)

자바스크립트에서 변수는 var 를 앞에 붙여 선언한다.
(var 를 생략할 수도 있는데, 유효범위라는 것에 영향을 주기에.. var 를 제대로 이해할때 까지만 var 를 붙여쓰자.)

변수의 이름은 $ _ 같은 특수문자와 숫자를 제외한 모든 문자로 시작할 수 있다.


변수를 정의할 때 자료형을 명시하지 않으며, 변수에 담길 수 있는 값은 숫자, 문자든 다양하다.
*/



// 한줄 주석
/* 여러줄
주석 */

/* 
자바스크립트에서 주석(comment)는 위같이 //를 사용해서 한줄 주석을 걸거나,
/에 *을 붙여서 여러줄 주석을 사용할 수 있다.

주석에서는 코드에 영향을 주지 않는, 코드설명이나, 사용하지 않는 코드를 비활성화 시킬때
사용한다. (주석 범위에 속하는 내용들은 모두 무시한다.)
*/


var a = '1'; alert(a + 1)

/*
세미클론은 하나의 구문이 끝났다는 것을 명시적으로 표현할때 구문의 끝에 사용한다.
세미클론을 이용해서 한줄에 여러 구문을 사용할 수 있다.

js는 세미클론을 생략할 수 있는데, 
이럴때는 행의 끝(줄의 바뀌는 부분)을 구문의 끝으로 해석한다.
*/