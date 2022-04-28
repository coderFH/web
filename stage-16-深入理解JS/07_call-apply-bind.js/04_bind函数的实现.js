Function.prototype.fhbind = function(thisArg, ...argArray) {
    // 1. 获取需要被执行的函数
     var fn = this;

    // 2. 对thisArg转换成对象类型(防止它传入的是非对象类型)
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window;

    function proxyFn(...args) {
        // 3. 调用需要被执行的函数
        thisArg.fn = fn;

        // 特殊: 对两个传入的参数进行合并
        var finalArgs = [...argArray, ...args]
        var res = thisArg.fn(...finalArgs);
        delete thisArg.fn;

        // 4. 将最终的结果返回出去
        return res
    }

    return proxyFn
}
 
 
 function foo() {
     console.log('foo函数被调用',this);
 }
 
 function sum(num1, num2, num3, num4) {
     console.log('sum函数被调用',this,num1, num2, num3, num4);
 }
 
// 1. 系统方法的调用
var bar = foo.bind('abc');
bar();

var newSum = sum.bind('cba',1,2); 
newSum(3,4);
 
console.log('---------------------');

// 2. 使用自己实现的bind
var newFoo = foo.fhbind('abc');
newFoo();
var newSum = sum.fhbind('cba',1,2);
newSum(3,4);