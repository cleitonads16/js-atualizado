let dia_semana = 3;
let dia = "";

switch(dia_semana){
    case 0:
        dia ='segunda'
        break
    case 1:
        dia ='terça'
        break
    case 2:
        dia ='quarta'
        break
    case 3:
        dia ='quinta'
        break
    case 4:
        dia ='sexta'
        break
    case 5:
        dia ='sábado'
        break
    default:
        dia = '--'
}
console.log('Hoje é '+ dia);

const ola = () =>{
    console.log('Teste arrow functions');
}

ola();

// const nomes = ['Cleiton', 'Vanessa', 'João Lucas'];

const pessoas = [{
    nome:'Cleiton',
    idade: 38
},{
    nome:'Vanessa',
    idade: 39
},{
    nome:'João Lucas',
    idade: 6
}];

for(let i = 0; i < pessoas.length; i++){
    console.log('O '+ pessoas[i].nome + ' possui '+ pessoas[i].idade +' anos.');
}