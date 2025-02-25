const lat = localStorage.getItem('lat')
const lon = localStorage.getItem('lon')
const apiKey
 = 'e288bd0eb42291d169d8047eeae9604f';

const temperatura = document.getElementById('temperatura')
const sensacao = document.getElementById('sensacao')
const umidade = document.getElementById('umidade')
const icon = document.getElementById('icone')
const sunset = document.getElementById('sunset')

addEventListener('DOMContentLoaded', requisitarClima(lat, lon), localizar())

function requisitarClima(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter os dados da API');
            }
            return response.json()
        })

        .then(data => {
            temperatura.innerHTML = (data.main.temp -273.15).toFixed(1) + '°'
            sensacao.innerHTML = (data.main.feels_like -273.15).toFixed(1) + '°'
            umidade.innerHTML = data.main.humidity +'%'
            sunset.innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            
            let descricao = data.weather[0].description
            climaImagem (descricao)

        })
}

requisitarClima(lat, lon)

function climaImagem (descricao) {
    switch (descricao) {
        case 'clear sky':
            document.body.style.backgroundImage = 'url("src/img/clear_sky.jpg")'
            document.body.style.backgroundSize = "cover"
            break
        case 'few clouds':
            document.body.style.backgroundImage = 'url("src/img/few_clounds.jpg")'
            document.body.style.backgroundSize = "cover"
            break
        case 'scattered clouds':
            document.body.style.backgroundImage = 'url("src/img/scattered-clouds.jpg")'
            document.body.style.backgroundSize = "cover"
            break
        case 'broken clouds':
            document.body.style.backgroundImage = 'url("src/img/broken-clouds.jpg")'
            document.body.style.backgroundSize = "cover"
            break
        case 'shower rain':
            document.body.style.backgroundImage = 'url("src/img/shower-rain.jpg")'
            document.body.style.backgroundSize = "cover"
            break
        case 'rain':
            document.body.style.backgroundImage = 'url("src/img/shower-rain.jpg")'
            document.body.style.backgroundSize = "cover"
            break
        case 'thunderstorm':
            document.body.style.backgroundImage = 'url("src/img/thunderstorm.jpg")'
            document.body.style.backgroundSize = "cover"
            break
        case 'snow':
            document.body.style.backgroundImage = 'url("src/img/snow.jpg")'
            document.body.style.backgroundSize = "cover" 
            break
        case 'mist':
            document.body.style.backgroundImage = 'url("src/img/mist.jpg")'
            document.body.style.backgroundSize = "cover"
            break
        default:
            document.body.style.backgroundImage = 'url("src/img/default.jpg")'
            break
    }
}