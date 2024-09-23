const totalBill = document.querySelector('#bill')
const partyNumber = document.querySelector('#number-of-people')
const fivePercent = document.querySelector("#five-percent")
const tenPercent = document.querySelector('#ten-percent')
const fifteenPercent = document.querySelector('#fifteen-percent')
const twentyFivePercent = document.querySelector('#twenty-five-percent')
const fiftyPercent = document.querySelector('#fifty-percent')
const percentageButton = document.querySelectorAll('.percentage-button')

const tipPerPerson = document.querySelector('#tip-per-person')


percentageButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target)
        console.log('targeted')
    })
})
