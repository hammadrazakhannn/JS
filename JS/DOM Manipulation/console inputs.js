// Write document. before each command

getelementbyid("").id // Gives direct access to the name of the element 
getelementbyclassName("").className // Gives direct access to the class of the element
getelementbytagName("").tagName // Gives direct access to the tag of the element
getelementbyname("").name // Gives direct access to the name of the element
// getelementbyid, getelementbyclassName, getelementbytagName, getelementbyname are methods to access elements in the DOM

document.getelementbyid("title").getattribute("id/class"); // gives output 

title.style.color = "red"; // Changes the color of the title to red

document.getelementbyid("title").setattribute("id", "newTitle"); // Changes the id of the title to newTitle


//querySelector and querySelectorAll are methods to access elements in the DOM
document.querySelector("#title").id; // Gives direct access to the id of the element
document.querySelector(".className").className; // Gives direct access to the class of the element

//storing and then accessing and manipulating elements
const elements = document.querySelectorAll("p"); 
elements[0].style.color = "blue"; // Changes the color of the first paragraph to blue

elements.style.color = "green"; // Wrong syntax 

elements.forEach(element => {
    element.style.color = "green"; // Changes the color of all paragraphs to green
}
);


const parent = document.querySelector(".heading");
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML); 
}