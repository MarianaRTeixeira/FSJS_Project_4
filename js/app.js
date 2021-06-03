/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * Mariana Teixeira */

const startBtn = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
let game;

startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame(); 
})

keyboard.addEventListener('click', (e) => {
     if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
         //console.log(e.target)
     }
 })
 
/**
* Exceed credit - create a event listener for the use of the keyboad
*/

document.addEventListener('keyup', (e)=> {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        const targetKey = e.key;
        if(key.textContent === targetKey && key.disabled===false){
            game.handleInteraction(key)
            //console.log('test ok')
        }
    })
})