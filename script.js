const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnEntrar = document.querySelector('.btnEntrar');
const btnEnviar = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

function dispararAlert() {
    if (email.value === 'tryber@teste.com' || senha.value === '123456') {
    alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}
btnEntrar.addEventListener('click', dispararAlert);

// Usei as fontes:
// https://www-w3schools-com.translate.goog/jsref/prop_radio_checked.asp?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=sc
// https://www-w3schools-com.translate.goog/tags/att_button_disabled.asp?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=sc
function habilitarBtn (){
    if(checkbox.checked){
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}
btnEnviar.addEventListener('click', habilitarBtn);