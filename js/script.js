// General Notes for Self
// Main goal: (1) Click Generate Password button to generate random password using letters, numbers, symbols. (2) Copy newly created password to the clipboard.
// to do:
// activate generate password button
// activate copy clipboard button
// when number is entered in password length box, generated password will be confined to that length
// when symbols checkbox is checked, symbols will be included in generated password
// when numbers checkbox is checked, numbers will be included in generated password

// set variables 

// these are being pulled from HTML using querySelector for their IDs.
var charRange = document.querySelector("#pwRange");
var charLength = document.querySelector("#pwLength");
var symCheck = document.querySelector("#defaultCheck1");
var numCheck = document.querySelector("#defaultCheck2");
var passDisplay = document.querySelector("#formGroupExampleInput");
var form = document.querySelector("#pwGeneratorForm");
var genPw = document.querySelector('#generate-pw');
var clipboard = document.querySelector('#clipboard');

// used character codes to pull all characters instead of using an array or a string.
var alphChars = arrayFromLowtoHigh(65, 90).concat(97, 122);
var numChars = arrayFromLowtoHigh(48, 57);
var symChars = arrayFromLowtoHigh(33, 47).concat(58, 64).concat(91, 96);

// eventListener is used for the slider and pw length input to call on the same function (charLengthActivate).
charRange.addEventListener("input", charLengthActivate);
charLength.addEventListener("input", charLengthActivate);

// when generate password is clicked, a password is generated.
form.addEventListener("submit", event => {
    event.preventDefault();
    var charAmount = charLength.value;
    var addSym = symCheck.checked;
    var addNum = numCheck.checked;
    var password = genPass(charAmount, addSym, addNum);
    passDisplay.value = password;
})

// function that generates the random passwords
function genPass(charAmount, addSym, addNum){
   var charCodes = alphChars;
   if (addSym) charCodes = charCodes.concat(symChars); // adds on symbols to random password
   if (addNum) charCodes = charCodes.concat(numChars); // adds on numbers to random password
   
   var passChars = []
   for (var i = 0; i < charAmount; i++){
    var charMaster = charCodes[Math.floor(Math.random() * charCodes.length)];
    passChars.push(String.fromCharCode(charMaster));
   };
   return passChars.join(""); // returns array into a string
}

function arrayFromLowtoHigh(low, high){
    var array = []
    for (var i = low; i <= high; i++){
        array.push(i)
    }
    return array
}

function charLengthActivate(event){
    var value = event.target.value
    charRange.value = value
    charLength.value = value
}

// // copies password to clipboard
// function clipboardCopy(){
//     var copyText = passDisplay.value;
//     copyText.select(); // it is saying this copyText.select() is not a function? Could you please let me know why this is not working? Thanks!
//     document.execCommand("copy")
//     alert("Copied to Clipboard!")
// }

function clipboardCopy(){
    // var copyText = passDisplay.value; // this should be an element in your document, rather than just a string/number
    var copyText = passDisplay // <--this just sets copyText to point to the same element as passDisplay
    copyText.select(); // ...now select function should be defined!
    document.execCommand("copy")
    alert("Copied to Clipboard!")
}

clipboard.addEventListener("click", clipboardCopy);
