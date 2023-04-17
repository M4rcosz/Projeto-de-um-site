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

// Mouse Hover - Start
function mouseHoverColorChange(x) {
    x.addEventListener("mouseover", backColorChoiceButtonChangeMouseover, false);
    x.addEventListener("mouseout", backColorChoiceButtonChangeMouseout, false);

    function backColorChoiceButtonChangeMouseover() {
        x.style.backgroundColor = "rgb(33,33,33)"
    }
    function backColorChoiceButtonChangeMouseout() {
        if (backColorChoiceButton() === false) {
            x.style.backgroundColor = "black"
        }
    }
}
mouseHoverColorChange(loginChoiceButton)
mouseHoverColorChange(creatAccChoiceButton)
// End
// Funções de display - Start
function initialCardFunction() {
    if (loginChoice.style.display === "block" || creatAccChoice.style.display === "block") {
        initialCard.style.display = "none";
    }
    else {
        initialCard.style.display = "block";
    }
}
function choiceButtonLogin(f) {
    x = loginChoice;
    y = loginChoiceButton;
    z = creatAccChoiceButton;
    if (f === 1) {
        x.style.display = 'none';
        return
    }
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
function choiceButtonCreatAcc(f) {
    x = creatAccChoice;
    y = creatAccChoiceButton;
    z = loginChoiceButton;
    if (f === 1) {
        x.style.display = 'none';
        return
    }
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
choiceButtonLogin(1)
choiceButtonCreatAcc(1)
function backColorChoiceButton() {
    if (x.style.display === 'none') {
        y.style.backgroundColor = "black"
        return false
    }
    else if (x.style.display = "block") {
        y.style.backgroundColor = "rgb(33,33,33)"
        z.style.backgroundColor = "black"
        return true
    }
}
