const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnEntrar = document.querySelector('.btnEntrar');
function dispararAlert() {
    if (email.value === 'tryber@teste.com' || senha.value === '123456') {
    alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}
btnEntrar.addEventListener('click', dispararAlert);