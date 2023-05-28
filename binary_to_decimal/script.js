
function convert() {
    const binaryInput = document.querySelector('[data-binary]')
    const btn = document.querySelector('[data-convert-btn]')
    const decimalInput = document.querySelector('[data-decimal]')
    const error = document.querySelector('[data-error]')

    for(let i = 0; i < binaryInput.value.length; i++) {

        if(binaryInput.value[i] == 0 || binaryInput.value[i] == 1){
            decimalInput.value = parseInt(binaryInput.value, 2)
        }
        else {
            window.alert('There is an extra character inside the input, the input takes the values 1 or 0!')
            decimalInput.value = null;
            binaryInput.value = null;
            return
        }
    }
}