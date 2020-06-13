/*
객체는 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 표현한다.
이 때 객체 내의 변수를 프로퍼티(property)라고 하고, 함수를 메서드(method)라고 한다.

객체를 만들때는, {}에 프로퍼티와 메서드를 저장해서 만드는데,
*/
var go_dong_eo = {}
go_dong_eo.name = '고등어'
go_dong_eo.print = function(){
    return '이 물고기는 ' + this.name + '입니다.'
}
console.log(go_dong_eo.print())

/*
솔직히 이렇게 만들어도 되는데, 객체를 한번에 {}(대괄호)안에 정의할 수도 있다.
이때는,
이름 : 값,
과 같이 프로퍼티와 메서드를 객체 안에 정의한다.
*/

var bung_eo = {     // bung_eo 변수에 담은 객체 정의
    'name' : '붕어빵',  // 프로퍼티 name
    'print' : function(){   // 메서드 print
        return '이 물고기는 ' + this.name + '입니다.'
    }
}
console.log(bung_eo.print())

/*
근데 이렇게 객체를 정의할 때, name 프로퍼티에 각각 다른 값을 담는다면,
객체의 정의를 그때마다 따로 따로 반복해야 될것이다. 
이러지않고 객체의 구조를 재활용하는 방법은 생성자다.
*/

function Mokeo() {}
var mokeo = new Mokeo()
mokeo.name = '목어'
mokeo.print = function(){
    return '이 물고기는 ' + this.name + '입니다.'
}
console.log(mokeo.print())

/*
생성자(constructor)는 객체를 만드는 함수로, 
js에서는 독특하게 함수는 재사용 가능 로직의 묶음이 아니다. 생성자라는 이름답게, 객체를 생성하는 함수다. 

근데 위같이 해주면, 객체를 생성하는 생성자 함수와, 객체안에 들어갈 프로퍼티와 메서드를 분리해서 정의해주었는데,
이러지 말고 객체의 구조를 재활용 할 수 있게 생성자 함수를 짜준다면, 아래와 같다.
*/

function Fish(name){    // 참고로 생성자는 일반 함수와 구분하려고 첫글자를 대문자로 표시한다.
    this.name = name
    this.print = function(){
        return '이 물고기는 ' + this.name + '입니다.'
    }
}

var f1 = new Fish('금붕어')
var f2 = new Fish('미꾸라지')
console.log(f1.print())
console.log(f2.print())


// 참고로 ES6부터는 위의 생성자 함수를 아래와 같이 표현하여 정의한다. (ES6는 뒤에 알아보도록 하자.)
class Fish {
    constructor(name) {
        this.name = name
        this.print = function () {
            return '이 물고기는 ' + this.name + '입니다.'
        }
    }
}
