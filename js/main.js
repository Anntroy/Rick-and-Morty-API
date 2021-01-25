// const fetchCharacters = () => {
//     axios.get("https://rickandmortyapi.com/api/episode")
//     .then((response) => displayEpisodesMain(response))
//     // .then((response) => {console.log(response.data.results[0].characters)})
//     .catch(error => console.error(error));

// };

// fetchCharacters();
const makeCharacter = (cid, cname, cimage, cstatus, cspecies) => ({cid, cname, cimage, cstatus, cspecies});
let charactersArray = [];

const displayEpisodesMain = (response) => {

    section.innerHTML = `
        <h2 class="header__button-h2">${response.data.results[0].name}</h2>
        <p class="header__button-p">${response.data.results[0].air_date}</p>
        <article class="section__article" id="sectionArticle"></article>`;
    const htmlString = response.data.results[0].characters
    .forEach((characters) => {
            axios.get(`${characters}`)
            .then((characters) => getCharacter(characters))
            .catch(error => console.error(error));
		})
        // .join('');
    // sectionArticle.innerHTML = `
};

const getCharacter = (characters) => {

    console.log(characters.data)
    const character = makeCharacter(characters.data.id, characters.data.name, characters.data.image, characters.data.status, characters.data.species);
    // article.innerHTML += `
    // <figure class="section__article-figure ${element.keyword} " style="background-image: url('${element.src}');"></figure>`
    // 
    // const charactersString = 
    charactersArray.push(character);
    console.log(charactersArray)
}
