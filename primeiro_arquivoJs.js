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
