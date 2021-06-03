/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * Mariana Teixeira */

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
    }
   
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
       getRandomPhrase() {
           this.activePhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
           return this.activePhrase;
       };
    
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
   
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        
        overlay.classList.remove('win');
        overlay.classList.remove('lose');
        
        this.activePhrase = this.getRandomPhrase(); //calls random phrase on the activephrase
        this.activePhrase.addPhraseToDisplay(); //add the phrase to the display
    };

    /**
     * HANDLEINTERACTION
     */
    
     handleInteraction(button){

        button.disabled = true;
        if(game.activePhrase.checkLetter(button.textContent)){
            button.classList.add('chosen');
            // button.style.backgroundColor = 'green';
            // button.style.color = 'white';
            game.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()){
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            game.removeLife();
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    *  */ 

    checkForWin() {
        const hidden = document.getElementsByClassName('hide');
        const gameWon = hidden.length === 0 ? true : false; //if hidden.length  is 0 return true (game has been won) 
        return gameWon; 
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */

    removeLife() {
        document.querySelectorAll('.tries img')[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if(this.missed === 5){
            this.gameOver();
        };
    }
    
    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */

    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex'  
        const message = document.getElementById('game-over-message');
       
        if(gameWon){
            overlay.className = 'win';
            //overlay.style.display = 'flex';
            message.textContent = 'You are a true fan of Friends';
            this.resetGame();
        } else {
            overlay.className = 'lose';
            message.textContent =  'You need to watch all the episodes on Netflix';
            //overlay.style.display = 'flex';
          this.resetGame();
        } 
       
    };

    /**
     * RESET GAME: remove li, remove classes 'wrong' and 'chosen', add the love hearts
     */

    resetGame() {
        const phrase = document.querySelectorAll('#phrase ul li');
        const qwerty = document.querySelectorAll('.key');
        const heartsRestore = document.querySelectorAll(".tries")

        phrase.forEach(li => 
                li.remove());
        
        qwerty.forEach(character => {
                character.classList.remove('wrong','chosen');
                character.disabled = false; 
        })

        heartsRestore.forEach(liveHeart => {
            liveHeart.firstElementChild.src = 'images/liveHeart.png';
        })   
    }  
};



