let listaConvidado = '';
let idConvidado = 01;
const templateLista = document.querySelector('#lista');
let convidadosListados = '';

const convidados = [{
    nome: "Bob Sponja",
    idade: 20
  },
  {
    nome: "Freddie Mercury",
    idade: 42
  },
  {
    nome: "James Bond",
    idade: 50
  },
  {
    nome: "Michael Scott",
    idade: 46
  },
  {
    nome: "Peter Parker",
    idade: 21
  },
  {
    nome: "Dave Mustaine",
    idade: 62
  },
  {
    nome: "Ed Sheeran",
    idade: 28
  },
  {
    nome: "Jon Snow",
    idade: 16
  },
  {
    nome: "Pikachu da Silva",
    idade: 12
  }
];

function escreverListar() {
  for (let convidado of convidados) {
    listaConvidado += `<li id="convidao_${idConvidado}">${convidado.nome} - ${convidado.idade}</li>`;
    idConvidado++;
  }

  templateLista.innerHTML = listaConvidado;

  convidadosListados = document.querySelectorAll('#lista li');

  createPresenca();

}

function createPresenca() {
  for (let convidadoListado of convidadosListados) {
    convidadoListado.addEventListener('click', (event) => {
      event.target.className = 'convidadoPresente';
    });
  }
}

escreverListar();
