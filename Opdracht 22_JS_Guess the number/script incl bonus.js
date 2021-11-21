console.log("** Guess the number! BONUS **");
//taking input from user
let yourName = prompt("Welkom! Hoe heet jij?");
console.log("Hoi " + yourName + " Wil je een spelletje spelen?");

let yourMinNumber = parseInt(prompt('Kies een minimumgetal tussen 0 en 25.'));
let yourMaxNumber = parseInt(prompt('Kies een maximumgetal tussen 0 en 25.'));
console.log("jouw minimumgetal is: " + yourMinNumber);
console.log("jouw maximumgetal is: " + yourMaxNumber);

function guessNumber() {
    let myRandomGuess = Math.floor(Math.random() * (yourMaxNumber - yourMinNumber + 1)) + yourMinNumber;//generating a random integer from min en max number 
    let yourGuess = parseInt(prompt(`Noem nu een nummer tussen ${yourMinNumber} en ${yourMaxNumber}.`));
    console.log("ik heb gekozen " + myRandomGuess);//zodat ik kan controleren
    console.log("Jij gokt: " + yourGuess);

    i = 1;
    while (yourGuess !== myRandomGuess && i < 5) {
        if (i === 4) {
            console.log("Helaas! Dit was ook niet juist. Laatste poging!");
            yourGuess = parseInt(prompt('Probeer een ander nummer'));
            console.log("Jij gokt: " + yourGuess);
            i++;
        }
        else {
            console.log("je hebt nog " + (5 - i) + " pogingen.");
            yourGuess = parseInt(prompt('Probeer een ander nummer'));
            console.log("Jij gokt: " + yourGuess);
            i++;
        }
    }
    if (yourGuess === myRandomGuess) {
        console.log("Gefeliciteerd!! Je hebt het goed geraden! Het was inderdaad: " + myRandomGuess + ". Dankjewel voor het spelen. Bye " + yourName + " , tot de volgende keer!");
    } else {
        console.log("Dit was je laatste poging. Helaas pindakaas, mijn gekozen nummer was: " + myRandomGuess);
        console.log("Bye " + yourName + ", tot de volgende keer");
    }
}
guessNumber();