const carroDoJoao = {
    modelo:'Fiesta',
    fabricante:'Ford',
    AnoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function(){
        console.log("vruum")
    }
}

const carroDaMaria = {
    modelo:'Ka',
    fabricante:'Ford',
    AnoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function(){
        console.log("vruum")
    }
}


function Carro (modelo,fabricante,AnoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.AnoModelo = AnoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function (){
        console.log("acelerar");
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford",2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford",2021, 2020);

console.log (carroDoJoao2);
console.log (carroDaMaria2);


const nome = 'Cassio'
const idade = 33
const ehMaiorsDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorsDeIdade: ehMaiorsDeIdade,
    conhecimentos: conhecimentos,
}

console.log (typeof nome);
console.log (typeof idade);
console.log (typeof ehMaiorsDeIdade);
console.log (typeof conhecimentos);
console.log (typeof pessoa);

console.log (carroDaMaria2 instanceof Carro)
console.log (conhecimentos instanceof Array)

console.log (pessoa.nome)
console.log (pessoa['nome'])


function exibeAtributo (nomeAtributo ) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome')

pessoa['sobrenome'] = null

Object.freeze (pessoa);

pessoa.nome = 'Ricardo';

if ( pessoa ['sobrenome']) {
    console.log ("a pessoa tem sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

console.log (pessoa.nome)
console.log ( pessoa ['nome'])

console.log (Object.keys (pessoa).length);
console.log (Object.keys (pessoa));
console.log (Object.values (pessoa));