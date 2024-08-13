//asyn - await
const obtenerDigimons = async () => {
    try {
        const res = await fetch("https://digi-api.com/api/v1/digimon/");
        const data = await res.json();
        console.log(data.content);
    } catch (err) {
        console.log(err);
    }
}
obtenerDigimons();