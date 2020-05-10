/*
Element 객체는 요소를 추상화한 객체라고 한다.
DOM의 계층 구조에서, HTMLElement(3-3-1 참고)객체의 부모(상위)객체이며, Node 객체의 자식(하위)객체에 해당된다.

여기서의 DOM은 HTML만 제어할 수 있는 게 아니라, XML, SVG, XUL 같은 다양한 마크업 형태의 언어를 모두 제어할 수 있으며,
DOM자체가 위같은 제어를 할 수 있기 위한 모델이다.
그래서 Element 객체의 자식으로는 전에 배운 HTMLElement객체 뿐만아니라, SVGElement, XULElement같은 객체도 있게 되는 것이다. 
*/

Element
/* Element 객체는 위같이 쓰며, 여기에 .속성(프로퍼티)명, .메서드(함수)명 과 같이 해서 Element 객체의 다양한 api, 기능을 사용할 수 있다. 
(물론 당연하게 Element 객체를 담고있는 변수도 Element 객체의 자리를 대신해서 사용할 수 있다. 
    (ex> Element.tagName 처럼 (Element를 담고있는변수명).tagName 도 사용가능)
)
여기서 Element 객체의 주요 기능(api)는 아래와 같다.
*/

// 1. 식별자
// 문서내에서 특정한 요소(엘리먼트)를 식별하는 식별자(ex> 요소명, id, class등등)를 사용(가져오거나 변경)하는 API로, 
// 특정 요소 객체에 아래와 같은 속성(프로퍼티)를 사용해서 요소의 식별자를 가져오고 수정도 할 수 있다.
Element.classList
Element.className
Element.id
Element.tagName

// 2. 조회
// 문서내에서 어떤 요소(엘리먼트)의 하위 요소(엘리먼트)를 조회할 때 사용하는 API로, 
// 특정 요소(엘리먼트) 객체에 아래의 메서드들을 사용해서 요소의 하위 요소(혹은 요소들)을 가져올(조회할)수 있다.
// (3-1.js 에서 이미 배웠었다.)
Element.getElementsByClassName()
Element.getElementsByTagName()
Element.querySelector()
Element.querySelectorAll()

// 3. 속성
// 문서내에서 특정 요소(엘리먼트)의 속성을 알아내고, 추가로 변경까지 할 때 사용하는 API로, 
// 특정 요소(엘리먼트) 객체에 아래의 메서드를 사용해서, 요소의 속성을 반환하거나, 변경, 삭제할 수도 있다.
Element.getAttribute(name)
Element.setAttribute(name, value)
Element.hasAttribute(name)
Element.removeAttribute(name)

/*
위같은 다양한 Element 객체의 기능(API)에 대해서,
가볍게 짚어보는 식으로 알아봤는데, 그다음 시간부터는 각각의 기능들에 대해서, 제대로 알아보도록 하자. 
*/