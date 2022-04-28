function add(x, y, z) {
    return x + y + z
}
var result = add(10,20,30)
console.log(result);

// 将上边的函数柯里化
function sum1(x) {
    return function(y) {
        return function(z) {
            return x + y + z
        }
    }
}
console.log(sum1(10)(20)(30));

// 柯里化的简化代码
var sum2 = x => y => z => x + y + z
console.log(sum2(10)(20)(30));

// 如果箭头函数的写法不好理解,看下面的注释
var sum3 = x => {
    return y => {
        return z => {
            return x + y + z;
        }
    }
}
console.log(sum3(10)(20)(30));

