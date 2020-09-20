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

                    else if (index === 13) {
                        addToChild = button.firstChild.innerHTML;

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
                if (operationsArray.length === 1) {
                    operationToUse = operationsArray[i];
                    let nextNumber = fullInputWord.substring(0, fullInputWord.indexOf(operationToUse));
                    if (nextNumber !== "") {
                    numbersForEquation.push(nextNumber);
                    }
                    fullInputWord = fullInputWord.slice(fullInputWord.indexOf(operationToUse), fullInputWord.length);
                    nextNumber = fullInputWord.substring(fullInputWord.indexOf(operationToUse), 1);
                    numbersForEquation.push(nextNumber);
                    fullInputWord = fullInputWord.slice(fullInputWord.indexOf(operationToUse) + 1, fullInputWord.length);
                    nextNumber = fullInputWord;
                    if (nextNumber !== "") {
                    numbersForEquation.push(nextNumber);
                    }
                }

                else {
                    operationToUse = operationsArray[i];
                    let nextNumber = fullInputWord.substring(0, fullInputWord.indexOf(operationToUse));
                    if (nextNumber !== "") {
                    numbersForEquation.push(nextNumber);
                    }
                    fullInputWord = fullInputWord.slice(fullInputWord.indexOf(operationToUse), fullInputWord.length);
                    nextNumber = fullInputWord.substring(fullInputWord.indexOf(operationToUse), 1);
                    numbersForEquation.push(nextNumber);
                    fullInputWord = fullInputWord.slice(fullInputWord.indexOf(operationToUse) + 1, fullInputWord.length);
                    nextNumber = fullInputWord;

                    if (i === operationsArray.length - 1 && nextNumber !== "") {
                        numbersForEquation.push(nextNumber);
                        console.log(numbersForEquation);
                    }
                }
            }

            if (numbersForEquation.length === 0) {
                numbersForEquation.push(fullInputWord);
            }

            numbersForEquation = pemdas(numbersForEquation);

            operationsArray = [];
            
            numbersForEquation.forEach(function(item, index) {
                if (item === "+" || item === "-" || item === "*" || item === "/") {
                    operationsArray.push(item);
                }
            });
            
            operationToUse = operationsArray[0];
                let operationIndex = numbersForEquation.indexOf(operationToUse);
                let allOperatorCheck = true;

                for (i = 0; i < numbersForEquation.length - 1; i++) {
                    if (numbersForEquation[i] !== "+" && numbersForEquation[i] !== "-" &&
                    numbersForEquation[i] !== "*" && numbersForEquation[i] !== "/" && numbersForEquation[i] !== ".") {
                        allOperatorCheck = false;
                    }
                }

                if (allOperatorCheck) {
                    numbersForEquation = [];
                }

                while (numbersForEquation.length > 1) {
                    if (parseFloat(numbersForEquation[operationIndex - 1]) % 1 !== 0 ||
                    parseFloat(numbersForEquation[operationIndex + 1]) % 1 !== 0) {
                        answer = operate(operationToUse, parseFloat(numbersForEquation[operationIndex - 1]),
                            parseFloat(numbersForEquation[operationIndex + 1])).toFixed(2);
                            
                            if (isNaN(parseFloat(answer))) {
                                answer = "ERROR";
                            }

                            screen.removeChild(screen.firstChild);
                            let newChild = document.createElement("h2");
                            newChild.innerHTML = answer;
                            screen.appendChild(newChild);
                    }

                    else {
                        answer = operate(operationToUse, parseInt(numbersForEquation[operationIndex - 1]),
                            parseInt(numbersForEquation[operationIndex + 1]));

                            if (isNaN(parseInt(answer))) {
                                answer = "ERROR";
                            }

                            screen.removeChild(screen.firstChild);
                            let newChild = document.createElement("h2");
                            newChild.innerHTML = answer;
                            screen.appendChild(newChild);
                    }

                    if (isNaN(parseFloat(numbersForEquation[operationIndex - 1])) ||
                    isNaN(parseFloat(numbersForEquation[operationIndex + 1])) ||
                    isNaN(parseInt(numbersForEquation[operationIndex - 1])) ||
                    isNaN(parseInt(numbersForEquation[operationIndex + 1]))) {
                        answer = "ERROR";

                        screen.removeChild(screen.firstChild);
                            let newChild = document.createElement("h2");
                            newChild.innerHTML = answer;
                            screen.appendChild(newChild);
                    }

                    for (i = 0; i <= operationIndex + 1; i++) {
                        if (operationIndex + 1 > 1) {
                        numbersForEquation.shift();
                        }
                    }

                    let changedOperation = false;

                    console.log(operationToUse);

                    for (i = 0; i < numbersForEquation.length - 1; i++) {
                        if (numbersForEquation[i] === "+" || numbersForEquation[i] === "-" ||
                        numbersForEquation[i] === "*" || numbersForEquation[i] === "/") {
                            if (!(changedOperation)) {
                                if (answer !== "ERROR") {
                                operationToUse = numbersForEquation[i];
                                changedOperation = true;
                                numbersForEquation.unshift(answer);
                                }

                                else {
                                    if (numbersForEquation.length > 0) {
                                    numbersForEquation = [answer];

                                    screen.removeChild(screen.firstChild);
                            let newChild = document.createElement("h2");
                            newChild.innerHTML = answer;
                            screen.appendChild(newChild);
                                    }
                                }
                            }
                        }
                    }

                    console.log("end arr " + numbersForEquation);
                }
            }
    });
}

