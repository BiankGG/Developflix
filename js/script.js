import peliculas from './peliculas.js'

/*
let generoContainer = document.querySelector('.genero-container');
let accion = document.getElementById('genero-28');
let thriller = document.getElementById('genero-53');
let aventuras = document.getElementById('genero-12');*/



let peliculasAventuras = peliculas.filter((peliculas) => peliculas.genre_ids.includes(12));
let peliculasThriller = peliculas.filter((peliculas) => peliculas.genre_ids.includes(53));
let peliculasAccion = peliculas.filter((peliculas) => peliculas.genre_ids.includes(28));



console.log(peliculasAventuras)




//img genero-12


let peliAventura = document.createElement('img');
peliAventura.setAttribute(
    'src','https://image.tmdb.org/t/p/w500/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg"')

    let peliAventura1 = document.createElement('img');
    peliAventura1.setAttribute(
        'src','https://image.tmdb.org/t/p/w500//aTvePCU7exLepwg5hWySjwxojQK.jpg')

    let peliAventura2 = document.createElement('img');
    peliAventura2.setAttribute ('src','https://image.tmdb.org/t/p/w500/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg');
    
    let peliAventura3 = document.createElement('img');
    peliAventura3.setAttribute ('src','https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg');
   
    let peliAventura4 = document.createElement('img');
    peliAventura4.setAttribute ('src','https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg');
   
    let peliAventura5 = document.createElement('img');
    peliAventura5.setAttribute ('src','https://image.tmdb.org/t/p/w500/kt9nqD0uOar8IVE9191HXhWOXKI.jpg');


let cajaImagen =document.getElementById('box1');
cajaImagen.appendChild(peliAventura);
cajaImagen.appendChild(peliAventura1);
cajaImagen.appendChild(peliAventura2);
cajaImagen.appendChild(peliAventura3);
cajaImagen.appendChild(peliAventura4);
cajaImagen.appendChild(peliAventura5);



//imagen genero-53

let peliTriller = document.createElement('img');
peliTriller.setAttribute(
    'src','https://image.tmdb.org/t/p/w500/qXChf7MFL36BgoLkiB3BzXiwW82.jpg')

    let peliTriller1 = document.createElement('img');
    peliTriller1.setAttribute(
        'src','https://image.tmdb.org/t/p/w500/ljl70pjLIX1hx3bPyCCbxGj6WPr.jpg')

    let peliTriller2 = document.createElement('img');
    peliTriller2.setAttribute ('src','https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg');
    
    let peliTriller3 = document.createElement('img');
    peliTriller3.setAttribute ('src','https://image.tmdb.org/t/p/w500/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg');
   
    let peliTriller4 = document.createElement('img');
    peliTriller4.setAttribute ('src','https://image.tmdb.org/t/p/w500//iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg');
   
    let peliTriller5 = document.createElement('img');
    peliTriller5.setAttribute ('src','https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg');




let cajaImagen2 =document.getElementById('box2');
cajaImagen2.appendChild(peliTriller);
cajaImagen2.appendChild(peliTriller1);
cajaImagen2.appendChild(peliTriller2);
cajaImagen2.appendChild(peliTriller3);
cajaImagen2.appendChild(peliTriller4);
cajaImagen2.appendChild(peliTriller5);



//genero imagen-28
let peliAccion = document.createElement('img');
peliAccion.setAttribute(
    'src','https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg')

    let peliAccion1 = document.createElement('img');
    peliAccion1.setAttribute(
        'src','https://image.tmdb.org/t/p/w500//yNySAgpAnWmPpYinim9E0tUzJWG.jpg')

    let peliAccion2 = document.createElement('img');
    peliAccion2.setAttribute ('src','https://image.tmdb.org/t/p/w500/ssEFC5wfFjj7lJpUgwJDOK1Xu1J.jpg');
    
    let peliAccion3 = document.createElement('img');
    peliAccion3.setAttribute ('src','https://image.tmdb.org/t/p/w500/r08U3dwiOeStXcjYmfnRyumgKyq.jpg');
   
    let peliAccion4 = document.createElement('img');
    peliAccion4.setAttribute ('src','https://image.tmdb.org/t/p/w500/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg');
   
    let peliAccion5 = document.createElement('img');
    peliAccion5.setAttribute ('src','https://image.tmdb.org/t/p/w500/a9bt9byTQ1MIfRWYQX240HiYPrl.jpg');




let cajaImagen3 =document.getElementById('box3');
cajaImagen3.appendChild(peliAccion);
cajaImagen3.appendChild(peliAccion1);
cajaImagen3.appendChild(peliAccion2);
cajaImagen3.appendChild(peliAccion3);
cajaImagen3.appendChild(peliAccion4);
cajaImagen3.appendChild(peliAccion5);





let titleElement = document.createElement('h4'); 
titleElement.textContent = 'Gran Turismo',
cajaImagen.appendChild(titleElement);
