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


// const button = buttonArray[getRandomInt(buttonArray.length)];
// document.getElementById(button)
// button.classList.toggle('hidden');

// colorButton.addEventListener("click"), function() {
//     buttonVisible.forEach(button => {
//         button.toggle('Colour')
//     });
// }

// BUTTONS APPEAR

function ShowBtn1() {
    document.getElementById('RoundButton').style.display = "inline";
    document.getElementById('SquareButton').style.display = "inline";

    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        //button.innerHTML = "test"
        button.classList.add('RoundBtnClick')
    }

    for (let button of buttons) {
        button.classList.add('SquBtnClick')
    }
}

function ShowBtn2() {
    document.getElementById('EnlargeButton').style.display = "inline";
    document.getElementById('ColourButton').style.display = "inline";
    document.getElementById('ShrinkButton').style.display = "inline";
}

function ShowBtn3() {
    document.getElementById('InvertButton').style.display = "inline";
    document.getElementById('DarkModeButton').style.display = "inline";
    document.getElementById('RotateButton').style.display = "inline";
    document.getElementById('MovementButton').style.display = "inline";
}

function ShowBtn4() {
    document.getElementById('OtherButton').style.display = "inline"; 
}


function ColourBtn() {
    document.getElementsByClassName('colour').style.background = "purple";
}

function ShowTxt() {
    document.getElementById("words").innerHTML = "500 Word Explanation";
}
