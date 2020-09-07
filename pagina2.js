window.onload = function () {

    const detalleEquipos = [

        {
            nombre: 'Liverpool',
            estadio: 'Anfield',
            capacidad: 54.074 + " Espectadores",
            ligas: ['Premier League', ' Champions League', ' FA cup'],
            imgEstadio: "https://i2-prod.liverpoolecho.co.uk/incoming/article16798509.ece/ALTERNATES/s615b/0_GettyImages-962696852.jpg",
            jugador: {
                foto: "https://bolavip.com/__export/1589918623673/sites/bolavip/img/2020/05/19/mohamed_salah_liverpool_crop1589918623088.jpg_423682103.jpg",
                nombre: 'Salah',
                edad: 28,
                dorsal: 11
            }
        },
        {
            nombre: 'Flamengo',
            estadio: 'Maracana',
            capacidad: 78.838 + " Espectadores",
            ligas: ['Carioca', ' Serie A', ' Libertadores'],
            imgEstadio: "https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2019/05/09/15574167512689.jpg",
            jugador: {
                foto: "https://i2.wp.com/www.todofichajes.com/wp-content/uploads/2019/10/gabigol-2.jpg?resize=1140%2C760&ssl=1",
                nombre: 'Gabigol',
                edad: 23,
                dorsal: 9
            }

        },
        {
            nombre: 'Barcelona',
            estadio: 'Camp Nou',
            capacidad: 99.354 + " Espectadores",
            ligas: ['La liga', ' Super Copa', ' Champion League'],
            imgEstadio: "https://www.ticketsnet.es/imagesRecintos/Camp02.jpg",
            jugador: {
                foto: "https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2020/08/11/messi.jpg?itok=Mg-MjWcd",
                nombre: 'Messi',
                edad: 33,
                dorsal: 10
            }
        },
        {
            nombre: 'River Plate',
            estadio: 'Antonio Vespuso',
            capacidad: 70.074 + " Espectadores",
            ligas: ['Liga Argentina', ' Super Copa AFA', ' Libertadores'],
            imgEstadio: "https://aquichacarita.files.wordpress.com/2018/03/2013-vista-ac3a9rea.jpg?w=474&h=291",
            jugador: {
                foto: "https://dhdfexirteq2k.cloudfront.net/sites/3/borre-festejo-gol-final-libertadores-2019-santos-rafael.jpg_1292727530.jpg",
                nombre: 'Borre',
                edad: 24,
                dorsal: 7
            }
        },
        {
            nombre: 'Palmeiras',
            estadio: 'Allianz Parque',
            capacidad: 55.002 + " Espectadores",
            ligas: ['Serie A', ' Copa Brasil', ' Libertadores'],
            imgEstadio: "https://besthqwallpapers.com/Uploads/3-1-2019/76513/thumb2-palmeiras-stadium-allianz-parque-summer-aerial-view-artwork.jpg",
            jugador: {
                foto: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/07/Willian-Bigode-Palmeiras.jpg",
                nombre: 'Gomes',
                edad: 33,
                dorsal: 29
            }
        }
    ]

    const parametroUrl = new URLSearchParams(window.location.search);
    const dato = parametroUrl.get("equipoId");

    if (dato <= detalleEquipos.length) {

        constructor(detalleEquipos[dato - 1]);
        function constructor(equipo) {
            const titulo = document.querySelector("header>h1>strong");
            titulo.textContent = equipo.nombre;
            const imagenEstadio = document.querySelector("#estadio>.imagen>img");
            imagenEstadio.src = equipo.imgEstadio;
            const estadio = document.querySelector("#estadio>.parrafos>p");
            estadio.textContent = equipo.estadio;
            const asistentes = document.querySelector("#asistentes>.parrafos>p");
            asistentes.textContent = equipo.capacidad;
            const ligas = document.querySelector("#ligas>.parrafos>p");
            ligas.textContent = equipo.ligas;
            const mejorJugador = document.querySelector("#jugador>.imagen>img");
            mejorJugador.src = equipo.jugador.foto;
            const jugador = document.querySelector("#jugador>.parrafos>p");
            jugador.textContent = equipo.jugador.nombre + "- " + equipo.jugador.edad + " años" + "- dorsal:" + equipo.jugador.dorsal
        }
    } else {
        window.location= "./pagina1.html";
    }


}

