const EventEmitter = require('events');
const { emit } = require('process');

// 1. 创建发射器
const emitter = new EventEmitter();

// 2. 监听某一个事件
// once只触发一次
emitter.once('click',(arg1,arg2,arg3) => {
    console.log('监听1到click事件',arg1,arg2,arg3);
})

emitter.on('click',(args) => {
    console.log('监听2到click事件',args);
})

// 将本次监听放到最前面
emitter.prependListener('click',(args) => {
    console.log('监听3到click事件',args);
}),

// 3. 发出一个事件
setTimeout(() => {
    emitter.emit('click','curry','tamc')
    emitter.emit('click','curry','tamc')
    emitter.removeAllListeners(); // 移除所有监听,参数也可以传一个数组,指定要移除的
}, 2000);