const mysym = Symbol("Key1")

const object = {
    name: "Hammad",
    age: 108,
    [mysym]: "my123", 
}

// console.log(object[mysym])


object.greeting = function(){
    console.log(` ${this.name}`);
}
// console.log(object.greeting)
 console.log(object.greeting())