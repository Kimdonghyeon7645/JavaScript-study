/*
표준 내장 객체(Standard Built-in Object)는 
js에서 아무리 못해도 기본으로 있는 객체들을 말한다. 
이러한 내장 객체들은 프로그래밍을 하는데 기본 필요 도구들이며, 
이것들과 +로 호스트 환경에서 제공하는 추가 기능들을 활용해서 소프트웨어를 만들기에, 이 내장객체를 잘 알아두는 것이 중요하다.

js의 내장객체는,
Object
Function
Array
String
Boolean
Number
Math
Date
RegExp
가 있다.
*/

// 이러한 표준 내장 객체에 원하는 기능을 확장해서 사용할 수 있다. 
// 아래와 같이, 배열에 관한 함수를 선언한 것을,
var arr = new Array('관자제보살', '천수보살', '여의륜보살', '대세지보살', '수월보살')
function getRandomValueFromArray(haystack){
    var index = Math.floor(haystack.length*Math.random())
    return haystack[index]
}
console.log(getRandomValueFromArray(arr))

// 아래처럼, 배열 객체에 함수를 메서드로 포함시킬 수 있다.
Array.prototype.rand = function(){
    var index = Math.floor(this.length*Math.random())
    return this[index]
}
console.log(arr.rand())