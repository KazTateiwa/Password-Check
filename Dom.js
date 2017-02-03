var secretNumber = Math.floor(Math.random()*100 + 1);
// generates random number
console.log("Secret Number: " + secretNumber);
// This displays random generated number
var numTries = 0;
// we are setting a number of tries starting at 0
console.log("Number of tries: " + numTries);
// displays numbers of tries
function secretRandom() {
  // this is a function named secretRandom
  var user_input = parseInt(document.getElementById('user_input').value);
  // this converts a string into a number and also links to user_inputs to HTML.

        if (user_input != secretNumber && numTries < 7 && user_input > secretNumber) {
          document.getElementById("results").innerHTML=("Your number is too high, guess again");
          numTries = numTries + 1;
          console.log("Number of tries: " + numTries);
        }
        // This is a logic describing the steps to meet our conditions for the secretNumber game.
        else if (user_input < secretNumber && numTries < 7 && user_input != secretNumber) {
          document.getElementById("results").innerHTML= ("Your number is too low, guess again");
          numTries = numTries + 1;
          console.log("Number of tries: " + numTries);
          // This corresponds to our first condition if it does not meet.
        }
        else if (numTries === 7){
          document.getElementById("results").innerHTML=("You don't have any more tries left")
        } else if (user_input === secretNumber) {
          document.getElementById("results").innerHTML=("You guessed correctly!");
          }

          // This corresponds to our second condition if it does not meet.
}
