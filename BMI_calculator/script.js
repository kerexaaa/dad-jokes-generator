const btnEL = document.getElementById("calcBtn")

function calcBMI() {
    const height = document.getElementById("height").value /100
    const weight = document.getElementById("weight").value
    const bmiResult = document.getElementById("bmi-result")
    const weightCondition = document.getElementById("weight-condition")
    let bmiValue = weight / Math.pow(height, 2)

    bmiResult.value = bmiValue.toFixed(2)

    if(bmiValue.toFixed(0) < 18.5){
        weightCondition.innerText = 'Weight condition:' + ' Underweight'
    }
    else if(bmiValue.toFixed(0) > 18.5 && bmiValue.toFixed(0) < 24.99){
        weightCondition.innerText = 'Weight condition:' + ' Healthy Weight'
    }
    else if(bmiValue.toFixed(0) > 25.0 && bmiValue.toFixed(0) < 29.99){
        weightCondition.innerText = 'Weight condition:' + ' Overweight'
    }
    else {
        weightCondition.innerText = 'Weight condition:' + ' Obesity'
    }
}

btnEL.addEventListener("click", calcBMI)