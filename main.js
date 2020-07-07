// Classes
class List {
  constructor() {
    // o constructor é um metodo que vai ser primeiro
    //executado toda vez que se instanciar um novo objeto a partir da classe
    this.data = [];
  }

  add() {
    this.data.push(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super(); // Serve para herdar os metodos da classe pai
  }
}

class Matematica {
  static soma(a, b) {
    return a + b;
    //Metodos estaticos são normalmente usados apenas para
    //retorna algo, quando se cria metodo estaticos não precisa
    //do constructor na classe.
  }
}

// Const e Let
const a = 1; //Constante não se pode reatribuir o valor da váriavel, mas pode mutar
let y = 2; //Let pode reatribuir o valor de uma váriavel

// Operações em Vetores
const arr = [1, 2, 3, 5, 7];

//Map serve para percorrer o vetor e retornar algum valor
// que você queira dentro do array
const newArr = arr.map((item) => item * 2);
console.log(newArr);

//Reduce serve para reduzir um array. Ele iterará por cada elemento
//da lista com o objetivo de ao final gerar um único valor(de qualquer tipo),
//geralmente é usado mais para números.
const sum = arr.reduce((total, next) => total * next);

//Filter serve filtrar os valores de acordo com a condição
//estabelecida.
const filter = arr.filter((item) => item % 2 === 0);

// Find serve para verificar se determinada informação existe no aray
// ou se queremos encontrar tal informação no array
const find = arr.find((item) => item === 4);

// Arrow Function normalmente são usadas em funções anonimas
// onde a função na precisa de nome, outra coisa das arrow functions
// é que o retorno dela é explicito, sem a necessidade de chamar o return
// para retornar algum elemento na função, quando não existe um corpo de função
// caso exista precisa ser chamado o return

const novoArray = arr.map((item) => item * 2);
