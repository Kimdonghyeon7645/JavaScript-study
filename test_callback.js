function callback(cb){
    cb();
}

function add(x, y){
    let sum = x + y;
    callback( function(){
        console.log(sum);
    })
}

add(3,5);