const tecnologias = new Map()
tecnologias.set('React', { framework: false})
tecnologias.set('Angular', { framework: true})


//console.log(tecnologias.react)
console.log(tecnologias.get('React'), framework)


const chavesVariados = new Map([
[function () { }, 'Funcao'],
[{}, 'Objeto'],
[123, 'Numero'],   
])


chavesVariados.forEach((v1, ch) => {
    console.log(ch, v1)
})

console.log(chavesVariados.has(123))
chavesVariados.delete(123)
console.log(chavesVariados.has(123))
console.log(chavesVariados.size)

chavesVariados.set(123, 'a')
chavesVariados.set(123, 'b')
chavesVariados.set(456, 'b')
console.log(chavesVariados)