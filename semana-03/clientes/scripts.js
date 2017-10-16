const div = document.querySelector('div');

class Cliente {
  constructor(nome, email){
    this.nome = nome;
    this.email = email;
  }

  dizerNome() {
    console.log(this.nome);
  }

  calcularGastos() {
    let gastos = 0;

    for(let produto of this.compras){
      gastos = gastos + produto.valor;
    }

    return gastos;

  }
}

const clientes = [
  new Cliente('João da Silva', 'joaodasilva@gmail.com'),
  new Cliente('Maria da Silva', 'maria@gmail.com')
];

// let humano = new Cliente();
//     humano.nome  = "João da Silva";
//     humano.email = "joaodasilva@gmail.com";
//
// let bipede = new Cliente();
//     bipede.nome  = "Maria da Silva";
//     bipede.email = "mariadasilva@gmail.com";

// let clientes = [
//   {
//     nome: 'João da Silva',
//     email: 'joaodasilva@gmail.com',
//     idade: 23,
//     compras:[
//       {
//         produto: 'Bicicleta',
//         valor: 20
//       },{
//           produto: 'Betoneira',
//           valor: 400
//       }
//     ]
//   },
//   {
//     nome: 'Maria da Silva',
//     email: 'mariadasilva@gmail.com',
//     idade: 28,
//     compras:[
//       {
//         produto: 'Moto',
//         valor: 5000
//       }
//     ]
//   },
//   {
//     nome: 'Maicon Jaquison',
//     email: 'maicon@gmail.com',
//     idade: 57,
//     compras:[
//       {
//         produto: 'Luva',
//         valor: 0.2
//       }
//     ]
//   }
// ];
//
console.log(clientes[0].dizerNome());
console.log(clientes[1].dizerNome());
// console.log(clientes[2].calcularGastos());
