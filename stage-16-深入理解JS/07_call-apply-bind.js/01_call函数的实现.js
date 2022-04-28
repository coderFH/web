Function.prototype.fhcall = function(thisArg,...args) {
   // 1. 获取需要被执行的函数
    var fn = this;
    
    // 2. 对thisArg转换成对象类型(防止它传入的是非对象类型)
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window;

    // 3. 调用需要被执行的函数
    thisArg.fn = fn;
    var res = thisArg.fn(...args);
    delete thisArg.fn;

    // 4. 将最终的结果返回出去
    return res
}


function foo() {
    console.log('foo函数被调用',this);
}

function sum(num1, num2) {
    console.log('sum函数被调用',this);
    return num1 + num2;
}

// 1. 系统方法的调用
foo.call('abc');
var res = sum.call('cba',1,2); 
console.log(res);

console.log('---------------------');
// 2. 使用自己实现的call
foo.fhcall('abc');
var res = sum.fhcall('cba',1,2);
console.log(res);