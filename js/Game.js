/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * Mariana Teixeira */


const overlay = document.getElementById('overlay');
const hidden = document.getElementsByClassName('hide');
const lives = document.querySelectorAll('.tries img');
const message = document.getElementById('game-over-message');



class Game {


    constructor() {
        this.missed = 0; // no guesses made at start at game
        this.phrases =  [
            new Phrase ('We were on a break'),
            new Phrase ('Joey doesnt share food'),
            new Phrase ('How you doin'),
            new Phrase ('Pivot'),
            new Phrase ('This is all a moo point')
            ]
        this.activePhrase = null;
    };

    /** STEP 5:
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */

    getRandomPhrase() {
        this.activePhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
        return this.activePhrase;
    };

    
    /** STEP 7
     * Begins game by selecting a random phrase and displaying it to user
     */

    startGame() {
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };


    /**
    *  STEP 9
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    * test on console: game.checkForWin() . Check
    */

    checkForWin() {
        let victory =  true;
            if(hidden.length === 0){
                return victory;
            } else {
                victory = false
            }
        return victory;
    };

    /**
     * STEP 9
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    * test on console: game.removeLife(); . Check --> removes one live at time
    */
    removeLife() {
        lives[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if(this.missed > 4){
            this.gameOver();
        };
    };

    /**
     * STEP 9
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     * test on console:  game.checkForWin() . Check -> true if all the letters are checked and there are at least one life;
     */

    gameOver(gameWon) {
        overlay.style.display = 'flex';

        if(gameWon){
            overlay.className = 'win';
            message.textContent = 'You are a true fan of Friends';
        } else {
            overlay.className = 'lose';
            message.textContent = 'You need to watch all the episodes on Netflix';    
        } 
        this.resetGame()
    };

    /**
    * STEP 11
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    * Test: if the letter in correct the color of the button macthed the class chosen, if the game 
    */

    handleInteraction(button) {
        //console.log(button);
        button.disabled = true; //Disable the selected letter’s onscreen keyboard button.
        if(!this.activePhrase.checkLetter(button.textContent)){
            button.classList.add('wrong');
            this.removeLife();    
             
        } else {
           this.activePhrase.showMatchedLetter(button.textContent);
            button.classList.add('chosen');
            if(this.checkForWin()){
               this.gameOver(true);
            };
            
        }
       
    }
/**
 * Step 12;
 * Reset Game: Remove all `li` elements from the Phrase `ul` element;
 *             Enable all of the onscreen keyboard buttons and update each to use the `key` ;
 *             Reset all of the heart images 
 */

    resetGame() {
        const phrase = document.querySelectorAll('#phrase ul li');
        const qwerty = document.querySelectorAll('.key');
        const heartsRestore = document.querySelectorAll(".tries")
    
        phrase.forEach(li => 
                li.remove());
        
        qwerty.forEach(character => {
                character.classList.remove('wrong');
                character.classList.remove('chosen');
                character.classList.add('key');
                character.disabled = false; 
        });

        heartsRestore.forEach(liveHeart => {
            liveHeart.firstElementChild.src = 'images/liveHeart.png';
        })   
        
    }  
        
}