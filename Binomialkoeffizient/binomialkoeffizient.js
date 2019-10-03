function initBinomialCalculator() {
    setupStartCalculation();
}

function setupStartCalculation() {
    let calculationButton = document.getElementById("calculate_button");
    calculationButton.addEventListener("click", startCalculating);
}

function startCalculating() {
    let inputN = document.getElementById("input_n").value;
    let inputK = document.getElementById("input_k").value;
    
    if (inputN === inputK || inputK == 0) {
        updateResult(1);
    } else if (inputN >= 0 && inputK >= 0) {
        let result = calculateBinomial(inputN, inputK);
        updateResult(result); 
    } else {
        alert("Nur Zahlen >= 0 erlaubt!");
    }
}

function faculty(number) {
    if (number <= 1) return number;
    return number * faculty(number - 1);
}

function calculateBinomial(n, k) {
    let result = faculty(n) / (faculty(k) * faculty(n-k));
    return result;
}

function updateResult(result) {
    let outputResult = document.getElementById("result");
    outputResult.innerHTML = "Ergebnis: " + result;
}
