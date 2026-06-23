const display = document.getElementById("display");

function appendValue(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {

  const allowedKeys = "0123456789+-*/.%";

  if(allowedKeys.includes(e.key)){
    display.value += e.key;
  }

  if(e.key === "Enter"){
    calculate();
  }

  if(e.key === "Backspace"){
    display.value = display.value.slice(0, -1);
  }

  if(e.key === "Escape"){
    clearDisplay();
  }
});