/*
Document 객체는 DOM의 시작점이다. (Node 객체를 상속받은 하위 객체다.)
웹브라우저에선 HTMLDocument 라는 Document의 하위 객체로 사용된다.
이 HTMLDocument 객체는 문서 전체를 대표하는 객체로,

전에 언급했는데, 사실 document 객체는 window 객체의 프로퍼티(소속)이다.
이런 document 객체의 자식으로는 Doctype와 html가 있다.
*/
console.log(window.document.childNodes[0]); // Doctype
console.log(window.document.childNodes[1]); // html

/*
document 객체의 주 API는 새 노드를 생성해 주는 역할인데, 이에 대한 메서드
createElement(), createTextNode()
는 Node 수정 API에서 이미 배웠기 때문에(3-6-3 참고) 설명은 생략한다.

문서의 정보 API로는, 아래와 같다.
*/
Document.title,  // 문서의 제목을 설정하거나 반환
Document.URL,    // 문서의 위치를 문자열로 반환
Document.referrer,  // 현재 페이지로 연결한 페이지 URI를 반환
Document.lastModified   // 문서가 마지막으로 수정된 날짜를 반환

// (API문서) 참고 : https://developer.mozilla.org/ko/docs/Web/API/Document