array = ['Hammad', 'Raza', "Khan"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element);
    
};

// for of loops
newArray = ["Xerses", "Leonidas", "Sparta"];
for (news of newArray){
   // console.log(news);
};

//Maps
const map = new Map()
map.set("Name", "Hammad")
map.set("class", "Raza")
map.set("work", "Khan")

for (const [key, value] of map){
   // console.log(key,value)
}

obj = {
    name: "Hammad",
    last: "Khan"
}
for (const key in obj){
    console.log(obj[key])
}


