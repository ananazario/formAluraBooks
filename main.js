async function buscaEndereco(cep) {

    var mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = "";

    try {
        let consultaCep = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente');
        }
        let logradouro = document.querySelector('#endereco');
        let cidade = document.querySelector('#cidade');
        let bairro = document.querySelector('#bairro');
        let estado = document.querySelector('#estado');

        logradouro.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        cidade.value = consultaCepConvertida.localidade;
        estado.value = consultaCepConvertida.uf;

        return consultaCepConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<small>CEP inválido, tente novamente</small>`
    }
}

let cep = document.querySelector('#cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))





