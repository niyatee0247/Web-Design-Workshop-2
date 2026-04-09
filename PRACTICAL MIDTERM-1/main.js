function checkLetter(){
    var letter = document.getElementById("letter").value;
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
        document.getElementById("result").innerHTML = "The letter is a vowel.";
    }
    else if(letter >= "a" && letter <= "z"){
        document.getElementById("result").innerHTML = "The letter is a consonant.";
    }
    else{
        document.getElementById("result").innerHTML = "Please enter a valid letter.";
    }
}