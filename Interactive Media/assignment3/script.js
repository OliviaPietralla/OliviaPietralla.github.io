// LINE 1 - START BUTTON 
// LINE 2

function ShowBtn1() {
    document.getElementById('RoundButton').style.display = "inline";
    document.getElementById('SquareButton').style.display = "inline";
}

function RoundBtn() {

    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        button.classList.add('RoundBtnClick');
    }
}

function SquareBtn() {
    
    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        button.classList.add('SquareBtnClick');
    }
}

// LINE 3

function ShowBtn2() {
    document.getElementById('EnlargeButton').style.display = "inline";
    document.getElementById('ColourButton').style.display = "inline";
    document.getElementById('ShrinkButton').style.display = "inline";
}

function EnlargeBtn() {

    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        button.classList.add('EnlargeBtnClick');
    }
}

function ColourBtn() {

    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        button.classList.add('ColourBtnClick');
    }
}

function ShrinkBtn() {

    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        button.classList.add('ShrinkBtnClick');
    }
}

// LINE 4

function ShowBtn3() {
    document.getElementById('InvertButton').style.display = "inline";
    document.getElementById('DarkModeButton').style.display = "inline";
    document.getElementById('RotateButton').style.display = "inline";
    document.getElementById('MovementButton').style.display = "inline";
}

function InvertBtn() {

    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        button.classList.add('InvertBtnClick');
    }
}

function DarkModeBtn() {

    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        button.classList.add('DarkModeBtnClick');
    }
}

function RotateBtn() {

    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        button.classList.add('RotateBtnClick');
    }
}

function MovementBtn() {

    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        button.classList.add('MovementBtnClick');
    }
}

// LINE 5

function ShowBtn4() {
    document.getElementById('OtherButton').style.display = "inline"; 
}

function ShowTxt() {
    var x =
    document.getElementById("words");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// RESET FUNCTION

function ResetBtn() {
    
    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        if (button.className.indexOf('hidden') === -1)
            button.className = 'ResetBtnClick changeBtn';
        else
            button.className = 'ResetBtnClick changeBtn hidden cursor';
    }
}
