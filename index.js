document.addEventListener('DOMContentLoaded', function() {
const url = 'https://rickandmortyapi.com/api/character';
const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
        console.log(this.response);
        
        const HTMLResponse = document.querySelector('#api');
        const characterList = data.results;
        const tpl = characterList.map((character) => `<li>${character.name} <br> ${character.status} <br> ${character.species} <br> ${character.gender} <br> ${character.origin.name} <br> ${character.location.name} <br> <img src="${character.image}" alt="${character.name}"></li>`);
        HTMLResponse.innerHTML = `<ul>${tpl.join('')}`;
    }
}
xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${url}`);
xhr.send();
});