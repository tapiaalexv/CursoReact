//fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json()
    )
    .then((data) => {
        //console.log(data.result)
        let arrayNombres = []
        data.result.forEach(element => {
            //console.log(element.name);
            arrayNombres.push(element.name)
        });
        console.log(arrayNombres)
    })
    .catch(error => console.log(error))

//async - await
const obtenerPokemons = async() => {
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();
        console.log(data.result)
        const arrayNombres = data.result.map(poke => poke.name)
        console.log(arrayNombres)
    }catch(error){
        console.log(error);
    }
}
