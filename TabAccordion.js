const q1 = document.getElementById('q1');
const a1 = document.getElementById('a1');
const btn1 = document.getElementById('btn1');
var click = false;
btn1.addEventListener('click', function() {
    if (click === false) {
        a1.classList.add('answer-show');
        btn1.textContent = 'Close';
        click = true;
    } else {
        a1.classList.remove('answer-show');
        btn1.textContent = 'Open';
        click = false;
    }
});

const q2 = document.getElementById('q2');
const a2 = document.getElementById('a2');
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function() {
    if (click === false) {
        a2.classList.add('answer-show');
        btn2.textContent = 'Close';
        click = true;
    } else {
        a2.classList.remove('answer-show');
        btn2.textContent = 'Open';
        click = false;
    }
});

const q3 = document.getElementById('q3');
const a3 = document.getElementById('a3');
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function() {
    if (click === false) {
        a3.classList.add('answer-show');
        btn3.textContent = 'Close';
        click = true;
    } else {
        a3.classList.remove('answer-show');
        btn3.textContent = 'Open';
        click = false;
    }
});

const q4 = document.getElementById('q4');
const a4 = document.getElementById('a4');
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function() {
    if (click === false) {
        a4.classList.add('answer-show');
        btn4.textContent = 'Close';
        click = true;
    } else {
        a4.classList.remove('answer-show');
        btn4.textContent = 'Open';
        click = false;
    }
});

const q5 = document.getElementById('q5');
const a5 = document.getElementById('a5');
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function() {
    if (click === false) {
        a5.classList.add('answer-show');
        btn5.textContent = 'Close';
        click = true;
    } else {
        a5.classList.remove('answer-show');
        btn5.textContent = 'Open';
        click = false;
    }
});

const q6 = document.getElementById('q6');
const a6 = document.getElementById('a6');
const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', function() {
    if (click === false) {
        a6.classList.add('answer-show');
        btn6.textContent = 'Close';
        click = true;
    } else {
        a6.classList.remove('answer-show');
        btn6.textContent = 'Open';
        click = false;
    }
});

const q7 = document.getElementById('q7');
const a7 = document.getElementById('a7');
const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', function() {
    if (click === false) {
        a7.classList.add('answer-show');
        btn7.textContent = 'Close';
        click = true;
    } else {
        a7.classList.remove('answer-show');
        btn7.textContent = 'Open';
        click = false;
    }
});

const q8 = document.getElementById('q8');
const a8 = document.getElementById('a8');
const btn8 = document.getElementById('btn8');
btn8.addEventListener('click', function() {
    if (click === false) {
        a8.classList.add('answer-show');
        btn8.textContent = 'Close';
        click = true;
    } else {
        a8.classList.remove('answer-show');
        btn8.textContent = 'Open';
        click = false;
    }
});