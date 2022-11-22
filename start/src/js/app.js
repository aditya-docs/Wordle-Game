// Write your code here
import { gameOver, gameWon, addTile } from './tiles';
import { getWord, isInDictionary } from './words';

const word = getWord();
console.log(word)

let totalChances = 6;

let inputElement = document.getElementById("userInput")
// inputElement.addEventListener("keyup", (event) => console.log("key was released"))
// inputElement.addEventListener("click", (event) => console.log("clicked input"))
// inputElement.addEventListener("keydown", (event) => console.log("key pressed but not released yet"))

inputElement.addEventListener("keyup", (event) => {
    let keyPressed = event.key;
    let guess = event.target.value;
    if(keyPressed==="Enter" && guess.length===5 && totalChances>0){
        if(guess===word){
            gameWon(guess)
        }
        if(isInDictionary(guess)){
            for(let i=0; i<guess.length; i++){
                if(guess[i]===word[i])
                    addTile(guess[i], "green")
                else if (word.includes(guess[i]))
                    addTile(guess[i], "orange")
                else
                    addTile(guess[i], "grey")
            }
            totalChances--;  // totalChances = totalChances - 1    totalChances -= 1
        }
        event.target.value = ""
    }
    if(totalChances<=0)
        gameOver();
})


//callback example
// makepayment(cardNumber, cvv, expirydate, generateOrderID){
//     ...some code here....
//     ............
//     generateOrderID(uniqueRef, sendConfirmationEmail)
// }

// generateOrderID(uniqueRef, sendConfirmationEmail){
//     ..........
//     sendConfirmationEmail(orderID, buyer)
// }

// sendConfirmationEmail(orderID, buyer){

// }