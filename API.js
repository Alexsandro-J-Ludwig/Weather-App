const lat = localStorage.getItem('lat')
const lon = localStorage.getItem('lon')
const apiKey
 = 'e288bd0eb42291d169d8047eeae9604f';

const temperatura = document.getElementById('temperatura')
const umidade = document.getElementById('umidade')
const velocVento = document.getElementById('velocVento')
const descricao = document.getElementById('descricao')

addEventListener('DOMContentLoaded', requisitarClima(lat, lon), localizar())

function requisitarClima(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter os dados da API');
            }
            return response.json()
        })

        .then(data => {
            temperatura.innerHTML = (data.main.temp -273.15).toFixed(1)
            umidade.innerHTML = data.main.humidity
            velocVento.innerHTML = (data.wind.speed * 1.609).toFixed(2)
            descricao.innerHTML = data.weather[0].description
        })
}

requisitarClima(lat, lon)

function climasAnteriores() {
    fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter os dados da API');
            }
            return response.json()
        })

        .then(data => {
            console.log(data)
        })
}

climasAnteriores()