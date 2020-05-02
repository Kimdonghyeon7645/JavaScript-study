/*
Location(로케이션) 객체는 현재 브라우저의 창에서 열려있는 문서 url(주소)에 대한 객체이다. (문서의 주소와 관련된 객체)
Window 객체의 프로퍼티(속성)이며, BOM(브라우저 오브젝트 모델)에 속한다.

브라우저는 html 요소처럼 눈에 보이는 것 뿐만아니라 url 같은 보이지 않는 정보도 객체로 만들어 준다.
그중 url(주소)와 관련된 객체로 Location 객체가 있는데,
이를 활용해서 현재 url 을 알아내고, 현재 url에 대한 자세한 정보를 얻어내고, 현재 문서의 url을 변경할 수 있다.
*/

alert(location.toString())
alert(location.href)
/*
현재 윈도우(창)의 URL을 알아내는 방법으로는, 위에서 처럼 2가지가 있다.
location 객체에 .toString() 메서드로 현재 url을 문자열로 반환하는 것과,
location 객체의 href 속성(프로퍼티)를 접근해서 현재 url을 출력하는 것이다.

둘다 같은 값(현재 url)을 가져오는데, 둘 중에 하나를 골라 쓰자면 href 속성으로 접근하는 방식이 권장된다.
*/

alert(location)
console.log(location)
/*
location 객체를 콘솔에서 console.log() 로 출력하면 현재 location 객체의 다양한 정보(속성: 속성값 들)를 출력해서 확인 할 수 있고,
반대로 alert() 함수로 메시지로 location 객체를 출력하면 현재 url를 출력한다. 


이 이유는 콘솔로 location 객체를 출력할 때는 location 객체가 갖고 있는 속성(프로퍼티)들을 콘솔에서 내부적으로 분석해서,
출력하기에 객체와 그에 대한 여러 속성과 속성값들의 자세한 정보를 볼 수 있지만,

alert() 함수로 location 객체를 출력할 때는, alert() 함수의 인자값이 문자열이여야 하기에,
자바스크립트가 location 객체를 문자화 시켜서 출력하기에 location 객체를 문자화 시킨 값인, 현재 url이 출력이 된다.
*/

alert(location.protocol)    //현재 url의 통신규약(프로토콜)을 출력 (ex> http:, https:)
alert(location.host)        //현재 url의 호스트(웹에서의 서비스를 식별하는 주소, 도메인)을 출력 (ex> opentutorials.org)
alert(location.port)        //현재 url의 포트(컴퓨터에서 프로세스(프로그램)을 식별하는 값)을 출력 (ex> :80)
alert(location.pathname)    //현재 url의 웹서버에서 구체적인 정보를 요청하는 부분을 출력 (ex> /course/743/6491)
alert(location.search)      //현재 url의 서비스에서 전달되는 값(링크에 ?뒤에 따라오는 정보)을 출력 (ex> ?id=1)
alert(location.hash)        //현재 url의 앵커, 내부링크 값(링크의 #뒤에 따라오는 정보)를 출력 (ex> #bookmark)
/*
위 같이, location 객체의 다양한 프로퍼티(속성)으로 url에 대한 특정한 정보들을 얻을 수 있다.

ex) http://opentutorials.org:80/module/1?id=1#hash
와 같은 링크에서 location 객체의 속성(프로퍼티)를 접근하면, 각각의 값들은 아래와 같다.

location.protocol == http:
location.host == opentutorials.org
location.port == :80
location.pathname == /module/1
location.search == ?id=1
location.hash == #hash
*/

location.href = 'https://www.youtube.com/channel/UCI8HW08rOSlvweOjJ9Gp2Ng'
location = 'https://www.youtube.com/channel/UCI8HW08rOSlvweOjJ9Gp2Ng'
/*
location 객체를 접근해서 읽는 것으로 현재 url 을 알 수 있었는데,
location 객체에 값을 반대로 쓰는 것으로 현재 문서의 url을 다른 url로 이동할 수 있다.

location.href 속성에 이동할 url을 문자열로 대입해주면 현재 문서를 입력한 url로 이동하는데,
location 객체에 직접 대입해주어도 결과는 같다.

둘을 비교하자면, location.href 가 더 명시적이다.
*/

location.href = location.href
location.reload()   // 인자값에 true를 넣어줘도 된다.
/*
현재 url을 리로드(새로고침) 하는 방법으로, location.href 을 location.href 으로 대입해주어서 
현재url를 현재url으로 다시로드(리로드, 새로고침)할 수 있다.
이보다 더 간편한 방법으로 location 객체의 reload() 메서드를 활용해서 똑같이 url를 리로드 할 수 있다.
*/