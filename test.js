const obj = {
    name: '동현',
    age: 1
}

console.log(obj.hasOwnProperty('name'))

console.log(obj.__proto__ == Object.prototype)