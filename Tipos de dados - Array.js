// Tipos de dados - Array


const number = [10, 20, 30, 5, 234, 357]
//nos ARREYS, a contagem sempre vai iniciar com numeroi ou posição ZERO(0);

console.log(number) // imprime tudo na tela
console.log(number[3]) // mai imprimir o item na 3º posição lembando que inicia do zero vai ser impresso o item 4 = 5


// podemos fazer ARRAYS  de objetos: 

const people = [{
    name: "Alex Dyna",
    age: 39,
    sex: "Male",
    height: 1.75,
    address: "Rua Nelson Barbosa nº2"
},
{
    name: "Quezia Dyna",
    age: 39,
    sex: "Famele",
    height: 1.55,
    address: {
        Rua: "Nelson Barbosa",
        numero: "nº2",
        complemento: "Cond andorinhas 3"
    }
}
]

console.log(people[1].address.Rua) // consigo usar tudo junto e misturado. LEMBRANDO - inicia pelo ZERO entao busco o segundo.
// posso usar ARRAYS com lista e nomes e frases tudo junto e buscar informaçoes distintas.
