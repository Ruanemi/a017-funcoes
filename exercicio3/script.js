

let receba1 = +prompt(`coloque um numero para SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR`);
let receba2 = +prompt(`coloque OUTRO numero para SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR`);

function somar(N1, N2) {
  return N1 + N2;
}
const podeSomar = somar(receba1, receba2);

function subtrair(nu1, nu2) {
  return nu1 - nu2;
}
const podeSubtrair = subtrair(receba1, receba2);

function multiplicar(nume1, nume2) {
  return nume1 *nume2;
}
const podeMultiplicar = multiplicar(receba1, receba2);

function dividir(num1, num2) {
  return num1 / num2;
}
const podeDividir = dividir(receba1, receba2);


console.log(somar(receba1,receba2));
console.log(subtrair(receba1,receba2));
console.log(multiplicar(receba1,receba2));
console.log(dividir(receba1,receba2));
