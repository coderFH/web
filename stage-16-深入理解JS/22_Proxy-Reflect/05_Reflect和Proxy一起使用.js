const obj = {
    name: 'tmac',
    age: 18
}

const objProxy = new Proxy(obj, {
    get: function(target, key, receiver) {
        console.log('get--------');
        // return target[key];
        // 下边这一句跟上边是一样的效果,但是功能会比上边的强大很多
        return Reflect.get(target, key);
    },
    set: function(target, key, newValue, receiver) {
        console.log('set------');
        // target[key] = newValue;
        // Reflect.set是有返回值的,可以返回设置时是否成功
        const res = Reflect.set(target,key, newValue);
        if (res) {} else {} // 在这里可以写一些逻辑
    }
})

objProxy.name = 'curry'
console.log(objProxy.name);