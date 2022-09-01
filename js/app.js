//Captura de variables
let peliculas = [];

let pelPuntuadas = [];
let pelEstrenadas = [];
let demaspeliculas = [];

let catGeneros = [];
let matRelGenero = [];

const urlImg = "https://image.tmdb.org/t/p/w500";
const API_KEY = "26eec00a6468a2c43e30836594ff36c3";
const api_url = "https://api.themoviedb.org/3/";
const peliculasEstr = document.querySelector('#barra_estrenos');
const peliculasPunt = document.querySelector('#barra_puntuadas');
const peliculasAcc = document.querySelector('#barra_accion');
const peliculasAve = document.querySelector('#barra_aventura');
const peliculasAni = document.querySelector('#barra_animacion');
const peliculasCom = document.querySelector('#barra_comedia');
const peliculasCri = document.querySelector('#barra_crimen');
const peliculasDoc = document.querySelector('#barra_documental');
const peliculasDra = document.querySelector('#barra_drama');
const peliculasFam = document.querySelector('#barra_familia');
const peliculasFan = document.querySelector('#barra_fantasia');
const peliculasHis = document.querySelector('#barra_historia');
const peliculasTer = document.querySelector('#barra_terror');
const peliculasMus = document.querySelector('#barra_musica');
const peliculasMis = document.querySelector('#barra_misterio');
const peliculasRom = document.querySelector('#barra_romance');
const peliculasCie = document.querySelector('#barra_cienciaFiccion');
const peliculasPel = document.querySelector('#barra_peliculaTv');
const peliculasSus = document.querySelector('#barra_suspense');
const peliculasBel = document.querySelector('#barra_belica');
const peliculasWes = document.querySelector('#barra_western');
const ctlcarrusel = document.querySelector('#carrusel');
const listyoutube = [
    {
        "id": "610150",
        "urlyt": "https://www.youtube.com/embed/lXLPVQ-WrU4"
    },
    {
        "id": "539681",
        "urlyt": "https://www.youtube.com/embed/WlTMOzXBGBs"
    },
    {
        "id": "744276",
        "urlyt": "https://www.youtube.com/embed/W3nhY1rL0OM"
    },
    {
        "id": "756999",
        "urlyt": "https://www.youtube.com/embed/XhcEnHDKHco"
    },
    {
        "id": "634649",
        "urlyt": "https://www.youtube.com/embed/6QkTCmhOzuA"
    },
    {
        "id": "961484",
        "urlyt": "https://www.youtube.com/embed/A36RDnV784o"
    },
    {
        "id": "760161",
        "urlyt": "https://www.youtube.com/embed/CLuVbRlSAuE"
    },
    {
        "id": "19995",
        "urlyt": "https://www.youtube.com/embed/jYRtFFa4hT8"
    },
    {
        "id": "619803",
        "urlyt": "https://www.youtube.com/embed/aeZXhy6mIyE"
    },
    {
        "id": "985939",
        "urlyt": "https://www.youtube.com/embed/h4P34ecf-IQ"
    },
    {
        "id": "676701",
        "urlyt": "https://www.youtube.com/embed/WlMTN5_SndU"
    },
    {
        "id": "766907",
        "urlyt": "https://www.youtube.com/embed/Swks-5pZQEw"
    },
    {
        "id": "676705",
        "urlyt": "https://www.youtube.com/embed/vZ4k8qjQfgQ"
    },
    {
        "id": "698508",
        "urlyt": "https://www.youtube.com/embed/m6Z4aAGgNQc"
    },
    {
        "id": "601796",
        "urlyt": "https://www.youtube.com/embed/l9288UVTHkA"
    },
    {
        "id": "830788",
        "urlyt": "https://www.youtube.com/embed/qEvL8hD09GY"
    },
    {
        "id": "366672",
        "urlyt": "https://www.youtube.com/embed/-B2sjU3y-4A"
    },
    {
        "id": "763788",
        "urlyt": "https://www.youtube.com/embed/2_Q_UOjNvSo"
    },
    {
        "id": "936074",
        "urlyt": "https://www.youtube.com/embed/cAWDlTpcXsA"
    },
    {
        "id": "743439",
        "urlyt": "https://www.youtube.com/embed/ksSC76cl7M0"
    }
]

