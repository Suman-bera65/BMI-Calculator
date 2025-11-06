let a = document.getElementById("weight");//DOM
let b = document.getElementById("height");
let c = document.getElementById("bmi");//object hai c

function calculateBMI() {
    let weight = parseFloat(a.value);
    let height = parseFloat(b.value);

    // Convert height from cm to meters
    height = height / 100;

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        c.value = "Invalid input";// c.value
        return;
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    c.value = bmi.toFixed(2) + " - " + category;
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateBMI();
});
