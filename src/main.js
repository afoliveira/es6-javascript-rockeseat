// Classes
// class List {
//   constructor() {
//     // o constructor é um metodo que vai ser primeiro
//     //executado toda vez que se instanciar um novo objeto a partir da classe
//     this.data = [];
//   }

//   add() {
//     this.data.push(this.data);
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super(); // Serve para herdar os metodos da classe pai
//   }
// }

// class Matematica {
//   static soma(a, b) {
//     return a + b;
//     //Metodos estaticos são normalmente usados apenas para
//     //retorna algo, quando se cria metodo estaticos não precisa
//     //do constructor na classe.
//   }
// }

// // Const e Let
// const a = 1; //Constante não se pode reatribuir o valor da váriavel, mas pode mutar
// let y = 2; //Let pode reatribuir o valor de uma váriavel

// // Operações em Vetores
// const arr = [1, 2, 3, 5, 7];

// //Map serve para percorrer o vetor e retornar algum valor
// // que você queira dentro do array
// const newArr = arr.map((item) => item * 2);
// console.log(newArr);

// //Reduce serve para reduzir um array. Ele iterará por cada elemento
// //da lista com o objetivo de ao final gerar um único valor(de qualquer tipo),
// //geralmente é usado mais para números.
// const sum = arr.reduce((total, next) => total * next);

// //Filter serve filtrar os valores de acordo com a condição
// //estabelecida.
// const filter = arr.filter((item) => item % 2 === 0);

// Find serve para verificar se determinada informação existe no aray
// ou se queremos encontrar tal informação no array
// const find = arr.find((item) => item === 4);

// Arrow Function normalmente são usadas em funções anonimas
// onde a função na precisa de nome, outra coisa das arrow functions
// é que o retorno dela é explicito, sem a necessidade de chamar o return
// para retornar algum elemento na função, quando não existe um corpo de função
// caso exista precisa ser chamado o return
// const novoArray = arr.map((item) => item * 2);

// // Valores Padrão
// const soma = (a = 3, b = 6) => a + b;

// Desestruturação é a forma de pegar as propriedades de um objeto ou array
// de uma forma mais fácil.
// const usuario = {
//   nome: 'afonso',
//   idade: 24,
//   endereco: {
//     cidade: 'Salvador',
//     estado: 'BA',
//   },
// };

// const {
//   nome,
//   idade,
//   endereco: { cidade, estado },
// } = usuario;
// console.log(cidade, estado);

// function mostraNome({ nome, idade }) {
//   console.log(nome, idade);
// }
// mostraNome(usuario);

//Rest Operator serve para pegar o resto das propriedades
// const novoUsuario = {
//   name: 'Afonso',
//   idade: 23,
//   empresa: 'Avansys',
// };
// const { name, ...resto } = novoUsuario;
// console.log(name);
// console.log(resto);

// const array = [1, 2, 3, 4];
// const [a, b, ...c] = array;
// console.log(a);
// console.log(b);
// console.log(c);

// //Spread Operator serve para propagar as informações de um objetos
// //ou array para uma outra estrutura de dados.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, arr2];
console.log(arr3);

const carro = {
  nome: 'Uno',
  cor: 'azul',
  marca: 'Fiat',
};

const carro2 = { ...carro, nome: 'Argo', portas: 4 };
console.log(carro2);

// Template Literals é uma forma mais organizada e mais lúdica
//de escrever uma string mesclando com valores da variáveis dentro
// const nome = 'Afonso';
// const idade = 23;

// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

// Object short syntax é quando você preciar passar o valor de uma vária que tem
// o mesmo nome do valor da proprieda, basta apenas deixar o nome da propriedade, caso eles forem iguais
// const nome = 'Afonso';
// const idade = 23;

// const usuario = {
//   nome,
//   idade,
//   empresa: 'Avansys',
// };

// Promises são formas de realizar ações de forma assincrona e são muito utilizadas para fazer requisições a APIS
// const minhaPromise = () =>
//   new Promise((resolve, reject) => {
//     setImmediate(() => {
//       resolve('Ok');
//     }, 2000);
//   });

// minhaPromise().then((response) => {
//   console.log(response);
// });

// const executaPromise = async () => {
//   console.log(await minhaPromise()); // executa depois de 2s
//   console.log(await minhaPromise()); // executa depois de 4s
//   console.log(await minhaPromise()); // executa depois de 6s

// }
