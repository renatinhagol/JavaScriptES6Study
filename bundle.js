"use strict";

// constante não pode ser reatribuido
var a = 1; // a = 3 ; // ERROR
// constante pode ser mutada (mutação)

var usuario = {
  nome: 'Renata'
};
usuario.nome = 'Roberta';
console.log(usuario); // Variáveis de escopo

function newTest(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

newTest(10); // operações em array usando MAP;

var arr = [1, 3, 5, 7, 8];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var newArr2 = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr2); // operações em array usando REDUCE

var newArr3 = arr.reduce(function (total, next) {
  return total + next;
});
console.log(newArr3); // operações em array usando FILTER;

var newArr4 = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(newArr4); // operações em array usando FIND;

var newArr5 = arr.find(function (item) {
  return item === 3;
});
console.log(newArr5); // ARROW FUNCTIONS

var newArr6 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr6);
var newArr7 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr7);
var newArr8 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr8); // VALORES PADRÃO

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1));
console.log(soma()); // Desestruturação

var usuario1 = {
  nome: 'Renata',
  idade: 25,
  endereco: {
    cidade: 'Campinas',
    estado: 'SP'
  }
};
console.log(usuario1);
var nome = usuario1.nome,
    idade = usuario1.idade,
    cidade = usuario1.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario1);
/*  // Usando rest
const arr9 = [1, 3, 5];

const {a, ...c } = arr9;
console.log(a);
console.log(c);

// spread
const arr10 = [1, 3, 7];
const arr11 = [2, 6, 9];

const arr12 = [ ...arr10, ...arr11];
console.log(arr12); */
// templates literias

var nome1 = 'Renata';
var idade2 = 25;
console.log("meu nome " + nome1 + ' e tenho ' + idade2 + ' anos');
console.log("Meu nome \xE9 ".concat(nome1, " e tenho ").concat(idade2, " anos.")); // object short syntax

var usuario3 = {
  nome1: nome1,
  idade2: idade2,
  irmão: "Luiz"
};
console.log(usuario3);
