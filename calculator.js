let started = false;
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let operate = (operator, a, b) => {
    let answer;

    switch (operator) {
        case "+": answer = add(a, b);
        break;

        case "-": answer = subtract(a, b);
        break;

        case "*": answer = multiply(a, b);
        break;

        case "/": answer = divide(a, b);
        break;
    }

    if (parseFloat(answer % 1 !== 0)) {
        answer = answer.toFixed(2);
    }

    return answer;
};

function arrangeButtons() {
    const buttonGrid = document.querySelector("#button-grid");
    const buttons = buttonGrid.children;
    let buttonsArray = Array.from(buttons);

    buttonsArray.forEach(function(button, index) {
        assignButtonLocation(button, index);
    });

    const clrButton = document.querySelector("#clear-button");

    clearButton(clrButton);
}

function assignButtonLocation(button, index) {
    const h3Text = document.createElement("h3");
    h3Text.innerHTML = index;

    switch (index) {
        case 0:
            button.style.setProperty("grid-column-start", 3);
            button.style.setProperty("grid-column-end", 3);
            button.style.setProperty("grid-row-start", 7);
            button.style.setProperty("grid-row-end", 7);
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 1:
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 2:
            button.style.setProperty("grid-column-start", 3);
            button.style.setProperty("grid-column-end", 3);
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 3:
            button.style.setProperty("grid-column-start", 5);
            button.style.setProperty("grid-column-end", 5);
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 4:
            button.style.setProperty("grid-row-start", 3);
            button.style.setProperty("grid-row-end", 3);
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 5:
            button.style.setProperty("grid-column-start", 3);
            button.style.setProperty("grid-column-end", 3);
            button.style.setProperty("grid-row-start", 3);
            button.style.setProperty("grid-row-end", 3);
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 6:
            button.style.setProperty("grid-column-start", 5);
            button.style.setProperty("grid-column-end", 5);
            button.style.setProperty("grid-row-start", 3);
            button.style.setProperty("grid-row-end", 3);
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 7:
            button.style.setProperty("grid-row-start", 5);
            button.style.setProperty("grid-row-end", 5);
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 8:
            button.style.setProperty("grid-column-start", 3);
            button.style.setProperty("grid-column-end", 3);
            button.style.setProperty("grid-row-start", 5);
            button.style.setProperty("grid-row-end", 5);
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 9:
            button.style.setProperty("grid-column-start", 5);
            button.style.setProperty("grid-column-end", 5);
            button.style.setProperty("grid-row-start", 5);
            button.style.setProperty("grid-row-end", 5);
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 10:
            button.style.setProperty("grid-row-start", 7);
            button.style.setProperty("grid-row-end", 7);
            h3Text.innerHTML = ".";
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 11:
            button.style.setProperty("grid-column-start", 5);
            button.style.setProperty("grid-column-end", 5);
            button.style.setProperty("grid-row-start", 7);
            button.style.setProperty("grid-row-end", 7);
            h3Text.innerHTML = "=";
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 12:
            button.style.setProperty("grid-column-start", 7);
            button.style.setProperty("grid-column-end", 7);
            h3Text.innerHTML = "+";
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 13:
            button.style.setProperty("grid-column-start", 7);
            button.style.setProperty("grid-column-end", 7);
            button.style.setProperty("grid-row-start", 3);
            button.style.setProperty("grid-row-end", 3);
            h3Text.innerHTML = "-";
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 14:
            button.style.setProperty("grid-column-start", 7);
            button.style.setProperty("grid-column-end", 7);
            button.style.setProperty("grid-row-start", 5);
            button.style.setProperty("grid-row-end", 5);
            h3Text.innerHTML = "*";
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;

        case 15:
            button.style.setProperty("grid-column-start", 7);
            button.style.setProperty("grid-column-end", 7);
            button.style.setProperty("grid-row-start", 7);
            button.style.setProperty("grid-row-end", 7);
            h3Text.innerHTML = "/";
            button.appendChild(h3Text);
            wireButtons(button, index);
            break;
    }
}

