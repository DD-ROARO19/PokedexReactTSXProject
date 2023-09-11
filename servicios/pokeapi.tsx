let url = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemon(id:string) {
    console.group("Consulta");

        console.log("Buscado: "+url+id);
        let res = await fetch(url+id);
        let pokemon = await res.json();
        console.log(pokemon);

    console.groupEnd();

    // return pokemon;

    let pokemonData = {
        Id: pokemon['id'],
        Name: pokemon['name'],
        Type: pokemon['types'],
        Img_Anim: pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
        Img: pokemon['sprites']['front_default']
    };

    return pokemonData;
    
    // let pokemonId = pokemon['id'];
    // let pookemonName = pokemon['name'];
    // let pokemonType = pokemon['type'];
    // let pokemonImg = pokemon['sprites']['front_default'];

    // res = await fetch(pokemon['species']['url']);
    // let pokemonDescription = await res.json();

    // console.log(pokemonDescription);
    
}

export {getPokemon};