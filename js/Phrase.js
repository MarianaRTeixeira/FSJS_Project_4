/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
 * Mariana Teixeira */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/**
 * Display phrase on game board
 */
     addPhraseToDisplay () {
        
        const choosenPhrase = document.querySelector('#phrase ul');
        const letters = this.phrase.split('');
       // console.log(letter)
         
        letters.forEach(element => {
           let liElement = document.createElement('li') 
            if (element === ' '){
                liElement.className = `space`;
                liElement.innerHTML = ` `;
            } else {
                liElement.className = `hide letter ${element}`;
                liElement.innerHTML = `${element}`;
            }
            choosenPhrase.appendChild(liElement);
        });
       
        }
    
/**
 * Checks if passed letter is in phrase
 * @param (string) letter - Letter to check
 */
    checkLetter(letter) {
        return this.phrase.includes(letter);
        
    };

/**
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 */
   
    showMatchedLetter(letter) {
        const choosenLetter = document.getElementsByClassName(letter); //select the classname of the letter on DOM
        if (choosenLetter !== ' '){
            for(let i = 0; i < choosenLetter.length; i++){
                let result = choosenLetter[i];  
                result.classList.replace('hide', 'show'); //replace the class hide for show class
             }
            }
    };
}
