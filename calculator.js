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

    return answer;
};

function arrangeButtons() {
    const buttonGrid = document.querySelector("#button-grid");
    const buttons = buttonGrid.children;
    let buttonsArray = Array.from(buttons);

    buttonsArray.forEach(function(button, index) {
        assignButtonLocation(button, index);
    });
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
            break;

        case 1:
            button.appendChild(h3Text);
            break;

        case 2:
            button.style.setProperty("grid-column-start", 3);
            button.style.setProperty("grid-column-end", 3);
            button.appendChild(h3Text);
            break;

        case 3:
            button.style.setProperty("grid-column-start", 5);
            button.style.setProperty("grid-column-end", 5);
            button.appendChild(h3Text);
            break;

        case 4:
            button.style.setProperty("grid-row-start", 3);
            button.style.setProperty("grid-row-end", 3);
            button.appendChild(h3Text);
            break;

        case 5:
            button.style.setProperty("grid-column-start", 3);
            button.style.setProperty("grid-column-end", 3);
            button.style.setProperty("grid-row-start", 3);
            button.style.setProperty("grid-row-end", 3);
            button.appendChild(h3Text);
            break;

        case 6:
            button.style.setProperty("grid-column-start", 5);
            button.style.setProperty("grid-column-end", 5);
            button.style.setProperty("grid-row-start", 3);
            button.style.setProperty("grid-row-end", 3);
            button.appendChild(h3Text);
            break;

        case 7:
            button.style.setProperty("grid-row-start", 5);
            button.style.setProperty("grid-row-end", 5);
            button.appendChild(h3Text);
            break;

        case 8:
            button.style.setProperty("grid-column-start", 3);
            button.style.setProperty("grid-column-end", 3);
            button.style.setProperty("grid-row-start", 5);
            button.style.setProperty("grid-row-end", 5);
            button.appendChild(h3Text);
            break;

        case 9:
            button.style.setProperty("grid-column-start", 5);
            button.style.setProperty("grid-column-end", 5);
            button.style.setProperty("grid-row-start", 5);
            button.style.setProperty("grid-row-end", 5);
            button.appendChild(h3Text);
            break;

        case 10:
            button.style.setProperty("grid-row-start", 7);
            button.style.setProperty("grid-row-end", 7);
            h3Text.innerHTML = ".";
            button.appendChild(h3Text);
            break;

        case 11:
            button.style.setProperty("grid-column-start", 5);
            button.style.setProperty("grid-column-end", 5);
            button.style.setProperty("grid-row-start", 7);
            button.style.setProperty("grid-row-end", 7);
            h3Text.innerHTML = "=";
            button.appendChild(h3Text);
            break;

        case 12:
            button.style.setProperty("grid-column-start", 7);
            button.style.setProperty("grid-column-end", 7);
            h3Text.innerHTML = "+";
            button.appendChild(h3Text);
            break;

        case 13:
            button.style.setProperty("grid-column-start", 7);
            button.style.setProperty("grid-column-end", 7);
            button.style.setProperty("grid-row-start", 3);
            button.style.setProperty("grid-row-end", 3);
            h3Text.innerHTML = "-";
            button.appendChild(h3Text);
            break;

        case 14:
            button.style.setProperty("grid-column-start", 7);
            button.style.setProperty("grid-column-end", 7);
            button.style.setProperty("grid-row-start", 5);
            button.style.setProperty("grid-row-end", 5);
            h3Text.innerHTML = "*";
            button.appendChild(h3Text);
            break;

        case 15:
            button.style.setProperty("grid-column-start", 7);
            button.style.setProperty("grid-column-end", 7);
            button.style.setProperty("grid-row-start", 7);
            button.style.setProperty("grid-row-end", 7);
            h3Text.innerHTML = "/";
            button.appendChild(h3Text);
            break;
    }
}

arrangeButtons();

console.log(operate("/", 2, 3));