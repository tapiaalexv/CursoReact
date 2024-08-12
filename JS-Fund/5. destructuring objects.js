const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ['peludo', 'negro']
}

console.log(mascota.razas[1])
console.log(mascota.nombre)

const nombreMascota = mascota.nombre
console.log(nombreMascota)

const {nombre} = mascota
console.log(nombre)

//Prácticas
// objetos
    const web = {
        nombre: 'bluuweb',
        links: {
            enlace: 'www.bluuweb.cl'
        },
        redesSociales:{
            youtube:{
                enlace: 'youtube.com/bluuweb',
                nombre: 'bluuweb yt'
            },
            facebook:{
                enlace: 'facebook.com/bluuweb',
                nombre: 'bluuweb fb'
            }
        }
    }

const enlaceYT = web.redesSociales.youtube.enlace
console.log(enlaceYT)

const {enlace, nombre} = web.redesSociales.youtube
console.log(enlace)
console.log(nombre)