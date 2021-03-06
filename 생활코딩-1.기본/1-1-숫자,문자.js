
alert(1)
alert(1+2)
alert(1.3 + 3.1)
alert(2 * 5)
alert(6 / 3)
// 결과 : 1 
// 결과 : 3 
// 결과 : 4.4 
// 결과 : 10 
// 결과 : 2 

alert('1')
alert("와다다다다")
alert("합" + '체')
alert('12345'.length)
alert('이거가지고\n여러가지\n사용할 수 있습니다!')
// 결과 : 1 
// 결과 : 와다다다다 
// 결과 : 합체
// 결과 : 5 
// 결과 : 이거가지고
//        여러가지
//        사용할 수 있습니다.

alert(typeof 1)
alert(typeof '1')
// 결과 : number 
// 결과 : string 


/*    
데이터 형(자료형, data type) 중 가장 많이 사용되는 것이라면 숫자와 문자가 있다.
typeof 요소
라고 하면 요소가 어떤 데이터 형(자료형)인지 반환할 수 있음.


 숫자:
자바스크립트는 큰따옴표, 작은따옴표가 붙지 않은 숫자는 숫자로 인식함. (number)
숫자끼리는 사칙연산(+, -, *, /) 이 가능하며, 좀 더 복잡한 연산도 지원하는데 Math 객체를 활용한다.

Math.pow(n, m);     == n^m (n의 m승)
Math.round(n);      == n을 반올림
Math.ceil(n);       == n을 올림
Math.floor(n);      == n을 내림
Math.sqrt(n);       == n의 제곱근
Math.random();      == 0부터 1.0 사이의 랜덤한 숫자


 문자:
큰따옴표, 작은 따옴표로 묶은 문자들을 문자, 문자열로 인식함. (string)
문자열안에서 큰 따옴표, 작은 따옴표를 쓰면 에러가 발생하니, \를 앞에 붙여 이스케이프 문자로 큰따옴표, 작은따옴표를 사용.
여러줄을 표시할 때는 \n(개행문자)를 사용하면 됨.

문자와 문자를 더할 때는 문자와 문자 사이에 +를 사용하며,
문자의 길이를 구할 때는 문자.length 로 해서 길이를 반환.
*/
