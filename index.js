// Calculator Program

const diplay = document.getElementById('display');

function appendtoDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Syntax Error";
    }
}