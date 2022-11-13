let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let moneyEl = document.getElementById("money-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204
const kunaToEuro = 7.545

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet`
    volumeEl.textContent = `${baseValue} liter = ${baseValue * literToGallon} gallon`
    massEl.textContent = `${baseValue} kilo = ${baseValue * kiloToPound} pound`
    moneyEl.textContent = `${baseValue} euro = ${baseValue * kunaToEuro} kuna`
})