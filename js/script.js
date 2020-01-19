// set variables
var charLength = document.querySelector("length");
var passForm = document.querySelector("pwGeneratorForm");
var symChar = document.querySelector("defaultCheck1");
var numChar = document.querySelector("defaultCheck2")

var allChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-+=");
var enterPass = "";

charLength.addEventListener("input", charLengthActivate);

passForm.addEventListener("submit", event => {
    event.preventDefault()
    var password = generatePassword(charLength, symChar, )
});

function charLengthActivate(event){
    var value = event.target.value
    charLength.value = value
}

// Main goal: (1) Click Generate Password button to generate random password using letters, numbers, symbols. (2) Copy newly created password to the clipboard.
// to do:
// activate generate password button
// activate copy clipboard button
// when number is entered in password length box, generated password will be confined to that length
// when symbols checkbox is checked, symbols will be included in generated password
// when numbers checkbox is checked, numbers will be included in generated password

