let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")
let kelvin = document.getElementById("kelvin")



const calcTemp = (event) => {

    const currentValue = +event.target.value

    switch (event.target.name) {
        case "celsius":
            kelvin.value = (currentValue + 273.32).toFixed(1)
            fahrenheit.value = (currentValue * 1.8 + 32).toFixed(1)
            break;
        case "fahrenheit":
            celsius.value = ((currentValue - 32) /1.8).toFixed(1)
            kelvin.value = (((currentValue - 32) /1.8) + 273.32).toFixed(1)
            break;
        case "kelvin":
            celsius.value = (currentValue - 273.32).toFixed(1)
            fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(1)
            break;
    }

}