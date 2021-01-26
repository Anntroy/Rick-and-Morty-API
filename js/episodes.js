
const fetchEpisodes = () => {

    axios.get("https://rickandmortyapi.com/api/episode")
    .then((response) => {
        displayEpisodes(response);
    })
    .catch(error => console.error(error));

};

fetchEpisodes();

const displayEpisodes = (response) => {

	const htmlString = response.data.results
		.map((episode) => {
            return `
                <button class="episode button" data-id="${episode.id}">Episode ${episode.id}: ${episode.name}
                </button>`;
                // <p class="episode__p"></p>
		})
        .join('');
        episodesList.innerHTML = htmlString;

};
