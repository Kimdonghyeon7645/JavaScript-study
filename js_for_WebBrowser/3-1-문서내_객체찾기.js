/*
DOM(문서 객체 모델)을 통해서 문서를 제어할려면, 일단 제어할 대상을 찾는 것이다.
그리고 그 대상에 대해서 작업을 하는 건 그 다음 수순이 된다.

이러한 문서 내에서 제어할 대상, (ex> 문서의 특정 태그에 해당되는 요소)
문서내의 객체를 찾는 것은 대표적으로 document 객체의 메서드를 이용할 수 있다.
*/
if (confirm('getElementsByTagName 함수로 모든 li 텍스트를 빨강으로 변경?')){
    var tag_li = document.getElementsByTagName('li');
    for (var i = 0; i < tag_li.length; i ++){
        tag_li[i].style.color='red';
    }
}
/*
.getElementsByTagName 함수는 인자값으로 전달된 태그명에 해당하는 객체들을 찾아서 그 리스트를 반환한다.
이름 그대로, get(얻다) + Elements(요소들) + By(으로) + TagName(태그의 이름) 처럼
태그의 이름으로, 요소들(여러개)를 얻는 함수다.

참고로 getElementsByTagName 함수는 찾은 객체를 반환할 때 NodeList 라는 유사 배열에 담아서 반환하는데, 
NodeList는 배열은 아니지만, 배열접근 연산자, []인덱스, length 를 사용할 수 있다.
*/

if (confirm('getElementsByTagName 함수로 첫번째 ul 찾고, 그안의 모든 li 텍스트를 파랑으로 변경?')){
    var ul_li = document.getElementsByTagName('ul')[0];
    tag_li = ul_li.getElementsByTagName('li');
    for (var i = 0; i < tag_li.length; i++){
        tag_li[i].style.color='blue';
    }
}

//  getElementsByTagName 함수를 document 객체뒤에 붙여서 쓰면 전체 문서를 대상으로 조회(검색)하게 되지만,
//  위같이 이미 getElementsByTagName 으로 검색해서 나온 리스트 객체뒤에 다시 붙여서 쓰면, 그 대상에서 다시 조회 할 수 있다.
//  이것으로 조회할 범위를 자유자재로 정할 수 있다. (이 원칙은 다른 메서드 에서도 적용된다.)

if (confirm('getElementsByClassName 함수로 class 이름이 hiclass인 텍스트를 모두 노랑으로 변경?')){
    var cls_li = document.getElementsByClassName('hiclass');
    for (var i = 0; i < cls_li.length; i++){
        cls_li[i].style.color='yellow';
    }
}

/*
.getElementsByClassName 함수는 위 함수와 비슷한데, 인자값으로 받는 것고 찾는 것이 태그명이 아니라 클래스명이다.
이름 그대로, get(얻다) + Elements(요소들) + By(으로) + ClassName(클래스의 이름) 이며,
클래스의 이름으로, 요소들(여러개)를 얻는 함수다.
*/

if (confirm('getElementById 함수로 id가 hiid인 텍스트를 초록으로 변경?')){
    var tag = document.getElementById('hiid');
    tag.style.color='green';
}
/*
.getElementById 함수는 id값을 인자값으로 받아서 요소 모두를 반환하지 않고, 하나만 반환한다. (id 이름(속성명)은 하나의 태그에만 사용할 수 있기에, 여러개일 경우가 없음)
이름 그대로, get(얻다) + Element(요소) + By(으로) + Id(id의 이름) 이며,
id의 이름으로, 요소를 얻는 함수다.
*/
if (confirm('querySelector 함수로 ul li 선택자에 해당되는 텍스트를 은색으로 변경?')){
    var query = document.querySelector('ul li');
    query.style.color='silver';
}

if (confirm('querySelectorAll 함수로 ul li 선택자에 해당되는 모든 텍스트를 올리브색으로 변경?')){
    var query_li = document.querySelectorAll('ul li');
    for (var i = 0; i < query_li.length; i++){
        query_li[i].style.color='olive';
    }
}
/*
.querySelector 함수는 css 선택자 문법을 인자값으로 받아서, css 선택자를 검색해서 객체 하나만 반환한다. (대상이 여러개라면, 맨 처음 요소의 객체만 반환)
.querySelectorAll 함수는 위 함수와 인자값으로 받는 것은 같은데, 검색해서 찾은 객체 모두를 반환한다.
*/