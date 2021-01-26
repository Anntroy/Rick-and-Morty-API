let articleString = '';

const displayEpisodeCharacters = (response, id) => {

    response.data.results[id].characters
    .forEach((characters) => {
        axios.get(`${characters}`)
        .then((characters) => getCharacter(response, characters, id))
        .catch(error => console.error(error));
    })
};

const getCharacter = (response, characters, id) => {

    articleString += `<div class="section__article-div" id="${characters.data.id}">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background-image: url('${characters.data.image}');"></div>
                            <div class="flip-card-back">
                                <h3 class="section__h3">${characters.data.name}</h3>
                                <p class="section__p">${characters.data.species} | ${characters.data.status}</p>
                            </div>
                        </div>
                    </div>`
    section.innerHTML = `
        <h2 class="section__h2">${response.data.results[id].name}</h2>
        <p class="section__p">${response.data.results[id].air_date}</p>
        <article class="section__article" id="sectionArticle">${articleString}</article>`;

}
