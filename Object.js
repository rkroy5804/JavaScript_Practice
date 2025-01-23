// how to create object and function call

let obj = {
    name: "ritesh",
    age: 22,
    weight: 56,
    height: "5feet 7inch",
    greet: function(){
        console.log("Hello ji kaise hai");
    }

};
console.log(obj)
obj.greet(); 

// for in method
for(let key in obj){ 
    console.log(key, " ", obj[key]) // agr bs key use kiye to bs weight name height aayega or obj[key] use kiye to uska value v aayega
}