// Global Scope

// let age = 15; // let ke jgh var , const bhi use ke skte hai without any difficulty
// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age)
// }

// for(let i = 0; i<2; i++){
//     console.log(age);
// }

// function sayHello(){
//     console.log('hi', age);
// }
// sayHello();

// function scope

// function sayHello(){
//     const name = 'Earth'; // const ke jgh var,let bhi use kr skte h
//     console.log('hello duniya', name )
// }
// // console.log(fullName); // lekin esko bracket ke bhr use nhi kr skte 
// // jo bhi variable access krna hai wo bracket ke andr hi hoga
// sayHello();

// Block scope

// {
//     var height = 180; // var ke through hum block(bracket) ke bhr 
//     // bhi access kr skte hai but let or const ko bs andr me hi access kr skte
// }

// console.log(height);

// {
//     let age = 25; // eske bhr accessable nhi kr skte h output erroe aayega
// }
// console.log(age);


// Temporal Dead Zone

console.log(marks);
console.log('raj');
console.log('love');
const marks = 100;// line 50 se lekar 53 tak Temporal Dead Zone hai
console.log(marks);