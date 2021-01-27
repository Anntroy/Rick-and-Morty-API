
const fetchEpisodes = (e) => {

    setTimeout(function(){

        console.log(e.target)

        axios.get("https://rickandmortyapi.com/api/episode")
        .then((response) => {
            displayEpisodes(response);
        })
        .catch(error => console.error(error));

    }, 0);

};

startButton.addEventListener('click', fetchEpisodes)
// fetchEpisodes();

const displayEpisodes = (response) => {

    episodesList.classList.remove('hidden');
    console.log(response)

	const htmlString = response.data.results
		.map((episode) => {
            return `
                <button class="episode button" data-id="${episode.id}">Episode ${episode.id}: ${episode.name}
                </button>`;
		})
        .join('');
        episodesList.innerHTML = htmlString;
        episodesList.innerHTML +=`<button class="episode button" data-add-button="addButton">Press to load more...</button>`
        console.log(episodesList)

};
