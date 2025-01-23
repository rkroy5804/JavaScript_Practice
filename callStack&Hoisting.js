
// var age = 25;
// console.log(age);// lekin es line ko upr likh de to v chlega but output undefined aayega 
// qki var age bs shift hoti hai but value assign nhi hoti lekin function case me entire function shift hoti




// sayMyName("ritesh");

// function sayMyName(finalName){
//     console.log(finalName);
// }
// sayMyName("ritesh"); // agr ye line upr v likhe to v output dega qki {eske andr ke logic pura shift ho jata} 
// lekin function experession me agr phle call kra diye mtlb upr phle likh diye to nhi chlega

// sayHello();
// let sayHello = function(){
//     console.log("hello ji kaise ho")
// }
// to esme error aajayega

// => Function <=

// let greet = function(){
//     console.log("Greeting for the day")
// }
// greet();

// function greetMe(greet, fullName){
//     console.log("hello", fullName);
//     greet();
// }

// function greet(){
//     console.log("greeting for the day")
// }

// greetMe(greet,"ritesh")


// Return function

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);

// Store in DataStructure

const arr = [
    function(a,b){
        return a+b;
    },

    function(a,b){
        return a-b;
    },

    function(a,b){
        return a*b;
    },
]

let first = arr[0];// agr index value 0 ke jgh 1 krege to -(minus) wala ka output dega
let ans = first(5,10);
console.log(ans)