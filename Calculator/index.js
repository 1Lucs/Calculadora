const Display = document.getElementById("display");

function appendToDisplay(input) {
  Display.value += input;
}
function ClearDisplay() {
  Display.value = "";
}
function calculate() {
  try{
    Display.value = eval(Display.value);  
  }
  catch(Error){
    Display.value = "Error";
  }
}
