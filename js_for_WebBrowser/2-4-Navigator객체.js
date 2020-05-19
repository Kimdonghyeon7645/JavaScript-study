/*
Navigator(네비게이터) 객체는 자바스크립트가 실행되고 있는 브라우저에 대해, 브라우저 제품명, 브라우저 버전등등을 알아낼 수 있는 객체이다.
이를 통해 브라우저의 정보를 알아내, 그 브라우저에 맞는 코딩을 할 수 있다.
Window 객체의 프로퍼티(속성)이며, BOM(브라우저 오브젝트 모델)에 속한다.


(cross browsing, 크로스 브라우징)
세상에는 한가지 브라우저 만이 아니라, 크롬, 웨일, 파이어폭스, 사파리, 오페라, 익스플로러 등등 다양한 브라우저가 있다.
이런 다양한 브라우저의 동작방법은, w3c라는 국제 표준화 기구에서 html, css 코드의 동작방식을 규정하고, js는 ECMA에서 규정해서,
같은 코드를 가지고 브라우저가 제 맘대로 제각각 해석하는 문제를 해결하기위해 웬만한 동작을 표준화 한다. (스펙에 정의한다.)

그러나 표준화 되어있지(스펙이 정의하지)않는 자잘한 부분들은 브라우저마다 각자의 전략으로 해석, 구현하는데, 
이 때문에 내가 만든 자바스크립트 코드가 브라우저마다 다른 결과를 만들어 낼 수 있다. (특히 익스플로러)
이를 대비하기 위해서 다양한 브라우저 환경에서도 동일하게 동작할 수 있도록 맞추는 작업을 해줘야 되는데,
이것을 크로스 브라우징(cross browsing)이라 한다.


이런 크로스 브라우징을 할 수 있게 해주는 것이 네비게이터라는 객체이다.
브라우저의 종류를 네비게이터 객체로 알아낼 수 있기에, 웹표준이 정착되기 전까진 네비게이터를 많이 활용했고,
그후에도 오래된 브라우저를 쓰는 사람들이 아직도 몇몇 있기에, 거기에서 발생하는 호환성 문제를 위해 아직도 네비게이터를 사용한다.
*/


console.dir(navigator)  //consle.log()함수로도 출력할 수 있는데, 둘의 차이는, log는 HTML의 트리구조로, dir은 JSON의 트리구조로 출력한다.
/*
콘솔에서 navigator 객체를 출력하면, navigator 객체의 다양한 속성(프로퍼티)과 속성값을 볼 수 있다.
여기서의 속성들을 모두 알아보자면 꽤 많기 때문에, 대표적이고 중요한 속성들만 알아보도록 하겠다.
*/

alert(navigator.appName)
// appName : 웹 브라우저의 이름을 의미한다. (ex> Microsoft Internet Explorer, Netscape(?, 파이어폭스, 크롬은 이렇게 나온다.))
alert(navigator.appVersion)
// appVersion : 웹 브라우저의 버전을 의미한다. 
// (ex> 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Whale/2.7.98.19 Safari/537.36)
alert(navigator.userAgent)
// userAgent : 브라우저가 서버로 전송하는 USER-AGENT(유저 에이전트)(HTTP 헤더)의 내용을 의미한다.  
// 웹브라우저가 웹서버에게 요청을 할 때 어떤 정보가 필요하다는 것 뿐만아니라, 웹브라우저에 대한 정보도 전송하는데 이것이 유저 에이전트다.
// (ex> Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Whale/2.7.98.19 Safari/537.36)
alert(navigator.platform)
// platform : 브라우저가 동작하고 있는 운영체제 정보를 의미한다. (ex> Win32, MacOS)


/*
navigator(네비게이터) 객체는 브라우저 호환성을 위해 주로 쓰지만, 네이게이터 객체로 브라우저 정보를 받아와서 모든 브라우저에 대응한다는 것이 힘들기에, 
아래의 기능 테스트를 사용하는 것이 더 선호된다. (브라우저의 종류에 따라 맞추어주는 것에도 한계가 있기 때문)

(기능 테스트)
작성한 코드가 실행되는 어떤 브라우저 상에서 내가 사용할 (기능)api가 있는지 없는지를 파악하는 것이다.
그래서 해당 브라우저에서 기능이나 객체를 지원하지 않으면(오래된 브라우저거나, 지원을 종료했거나)
그것을 판별해서 지원하지 않는 기능이 마치 있는 것처럼 잘 작동하게 하는 코드를 추가해서 실행하는 것이다.


ex) Object.keyd 메서드는 ECMAScript5(최신 문법으로) 추가되서 예전 자바스크립트와 호환이 되지 않지만,
아래 코드를 통해서 호환성을 맞춰 줄 수 있는 것이다.
*/
if (!Object.keys) {     // Object.keys 객체가 있다면 if문이 실행되지않고, 없다면 if문이 실행된다.
    Object.keys = (function () {
      'use strict';
      var hasOwnProperty = Object.prototype.hasOwnProperty,
          hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
          dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
          ],
          dontEnumsLength = dontEnums.length;
   
      return function (obj) {
        if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }
   
        var result = [], prop, i;
   
        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }
   
        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }
        return result;
      };
    }());
}
/*
이보다 더 세세하게 브라우저마다의 호환성을 맞춰줄 때 이제 Navigator 객체를 사용하게 되는 것이다.
*/