//Crear el evento para mostrar informacion cuando cargue la pagina.
document.addEventListener('DOMContentLoaded', () => {
    //Mandar llamar las API'S para cargar la bd y la estructura de la pagina.
    mostrarHtmlEstrenos();
    mostrarHtmlPuntuadas();

    mostrarHtmlGeneros();
})

// funcion para mostrar por genero
async function mostrarHtmlGeneros() {
    await cargarGenero();
    
    for (const gene of matRelGenero) {
        if (gene.id_gen == 28) {
            arrahtml(peliculasAcc, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 12) {
            arrahtml(peliculasAve, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 16) {
            arrahtml(peliculasAni, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 35) {
            arrahtml(peliculasCom, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 80) {
            arrahtml(peliculasCri, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 99) {
            arrahtml(peliculasDoc, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 18) {
            arrahtml(peliculasDra, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 10751) {
            arrahtml(peliculasFam, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 14) {
            arrahtml(peliculasFan, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 36) {
            arrahtml(peliculasHis, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 27) {
            arrahtml(peliculasTer, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 10402) {
            arrahtml(peliculasMus, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 9648) {
            arrahtml(peliculasMis, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 10749) {
            arrahtml(peliculasRom, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 878) {
            arrahtml(peliculasCie, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 10770) {
            arrahtml(peliculasPel, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 53) {
            arrahtml(peliculasSus, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 10752) {
            arrahtml(peliculasBel, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
        if (gene.id_gen == 37) {
            arrahtml(peliculasWes, gene.peliculas.slice(0, gene.peliculas.length < 15 ? gene.peliculas.length : 15))
        }
    }
}

//Funcion para obtener todas las peliculas de cada Genero.
async function cargarGenero() {
    await obtGeneros();  
    for (const gen of catGeneros[0]) {
     
        let arrgenresponse = await obtPeliculasxGen(gen.id);
        //       console.log(arrgenresponse);
        let arrayresponse =
        {
            'id_gen': gen.id,
            'nombre': gen.name,
            'peliculas': arrgenresponse
        };
        matRelGenero.push(arrayresponse);
    }

}



//Crear funcion que recorre el array de objetos y muestre el HTML.
async function mostrarHtmlPuntuadas() {
    await obtPuntuadas();
    
    let arrayresponse =
    {
        'id_gen': '77777',
        'nombre': 'punteros',
        'peliculas': pelPuntuadas[0]
    };
    matRelGenero.push(arrayresponse);
    arrahtml(peliculasPunt, pelPuntuadas[0].slice(0, 15))
}

//Crear funcion que recorre el array de objetos y muestre el HTML.
async function mostrarHtmlEstrenos() {
    await obtEstrenos();

    let peli = pelEstrenadas[0];
    let contador =0;
    let iddiv = 'product_'; 
    peli.forEach(pelicula => {
        const { id, poster_path, title, backdrop_path, original_language, overview, release_date, popularity } = pelicula;
        const cardPelicula = document.createElement('div');
        cardPelicula.classList.add('product', 'row__posters');
        cardPelicula.setAttribute("id", `${iddiv}${contador}`);
        cardPelicula.innerHTML = `
            <img class="row__poster row__posterLarge" src="${urlImg}${poster_path}" id="${id}" alt="" onclick="myfunction(${id})"  />
        `;
       // ctlcarrusel.appendChild(cardPelicula)
          peliculasEstr.appendChild(cardPelicula)
        contador++;
    })
}

function arrahtml(control, datos) {
   
    let peli = datos;
   
    let contador = 0;
    let iddiv = 'xvxvxv';
    peli.forEach(pelicula => {
        const { id, poster_path, title } = pelicula;
        //console.log(pelicula);
        const cardPelicula = document.createElement('div');
        cardPelicula.classList.add('product', 'row__posters');
        cardPelicula.setAttribute("id", `${iddiv}${contador}`);
        cardPelicula.innerHTML = `
            <img class="row__poster row__posterLarge" src="${urlImg}${poster_path}" id="${id}" alt="" onclick="otraspeliculas(${id})" />
        `;
        control.appendChild(cardPelicula)
        contador++;
    })

}

function otraspeliculas(pidrow) {
    var URLytb = "https://www.youtube.com/embed/TDP4QSRuYZw";
    let peli = matRelGenero;
    let reg=[]
    
    for (const item of peli) {
        for (const pelis of item.peliculas) {
            if(pelis.id == pidrow){
                reg=pelis;
            }
           
        }
    }
    
    let myImg = urlImg + reg.backdrop_path;    

    $('#peliId').text(reg.id);
    $('#titulo').text(reg.title);
    $('#sinopsis').text(reg.overview);
    $('#imagenpelicula').html(' <img  src="' + myImg + '" alt=""   />');
    $('#trailerpelicula').html('<iframe width="560" height="315" src="' + URLytb + '" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen ></iframe > ');
    $("#exampleModal").modal();
}

function myfunction(pidrow) {   
    let URLytb = "";
    let ltrailer = listyoutube.filter((it) => {
        return it.id == pidrow
    })
    URLytb = ltrailer[0].urlyt;
    let peli = pelEstrenadas[0];
    let reg = peli.filter((data) => {
        return data.id == pidrow;
    }
    )
    let myImg = urlImg + reg[0].backdrop_path;   

    $('#peliId').text(reg[0].id);
    $('#titulo').text(reg[0].title);
    $('#sinopsis').text(reg[0].overview);
    $('#imagenpelicula').html(' <img  src="' + myImg + '" alt=""   />');
    $('#trailerpelicula').html('<iframe width="560" height="315" src="' + URLytb + '" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen ></iframe > ');
    $("#exampleModal").modal();
}

$(".tablaProductos tbody").on("click", "img.myImg", function () {
    var imagen = $(this).src("myImg");
    $(".img01").attr("src", 'imagen');

})

//Consumir API que obtiene peliculas por generos.
async function obtPeliculasxGen(id_genr) {
    let url = `${api_url}discover/movie?api_key=${API_KEY}&language=es&with_genres=${id_genr}`;
    try {
        let response = await axios.get(url)
        return response.data.results
    } catch (e) {
        console.log(e)
        return null
    }
}

//Funcion para obtener todas las peliculas que ocuparemos en la pagina Clon de NetFlix por generos.
async function cargarBD() {
    let response;

    for (let index = 1; index < catgeneros.length; index++) {
        response = await obtPeliculasxGen(index);
        if (peliculas.length === 0) {
            peliculas.push(response);
        } else {
            response.forEach(element => {
                peliculas[0].push(element);
            });            
        }
    }

}

//API para obtener las peliculas MEJOR PUNTUADAS.
async function obtPuntuadas() {
    let url = `${api_url}movie/top_rated?api_key=${API_KEY}&language=es`;
    try {

        let response = await axios.get(url)
        pelPuntuadas.push(response.data.results);
    } catch (e) {
        console.log(e)
        return null
    }
}

//API para obtener las peliculas DE ESTRENOS.
async function obtEstrenos() {
    let url = `${api_url}movie/upcoming?api_key=${API_KEY}&language=es`;

    try {
        let response = await axios.get(url)
        pelEstrenadas.push(response.data.results);
    } catch (e) {
        console.log(e)
        return null
    }
}

//API para obtener la categoria de GENEROS de las peliculas.
async function obtGeneros() {
    let url = `${api_url}genre/movie/list?api_key=${API_KEY}&language=es`;
    try {
        console.log(url);
        let response = await axios.get(url);
        catGeneros.push(response.data.genres);
    } catch (e) {
        console.log(e)
        return null
    }
}

function addItemLS(key, item) {
    if (typeof item == 'string') {
        localStorage.setItem(key, item);
    } else {
        localStorage.setItem(key, JSON.stringify(item));
    }
}


let current = 0;
let imagenes = new Array();

$(document).ready(function (args) {
    var numImages = 13;
    
    $('.left-arrow').on('click', function () {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 3;
        }

        $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);

        return false;
    });

    $('.left-arrow').on('hover', function () {
        $(this).css('opacity', '0.5');
    }, function () {
        $(this).css('opacity', '1');
    });

    $('.right-arrow').on('hover', function () {
        $(this).css('opacity', '0.5');
    }, function () {
        $(this).css('opacity', '1');
    });

    $('.right-arrow').on('click', function () {
        if (numImages > current + 3) {
            current = current + 1;
        } else {
            current = 0;
        }

        $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);

        return false;
    });
});
