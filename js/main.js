// const fetchCharacters = () => {
//     axios.get("https://rickandmortyapi.com/api/episode")
//     .then((response) => displayEpisodesMain(response))
//     // .then((response) => {console.log(response.data.results[0].characters)})
//     .catch(error => console.error(error));

// };

// fetchCharacters();
const makeCharacter = (cid, cname, cimage, cstatus, cspecies) => ({cid, cname, cimage, cstatus, cspecies});
let charactersArray = [];
let articleString = '';

const displayEpisodesMain = (response) => {

    console.log(response)

    const htmlString = response.data.results[0].characters
    .forEach((characters) => {
        axios.get(`${characters}`)
        .then((characters) => getCharacter(response, characters))
        .catch(error => console.error(error));
    })
    // .join('');
    // sectionArticle.innerHTML = ;
};

const getCharacter = (response, characters) => {

    // console.log(characters.data.image)
    const character = makeCharacter(characters.data.id, characters.data.name, characters.data.image, characters.data.status, characters.data.species);
    articleString += `<div class="section__article-div" id="${characters.data.id}">
    <div class="flip-card-inner">
    <div class="flip-card-front" style="background-image: url('${characters.data.image}');"></div>
    <div class="flip-card-back">
    <h3 class="section__h3">${characters.data.name}</h3>
    <p class="section__p">${characters.data.species} / ${characters.data.status}</p>
    </div>
    </div>
    </div>`
    section.innerHTML = `
        <h2 class="header__button-h2">${response.data.results[0].name}</h2>
        <p class="header__button-p">${response.data.results[0].air_date}</p>
        <article class="section__article" id="sectionArticle">${articleString}</article>`;
}
