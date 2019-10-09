
function calcAvg2(num1,num2,num3) {
    return (((num1 + num2 + num3)/3) * (num1 * num1))
    }

function randomMultiply(firstNum, secondNum) {
    return firstNum * secondNum
    }

let userChoice = prompt("Do you want to do average or a random multiplication. Enter either 'average' or 'multiplication'. ")
let secondNumber1 = ""
let secondNumber2 = ""
let secondNumber3 = ""
let randomInt = ""

if (userChoice == "average" ) {

    secondNumber1 = Number(prompt("Please enter the first number"))
    secondNumber2 = Number(prompt("Please enter the second number"))
    secondNumber3 = Number(prompt("Please enter the third number"))
    
    alert(`The answer using ${secondNumber1}, ${secondNumber2}, and ${secondNumber3} is ${calcAvg2(secondNumber1,secondNumber2,secondNumber3)}.`)
    
} else if (userChoice == "multiplication") {
    
    randomInt = Math.ceil(Math.random() * 10)
    secondNumber1 = Number(prompt("Enter the number you want to be multiplied by a random number."))

    alert(`The result of multiplying the random number ${randomInt} with ${secondNumber1} is ${randomMultiply(randomInt,secondNumber1)}.`)
    }
