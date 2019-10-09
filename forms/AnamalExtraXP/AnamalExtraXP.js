
let anamals2 = ["dog", "cat", "horse", "mouse", "pig", "cow", "ferret", "lizard", "frog"]
let lastAnamal = ""
let choice2 = ""

for (i=0;i<2;i++) {
    choice2 = prompt("Please enter an animal.")
    choice2 = choice2.toLowerCase()

    anamals2.push(choice2)
    lastAnimal = anamals2.length - 1

    alert(`The last animal is ${anamals2[lastAnimal]}.`)
}
