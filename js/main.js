const fetchCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/episode")
    .then((response) => {console.log(response.data.results[0].characters)})
    .catch(error => console.error(error));

};

fetchCharacters();

const fetchEpisodes = () => {
    axios.get("https://rickandmortyapi.com/api/episode")
    .then((response) => {console.log(response)})
    .catch(error => console.error(error));

};

fetchEpisodes();