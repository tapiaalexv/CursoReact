var edad = 10
var edad = 20
console.log(edad) // 20

let edad = 10
let edad = 20
console.log(edad) // error

// solución
let edad = 10
edad = 20
console.log(edad) // 20
var edad = 10
if(true){
    var edad = 20
    console.log(edad) // 20
}
console.log(edad) // 20

let edad = 10
if(true){
    let edad = 20
    console.log(edad) // 20
}
console.log(edad) // 10
const edad = 10
const edad = 20 // SyntaxError

const edad = 10
edad = 20 // Error: "edad" is read-only

const edad = 10
if(true){
    const edad = 20
    console.log(edad) // 20
}
console.log(edad) // 10
var edades = [10,20,30]
var edades = [10,20,30,40]
console.log(edades)

let edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)

const edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)

const edades = [10,20,30]
edades.push(40)
console.log(edades)

const persona = {
    nombre: 'juanito',
    edad: 20
}

persona.edad = 21
persona.pais = 'México'

console.log(persona)