

// BUTTONS APPEAR



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

function ShowBtn4() {
    document.getElementById('OtherButton').style.display = "inline"; 
}

function ShowTxt() {
    document.getElementById("words").innerHTML = "500 Word Explanation";
}

function ResetBtn() {
    
    let buttons = document.getElementsByClassName('changeBtn');

    for (let button of buttons) {
        if (button.className.indexOf('hidden') === -1)
            button.className = 'ResetBtnClick changeBtn';
        else
            button.className = 'ResetBtnClick changeBtn hidden';
    }
}
