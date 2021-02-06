/* 
비동기 상황 예시는 setTimeout()으로 구현 
*/


/* 1. 콜백 : Callback */
function runWithCallback(callback) {
    let text = "뽈롱"
    callback(text)      // 내부 처리가 끝나고... 
}


runWithCallback(function(text) {
    console.log(text)
})

runWithCallback(content => {    // 익명함수는 뭐... 화살표 함수로도 가능
    console.log(content)
})


console.log("갑니다!")
setTimeout(function() {
    console.log("나는!!! 호출을!!! 했다!!!!")
}, 1000)     // 실제 콜백으로도 이렇게 비동기를 처리
console.log("갔어...")


setTimeout(function() {
    console.log("콜백 지옥에")
    setTimeout(function() {
        console.log("오신 것을")
        setTimeout(function() {
            console.log("환영합니다")
            setTimeout(function() {
                console.log("NAGA")
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
// 위 형태가 콜백 지옥이다.

// 콜백은 콜백 지옥(Callback Hell : 어려운 비동기 제어와 코드 가시성 하락)의 단점이 있다.
// ES6 부턴 이런 단점을 극복하기 위해 Promise를 표준으로 채택했다.
