var name = 'tamc'
var age = 18
var obj = {
    // 1.property shorthand(属性的简写)
    name,
    age,

    // 2.method shorthand(方法的简写)
    foo: function(){
        console.log(this);
    },
    bar() {
        console.log(this);
    },
    baz: () => {
        console.log(this);
    },

    // 3.computed property name(计算属性名)
    [name + 123] : '呵呵'
}

obj.foo()
obj.bar()
obj.baz()

console.log(obj);