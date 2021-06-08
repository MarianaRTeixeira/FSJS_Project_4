/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * Mariana Teixeira */

const startBtn = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
let game;

/* 
* Step 8 - Start Game
*/

startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame(); 
})


/**
 * STEP 10
 * Add an "click" event listener to each of the onscreen keyboard buttons
 */

 keyboard.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
       game.handleInteraction(e.target);
        //console.log(e.target)
    }
})
