let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let randomInteger = function (min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
};

let guessTheNumber = function (generateRandomInteger) {
    const randomInteger1 = generateRandomInteger;
    let checkQuizInput = function () {
        const number = +prompt("Угадай число от 1 до 100");
        if (number === 0) {
            alert("Игра окончена");
            return;
        }
        if (!isNumber(number)) {
            alert("Вы ввели не число");
        }
        else if (number > randomInteger1) {
            alert("Загаданное число меньше, введите новое число");
        }
        else if (number < randomInteger1) {
            alert("Загаданное число больше, введите новое число");
        }
        else if (number == randomInteger1) {
            confirm("Вы угадали число");
            return;

        }
        checkQuizInput();
    }
    return checkQuizInput;
}

let quiz = guessTheNumber(randomInteger(1, 100));
quiz();