function pemdas(arr) {
    let pemdasArray = arr;
    let finished = false;
    let switchHappened = false;

    console.log("in " + arr);
    while (!(finished)) {
        if (pemdasArray.length > 1) {
            switchHappened = true;

            while(switchHappened) {
                let compareArray = pemdasArray;

                for (i = 0; i < pemdasArray.length - 1; i++) {
                    for (j = i + 1; j < pemdasArray.length - 1; j++) {
                        if (j > i + 1) {
                            break;
                        }

            if (pemdasArray[i] === "-" && i === 0) {
                if (pemdasArray[j] !== "-") {
                pemdasArray[j] = pemdasArray[i] + pemdasArray[j];
                            pemdasArray.shift();
                            console.log("first negative " + pemdasArray);
                }

                else {
                    pemdasArray = ["ERROR"];
                }
            }

            if (pemdasArray[i] === "+" || pemdasArray[i] === "-" || pemdasArray[i] === "*" || pemdasArray[i] === "/") {
                if (pemdasArray[j] === "-" && i > 0) {
                    if (j + 1 === pemdasArray.length - 1) {
                        pemdasArray[j] = pemdasArray[j] + pemdasArray[j + 1];
                        pemdasArray.pop();

                        console.log("negative at end " + pemdasArray);
                    }

                    
                    if (pemdasArray[i] === "-" && pemdasArray[j] === "-" && j === i + 1) {
                        pemdasArray[j + 1] = pemdasArray[j] + pemdasArray[j + 1];
                        pemdasArray.splice(j, 1);

                        console.log("double neg " + pemdasArray);
                    }
                        

                    else {
                        if (j + 1 < pemdasArray.length - 1) {
                        pemdasArray[j] = pemdasArray[j] + pemdasArray[j + 1];
                        pemdasArray.splice(j + 1, 1);
                        }

                        console.log("negative in middle of array " + pemdasArray);
                        }
                    }
                }
            }
        }

    if (compareArray === pemdasArray) {
        switchHappened = false;
        console.log("finished negatives " + pemdasArray);
        console.log("finished negatives " + pemdasArray[0]);
        console.log("finished negatives " + pemdasArray[1]);
    }
}
        }

        if (pemdasArray.length === 1) {
            console.log("single value " + pemdasArray[0]);
        }

        if (pemdasArray.length === 2) {
            if (pemdasArray[0] === "*" || pemdasArray[0] === "/" || pemdasArray[0] === "+") {
                pemdasArray.unshift(0);
                console.log("two val " + pemdasArray);
            }

            if (pemdasArray[0] === "-") {
                if (pemdasArray[1] !== "*" && pemdasArray[1] !== "/" &&
                    pemdasArray[1] !== "+" && pemdasArray[1] !== "-" && pemdasArray[1] !== ".") {
                        pemdasArray[0] = pemdasArray[0] + pemdasArray[1];                  
                        pemdasArray.pop();
                        console.log("two val " + pemdasArray);
            }

            if (pemdasArray[1] === ".") {
                pemdasArray[0] = pemdasArray[0] + pemdasArray[1] + "0";
                pemdasArray.pop();
                console.log("two val " + pemdasArray);
            }
        }

        if (pemdasArray[1] === "-") {
            pemdasArray = ["ERROR"];
            console.log("ERROR");
        }
        
    }

        if (pemdasArray.length >= 3) {
            for (i = 0; i < pemdasArray.length - 1; i++) {
                for (j = i + 1; j < pemdasArray.length - 1; j++) {
                        if (pemdasArray[j] === "*" || pemdasArray[j] === "/") {
                            if (pemdasArray[i] === "+" || pemdasArray[i] === "-") {
                                if (parseFloat(pemdasArray[j - 1]) % 1 !== 0 || parseFloat(pemdasArray[j + 1]) % 1 !== 0) {
                                pemdasArray[j + 1] = operate(pemdasArray[j], parseFloat(pemdasArray[j - 1]), parseFloat(pemdasArray[j + 1])).toFixed(2);
                                }

                                else {
                                    pemdasArray[j + 1] = operate(pemdasArray[j], parseInt(pemdasArray[j - 1]), parseInt(pemdasArray[j + 1]));
                                }
                                pemdasArray.splice(j - 1, 2);
                                j = i + 1;
                                
                                switchHappened = true;

                                console.log("after replace " + pemdasArray);
                            }
                        }

                        if (!(switchHappened) || i === pemdasArray.length) {
                            finished = true;
                        }

                        switchHappened = false;
                    }
                }

                if (pemdasArray.length === 3) {
                    if (pemdasArray[0] === "-" || pemdasArray[0] === "+" ||
                    pemdasArray[0] === "*" || pemdasArray[0] === "/") {
                        if (!(isNaN(pemdasArray[pemdasArray.length]))) {
                            pemdasArray = ["ERROR"];
                        }
                    }
                }
            }

        else {
            finished = true;
            switchHappened = true;
        }
    }

    if (pemdasArray[0] === "+" || pemdasArray[0] === "-" ||
    pemdasArray[0] === "*" || pemdasArray[0] === "/" || pemdasArray[0] === "." || pemdasArray.length === 0) {
        pemdasArray = ["ERROR"];
    }

    if (pemdasArray.length === 0) {
        pemdasArray = ["ERROR"];
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