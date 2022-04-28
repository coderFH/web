const btns = document.getElementsByTagName('button')
// ES5的时候的实现方法
for (var i = 0; i < btns.length; i++) {
  (function(n) {
    btns[i].onclick = function() {
      console.log("第" + n + "个按钮被点击")
    }
  })(i)
}
console.log(i)

// ES6中的写法
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      console.log("第" + i + "个按钮被点击")
    }
}
