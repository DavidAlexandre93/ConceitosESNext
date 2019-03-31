// let e const
// Let tem escopo dentro do bloco
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)



// Template String
const produto = 'Ipad'
console.log(`${produto} é Caro !`)


// Destructuring
// STRING
const [l, e, ...tras] = "Cod3r"
console.log(l,e,tras)


// ARRAY
const [x, y] = [1, 2, 3]
console.log(x,y)


// ATRIBUTOS DE UM OBJETO
const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)
