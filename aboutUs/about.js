/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val = init;
    return{
        increment : () =>{
            for(let i = 0; i < val; i++){
                val++;
            }
        },
        decrement : () =>{
            for(let i = 0; i < val; i++){
                val--;
            }
        },
        reset : (clear) =>{
            clearInterval(clear,1000);
        }
    }
    
};
// createCounter(10).increment()
// setInterval(createCounter(10).increment(),100)
// setInterval(createCounter(10).decrement(),100)
// createCounter().increment(increment())
// createCounter().increment(decrement())

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */