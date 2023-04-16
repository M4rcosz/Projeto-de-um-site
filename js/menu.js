function verificadorCriarConta() {
    let password = document.getElementById("creatAccPassword").value;
    let passwordConfirmation = document.getElementById("passwordConfirmation").value;
    if (password == '' || passwordConfirmation == '') {
        var confirmationPasswordMessage = document.getElementById('confimationMessage');
        var confirmationPasswordMessage2 = document.getElementById('confimationMessage2');
        confirmationPasswordMessage.innerHTML = 'Preencha o campo.';
        confirmationPasswordMessage.style.color = 'Red';
        confirmationPasswordMessage2.innerHTML = 'Preencha o campo.';
        confirmationPasswordMessage2.style.color = 'Red';

    }
    else if (passwordConfirmation === password && password !== '') {
        alert('Certo')

    }
    else {
        confirmationPasswordMessage.innerHTML = 'Senhas diferentes.';
        confirmationPasswordMessage.style.color = 'Red';
    }
}
// Propriedade de elementos - Start
let loginChoice = document.getElementById("loginForm");
let creatAccChoice = document.getElementById("creatAccForm");
let initialCard = document.getElementById("initialCardInfo");
let loginChoiceButton = document.getElementById("choiceButtonLogin");
let creatAccChoiceButton = document.getElementById("choiceButtonsLoginAndCreatAccId");
loginChoice.style.display = "none";
creatAccChoice.style.display = "none";
// End

function mouseHoverColorChange(x) {
    x.addEventListener("mouseover", backColorChoiceButtonChangeMouseover, false);
    x.addEventListener("mouseout", backColorChoiceButtonChangeMouseout, false);

    function backColorChoiceButtonChangeMouseover() {
        x.style.backgroundColor = "rgb(33,33,33)"
    }
    function backColorChoiceButtonChangeMouseout() {
        x.style.backgroundColor = "black"
    }
}
function loginBackColorChange() {
    x = loginChoiceButton;
    mouseHoverColorChange(x)
}
function creatAccBackColorChange() {
    x = creatAccChoiceButton;
    mouseHoverColorChange(x)
}
loginBackColorChange()
creatAccBackColorChange()
// Funções de display - Start
function initialCardFunction() {
    if (loginChoice.style.display === "block" || creatAccChoice.style.display === "block") {
        initialCard.style.display = "none";
    }
    else {
        initialCard.style.display = "block";
    }
}
function choiceButtonLogin() {
    x = loginChoice;
    y = loginChoiceButton;
    z = creatAccChoiceButton;
    if (x.style.display === 'none') {
        x.style.display = 'block';
        creatAccChoice.style.display = "none"
    }

    else {
        x.style.display = 'none'
    }
    initialCardFunction()
    backColorChoiceButton()
}
function choiceButtonCreatAcc() {
    x = creatAccChoice;
    y = creatAccChoiceButton;
    z = loginChoiceButton;
    if (x.style.display === "none") {
        x.style.display = "block";
        loginChoice.style.display = "none"
    }
    else {
        x.style.display = "none"
    }
    initialCardFunction()
    backColorChoiceButton()

}
//End
function backColorChoiceButton() {
    if (x.style.display === 'none') {
        y.style.backgroundColor = "black"
    }
    else if (x.style.display = "block") {
        y.style.backgroundColor = "rgb(33,33,33)"
        z.style.backgroundColor = "black"
    }
}
