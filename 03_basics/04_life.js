// Immediately Invoked function Expresion(IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();


((name) =>{
     // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})("Ranjan")