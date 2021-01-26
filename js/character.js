let singleCharacterString = '';

section.addEventListener('click', openSingleCharacter);
function openSingleCharacter(e){
    // section.innerHTML = '';

    setTimeout(function(){
        console.log(e.target.parentNode.parentNode.id)
        axios.get(`https://rickandmortyapi.com/api/character/${e.target.parentNode.parentNode.id} `)
        .then((response) => {
            console.log(response)
            displaySingleCharacter(response);
        //     displayEpisodeCharacters(response, e.target.parentNode.id - 1);
        })
        .catch(error => console.error(error));
    }, 10);

}

function displaySingleCharacter(){
    console.log('aqui')

}