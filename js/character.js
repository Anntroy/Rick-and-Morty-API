let singleCharacterString = '';

section.addEventListener('click', openSingleCharacter);
sectionLocation.addEventListener('click', openSingleCharacter);

function openSingleCharacter(e){

    singleCharacterString ='';

    setTimeout(function(){
        if(e.target.parentNode.parentNode.dataset.id != undefined){
            axios.get(`https://rickandmortyapi.com/api/character/${e.target.parentNode.parentNode.dataset.id} `)
            .then((response) => {
                displaySingleCharacter(response);
            })
            .catch(error => console.error(error));
        }
    }, 10);

};

const displaySingleCharacter = (response) => {

    section.classList.add('hidden');
    sectionLocation.classList.add('hidden');
    sectionCharacter.classList.remove('hidden');


    response.data.episode
    .forEach((episode) => {
        axios.get(`${episode}`)
        .then((episode) => getEpisodes(response, episode))
        .catch(error => console.error(error));
    })
}

    const getEpisodes = (response, episode) => {

        console.log(response.data.origin.url)

        singleCharacterString += `<button class="button display_episodes-button" data-id="${episode.data.id}"><h3>Episode: ${episode.data.id}</h3><p>${episode.data.episode}</p></button>`
        sectionCharacter.innerHTML = `
        <article class="display_character">
            <figure class="photo" style="background-image: url('${response.data.image}');"></figure>
            <h3 class="section__h3 display_character__h3">${response.data.name} </h3>
            <p class="section__p display_character__p">${response.data.species} | ${response.data.status} | ${response.data.gender} | <span data-location="${response.data.origin.url}">${response.data.origin.name}</span></p>
            <hr>
        </article>
        <article class="display_episodes">${singleCharacterString}</article>`;

    }
