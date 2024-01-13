const read = require('readline-sync');
const {generateRandomNumber, verifyGuess} = require('./adivinanza');

const getNumberFromUser = () => {
    return parseInt(read.question('Ingrese un número: '));
};

const juegoAdivinanza = () => {
    const secretNumber = generateRandomNumber();
    var first = true;

    console.log('Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');

    while (first || guessNumber !== secretNumber) {
        guessNumber = getNumberFromUser();
        verifyGuess(secretNumber, guessNumber);
        first = false;
    };
};

juegoAdivinanza();