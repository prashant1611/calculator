// here we take data from the html 
/* let h3 = document.createElement('h3');
let calculator = document.querySelector(".calculator");
calculator.appendChild(h3)
function myFunction(){
let num1 = Number(document.getElementById("num1").value);
h3.textContent=num1+num1;
console.log(h3);
} */

//now we make a calculator
let cal  ='';

function showValue(value){
    cal += value;
    updateDisplay();    
}



function clearDisplay(){
    cal = '';
    updateDisplay();
}

function result(){
    var result = eval(cal);
    cal = result;
    updateDisplay();
}

function updateDisplay(){
    let display = document.getElementById("display");
    display.value=cal;
}

