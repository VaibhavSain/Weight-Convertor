const inpVal = document.querySelector("#inp");
const weightVal = document.querySelector("#weight");
const wrong = document.querySelector(".wrong");


let kg = 0;

function calculate() {
    if (inpVal.value < 8) {
        wrong.style.display = "block";

    }
    else {
        wrong.style.display = "none";
        kg = inpVal.value * 0.45359237;
        weightVal.innerText = `Your Weight In Kg Is: ${kg.toFixed()}`;

    }


}
setInterval(() => {
    calculate();
}, 1000);