//Arrow function 

const a = (num1 , num2) => {
    return num1 + num2
};

console.log(a(5,6));

//Unique way IIFE

//Named IIFE
(function name(){
    console.log("Hello");
    
})();

//Un-named IIFE
(() => {
    console.log("Hi")
}) ()