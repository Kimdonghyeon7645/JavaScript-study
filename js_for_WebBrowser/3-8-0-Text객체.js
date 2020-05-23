/*
Text 객체,
Node 객체에서 Text에 대한 API도 몇개 보았었는데, 
Text객체는 말그대로 텍스트 객체다. DOM에서 실질적인 데이터가 저장되는 객체인 것이다.

<p>텍스트</p>라는 요소(엘리먼트)가 있으면, 거기에 <p> </p>를 제외한 '텍스트'부분이 텍스트 객체가 된다.

Node 객체를 상속받은 CharacterData 객체를 상속 받는 것이 Text 객체며, 
주목할만한 점은 DOM에선 공백이나 줄바꿈 같은 화이트스페이스도 텍스트 노드에 포함된다. 


사실 Text 객체를 생성하는 API는, Node 수정 API에서 나온(3-6-3 참고) createTextNode() 메서드다.
그외의 API는,
텍스트 노드의 값을 읽어오는 
data,
nodeValue
와, 텍스트 노드를 조작하는
appendData()
deleteData()
insertData()
replaceData()
subStringData()
가 있다. 
이러한 그외 API들에 대해선 다음장에서 알아보자.
*/
