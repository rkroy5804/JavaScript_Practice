function changeText(){
    let fheading = document.getElementById('fheading');
    fheading.textContent = "Hello Vardhan"
}

let fheading = document.getElementById('fheading');
fheading.addEventListener('click', changeText);
// fheading.removeEventListener('click', changeText); // remove krna ho to same reference ko use krege
