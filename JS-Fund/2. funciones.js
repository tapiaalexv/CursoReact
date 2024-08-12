function sumar (num1, num2) {
    console.log(num1 + num2)
}
sumar(10, 20)

const sumarDos = (num1, num2) => {
    console.log(num1 + num2)
}
sumarDos(10, 50)

const sumarDos = num1 => {
    console.log(num1)
}
sumarDos(10)

const sumarDos = num1 => {
    return num1
}
console.log(sumarDos(10))

const sumarDos = num1 => num1
console.log(sumarDos(10))

const sumar = (num1, num2) => {
    return 'la suma es: ' + (num1 + num2)
}
let resultado = sumar(10, 20)
console.log(resultado)

const sumar = (num1, num2) => (
    'la suma es: ' + (num1 + num2)
)
let resultado = sumar(10, 20)
console.log(resultado)

const sumar = (num1 = 10) => (
    'la suma es: ' + (num1 + 20)
)
let resultado = sumar()
console.log(resultado)