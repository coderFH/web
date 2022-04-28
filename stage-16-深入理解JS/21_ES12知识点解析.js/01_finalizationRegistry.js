// FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调。
const finalRegistry = new FinalizationRegistry( value => {
    console.log("注册在finalRegistry的对象, 某一个被销毁", value);
})

let obj = { name: 'tmac' }
let info = { age : 18 }

finalRegistry.register(obj, "obj")
finalRegistry.register(info, "value")

obj = null
info = null