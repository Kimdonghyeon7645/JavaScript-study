# 3 - JS의 프로토타입 이해하기
> 출처 : https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67

![image](https://user-images.githubusercontent.com/48408417/106415470-9142a980-6492-11eb-8705-e1c40d4eaa52.png)

이미지를 째려보고 이해가 안되면 아래 글도 보자.

### 단순 정리

- JS는 **프로토타입(prototype)** 기반 언어다.
    - JS에선 상속을 프로토타입으로 흉내낸다.

- 객체는 무조건 **함수(Function)** 로 생성된다.

- 함수 정의시 2가지 일이 함께 이뤄진다.
    1. 해당 함수에 **생성자(Constructor)** 자격 부여
    2. 해당 함수에 대한 **Prototype Object**가 생성되고 연결

- 함수는 **prototype** 속성으로 Prototype Object를 가리킨다.

- Prototype Object은 일반적인 객체에 **constructor, \_\_proto\_\_** 속성을 추가로 가진다.
    - **constructor** 는 Prototype Object와 같이 생성된 함수를 가리킨다.
    - **__proto__** 는 Prototype Link이라 한다. 모든 객체가 항상 가지는 속성이기도 하다. 이 속성은 **객체 생성시에 조상이였던 함수의 Prototype Object**를 가리킨다.
