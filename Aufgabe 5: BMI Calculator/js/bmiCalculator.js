function initBMICalculator() {
    //alert("Let's start coding...");
    setupInputListener();
}

function setupInputListener() {
    var getWeightData = getWeightValue();
    getWeightData.addEventListener("input", updateBmi);
    var getHeightData = getHeightValue();
    getHeightData.addEventListener("input", updateBmi);
}

// bmi = kg / m * m
function updateBmi() {
    var weight = getWeightValue().value;
    var height = getHeightValue().value;

    var bmi = calculateBmi(weight, height);
    var message = setMessage(bmi);
    var color = setColor(bmi);
    
    updateOutput(bmi, message, color);

}

function calculateBmi(weight, height) {
    height /= 100;
    var result = weight / (height * height);
    return result;
}

function setMessage(bmi) {
    var message = "";
    if (bmi < 16) {
        message = "Starkes Untergewicht";
    } else if (bmi >= 16 && bmi <= 16.9) {
        message = "Mäßiges Untergewicht";
    } else if (bmi >= 17 && bmi <= 18.4) {
        message = "Leichtes Untergewicht";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Normalgewicht";
    } else if (bmi >= 25 && bmi <= 29.9) {
        message = "Präadipositas";
    } else if (bmi >= 20 && bmi <= 34.9) {
        message = "Adipositas Grad I";
    } else if (bmi >= 35 && bmi <= 39.9) {
        message = "Adipositas Grad II";
    } else if (bmi >= 40) {
        message = "Adipositas Grad III";
    }
    return message;
}

function setColor(bmi) {
    var color = "";
    if (bmi <= 18.5) {
        color = "#e67b29";
    } else if (bmi > 18.5 && bmi <= 25) {
        color = "#34d100";
    } else {
        color = "#e67b29";
    }
    return color;
}

function updateOutput(bmi, message, color) {
    var bmiText = document.getElementById("bmi_result_value");
    bmiText.innerHTML = bmi.toFixed(2);
    var resultText = document.getElementById("bmi_result_text");
    resultText.innerHTML = message;
    resultText.style.color = color;
}

function getWeightValue() {
    return document.getElementById("input_field_weight");
}

function getHeightValue() {
    return document.getElementById("input_field_height");
}
