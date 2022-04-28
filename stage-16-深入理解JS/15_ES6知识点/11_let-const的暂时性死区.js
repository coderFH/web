var foo = "foo"

function bar() {
    //它表达的意思是在一个代码中，使用let、const声明的变量，在声明之前，变量都是不可以访问的；
    // 我们将这种现象称之为 temporal dead zone（暂时性死区，TDZ）；
    console.log(foo)
    let foo = "abc"
}

bar()
