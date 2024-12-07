const resultDiv = document.getElementById("resultDiv");
var equation = "";
const specialCharacters = ["*", "/"];

function addNumber(number) {

    const lastCharacter = equation.slice(-1);

    if (specialCharacters.includes(lastCharacter) && specialCharacters.includes(number)) { 
        deleteNumber();
    }

    if (equation == "" && specialCharacters.includes(number)) {
        
    } else {
        equation = equation + number;
        resultDiv.innerText = equation;
    }

}

function calculate() {
    if (equation != "") {
        const result = eval(equation);
        resultDiv.innerText = result;
        equation = "";
    }
}

function clearScreen() {
    equation = "";
    resultDiv.innerText = "0";
}

function deleteNumber() {
    equation = equation.slice(0, -1);
    if (equation == "") {
        resultDiv.innerText = "0";
    } else {
        resultDiv.innerText = equation;
    }
}