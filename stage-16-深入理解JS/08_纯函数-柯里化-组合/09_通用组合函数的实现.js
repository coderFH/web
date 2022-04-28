function double(m) {
    return m * 2
}   

function square(n) {
    return n ** 2
}
console.log(square(double(10)))

console.log('-----------');

function fhCompose(...fns) {
    var length = fns.length;
    for (var i = 0; i < length.length; i++) {
        if(typeof fns[i] !== 'function') {
            throw new TypeError("Expected arguments are functions")
        }
    }
    function compose(...agrs) {
        var index = 0
        var res = length ? fns[index].apply(this,agrs) : agrs
        while(++index < length){
            res = fns[index].call(this,res);
        }
        return res
    }
    return compose
}

var newFn = fhCompose(double, square)
console.log(newFn(10))