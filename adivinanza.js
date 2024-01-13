const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verifyGuess = (secretNumber, guessNumber) => {
    if (guessNumber === secretNumber) {
        console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (guessNumber > secretNumber) {
        console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
        console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
};

module.exports = {
    generateRandomNumber,
    verifyGuess
};