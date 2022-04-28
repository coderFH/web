function sum(m, n) {
  return m + n
}

// 假如在程序中,我们经常需要把5和另外一个数字进行相加
console.log(sum(5, 10))
console.log(sum(5, 14))
console.log(sum(5, 1100))
console.log(sum(5, 555))


console.log('---------------------');

function makeAdder(count) {
    count = count * count
    return function(num) {
        return count + num;
    }
}

var adder5 = makeAdder(5);
console.log(adder5(10));
console.log(adder5(14));
console.log(adder5(1100));
console.log(adder5(555));