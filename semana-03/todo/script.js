const div = document.querySelector('div');

class Usuario {
  constructor(nome, email, senha){
    this.nome  = nome;
    this.email = email;
    this.senha = senha;

    this.tarefas = [];
  }

  createTarefa(nome, descricao, local, data, ordem){

    this.tarefas.push(new Tarefa(nome, descricao, local, data, ordem));

  }
}

class Tarefa{
  constructor(nome, descricao, local, data, ordem){
    this.nome       = nome;
    this.descricao  = descricao;
    this.local      = local;
    this.data       = data;
    this.ordem      = ordem;
    this.check      = false;
  }

  doTarefa(){
    this.check = true;
  }
}

let usuarios  = new Usuario('Alana', 'joaodaslva@gmail.com', '1234');
    usuarios.createTarefa('Fazer Compras', 'Preciso fazer compras no mercado para o jantar de sexta', 'Extra', '18/10/2017', 3);
    usuarios.createTarefa('Limpar a cozinha','Passar pano também', 'Minha Casa', '20/10/2017', 1 );

    usuarios.tarefas[0].doTarefa();

console.log(usuarios);
