const obj = {
    _name: 'tmac',
    get name() { return this._name },
    set name(newVlaue) { this._name = newVlaue }
}

const objProxy = new Proxy(obj, {
    get: function(targer, key, receiver) {
        console.log('get方法被访问---------',key,receiver);
        /*
        不传receiver时,当调用Reflect.get(targer,key)时,
        会走到obj的get方法,然后this._name,访问的其实时obj中的_name,这样就监听不到_name的改变
        所以传receiver后,this._name其实访问的就是objProxy的_name
        然后再次执行objProxy的get方法,所以通过打印看出get方法被访问两次
        */
        Reflect.get(targer,key,receiver);
    },
    set: function(target, key, newValue, receiver) {
        console.log('set方法被访问---------',key);
        Reflect.set(target, key, newValue, receiver)
    }
})

objProxy.name = 'curry'