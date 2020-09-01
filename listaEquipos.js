window.onload = function () {
    const equipos = [
        'liverpool', 'flamengo', 'barcelona', 'river plate', 'palmeiras'
    ]

    const detalleEquipos = [

        {
            nombre: 'liverpool',
            estadio: 'anfield',
            capacidad: 54074,
            ligas: ['premier league', 'champions league', 'FA cup'],
            jugador: {
                nombre: 'salah',
                edad: 28,
                dorsal: 11
            }
        },
        {
            nombre: 'flamengo',
            estadio: 'maracana',
            capacidad: 78838,
            ligas: ['carioca', 'serie A', 'libertadores'],
            jugador: {
                nombre: 'gabigol',
                edad: 23,
                dorsal: 9
            }

        },
        {
            nombre: 'barcelona',
            estadio: 'camp nou',
            capacidad: 99354,
            ligas: ['la liga', 'super copa', 'champion league'],
            jugador: {
                nombre: 'messi',
                edad: 33,
                dorsal: 10
            }
        },
        {
            nombre: 'river plate',
            estadio: 'antonio vespuso',
            capacidad: 70074,
            ligas: ['Liga Argentina', 'Super Copa AFA', 'Libertadores'],
            jugador: {
                nombre: 'borre',
                edad: 24,
                dorsal: 7
            }
        },
        {
            nombre: 'palmeiras',
            estadio: 'allianz parque',
            capacida: 55000,
            ligas: ['serie A', 'copa Brasil', 'Libertadores'],
            jugador: {
                nombre: 'gomes',
                edad: 33,
                dorsal: 29
            }
        }
    ]

    const contenedor = document.querySelector("#lista-equipos");


    equipos.forEach(function (text) {
        const item = document.createElement("li");
        item.textContent = text;
        item.className = "equipos";
        contenedor.appendChild(item);
        if (text == "barcelona") {
            item.textContent=null;
            const a = document.createElement("a");
            a.setAttribute('href', 'file:///C:/Users/use/Desktop/cursojs/pagina2.html');
            a.textContent = text;
            item.appendChild(a);
            
        }
    })


    

}