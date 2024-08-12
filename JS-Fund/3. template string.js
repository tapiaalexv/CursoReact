// template string
const numero = (num) => {
    return 'el numero es: ' + num
}
const resultado = numero(10)
console.log(resultado)

const numero = (num) => {
    return `el numero es: ${num}`
}
const resultado = numero(10)
console.log(resultado)

const numero = (num1, num2) => {
    return `el numero es: ${num1 + num2}`
}
const resultado = numero(10,20)
console.log(resultado)