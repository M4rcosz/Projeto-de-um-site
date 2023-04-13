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

