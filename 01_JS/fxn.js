function like(username){
    if(!username){ //if undefined
        console.log("Hey there")
        return 
    }
    return `${username} is here.`
}

// console.log(like(""))

function here(...num2){
    return num2
}

// console.log(here(200,140,20.5))


// Handling objects and arrays with functions

const obj1 = ({
    cast: "matters",
    religion: "matters"
})

function getit(obj){
    return `${obj.religion} bro`
}

console.log(getit(obj1))

if (true){
    const name="Hammad"
    if(name==="Hammad"){
        const website = 'youtube'
    }
    //console.log(website);
    console.log(name)
}


const names = function(name){
    return name
}
console.log(names())