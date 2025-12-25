const input = document.getElementById("inputbox");
const answer = document.getElementById("answer");

const kg_g = document.getElementById("kg-g");
const g_kg = document.getElementById("g-kg");
const kg_lb = document.getElementById("kg-lb");
const lb_kg = document.getElementById("lb-kg");
const g_lb = document.getElementById("g-lb");
const lb_g = document.getElementById("lb-g");

document.getElementById("convert").onclick = function () {

    let value = Number(input.value);
    let result;

    if (isNaN(value)) {
        answer.textContent = "Enter a valid number";
        return;
    }

    if (kg_g.checked) {
        result = value * 1000;
    }
    else if (g_kg.checked) {
        result = value / 1000;
    }
    else if (kg_lb.checked) {
        result = value * 2.20462;
    }
    else if (lb_kg.checked) {
        result = value / 2.20462;
    }
    else if (g_lb.checked) {
        result = value * 0.00220462;
    }
    else if (lb_g.checked) {
        result = value / 0.00220462;
    }
    else {
        answer.textContent = "Select a Conversion Option!";
        return;
    }

    answer.textContent = result.toFixed(3);
};
