
let count = 0;

const counterText = document.querySelector('#counter');
const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');

function setCounterDisplay() {
    counterText.textContent = count;

}

function increase(){
count++
setCounterDisplay();
}

function decrease() {
    count--
    setCounterDisplay();
}

function reset() {
    count = 0;
    setCounterDisplay();
    alert('You reset the count!');
}

plusBtn.addEventListener('click', increase);
minusBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);


// Theme Button Section //

const themeBtns = document.querySelectorAll('.theme-buttons');

function selectTheme() {
    const theme = e.target.textContent

    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
    
    const buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', selectTheme)
}