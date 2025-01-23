function sayMyName(fName = "Uday", lName ="Singh"){
    console.log("My name is ",fName," ", lName)
}
sayMyName("rk"); // agr yaha naam nai dalege to automatically default wala naam le lega
//  or dalege to ye naam print krayega







// class human{
// // properties
//     age = 17; // public or ye hmesa default hota
//     #wt = 55; // lekin # use kr dege to wo private ho jayega means esko bhr access nhi kr skte hai
//     ht =180;

//     constructor(newAge, newHeight, newWeight){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }

//     // behaviour
//     walking(){
//         console.log("i am walking ", this.#wt); // #wt eske andr mtlb class ke andr hi bs access kr skte wo bhi this.#wt krke
//     }

//     running(){
//         console.log("i am running");
//     }

//     get fetchWeight(){
//        return this.#wt; // agr private field ko class ke bhr access krana ho to use kr skte
//     }

//     set modifyWeight(val){
//         this.#wt = val; // value ko modify update change kr skte h
//     }
// }

// let obj = new human (50,60,45);
// console.log(obj.fetchWeight); // jaise age ke jgh #wt use kre to error bta dega 

// obj.walking();