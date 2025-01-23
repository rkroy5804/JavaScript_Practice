// function sayMyname(){
//     console.log("ritesh")
// }
// sayMyname();

// function printcounting(){
//     for(let i = 1; i<=100;i++){
//         console.log(i);
//     }
// }
// printcounting();

// function printNumber(num){ // here num is parameter and 5 is arrugement
//     console.log("printing Number:",num)
// }
// printNumber(5);

// function getAverage(num1,num2){
//     let avg = (num1 + num2)/2;
//     console.log('average: ', avg);
// }

// getAverage(3,5);

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }

// let ans = getSum(1,2,3);
// console.log("Printing Sum", ans);

// function getMyName(firstName , LastName){
//     let fullName = firstName+" "+ LastName;
//     return fullName;
// }

// let fullName = getMyName("ritesh" , "raj");
// console.log("full Name",fullName);

// tino tarika se function use kiya gya hai 
// first tarika :- Function Declaration:

// function getEXP(x,y){
//     let ans = x**y;
//     return ans;
// }
// console.log(getEXP(2,10));

// second tarika :-Function(variable) Expression:

// let getEXP = function(x,y){
//     let ans = x**y;
//     return ans;
// }
// console.log(getEXP(2,10));

//third tarika:- Arrow Function
let getEXP = (x,y) => {
    let ans = x**y;
    return ans;
}
console.log(getEXP(2,10));
