function calculateLoan() {
   loanAmountValue = document.getElementById
loanAmountValue = document.getElementById
("loan-amount").value

interesRateValue = document.getElementById
("interest-amount").value
monthsToPayValue = document.getElementById
("months-to-pay").value

interest = (loanAmountValue *
     (interesRateValue * 0.01)) / monthsToPayValue

     monthlyPayment = 
     (loanAmountValue / monthsToPayValue + interest).toFixed(2)

     document.getElementById("payment").innerHTML = 
     `Monthly Payment: ${monthlyPayment}`
}
