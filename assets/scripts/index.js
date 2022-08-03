const getRndInteger = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let randomNumber = getRndInteger(1,10);

let attempts = 10;

displayAttemps.innerHTML = attempts;

inputNumber.focus();

function resetGame(e) {
    e.preventDefault();
    randomNumber = getRndInteger(1,10);
    attempts = 10;
    displayAttemps.innerHTML = attempts;
    inputNumber.style.display = 'inline';
    title.style.display = 'block';
    btnCheck.style.display = 'inline';
    btnReset.style.display = 'none';
    displayNumber.innerHTML = '?';
}

btnReset.addEventListener('click',resetGame);

btnCheck.addEventListener('click',(e) => {
    e.preventDefault();
    if (inputNumber.value == randomNumber) {
        alert('Correcto');
        inputNumber.style.display = 'none';
        title.style.display = 'none';
        btnCheck.style.display = 'none';
        btnReset.style.display = 'inline';
        displayNumber.innerHTML = randomNumber;
    }
    else if (inputNumber.value != randomNumber) {
        if (inputNumber.value > randomNumber) {
            alert('Fallaste, tu número es más grande');
        }
        else {
            alert('Fallaste, tu número es más chico');
        }
    }
    attempts--;
    displayAttemps.innerHTML = attempts;
    if (attempts < 1) {
        alert('No tienes más intentos');
        inputNumber.style.display = 'none';
        title.style.display = 'none';
        btnCheck.style.display = 'none';
        btnReset.style.display = 'inline';
        displayNumber.innerHTML = randomNumber;
    }
})
