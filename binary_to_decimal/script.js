
function convert() {
    const binaryInput = document.querySelector('[data-binary]')
    const decimalInput = document.querySelector('[data-decimal]')

    for(let i = 0; i < binaryInput.value.length; i++) {

        if(binaryInput.value[i] == 0 || binaryInput.value[i] == 1){
            decimalInput.value = parseInt(binaryInput.value, 2)
            return
        }
        else {
            window.alert('There is an extra character inside the input, the input takes the values 1 or 0!')
            return
        }
    }
}