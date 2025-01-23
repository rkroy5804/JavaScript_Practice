//compile time error

// console.log(1; // syntax error

// runtime error

// console.log(x); // reference error

// try{
//     console.log("try block starts here");
//     console.log(x);     // ye run nhi hoga qki error hai jisse reference error bolte hai
//     console.log("try block ends here");
// }

// catch(err){ // esme define krte hai ki error ke sath ap kya krna chahte hai jaise
//     // retry logic
//     // fallback mechanism
//     // logging
//     // custom error

//     console.log("I am inside catch block");
//     console.log("your error is here: ",err); // es line se yah btayega ki error kaha hai

// }
// finally{
//     console.log("I will run everytime, AS I AM FINALLY BLOCK"); // ye hmesa chlega ye error pe depend nhi hota
// }



// let's create a custom error

// try{
    
//     console.log(x); // reference error

// }
// catch(err){
//     throw new Error("bhai phle declare kar phir print kr"); // throw ke madhyam se custom error bhi create kr skte hai
// }

let errorcode = 100;
if(errorcode == 100){
    throw new Error("Invalid Json")
}