//---------------------- a)

function vari (para1, para2){
   return para1 + para2 
}
const receba = vari(10,20)
console.log(receba)

//----------------------- b)

var priN = 2
var segN = 4
function igual(n1, n2){
    if(n1 >= n2){
        return `Esse número: ${n1} é  maior ou igual que esse: ${n2}`   
    }else{
        return  `Esse número: ${n1} não é  maior ou igual que esse: ${n2}` 
    }
}console.log(igual(priN, segN))

//------------------------- c)

function pOuI (nu1){
    if(nu1%2===0){
        return `${nu1} é par`
    }else{
        return `${nu1} é ímpar`
    }
}console.log(pOuI(1))

 // ------------------------- d)
 var variPara = 'terçou'
 function nuDeStri(parametroE){
    return `Essa é sua frase: ${parametroE.toUpperCase()}; e esse é o tamanho dela ${parametroE.length}` 
 }
 console.log(nuDeStri(variPara))


