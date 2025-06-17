const a = new Promise (function(resolve, reject) {
    
setTimeout(function(){
    console.log('1st task completed!');
    resolve()
}, 2000)

})

a.then(function(){
    console.log("hogya")
})


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("to bro")
        resolve()
    }, 1000);
}).then(function(){
    console.log('ye bhi hogya');
    
})