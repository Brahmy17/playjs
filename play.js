let name = "john"; //Declaring and assignment
let age = 25; 
let hasHobby = true;
let hobbies = ["Reading", "Coding", "Gaming"] // this  an array

//accesing array element
//console.log(hobies[2]);
//console.log(hobbies[0]);

//looping through array
//method 1
for (let hobby of hobbies){
    console.log(hobby);
}
//method  2
hobbies.map((hobby)=>{
    console.log(hobby);
});

//method 3
hobbies.forEach((hobby)=>{
    console.log(hobby);
});
console.log("--------------------------------------")

//this  is an object
const person ={
    name: "John", //key : pair value
    age: 25,
    greet : function(){
        console.log("Hello, I am " + this.name);
    }
}
//accessing object properties
console.log(person.greet());

console.log(person);
console.log("--------------------------------------")

//this is a function
function summarizeUser(userName,userAge,userhasHobby){
    return(
        "Name is "+ userName + " age is "+ userAge +" and the user has hobbies: "+ userhasHobby
    )
}
function add(number1,number2){
    return number1 + number2;
}

console.log(add(2,3));
console.log("--------------------------------------")
console.log(summarizeUser(name,age,hasHobby));
console.log("--------------------------------------")
if(age >  18){
    console.log("You are an adult!")
}
else{
    console.log("You are a minor!")
}
console.log("--------------------------------------")
const fullname = "John Doe";

console.log(fullname);
console.log(age);
console.log(hobbies[0]);
console.log("--------------------------------------")