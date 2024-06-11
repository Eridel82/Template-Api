import getMovieFromTmbd from './data/movies.js'
import getMoviepopFromTmbd from './data/moviepop.js'

const movie = await getMovieFromTmbd()
const data = movie.results;
console.log(data);


const lista = document.getElementById('lista1')
const template = document.getElementById('template').content
const fragmento = new DocumentFragment()
data.forEach(item => {
    template.querySelector('.titulo-pe').textContent = item.title
    template.querySelector('.fec-pel').textContent = item.release_date
    template.querySelector('.ti-or-pe').textContent = item.original_title
    template.querySelector('.votos-pel').textContent = item.vote_average
    template.querySelector('.des-pe').textContent = item.overview
    template.querySelector('.d').src = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
    template.querySelector('.img-fondo-peli').src = 'https://image.tmdb.org/t/p/w500'+item.backdrop_path;

    const templateClone = template.cloneNode(true);
    fragmento.appendChild(templateClone)
    
});
lista.appendChild(fragmento);


// <-----Peliculas  Poulares ----->

const moviepop = await getMoviepopFromTmbd()
const dta = moviepop.results
console.log(dta);
const lis_pop = document.getElementById('list-pop')
const template2 = document.getElementById('template-pop').content
const fragm = new DocumentFragment()


dta.forEach(item => {
    template2.querySelector('.img-pop').src = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
    template2.querySelector(".text-pop").textContent = item.title

    
    const templateClonepop = template2.cloneNode(true);
    fragm.appendChild(templateClonepop)
});
lis_pop.appendChild(fragm);


