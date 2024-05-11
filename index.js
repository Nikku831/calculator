const display=document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(input){
    if(input==="AC"){
        display.value="";
    }else{
        var currentValue = display.value;
        display.value = currentValue.slice(0, -1);
    }
}
function calculate(input){
    display.value=eval(display.value);
}
