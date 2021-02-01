function getPin() {
    let randomNumber = Math.random() * 10000;
    let pin = (randomNumber + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

// display generated pin
function generatePin() {
    let pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// handle calculate bubble event
let buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    let digit = event.target.innerText;
    if (isNaN(digit)) {
        //handle backspace
        //handle clear
        if (digit === 'C') {
            let clearInput = document.getElementById('typed-pin');
            clearInput.value = '';
        }
    } 
    else {
        let typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

//verify pin
function verifyPin() {
    let pin = document.getElementById('pin').value;
    let typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        // const correctPin = document.getElementById('correct-pin');
        // correctPin.style.display = 'block';
        // const wrong = document.getElementById('incorrect-pin');
        // wrong.style.display = 'none';
        displayMatchResult('block', 'none');
    } 
    else {
        // const correctPin = document.getElementById('correct-pin');
        // correctPin.style.display = 'none';
        // const wrong = document.getElementById('incorrect-pin');
        // wrong.style.display = 'block';
        displayMatchResult('none', 'block');
    }
}

// const submit = document.getElementById('submit');
// submit.addEventListener('click', function(){
//     const typedPin = document.getElementById('typed-pin').value;
//     const generatedPin = document.getElementById('pin').value;
//     if(typedPin === generatedPin){
//         const correctPin = document.getElementById('correct-pin');
//         correctPin.style.display = 'block';
//         const wrong = document.getElementById('incorrect-pin');
//         wrong.style.display = 'none';
//     }
//     else{
//         const wrong = document.getElementById('incorrect-pin');
//         wrong.style.display = 'block';
//         const correctPin = document.getElementById('correct-pin');
//         correctPin.style.display = 'none';
//     }
// })

function displayMatchResult(correctStatus, incorrectStatus) {
    const correctPin = document.getElementById('correct-pin');
    correctPin.style.display = correctStatus;
    const wrong = document.getElementById('incorrect-pin');
    wrong.style.display = incorrectStatus;
}

// const clear = document.getElementById('clear');
// clear.addEventListener('click', function () {
//     let clearInput = document.getElementById('typed-pin');
//     clearInput.value = '';
// })

function backSpace(){
    let backButton = document.getElementById('typed-pin');
    backButton.value = backButton.value.slice(0, - 1);
}