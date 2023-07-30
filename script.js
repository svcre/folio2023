let vgnrModale = document.getElementById('p-vgnr')
let backModale = document.getElementById('p-back')
let pkmnModale = document.getElementById('p-pkmn')
let reactModale = document.getElementById('p-react')
let emoteModale = document.getElementById('p-emote')
let seoModale = document.getElementById('p-seo')

let vgnrBox = document.getElementById('thumb-vgnr')
let backBox = document.getElementById('thumb-back')
let pkmnBox = document.getElementById('thumb-pkmn')
let reactBox = document.getElementById('thumb-react')
let emoteBox = document.getElementById('thumb-emote')
let seoBox = document.getElementById('thumb-seo')

let wrapper = document.querySelector('.modale-wrapper')

// first modale
vgnrBox.addEventListener('click', () => {
    wrapper.style.display = 'block';
    vgnrModale.style.display = 'flex';
})

// second modale
pkmnBox.addEventListener('click', () => {
    wrapper.style.display = 'block';
    pkmnModale.style.display = 'flex';
})

// third modale
emoteBox.addEventListener('click', () => {
    wrapper.style.display = 'block';
    emoteModale.style.display = 'flex';
})

// fourth modale
backBox.addEventListener('click', () => {
    wrapper.style.display = 'block';
    backModale.style.display = 'flex';
})

// fifth modale
reactBox.addEventListener('click', () => {
    wrapper.style.display = 'block';
    reactModale.style.display = 'flex';
})

// seo modale
seoBox.addEventListener('click', () => {
    wrapper.style.display = 'block';
    seoModale.style.display = 'flex';
})

// close modale
wrapper.addEventListener('click', () => {
    wrapper.style.display = 'none';
    vgnrModale.style.display = 'none';
    pkmnModale.style.display = 'none';
    reactModale.style.display = 'none';
    backModale.style.display = 'none';
    emoteModale.style.display = 'none';
    seoModale.style.display = 'none';
})