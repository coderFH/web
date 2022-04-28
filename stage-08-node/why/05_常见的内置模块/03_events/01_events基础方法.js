const EventEmitter = require('events');
const { emit } = require('process');

// 1. 创建发射器
const emitter = new EventEmitter();

// 2. 监听某一个事件
// addListener是on的alias简写
emitter.on('click',(args) => {
    console.log('监听1到click事件',args);
})

const listener = (args) => {
    console.log('监听2到click事件',args);
}
emitter.on('click',listener)

// 3. 发出一个事件
setTimeout(() => {
    emitter.emit('click','curry','tamc')
    emitter.off('click',listener) // 这个是取消监听,关闭谁的回调方法
    emitter.emit('click','curry','tamc')

}, 2000);