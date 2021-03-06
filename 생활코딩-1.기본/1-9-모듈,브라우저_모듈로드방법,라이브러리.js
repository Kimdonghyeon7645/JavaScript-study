/*
자바스크립트도 파이썬이나 다른 언어처럼 모듈(module)을 만들거나 불러올 수 있다.
사실은 순수한 자바스크립트 에서는 모듈이라는 개념이 확실하게 있지는 않지만, 자바스크립트가 구동하는, 호스트 환경에 따라서,
서로 다른 모듈화 방법이 제공되게 된다. (호스트 환경이란, 자바스크립트가 구동되는 환경을 말한다.)
(기본적으로 호스트 환경은 브라우저 말고도, 서버(node.js), 구글제품위(Google Apps Script)같은 환경도 포함된다.)

모듈이 없다면, 자주 필요한 코드,(함수)를 그때그때 마다 다시 정의하고 사용해야 되며, 이럴 경우에는 유지보수도 어렵고 낭비가 된다.  
모듈을 이용한다면, 코드, 함수를 정의할 필요없이, 한번 정의해둔 모듈을 (로드)가져온다면, 바로 사용할 수 있다.
*/

function module_func(){
    return 'Hello! module~!'
}

/*
위같이 간단한 js 코드를 작성하고, 그걸 js 파일로 저장한 다음에, 
브라우저에서는, script 태그의 scr 속성으로 그 js 파일을 부른(로드한)다면, 모듈로써 사용할 수 있다. (1-9-test_module.html 참고)
*/

/*
node.js 호스트 환경에서는 브라우저와는 다른 방법으로 모듈을 로드한(가져온)다.

여기서의 모듈은 독립적인 파일 스코프(사용범위)를 가져서, 모듈안의 모든 것들은 기본적으로 해당 모듈의 내부에서만 참조가능한데,
모듈안의 요소를 외부에서도 사용할 수 있게 하려면, exports 객체를 이용한다.

변수라면 exports 객체의 프로퍼티(속성)으로, 함수라면 exports 객체의 메소드로 정의하면 된다.

그리고 반대로 모듈을 사용하는 쪽에서는,
전역함수 require() 를 사용해서, 괄호안에 로드(임포트)할 .js(모듈) 파일을 적어준다.
그리고 그 require() 함수의 반환값을 변수로 받는데, require() 함수는 객체로 반환되기에,

변수 = require(./모듈)
변수.메쏘드
변수.속성 

과 같이 사용할 수 있다.
(참고 : https://poiemaweb.com/nodejs-module)
*/


/* 라이브러리 :
모듈이란 개념이 있으면, 라이브러리라는 개념도 있다. 
모듈이 프로그램의 작은 부품의 로직이라면, 라이브러리는 다양한 로직을 편리하게 잘 정리한 코드 집합이다.

js에서는 물론이고 다른 언어에서도 다양하고 휼륭한 라이브러리가 많으며, 이러한 라이브러리를 잘 선택, 활용하는 것이 프로그램의 핵심이라고 할 수 있다.
(js의 대표적인 라이브러리는 jQuery(제이쿼리)가 있겠다.)
*/