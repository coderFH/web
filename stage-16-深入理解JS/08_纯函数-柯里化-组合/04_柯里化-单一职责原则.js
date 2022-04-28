function add(x, y, z) {
    x = x + 2
    y = y * 2
    z = z * z
    return x + y + z
}

console.log(add(10, 20, 30))


function sum(x) {

    x = x + 2 // 可以是一些复杂的逻辑代码,比如几百行

    return function(y) {
        y = y * 2 // 可以是一些复杂的逻辑代码,比如几百行

        return function(z) {
            z = z * z // 可以是一些复杂的逻辑代码,比如几百行

            return x + y + z
        }
    }
}

console.log(sum(10)(20)(30))
  
  