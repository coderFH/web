// 需求: 从网络上加载3个资源, 要求加载完资源1才能加载资源2, 加载完资源2才能加载资源3
// 前面任何一个资源加载失败, 后续资源都不加载

// 1.正常的解决方式(回调地狱)
function request(fn) {
    setTimeout(function () {
        fn("拿到的数据");
    }, 1000);
}

request(function (data) {
    console.log(data, 1);
    request(function (data) {
        console.log(data, 2);
        request(function (data) {
            console.log(data, 3);
        });
    });
});