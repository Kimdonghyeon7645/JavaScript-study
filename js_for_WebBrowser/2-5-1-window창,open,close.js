/*
window 객체를 이용해, 새로운 창을 열거나, 닫고, 창과 창사이에 소통할 수도 있다.

window 객체는 전역 객체이면서, 다르게는 브라우저에서 윈도우(창)를 제어하는 객체이다.
따라서 window 객체의 메서드 중에선 윈도우(창)를 제어하는 것 같은 기능들이 많이 있는데,
대표적인 메서드로는 윈도우를 열고 닫는 window.open() window.close() 메서드가 있다.
*/
var win
if (confirm('걍 이동?')){
    win = window.open()   // 아무 인자값도 없이 open()메서드를 호출하면 about:blank(빈페이지)로 새창이 열린다.
} else if (confirm('웹 사이트 이동?')){
    win = window.open('https://www.youtube.com/watch?v=wrVfaByrHTA')  // 인자값으로 받은 링크, 문서를 새창으로 연다.
} else if (confirm('현재 창에서 웹 사이트 이동?')){
    win = window.open('https://www.youtube.com/watch?v=wrVfaByrHTA', '_self')
} else if (confirm('창의 속성을 적용해서 웹 사이트 이동?')){
    win = window.open('https://www.youtube.com/watch?v=wrVfaByrHTA', 'width=500,height=600')
}
/*
window.open() 함수로 브라우저의 창을 열 수 있다.
참고로 이함수는 열었던 창의 window 객체를 반환하며, 이름 변수에 저장해서 사용할 수 있다.

첫번째 인자값으로, 창을 열려는 링크(url, 주소), 문서(.html)를 문자열로 전달할 수 있다.
이 인자값을 넣어 open() 메서드를 실행하면, 인자값으로 받은 링크, 주소로 새창(요즘 브라우저는 웬만해선 탭을 지원하기에, 새탭을 만듬)을 연다.

두번째 인자값으로, 창을 어떻게 열지를 설정할 수 있다. 
'_self'를 인자값으로 넘기면, 현재 창에서 링크를 열며, (_self 는 자바스크립트를 실행하는 창을 의미한다.)
'_blank'는 새 창에서 링크를 연다. (이게 기본값이다.) '_parent'는 부모 창에서 링크를 열며, '_top'은 로드된 창에서 링크를 연다. 
'(이름)'과 같이 두번째 인자값으로 텍스트(이름)을 넘기면, 새창이 열리면서 그 창에 인자값으로 넘긴 텍스트(이름)을 창의 이름으로 붙일 수 있으며,
만약에 '(이름)'으로 인자값을 넘겼을 때, 브라우저에 이미 인자값과 같은 이름으로 지정된 창이 있다면, 그곳으로 링크,문서가 열리게 된다.

세번째 인자값으로, 창에 대한 스타일같은 속성을 설정 할 수 있다.
'속성=속성값'과 같이 전달하며, 속성이 여러개라면, '속성=속성값, 속성=속성값'과 같이 ,으로 구분해서 여러개를 같이 전달하면 된다.

- channelmode=(yes(1) 아니면 no(0)) : 전체화면으로 창이 열릴지 여부. (IE에서만 동작)
- fullscreen=(yes(1) 아니면 no(0)) : 전체 화면 모드. (IE에서만 동작)
- height=(pixels단위로) : 창의 높이를 지정. (ex> height=600)
- width=(pixels단위로) : 창의 너비를 지정. (ex> width=500)
- left=(pixels단위로) : 창의 화면 왼쪽에서의 위치를 지정. (음수X)
- top=(pixels단위로) : 창의 화면 위쪽에서의 위치를 지정. (음수X)
- location=(yes(1) 아니면 no(0)) : 주소 표시줄 사용여부를 지정. (Opera에서만 동작)
- menubar=(yes(1) 아니면 no(0)) : 메뉴바 사용여부를 지정.
- resizable=(yes(1) 아니면 no(0)) : 창의 리사이즈 가능 여부를 지정. (IE에서만 동작)
- scrollbars=(yes(1) 아니면 no(0)) : 스크롤바 사용여부를 지정. (IE, Firefox, Opera에서 동작)
- status=(yes(1) 아니면 no(0)) : 상태바를 보여줄지 지정.
- titlebar=(yes(1) 아니면 no(0)) : 타이틀바를 보여줄지 지정. (호출 응용 프로그램이 HTML 응용 프로그램이거나 신뢰할 수있는 대화 상자가 아니면 무시)
- toolbar=(yes(1) 아니면 no(0)) : 툴바를 보여줄지 지정. (IE, Firefox에서 동작)
// 참고 : https://offbyone.tistory.com/312

네번째 인자값도 있는데, 히스토리 목록(윈도우의 열람 이력을 최근에 방문한 url의 배열로 만듬, history 객체 참고하기)에
'false' 히스토리에 새 항목을 만들지, 'ture' 현재 항목을 대체 할지 지정할 수 있다.
*/

if (confirm('창 닫기?')){
    win.close()
}
/*
반대로 close() 함수로 브라우저의 창을 닫을 수 있다.
window.close()
self.close()
close()     // == window.close()
와 같이 해서 자기 자신(창)을 닫을 수 있고,

팝업, open() 된 창에서 부모 창을 닫을 때는
window.opener.close()
opener.close()  
로 opener 객체에 close() 함수를 붙이면 된다. opener 객체는 자기 자신을 연 부모창의 window 객체를 참조한다.

윈도우 객체.close()
와 같이해서, 미리 특정 윈도우(window) 객체를 변수에 담아놓고 close()하면 특정 윈도우의 창이 닫히게 된다.
*/
