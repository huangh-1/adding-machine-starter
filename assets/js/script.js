function dontClick () {
    alert("I told you not to click it :(");
    window.close();
}

let darkModeSetting = false;
function darkMode (){    
    if(darkModeSetting == false){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("dark-mode").innerHTML ="Disable Dark Mode";
        darkModeSetting = true;
    }
    else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black";
        document.getElementById("dark-mode").innerHTML = "Enable Dark Mode";
        darkModeSetting = false;
    }
}

function addNum () {
let number1 = Number(document.getElementById("number-1").value);
let number2 = Number(document.getElementById("number-2").value);
if(number1 != null && number2 != null){
let results = number1 + number2;
document.getElementById("results").innerHTML = results
}
}

function meow() {
    let meowSound = new Audio ('assets/audio/cat-meow.mp3');
    meowSound.play();
}