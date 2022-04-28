// 1.测试箭头函数中this指向
var name = "why"

var foo = () => {
  console.log(this)
}

var obj = {
    foo: foo
}

foo()  
obj.foo()
foo.call("abc")
// 由于箭头函数不绑定this, 所以都会打印全局的this

// 2. 应用场景
var obj = {
    data: [],
    getData: function() {
        // 发送网络请求, 将结果放到上面data属性中
        // 在箭头函数之前的解决方案
        var _this = this
        setTimeout(function() {
          var result = ["abc", "cba", "nba"]
          _this.data = result // setTimeout内部是独立函数调用,this是全局的,所以需要在外部保存下this
        }, 2000);

        // 箭头函数之后
        setTimeout(() => {
            var result = ["abc", "cba", "nba"]
            this.data = result // 箭头函数不绑定this,所以会从父级作用域找,找到getData,因为getData内部隐式绑定了obj
        }, 2000);
    }
}

obj.getData()