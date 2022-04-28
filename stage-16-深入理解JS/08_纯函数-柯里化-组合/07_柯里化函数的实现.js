function add1(x, y, z) {
    return x + y + z
}
console.log(add1(10,20,30));

console.log('------------------------');

function fhCurrying(fn) {
    function curried(...args) {
        // 判断当前已经接收的参数的个数, 可以参数本身需要接受的参数是否已经一致了
        // 1.当已经传入的参数 大于等于 需要的参数时, 就执行函数
        if(args.length >= fn.length) {
            return fn.apply(this,args)
        } else {
            function curried1(...args1) {
                return curried.apply(this,args.concat(args1))
            }
            return curried1
        }
    }
    return curried
}

var curryAdd = fhCurrying(add1);
console.log(curryAdd(10,20,30));
console.log(curryAdd(10, 20)(30));
console.log(curryAdd(10)(20)(30));


console.log('------------------------');

// 测试下this的绑定
function foo(x, y, z) {
    return x + y + z
}

console.log(foo.call({}, 1, 2, 3)); 

var curryFoo = fhCurrying(foo)
console.log(curryFoo.call({}, 1, 2, 3));