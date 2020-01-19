

function genPassword(){
    event.preventDefault()
    //set password length
    var pwLength = document.querySelector("#length");

    // set variable with all characters needed
    var allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&?=-+";
    
    var password = "";

    // loop for selecting random characters from allChar list
    for(var i = 0; i < pwLength; i++){
        password = password + allChar.charAt(Math.floor(Math.random() * Math.floor(allChar.length - 1)))
    
    // need to return a password
    }


    // button for generate password

    // button for copy to clipboard
}
