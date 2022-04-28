var obj = {
    _age: 18,
    _eating: function(){},
    // 在defineProperties中,如果不用存取属性,也可以用这种方式
    set age(value) {
        this._age = value
    },
    get age() {
        return this._age
    }
}

Object.defineProperties(obj,{
    name: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: "tmac"
    },
    age:{
        configurable: true,
        enumerable: true,
        get: function() {
          return this._age
        },
        set: function(value) {
          this._age = value
        }
    }
})
 
obj.age = 19
console.log(obj.age);
console.log(obj);