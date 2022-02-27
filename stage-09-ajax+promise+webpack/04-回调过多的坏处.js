const fs = require('fs');

/*
fs.readFile(__dirname + '/data/a.txt', (err, data)=>{
    console.log(data.toString());
});

fs.readFile(__dirname + '/data/b.txt', (err, data)=>{
    console.log(data.toString());
});

fs.readFile(__dirname + '/data/c.txt', (err, data)=>{
    console.log(data.toString());
});
*/

/*
  回调地狱
  解决方案: Promise
*/
fs.readFile(__dirname + '/data/a.txt', (err, data)=>{
    console.log(data.toString());
    fs.readFile(__dirname + '/data/b.txt', (err, data)=>{
        console.log(data.toString());
        fs.readFile(__dirname + '/data/c.txt', (err, data)=>{
            console.log(data.toString());
        });
    });
});


// ----------------------------- 模拟网络请求,1之后请求2,2之后请求3-------------------------
function request(fn) {
    setTimeout(() => {
        fn("拿到的数据")
    }, 1000);
}

// 这简直是回调地狱
request(function(data){
    console.log(data,1);
    request(function(data){
        console.log(data,2);
        request(function(data){
            console.log(data,3);
        });
    });
});


