let local = JSON.parse(localStorage.getItem('local')) || []

if (!localStorage.getItem('lat')  && !localStorage.getItem('lon')) {

    navigator.geolocation.getCurrentPosition(
        function posicao (position) {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            local.push(lat, lon)

            localStorage.setItem('lat', lat)
            localStorage.setItem('lon', lon)
            localStorage.setItem('local', JSON.stringify(local))

            window.location.reload()

            console.log('localização armazenada')
        })
} else {
    console.log(
        'Lozalização já está armazenada'
    )
}

function localizar() {
    const lat = localStorage.getItem('lat')
    const lon = localStorage.getItem('lon')
    const apiKey
     = 'e288bd0eb42291d169d8047eeae9604f';
    

    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao obter os dados da API');
        }
        return response.json()
    })
    .then(data => {
        cidade.innerHTML = data[0].name

    })
}   

localizar()
