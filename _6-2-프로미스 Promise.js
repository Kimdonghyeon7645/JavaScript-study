/* 2. 프로미스 : Promise */

new Promise((resolve, reject) => {
    console.log("콜백백님 한판해요")        // 1
    resolve()
})
.then(() => {
    console.log("NAGA!")        // 2
})
.catch(() => {
    console.log("오옹? 나이스!")        // 2(에러시)
})


function f1() {
    return new Promise((r1, r2) => {
        setTimeout(() => {
            console.log("뭐드세요");
            r1();
        }, 1000);
    })
}

f1()
.then(() => f1())
.then(() => {
    setTimeout(() => {
        console.log("뭐 드시냐고 세번째 물어봅니다.")
    }, 1000)
})


function bae() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("배먹어 배!")
            setTimeout(() => {
                resolve()
            }, 1000)
        }, 4000)
    })
}

bae().then(() => {
    console.log("얘 겨울배가 맛있단다")
})
