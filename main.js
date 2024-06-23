const form = document.getElementById('form');
const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');
const resetBotao = document.getElementById('reset-button');


function validarForm() {
    let formValido;
    if (parseInt(numberB.value) > parseInt(numberA.value)) {
        formValido = true;
    }
    else {
        formValido = false;
    }
    return formValido;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const formValido = validarForm();

    

    if (formValido) {
        // mostrar mensagem de sucesso
        const mensagemSucesso = `Formulário válido: <b>${numberB.value}<b/> é maior que <b>${numberA.value}</b>`;
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        // resetar estilos de erro se houver
        numberA.style.border = '';
        numberB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';

    } else {
        // mostrar mensagem de erro
        const mensagemErro = `Formulário inválido: <b>${numberB.value}<b/> não é maior que <b>${numberA.value}</b>`;
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        // aplicar estilos de erro aos campos
        numberA.style.border = '1px solid red';
        numberB.style.border = '1px solid red';

        // resetar mensagem de sucesso
        document.querySelector('.success-message').style.display = 'none';
    }
})

resetBotao.addEventListener('click', function() {
    // limpar os campos do formulário
    numberA.value = '';
    numberB.value = '';

    // resetar estilos de erro e ocultar mensagens
    numberA.style.border = '';
    numberB.style.border = '';
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.success-message').style.display = 'none';
})
