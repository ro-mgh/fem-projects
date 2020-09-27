
// define a var to store the result

const output = document.querySelector('.output-p')
let result = 0;
let operationInProgress = '';

// support buttons

const clearbtn = document.querySelector('.clear');
clearbtn.addEventListener('click', function () {
    result = 0;
    operationInProgress = '';
    output.innerText = '0';
});

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', function () {
    resultShorten = Math.floor(parseInt(output.innerText)/10) || 0;
    output.innerText = resultShorten;
});

let allNums = document.querySelectorAll('.num');
for (let i = 0; i < allNums.length;i++) {
    allNums[i].addEventListener('click', function() {
        addNumber = parseInt(output.innerText)*10 + parseInt(allNums[i].innerText);
        output.innerText = addNumber;
    })
}

// functions (div, mult, plus, minus)

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', function () {
    operationInProgress += output.innerText + ' / '
    output.innerText = '0';
});

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', function () {
    operationInProgress += output.innerText + ' * '
    output.innerText = '0';
});

const minusBtn = document.querySelector('.minus');
minusBtn.addEventListener('click', function () {
    operationInProgress += output.innerText + ' - '
    output.innerText = '0';
});

const plusBtn = document.querySelector('.plus');
plusBtn.addEventListener('click', function () {
    operationInProgress += output.innerText + ' + '
    output.innerText = '0';
});


// result button 

const resultBtn = document.querySelector('.result');
resultBtn.addEventListener('click', function () {
    let strToCalculate = (operationInProgress + output.innerText)
    let calc = calculator(strToCalculate);
    operationInProgress = '';
    output.innerText = calc;
});


// function for expr calculation

function calculator(expression) {
    let expArr = expression.split(' ');
    let firstEle = parseInt(expArr[0])
    let result = firstEle;
    for (let i = 1; i < expArr.length; i += 2) {
        let nextEle = parseInt(expArr[i + 1]);
        switch (expArr[i]) {
            case '+':
                result += nextEle;
                break;
            case '/':
                result /= nextEle;
                break;
            case '*':
                result *= nextEle;
                break;
            case '-':
                result -= nextEle;
                break;
        }
    }
    return result
}

