// how to create array
// first tarika
// let arr = [1,2,3,4];
// console.log(arr);

//second tarika :-> array constructor
 
// let brr = new Array(1,'ritu',true);
// console.log(brr);

// how to access array

// let arr = ['love', 'rk', true, 45];
// console.log(arr[0],arr[1]);// ess trh se access kr skte h array ko

// Built-in method

// let arr = ['love', 'rk', true, 45];
// arr.push('roy'); // insert at end
// arr.pop(); // remove at end
// arr.shift(); // remove first item
// arr.unshift('adore')// add first item
// arr.push(50);
// arr.push(60);
// arr.push(70);
// console.log (arr.slice(1,3));// rk , true ans hoga
// arr.splice(1,2, 'golu');// esme index 1 or 2 hta kr golu instert kr diya
// arr.splice(1,0,'molu'); // esme remove nhi karana tha 0r 1 index pe molu add kra diya
// console.log(arr);

// Map method

// let arr = [10,20,30];
// arr.map((Number, index)=>{ // agr direct map se print krana ho to
//     console.log(Number);
//     console.log(index);

// })

// let ansArray = arr.map((Number)=>{
//     return Number*Number;
// })
// console.log(ansArray);

// Filter method

// let arr = [10,11,14,20,21,24,25];
// let evenArray = arr.filter((Number) => {
// return Number%2==0;// direct v likh skte hai agr code bulky na krna ho to

// //     if(number%2 == 0){
// //         return true;
// //     } 
// //     else{
// //         return false;
// //     }
// })

// console.log(evenArray);

// example 2

// let arr = [1,2,'ritesh', 'raj', null];
// let ans = arr.filter((value) =>{
//     if(typeof(value) === 'number'){ // agr number filterout krna ho to string ke jgh pe number likhge
//         return true;
//     }
//     else{
//         return false
//     }
// })
// console.log(ans);

// Reduce Method

// let arr = [10, 20, 30, 40];
// let ans = arr.reduce((acc, curr) =>{
//     return acc + curr;

// },0);

// console.log(ans);


// sort method

// let arr = [9,5,4,2,7,1,3];
// arr.sort();

// console.log(arr);

// console.log(arr.indexOf(7)); // agr index value niklna hoto

// find -> for each note:- for in object wale file me hai

// let arr = [10, 20, 30];
// let length = arr.length;

// // traditonal loop
// for(let index = 0; index<length; index++){
//     console.log(arr[index]);
// }
// arr.forEach((value , index) =>{
//     console.log("Number ",value, " Index ", index)
// })

// for of loop

// let arr = [10,20,30]; 
// for(let value of arr){
//     console.log(value);
// }

// string 
 let fullName = "ritesh";
 for(let value of fullName){
    console.log(value);
 }