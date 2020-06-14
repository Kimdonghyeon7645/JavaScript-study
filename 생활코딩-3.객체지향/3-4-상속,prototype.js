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
그럼 prototype(프로포타입)은 뭘까?

*/