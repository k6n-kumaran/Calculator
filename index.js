let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let selectedOptions = document.getElementById("select");
let button = document.getElementById("btn");
let result = document.querySelector("span");



button.addEventListener("click" , () => {

    let num1Value = num1.value;
    let num2Value = num2.value;
    let selectedValue = selectedOptions.value;
    let addition = Number(num1Value) + Number(num2Value);
    let subtraction = Number(num1Value) - Number(num2Value);
    let multiplication = Number(num1Value) * Number(num2Value);
    let division = Number(num1Value) / Number(num2Value);
    switch (selectedValue) {
        case "sum":
            result.innerHTML =  ": " + addition;
            break;
        case "minus":
            result.innerHTML =  ": " + subtraction  ;
            break;
        case "multiply":
            result.innerHTML =  ": " + multiplication;
            break;
        case "divide":
            result.innerHTML =  ": " +division;
            break;
        default:
            break;
    }
    
})

let form = document.getElementById("form");

form.addEventListener("submit" , (e) => {
    console.log("hella sus");
    e.preventDefault();
})



