
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
                <li class="episode" id="${episode.id}">
                <p class="episode__p">Episode ${episode.id}: ${episode.name}</p>
                </li>`;
		})
        .join('');
        episodesList.innerHTML = htmlString;

};

episodesList.addEventListener("click", openEpisodeCharacters);

function openEpisodeCharacters(e){

    sectionCharacter.classList.add('hidden');

    section.innerHTML = '';

    setTimeout(function(){
        axios.get("https://rickandmortyapi.com/api/episode")
        .then((response) => {
            section.classList.remove('hidden');
            articleString = '';
            displayEpisodeCharacters(response, e.target.parentNode.id - 1);
        })
        .catch(error => console.error(error));
    }, 10);

};
