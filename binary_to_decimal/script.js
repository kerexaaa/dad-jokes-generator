
function convert() {
    const binaryInput = document.querySelector('[data-binary]')
    const btn = document.querySelector('[data-convert-btn]')
    const decimalInput = document.querySelector('[data-decimal]')

    for(let i = 0; i < binaryInput.value.length; i++) {

        if(binaryInput.value[i] == 0 || binaryInput.value[i] == 1){
            decimalInput.value = parseInt(binaryInput.value, 2)
        }
        else {
            btn.innerHTML = 'Error! Input accepts only 0 or 1'
            decimalInput.value = null;
            binaryInput.value = null;
            return
        }
    }
}