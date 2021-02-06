/* 3. 어싱크 & 어웨이크 : Async & Await */

function promise() {
    return new Promise((resolve, reject) => {
        console.log("기다려봐")
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

async function hey() {
    await promise()
    console.log("짠!")
}

hey()
