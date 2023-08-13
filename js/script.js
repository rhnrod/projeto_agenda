const form = document.getElementById('form');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeDoContato = document.getElementById('nome-contato');
    const inputNumeroDoContato = document.getElementById('numero-contato');

    if(inputNomeDoContato.value == '' || inputNumeroDoContato.value == '') {
        alert(`Insira dados legítimos para continuar`)
    } else if(contatos.includes(inputNomeDoContato.value)) {
        alert(`O contato ${inputNomeDoContato.value} já foi inserido na agenda.`)
    } else {
        contatos.push(inputNomeDoContato.value);
        numeros.push(parseFloat(inputNumeroDoContato.value));
        
        let linha = `<tr>`;
        linha += `<td><p class="th-icons"><i class="fa-solid fa-user"></i>${inputNomeDoContato.value}</p></td>`;
        linha += `<td><p class="th-icons"><i class="fa-solid fa-phone"></i>${inputNumeroDoContato.value}</p></td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeDoContato.value = '';
    inputNumeroDoContato.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};