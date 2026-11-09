console.log("=================== Exercicio 2 ===============");

const nome = "Biblioteca do Bairro";
const morada = "Rua 5";

let livros = 1250;

livros = livros - 3;
console.log(livros);



console.log(`A ${nome} tem ${livros} livros disponíveis.`);

console.log(typeof nome, typeof morada, typeof livros);

console.log("=================== Exercicio 3 ===============");

const dia = "sábado";
const hora = 11;
let aberta;
if (dia === "domingo") {
aberta = false;
} else if (dia === "sábado") {
aberta = hora >= 10 && hora < 13;
} else {
aberta = hora >= 9 && hora < 19;
}
console.log(aberta ? "Aberta" : "Fechada");



console.log("=================== Exercicio 4 ===============");

function calcularMulta(dias) {
return dias > 15 ? (dias - 15) * 0.5 : 0;
}
function formatarEuros(valor) {
return valor.toFixed(2).replace(".", ",") + " €";
}
function mensagemMulta(dias) {
const multa = calcularMulta(dias);
if (multa === 0) return "Sem multa";
return `Multa a pagar: ${formatarEuros(multa)}`;
}
console.log(mensagemMulta(10)); // Sem multa
console.log(mensagemMulta(22)); // Multa a pagar: 3,50 €


console.log("=================== Exercicio 5 ===============");


const livrosEX5 = ["Pai Rico, Pai Pobre", "Harry Potter e a Pedra Filosofal", "Romeu e Julieta",
"Os Lusíadas", "Sherlock Holmes"];

livrosEX5.push("O Senhor dos Anéis", "Drácula");

console.log(livrosEX5.length);

livrosEX5.forEach((titulo, i) => {

    console.log(`${i + 1}. ${titulo}`);
});

const longos = livrosEX5.filter(t => t.length > 10);

const maiusculas = livrosEX5.map(t => t.toUpperCase());

console.log(longos, maiusculas);