/*
Node 객체, 
DOM에서 시조(조상)와 같은 역할을 하며, 
여태까지 배우는, 또 배울 DOM의 모든 객체는 Node 객체의 하위 객체에 속한다.
다시말해 Node 객체가 모든 DOM의 객체의 조상(최상위)객체가 되는 것이다.

그래서 모든 DOM 객체는 Node 객체를 상속 받기에, Node 객체의 속성들을 사용할 수 있다.


그리고 Node 객체의 주요한 기능(API)는 아래와 같다.
*/

// 1. 관계
// 요소들은 부모 자식, 형제 자매 관계가 있는데, 
// (현재 요소를 기준으로, 이 요소를 감싸는 요소가 부모, 이 요소가 감싸는 요소를 자식관계라 하고,
// 같은 계층의 요소들은 형제관계다.) 이런 관계를 API를 통해서 탐색할 수도 있다.
Node.childNodes    
Node.firstChild
Node.lastChild
Node.nextSibling
Node.previousSibling
Node.parentNode
Node.contains()
Node.hasChildNodes()

// 2. 노드의 종류
// Node 객체는 모든 구성요소를 대표하는 객체였어서, 이 각각의 구성요소가 어떤 카테고리인지 알려주는 식별자도 있다.
Node.nodeType
Node.nodeName

// 3. 값
// Node 객체의 값을 제공하는 API도 있다.
Node.nodeValue
Node.textContent

// 4. 자식농사
// Node 객체에서 자식을 추가하는 방법에 대한 API도 있다.
Node.appendChild()
Node.removeChild()

/*
뭔소린지 나도 모르겠다;;
이제 하나하나 알아보면서 위 API에 대해 알아보도록 하자. (API를 알아본 후에, 위의 설명도 매끄럽게 정리해야겠다.)
*/