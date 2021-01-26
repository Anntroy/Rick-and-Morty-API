let singleCharacterString = '';

section.addEventListener('click', openSingleCharacter);

function openSingleCharacter(e){

    setTimeout(function(){
        console.log(e.target.parentNode.parentNode.id)
        axios.get(`https://rickandmortyapi.com/api/character/${e.target.parentNode.parentNode.id} `)
        .then((response) => {
            displaySingleCharacter(response);
        })
        .catch(error => console.error(error));
    }, 10);

};

const displaySingleCharacter = (response) => {
    console.log('aqui');

    section.classList.add('hidden');
    sectionCharacter.classList.remove('hidden');


    response.data.episode
    .forEach((episode) => {
        axios.get(`${episode}`)
        .then((episode) => getEpisodes(response, episode))
        .catch(error => console.error(error));
    })
}

    const getEpisodes = (response, episode) => {
        console.log(episode.data.id)

        singleCharacterString += `<button class="button display_episodes-button"><h3>Episode: ${episode.data.id}</h3><p>${episode.data.episode}</p></button>`
        sectionCharacter.innerHTML = `
        <article class="display_character">
            <figure class="photo" style="background-image: url('${response.data.image}');"></figure>
            <h2 class="section__h2">${response.data.name} </h2>
            <p class="section__p">${response.data.species} | ${response.data.status} | ${response.data.gender} | ${response.data.origin.name}</p>
            <hr>
        </article>
        <article class="display_episodes">${singleCharacterString}</article>`;
    }
