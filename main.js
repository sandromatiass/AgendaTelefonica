const form = document.getElementById('formCall');
const listaContatos = document.getElementById('listaContatos');

const nome = [];
const telefone = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();
  adicionarLinha();
});

function adicionarLinha() {
  const inputNome = document.getElementById('nome');
  const inputTelefone = document.getElementById('telefone');

  if (nome.includes(inputNome.value)) {
    alert(`Esse contato ${inputNome.value} já existe em sua agenda!`);
  } else {
    nome.push(inputNome.value);
    telefone.push(inputTelefone.value);

    let index = nome.length - 1;

    let linha = document.createElement('tr');
    linha.setAttribute('data-index', index);
    linha.innerHTML = `
      <td>${inputNome.value}</td>
      <td>${inputTelefone.value}</td>
      <td><button type="button" class="deleteBtn">Excluir</button></td>
    `;

    listaContatos.appendChild(linha);

    linha.querySelector('.deleteBtn').addEventListener('click', function() {
      const rowIndex = linha.getAttribute('data-index');
      nome.splice(rowIndex, 1);
      telefone.splice(rowIndex, 1);
      linha.remove();
      atualizarIndices();
    });

    inputNome.value = '';
    inputTelefone.value = '';
  };
};

function atualizarIndices(){
  const linhas = listaContatos.querySelectorAll('tr');
  linhas.forEach((linha, index) => {
    linha.setAttribute('data-index', index);
  });
};