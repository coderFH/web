const message = 'hello world'
const newMessage = message.padStart(15,'*').padEnd(20,'-')
console.log(newMessage);

// 案例
const cardNumber = '410111200001000010'
const lastFourCard = cardNumber.slice(-4)
const finalCard = lastFourCard.padStart(cardNumber.length,"*")
console.log(finalCard)