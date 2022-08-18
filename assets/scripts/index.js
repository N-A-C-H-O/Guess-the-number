const getRndInteger = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let randomNumber = getRndInteger(1,10);

let attempts = 10;

displayAttemps.innerHTML = attempts;

inputNumber.focus();

function resetGame(e) {
    e.preventDefault();
    randomNumber = getRndInteger(1,100);
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
        Swal.fire({
            icon: 'success',
            title: 'Correcto! 🏆',
            text: 'Wow! lo haces bien! 👏',
        });
        inputNumber.style.display = 'none';
        title.style.display = 'none';
        btnCheck.style.display = 'none';
        btnReset.style.display = 'inline';
        displayNumber.innerHTML = randomNumber;
    }
    else if (inputNumber.value != randomNumber) {
        if (inputNumber.value > randomNumber) {
            Swal.fire({
                icon: 'error',
                title: 'Te pasaste! 😁',
                text: 'Prueba ingresando un número más pequeño',
            });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Te falta! 😁',
                text: 'Prueba ingresando un número más grande',
            });
        }
    }
    attempts--;
    displayAttemps.innerHTML = attempts;
    if (attempts < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tienes más intentos! 😕',
        })
        inputNumber.style.display = 'none';
        title.style.display = 'none';
        btnCheck.style.display = 'none';
        btnReset.style.display = 'inline';
        displayNumber.innerHTML = randomNumber;
    }
})
