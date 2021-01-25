
const fetchEpisodes = () => {

    axios.get("https://rickandmortyapi.com/api/episode")
    .then((response) => {
        displayEpisodes(response);
        displayEpisodeCharacters(response)
    })
    .catch(error => console.error(error));

};

fetchEpisodes();

const displayEpisodes = (response) => {

	const htmlString = response.data.results
		.map((episode) => {
            return `
                <li class="episode" id="${episode.id}">
                <p class="episode__p">Episode ${episode.id}: ${episode.name}</p>
                </li>`;
		})
        .join('');
        episodesList.innerHTML = htmlString;

};
