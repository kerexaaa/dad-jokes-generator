function calcPayment() {
    const loanAmountValue = document.getElementById("loan-amount").value
    const interestRateValue = document.getElementById("interest-rate").value
    const monthsToPayValue = document.getElementById("months-to-pay").value

    interest = (loanAmountValue * interestRateValue * 0.01) / monthsToPayValue

    monthlyPayment = (loanAmountValue / monthsToPayValue + interest)

    document.getElementById("monthly-payment").innerHTML = `Monthly payment: ${monthlyPayment.toFixed(1)}$`
}