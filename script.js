
var yourGuess          = document.querySelector(".your-guess");
var guessButton        = document.querySelector(".guess-button");
var clearButton        = document.querySelector(".clear-button");
var yourLastGuess      = document.querySelector(".your-last-guess");
var guessPlaceholder   = document.querySelector(".guess-placeholder");
var highOrLow          = document.querySelector(".high-or-low");
var resetButton        = document.querySelector(".reset-button");
var topThreeInputs     = document.querySelector(".top-three-inputs");
var errorMessage       = document.querySelector(".error-message");

guessButton.addEventListener("click", submitGuess);
clearButton.addEventListener("click", clearGuess);
resetButton.addEventListener("click", resetGame);
yourGuess.addEventListener("keyup", enableButtons);
topThreeInputs.addEventListener("submit", submitGuess);

guessButton.disabled = true;
clearButton.disabled = true;
resetButton.disabled = true;

function enableButtons() {
if (yourGuess.value === '') 
{
  guessButton.disabled = true;
  clearButton.disabled = true;
  resetButton.disabled = true;

} else  {
  guessButton.disabled = false;
  clearButton.disabled = false;
  resetButton.disabled = false;
}}

var correctNumber = randomNumber();

function randomNumber(){
  
  return Math.floor(Math.random()*100) + 1; 
}

console.log(correctNumber);

function submitGuess(event) {
  event.preventDefault()
 var userGuess = parseInt(yourGuess.value); 

 //The prevent default was added so the page would not reload when pressing enter(event)
  

  guessPlaceholder.innerText = userGuess;
 
  if (userGuess < 0 || userGuess >100) {
    errorMessage.style.visibility = "visible"

  }

  else if (userGuess < correctNumber){

    highOrLow.innerText = "That is too low!"
     errorMessage.style.visibility = "hidden"


  }  
  else if (userGuess > correctNumber){

    highOrLow.innerText = "That is too high!"
     errorMessage.style.visibility = "hidden"

  }
  else {
    
    highOrLow.innerText = "BOOM, You got it"
    errorMessage.style.visibility = "hidden"
  }
}


function clearGuess(){
yourGuess.value = ""
}



function resetGame(){ 
  clearGuess();
  correctNumber = randomNumber();
  console.log(correctNumber);
  errorMessage.style.visibility = "hidden"
  guessButton.disabled = true;
  clearButton.disabled = true;
  resetButton.disabled = true;
 

}