function wireButtons(button, index) {
    button.addEventListener("click", function() {
        const screen = document.querySelector("#screen");
        
        if (index !== 11) {
            if (screen.children.length === 0) {
                const newChild = document.createElement("h2");

                if (index < 10) {
                    newChild.innerHTML = index;
                    screen.appendChild(newChild);
                }

                else {
                    newChild.innerHTML = button.firstChild.innerHTML;
                    screen.appendChild(newChild);
                }

                started = true;
            }

            else {
                if (screen.firstChild.innerHTML === "Default") {
                    screen.removeChild(screen.firstChild);

                    const newChild = document.createElement("h2");
                    newChild.innerHTML = index;

                    if (index < 10) {
                        newChild.innerHTML = index;
                        screen.appendChild(newChild);
                    }
    
                    else {
                        newChild.innerHTML = button.firstChild.innerHTML;
                        screen.appendChild(newChild);
                    }

                    screen.appendChild(newChild);

                    started = true;
                }

                else {
                    let oldChild = screen.firstChild;
                    let addToChild;

                    if (index < 10) {
                        addToChild = index;

                        if (!(started)) {
                            oldChild.innerHTML = addToChild;
                        }

                        else {
                            oldChild.innerHTML += addToChild;
                        }
                    }
    
                    else {
                        addToChild = button.firstChild.innerHTML;
                        oldChild.innerHTML += addToChild;
                    }

                    started = true;
                }
            }
        }

        else {
            let numbersForEquation = [];
            let fullInputWord = screen.firstChild.innerHTML;
            let fullWordArray = Array.from(fullInputWord);
            let operationsArray = [];
            let operationToUse = "";
            let answer;

            fullWordArray.forEach(function(item, index) {
                if (item === "+" || item === "-" || item === "*" || item === "/") {
                    operationsArray.push(item);
                }
            });

            for (i = 0; i < operationsArray.length; i++) {
                if (i === operationsArray.length - 1 && operationsArray.length > 1) {
                    operationToUse = operationsArray[i];
                    let nextNumber = fullInputWord.substring(0, fullInputWord.indexOf(operationToUse));
                    numbersForEquation.push(nextNumber);
                    fullInputWord = fullInputWord.slice(fullInputWord.indexOf(operationToUse), fullInputWord.length);
                    nextNumber = fullInputWord.substring(fullInputWord.indexOf(operationToUse), 1);
                    numbersForEquation.push(nextNumber);
                    fullInputWord = fullInputWord.slice(fullInputWord.indexOf(operationToUse) + 1, fullInputWord.length);
                    nextNumber = fullInputWord;
                    numbersForEquation.push(nextNumber);
                }

                else {
                    operationToUse = operationsArray[i];
                    let nextNumber = fullInputWord.substring(0, fullInputWord.indexOf(operationToUse));
                    numbersForEquation.push(nextNumber);
                    fullInputWord = fullInputWord.slice(fullInputWord.indexOf(operationToUse), fullInputWord.length);
                    nextNumber = fullInputWord.substring(fullInputWord.indexOf(operationToUse), 1);
                    numbersForEquation.push(nextNumber);
                    fullInputWord = fullInputWord.slice(fullInputWord.indexOf(operationToUse) + 1, fullInputWord.length);
                    nextNumber = fullInputWord;

                    if (i === operationsArray.length - 1) {
                        numbersForEquation.push(nextNumber);
                    }
                    
                    else {
                        fullInputWord = fullInputWord.slice(fullInputWord.indexOf(operationToUse) + 1, fullInputWord.length);
                        nextNumber = fullInputWord.substring(0, operationsArray[i + 1].length);
                        numbersForEquation.push(nextNumber);
                    }
                }
            }

            numbersForEquation = pemdas(numbersForEquation);
                let operationIndex = numbersForEquation.indexOf(operationToUse);

                console.log(numbersForEquation);
                console.log("A " + numbersForEquation[operationIndex - 1]);
                console.log("B " + numbersForEquation[operationIndex + 1]);

                if (parseFloat(numbersForEquation[operationIndex - 1]) % 1 !== 0) {
                    answer = operate(operationToUse, parseFloat(numbersForEquation[operationIndex - 1]),
                        parseFloat(numbersForEquation[operationIndex + 1]));

                        

                    for (i = 0; i <= operationIndex; i++) {
                        numbersForEquation.shift();
                        numbersForEquation.unshift(answer.toFixed(2));
                        console.log(numbersForEquation);
                    }
                }

                else {
                    answer = operate(operationToUse, parseInt(numbersForEquation[operationIndex - 1]),
                        parseInt(numbersForEquation[operationIndex + 1]));

                        for (i = 0; i < operationIndex; i++) {
                            numbersForEquation.shift();
                            numbersForEquation.unshift(answer);
                            console.log(numbersForEquation);
                        }
                }
                console.log(operationToUse);
                console.log(answer);
        }
    });
}

function pemdas(arr) {
    let pemdasArray = arr;
    let tempBefore;
    let temp;
    let tempAfter;
    let finished = false;
    let switchHappened = false;

    console.log("in " + arr);
    while (!(finished)) {
        if (pemdasArray.length > 3) {
            for (i = 0; i < pemdasArray.length - 1; i++) {
                for (j = i + 1; j < pemdasArray.length - 1; j++) {
                    if (pemdasArray[i] === "+" || pemdasArray[i] === "-" || pemdasArray[i] === "*" || pemdasArray[i] === "/") {
                        if (pemdasArray[j] === "*" || pemdasArray[j] === "/") {
                            if (pemdasArray[i] === "+" || pemdasArray[i] === "-") {
                                tempBefore = pemdasArray[j - 1];
                                temp = pemdasArray[j];
                                tempAfter = pemdasArray[j + 1];

                                pemdasArray[j - 1] = pemdasArray[i - 1];
                                pemdasArray[j] = pemdasArray[i];
                                pemdasArray[j + 1] = pemdasArray[i + 1];

                                pemdasArray[i - 1] = tempBefore;
                                pemdasArray[i] = temp;
                                pemdasArray[i + 1] = tempAfter;

                                switchHappened = true;
                            }
                        }

                        if (!(switchHappened) || i === pemdasArray.length) {
                            finished = true;
                        }

                        switchHappened = false;
                    }
                }
            }
        }

        else {
            finished = true;
            switchHappened = true;
        }
    }

    console.log("out " + pemdasArray);
    return pemdasArray;
}

function clearButton(button) {
    button.addEventListener("click", function() {
        let screen = document.querySelector("#screen");
        screen.removeChild(screen.firstChild);

        let newChild = document.createElement("h2");
        newChild.innerHTML = 0;
        screen.appendChild(newChild);

        started = false;
    });
}

function clearDefault() {
    const screen = document.querySelector("#screen");
    screen.removeChild(screen.firstChild);
    
    let newChild = document.createElement("h2");
    newChild.innerHTML = 0;
    screen.appendChild(newChild);
}

arrangeButtons();
clearDefault();