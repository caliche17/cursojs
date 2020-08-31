window.onload = function () {
    const equipos = [
        'liverpool', 'flamengo', 'barcelona', 'river plate', 'palmeiras'
    ]

    function ListaEquipos() {

        return equipos

    }

    console.log(ListaEquipos());


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


    console.log(detalleEquipos);

    console.log(detalleEquipos[4].jugador.edad)

    console.log(detalleEquipos[2].ligas[0])



    function imprimirEquipo(equipo) {
        return 'equipo: ' + equipo.nombre + '\n' + 'estadio: ' + equipo.estadio + '\n' + 'capacidad: ' + equipo.capacidad + '\n' + 'ligas: ' + equipo.ligas.join() + '\n' + 'jugador: ' + equipo.jugador.nombre + ' edad: ' + equipo.jugador.edad + ' dorsal: ' + equipo.jugador.dorsal

    }
    console.log(imprimirEquipo(detalleEquipos[2]))

}