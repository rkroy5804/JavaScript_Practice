// spread method

// let src = {
//     age:12,
//     wt:3,
//     ht:120,
// };

// let dest ={...src};

// src.age = 90; // agr update krna ho ya pta krna ho ki cloning hua h ya copy hua hai

// console.log("src: ",src);
// console.log("dest: ",dest);

// assign method

// let src = {
//     age:12,
//     wt:3,
//     ht:120,
// };

// let dest = Object.assign({}, src);

// console.log("src: ",src);
// console.log("dest: ",dest);


// Iteration method

let src = {
    age:12,
    wt:3,
    ht:120,
};

let dest = {};
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    // insert newkey and value in dest and create a clone
    dest[newKey] = newValue;
}

console.log("src: ",src);
console.log("dest: ",dest);