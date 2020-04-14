// constante não pode ser reatribuido
const a = 1 
// a = 3 ; // ERROR

// constante pode ser mutada (mutação)
const usuario = { nome: 'Renata' };
usuario.nome = 'Roberta';
console.log(usuario);

// Variáveis de escopo
function newTest(x){
    let y = 2 ;
    if(x > 5){
        console.log(x, y);
    }
}
newTest(10);

// operações em array usando MAP;
const arr = [1, 3, 5, 7, 8];

const newArr = arr.map(function(item){
    return item * 2;
})

console.log(newArr);

const newArr2 = arr.map(function(item, index){
    return item + index;
})
console.log(newArr2);


// operações em array usando REDUCE
const newArr3 = arr.reduce(function(total, next){
    return total + next;
})

console.log(newArr3);

// operações em array usando FILTER;
const newArr4 = arr.filter(function(item){
   return item % 2 === 0;
})

console.log(newArr4);

// operações em array usando FIND;
const newArr5 = arr.find(function(item){
    return item === 3;
 })
 
 console.log(newArr5);

 // ARROW FUNCTIONS
 const newArr6 = arr.map((item) => {
    return item * 2;
})
console.log(newArr6);


const newArr7 = arr.map(item => {
    return item * 2;
})
console.log(newArr7);

const newArr8 = arr.map(item => item * 2);
console.log(newArr8);

// VALORES PADRÃO
const soma = (a = 4 , b = 6 ) => a + b;
console.log(soma(1));
console.log(soma());

// Desestruturação
const usuario1 = {
    nome: 'Renata',
    idade: 25,
    endereco: {
        cidade:'Campinas',
        estado: 'SP'
    },
};

console.log(usuario1);

const {nome, idade, endereco: { cidade } } = usuario1;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }){
    console.log(nome , idade);
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
const nome1 = 'Renata';
const idade2 = 25;

console.log("meu nome " + nome1 +  ' e tenho ' +  idade2 + ' anos');
console.log(`Meu nome é ${nome1} e tenho ${idade2} anos.`);

// object short syntax

const usuario3 = {
    nome1,
    idade2,
    irmão: "Luiz",
};

console.log(usuario3);