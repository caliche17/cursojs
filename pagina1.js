import './pagina.sass'
import loadPagina2 from './pagina2.js'

window.onload = function () {
  const equipos = [
    'liverpool', 'flamengo', 'barcelona', 'river plate', 'palmeiras']

  const contenedor = document.querySelector('#lista-equipos')

  if (contenedor) {
    equipos.forEach(function (text) {
      const item = document.createElement('li')
      item.className = 'equipos'
      const valor = equipos.indexOf(text) + 1
      item.id = valor
      contenedor.appendChild(item)
      const a = document.createElement('a')
      a.setAttribute('href', './pagina2.html?equipoId=' + valor)
      a.textContent = text
      item.appendChild(a)
    })
  }

  loadPagina2()
}
