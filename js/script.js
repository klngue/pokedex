// variables for elements HTML //
    // display image
    const pokeGif = document.querySelector('.pokemon_image')
    const pokeId = document.querySelector('.id_pokemon')
    const pokeName = document.querySelector('.name_pokemon')

    // variables for stats
    const HPnumber = document.querySelector('.number_hp')
    const Attacknumber = document.querySelector('.attack_number')
    const Defensenumber = document.querySelector('.defense_number')
    const Speednumber = document.querySelector('.speed_number')
    const SPattacknumber = document.querySelector('.spattack_number')
    const SPdefensenumber = document.querySelector('.spdefense_number')

    // variables for form
    const form = document.querySelector('.form')
    const inputSearch = document.querySelector('.inp_search')

// function to search the pokemon at API //

const SearchPokemon = async (pokemon) => {
    const APIReturn = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    // check if the Api returns true and send the data//
    if (APIReturn.status === 200){
        const data = await APIReturn.json()
        return data;
    }
}

// function to print the gif and the data inner html //
const PrintPokemon = async (pokemon) => {

    pokeName.innerHTML = 'Loading...';
    pokeId.innerHTML = '';

    const data = await SearchPokemon(pokemon);

    if (data){
        pokeGif.style.display = 'block';
        pokeGif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokeName.innerHTML = data.name;
        pokeId.innerHTML = data.id;
        inputSearch.value = '';
        HPnumber.innerHTML = data['stats']['0']['base_stat'];
        Attacknumber.innerHTML = data['stats']['1']['base_stat'];
        Defensenumber.innerHTML = data['stats']['2']['base_stat'];
        SPattacknumber.innerHTML = data['stats']['3']['base_stat'];
        SPdefensenumber.innerHTML = data['stats']['4']['base_stat'];
        Speednumber.innerHTML = data['stats']['5']['base_stat'];
    }
    else{
        pokeGif.style.display = 'none';
        pokeName.innerHTML = 'Not Found :(';
        pokeId.innerHTML = '';
        HPnumber.innerHTML = '00';
        Attacknumber.innerHTML = '00';
        Defensenumber.innerHTML = '00';
        SPattacknumber.innerHTML = '00';
        SPdefensenumber.innerHTML = '00';
        Speednumber.innerHTML = '00';
    }
}

// Event listener to call the function PrintPokemon, when submit the form //
form.addEventListener('submit', (event) => {
    event.preventDefault();
    PrintPokemon(inputSearch.value.toLowerCase());
});

