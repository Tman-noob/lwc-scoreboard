const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length-p")
const volume = document.getElementById("volume-p")
const mass = document.getElementById("mass-p")
let inputError = document.getElementById("input-error")

userInput.addEventListener("keypress", function() {
    if (event.key === "Enter") {
        convertBtn.click()
    }
})

convertBtn.addEventListener("click", function() {
    const unit = userInput.value
    const meters = unit * 0.305
    const feet = unit * 3.281
    const liters = unit * 0.264
    const gallons = unit * 3.785
    const kilos = unit * 0.453
    const pounds = unit * 2.204
    if (isNaN(meters)) {
        alert("User a number!")
    } else if (meters === 0) {
        alert("Use numbers only!")
    } else {
        length.innerHTML = `${unit} meters = ${ feet.toFixed(3) } feet | ${unit} feet = ${ meters.toFixed(3) } meters`
        volume.innerHTML = `${unit} liters = ${ gallons.toFixed(3) } gallons | ${unit} gallons = ${ liters.toFixed(3) } liters`
        mass.innerHTML = `${unit} kilos = ${ pounds.toFixed(3) } pounds | ${unit} pounds = ${ kilos.toFixed(3) } kilos`
    }
})