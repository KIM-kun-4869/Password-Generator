const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordElOne = document.getElementById("password1")
let passwordElTwo = document.getElementById("password2")
let inputEl = document.getElementById("input")
console.log(passwordElOne.id)

function getRandomPassword() {
    let password = ""
    let passwordLength = 15
    if (inputEl.value) {
        passwordLength = inputEl.value
    }
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random()*characters.length)
        let randomCharcter = characters[randomNumber]
        password += randomCharcter
    }
    return password
}

function generate() {
    passwordElOne.textContent = getRandomPassword()
    passwordElTwo.textContent = getRandomPassword()
}

function copy1() {
    navigator.clipboard.writeText(passwordElOne.textContent)
}

function copy2() {
    navigator.clipboard.writeText(passwordElTwo.textContent)
}

