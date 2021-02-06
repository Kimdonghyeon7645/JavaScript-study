/* 
비동기 상황 예시는 setTimeout()으로 구현 
*/
function comeOnMan() {
    console.log("나는!!! 호출을!!! 했다!!!!")
}

console.log("갑니다!")
setTimeout(comeOnMan, 1000)     // 보면 이눔이 1초뒤에 실행되는 비동기 상황
console.log("갔어...")



/* 1. 콜백 : Callback */
function runWithCallback(callback) {
    let text = "뽈롱"
    callback(text)      // 내부 처리가 끝나고... 
}

console.log("갑니다!")
runWithCallback(function(text) {
    console.log(text)
})
runWithCallback(content => {    // 익명함수는 뭐... 화살표 함수로도 가능
    console.log(content)
})
console.log("갔어...")


/* 2. 프로미스 : Promise */


