function orderPizza(callback) {
  setTimeout(() => {
    const pizza = '🍕';
    callback(pizza)
  }, 2000)
}
function pizzaReady(pizza) {
  console.log(`Eat the ${pizza}`)
}
orderPizza(pizzaReady)
console.log("Call Qoli")