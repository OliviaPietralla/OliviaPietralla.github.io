// RANDOMNESS //

// randomPosition 
// absolute
// left and top 
// offset - minus the width of the button so that it doesnt go off the screen

// keep something from repeating 
// shift - removes one item from the array (used name array)

// Create buttons into array - randomIntRange (whole numbers) ((suffleArray))

// add event listening ("click"), function (random Position)

// BUTTON ARRAY


const buttonArray = ['StartButton, RoundButton, EnlargeButton, SquareButton, ShrinkButton, MovementButton, ColourButton, InvertButton, SidewaysButton, RotateButton']
const buttonVisible = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


const button = buttonArray[getRandomInt(buttonArray.length)];
document.getElementById(button)
button.classList.toggle('hidden');

colorButton.addEventListener("click"), function() {
    buttonVisible.forEach(button => {
        button.toggle('Colour')
    });
}

function ShowBtn() {
    document.getElementById('RoundButton').style.display = "block";
}

// COLLAPSIBLE 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// COLOUR BUTTON

function colour(){
    document.getElementById("ColourButton").style.backgroundColor = "red";
}