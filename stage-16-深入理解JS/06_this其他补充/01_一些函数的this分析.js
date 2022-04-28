// 1. setTimeout
setTimeout(() => {
    console.log(this); // window 由此可以分析内部是直接函数调用
}, 2000);

// 内部伪代码的猜测
function fhsetTimeout(fn,duration) {
    fn();
}
fhsetTimeout(() => {
    console.log(this); // window 由此可以分析内部是直接函数调用
}, 2000);


// 2. 监听点击
const boxDiv = document.querySelector('.box')
boxDiv.onClick = function() {
    console.log(this);
}

boxDiv.addEventListener('click', function() {
    console.log(this)
})
boxDiv.addEventListener('click', function() {
    console.log(this)
})
boxDiv.addEventListener('click', function() {
    console.log(this)
})

// 3.数组.forEach/map/filter/find
// 默认是window
var names = ["abc", "cba", "nba"]
names.forEach(function(item) {
  console.log(item, this)
})
names.map(function(item) {
  console.log(item, this)
}, "cba")