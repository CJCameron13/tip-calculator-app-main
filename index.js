const totalBill = document.querySelector('#bill')
const partyNumber = document.querySelector('#number-of-people')
const fivePercent = document.querySelector("#five-percent")
const tenPercent = document.querySelector('#ten-percent')
const fifteenPercent = document.querySelector('#fifteen-percent')
const twentyFivePercent = document.querySelector('#twenty-five-percent')
const fiftyPercent = document.querySelector('#fifty-percent')
const percentageButton = document.querySelectorAll('.percentage-button')

let tipPerPerson = document.querySelector('#tip-per-person')


percentageButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        percentageButton.forEach((otherButton) => {
            if (otherButton != event.target) {
                otherButton.classList.remove('selected')
            }
        })
        let targeted = event.target
        console.log(targeted)
        targeted.classList.add('selected')
    })
})

totalBill.addEventListener('input', (event) => {
    let inputAmount = totalBill.value
    console.log(inputAmount)
    let tipChosen = document.querySelector('.selected')
    console.log(tipChosen === fivePercent)
    console.log(tipChosen)
    tipPerPerson.textContent = `$${inputAmount}`
})
