/*
상속(inheritance)은
객체의 구조를 말그대로 상속, 물려받은 객체를 만들 수 있는 기능을 말한다.
만약 단순히 원래구조만 물려받는다면, 객체를 복사한 것과 다르지 않겠지만, 
상속한 객체(자식객체라 한다)에서 상속받은 객체(부모객체라 한다)의 구조를 수정하고 변경해서 새로운 객체를 만들 수 있다.
*/
function Saram(name){   // 상속될 객체(부모객체, Saram)
    this.name = name
    this.age = 18
}
Saram.prototype.name = null     // 상속될 프로퍼티를 프로토타입으로 정의
Saram.prototype.introduce = function(){     // 상속될 메서드를 마찬가지로 정의
    return '내이름은 ' + this.name + '입니다.'
}


function Programmer(name, lang){    // 상속할 객체(자식객체, Programmer)
    this.name = name
    this.lang = lang
}
Programmer.prototype = new Saram()  // 부모(Saram)의 프로퍼티, 메서드를 상속받음
Programmer.prototype.lang = null    // 자식 객체에서 프로퍼티를 추가
Programmer.prototype.coding = function(){   // 자식 객체에서 메서드를 추가
    return "저는 " + this.lang + '으로 코딩합니다.'
}


// 테스트 코드
var ps1 = new Saram('김숭')
console.log(ps1.introduce())
console.log(ps1.age, '살')
var ps2 = new Programmer('김덩', 'Python')
console.log(ps2.introduce())
console.log(ps2.age, '살')
console.log(ps2.coding())
/*
원래 객체의 프로퍼티, 메서드를 선언할 때,
첫번째로, '객체명.프로퍼티 = 값' 같이 바깥에서 객체의 프로퍼티를 선언하거나,
두번재로, 생성자 함수 안에 'this.프로퍼티 = 값' 같이 프로퍼티를 선언하기도 했다.
그리고 이번에 배울 세번째는, 다른 상속받은 객체에서도 프로퍼티를 사용할 수 있게, '객체명.prototype.프로퍼티 = 값' 과 같이, 프로퍼티를 선언해줄 수 있다.
(근데 이렇게 안하고 걍 다른방법으로 프로퍼티를 선언하고 정의해도, js에선 잘 상속받는 것 같다.)

이렇게 객체의 프로퍼티, 메서드를 선언, 정의하고, 상속받을 객체에서,
'자식객체.prototype = new 부모객체()'와 같이 부모객체를 자식객체의 prototype 프로퍼티에 담으면, 부모객체의 프로퍼티, 메서드를 자식객체에서도 사용할 수 있게된다.
*/


/*
그럼 prototype(프로토타입)은 뭘까?
객체의 특수한 프로퍼티로, 상속할 때 중요한 수단으로 사용되는데,
이 prototype 프로퍼티에 저장된 속성(프로퍼티와 메서드)들은 생성자를 통해서 객체가 만들어 질 경우에, 해당 객체에 prototype의 속성들이 만들어진다.

이것때문에, 부모객체의 생성자를 불러서 객체를 만드는 것을 (new 부모객체) 자식객체의 propotype 속성에 담으면, 
자식객체에서도 부모객체의 propotype 속성들을 연결해서 이용할 수 있다.
*/
function God(){}    // 신(God) 객체 생성
God.prototype.order = '홍익인간해라'

function Emperor(){}    // 황제(Emperor) 객체 생성
Emperor.prototype = new God()
 
function King(){}       // 왕(King) 객체 생성
King.prototype = new Emperor()
 
function Person(){}     // 사람(Person) 객체 생성
Person.prototype = new King() 

var ob = new Person()
console.log(ob.order)
/*
이렇게 propotype 속성을 서로 연결해서 하위 객체가 상위 객체의 프로퍼티등을 접근할 수 있는 것을 propotype 체인(prototype chain)이라고도 한덴다.
위같은 코드에서 order라는 프로퍼티를 찾을 때, 순서가 있는데,

1. 원래 객체(Person)에서 order를 찾는다.
2. 없으면 상위 객체(King)에서 King.prototype.order를 찾는다.
3. 없으면 상위 객체(Emperor)에서 Emperor.prototype.order를 찾는다.
4. 없으면 상위 객체(God)에서 God.prototype.order를 찾는다.


참고로, 
하위객체.prototype = 상위객체.prototype
와 같이 작성하면 안된다. 그러면 두 객체의 prototype 값을 공유하게 되는데, 이러면 하위객체의 prototype 값을 바꾸면 상위객체에서도 값이 변경된다.

하위객체.prototype = new 상위객체
는 상위객체(상위객체.prototype를 원형으로)가 생성된 값을 하위객체의 prototype 에 넣는거여서 상위객체의 prototype에 영향을 주지 않는 것이다. 
*/