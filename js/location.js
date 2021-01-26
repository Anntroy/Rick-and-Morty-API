let locationString = '';

sectionCharacter.addEventListener("click", openLocationCharacters);

function openLocationCharacters(e){

    sectionCharacter.classList.add('hidden');

    setTimeout(function(){

        if((e.target.dataset.location != undefined) && (e.target.textContent != 'unknown')){
            axios.get(`${e.target.dataset.location} `)
            .then((location) => {
                locationString = '';
                displayLocationCharacters(location.data, location.data.residents)
                sectionLocation.classList.remove('hidden');
            })
            .catch(error => console.error(error));
        }
    }, 0);

};

const displayLocationCharacters = (location, residents) => {

    residents
    .forEach((resident) => {
        axios.get(`${resident}`)
        .then((resident) => getLocationCharacters(location, resident))
        .catch(error => console.error(error));
    })
};

const getLocationCharacters = (location, resident) => {

    // console.log(location.dimension);
    // console.log(resident.data.status);

    locationString += `<div class="section__article-div" data-id="${resident.data.id}">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background-image: url('${resident.data.image}');"></div>
                            <div class="flip-card-back">
                                <h3 class="section__h3">${resident.data.name}</h3>
                                <p class="section__p">${resident.data.species} | ${resident.data.status}</p>
                            </div>
                        </div>
                    </div>`
    sectionLocation.innerHTML = `
        <h2 class="section__h2">${location.name}</h2>
        <p class="section__p">${location.type} | ${location.dimension}</p>
        <article class="section__article" id="sectionArticle">${locationString}</article>`;

}
