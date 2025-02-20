# Weather App

Uma aplicação de previsão do tempo que utiliza a geolocalização do usuário para fornecer informações sobre o clima na sua localização atual, como temperatura, umidade, velocidade do vento e descrição do clima. A aplicação faz uso da API do OpenWeatherMap para fornecer as informações meteorológicas.

## Funcionalidades
- **Geolocalização:** Detecta a localização do usuário via GPS.
- **Informações Climáticas:** Exibe temperatura, umidade, velocidade do vento e descrição do clima.
- **Armazenamento Local:** As coordenadas de latitude e longitude do usuário são salvas no localStorage para que não seja necessário pedir permissão para acessar o GPS toda vez que o app for carregado.
- **Exibição em Português:** Os dados climáticos são retornados em português (Brasil).

## Tecnologias Utilizadas

- **HTML:** Estrutura da página.
- **CSS:** Estilo da página (não incluso no momento).
- **JavaScript:** Lógica de funcionamento e manipulação da API.
- **API do OpenWeatherMap:** Para obter as informações meteorológicas.
- **Geolocalização HTML5:** Para obter as coordenadas do usuário.

## Como Usar

1. Clone o repositório:

```bash
Copiar
Editar
git clone https://github.com/seu-usuario/weather-app.git
```
2. Abra o arquivo `index.html` no navegador de sua preferência.

3. Ao acessar a aplicação pela primeira vez, será solicitado que você permita o acesso à sua localização via GPS. Se você já tiver permitido, as coordenadas serão salvas no `localStorage`.

4. O clima será exibido na tela com as informações de temperatura, umidade, velocidade do vento e a descrição do clima.

# API Utilizada

* [OpenWeatherMap](https://openweathermap.org/) – A API fornece informações detalhadas sobre o clima em tempo real com base nas coordenadas fornecidas (latitude e longitude).

# Contribuições
Sinta-se à vontade para fazer contribuições! Para isso, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch com a sua feature (git checkout -b feature/MinhaFeature).
3. Faça o commit das suas alterações (git commit -am 'Adicionando nova funcionalidade').
4. Envie para o seu repositório (git push origin feature/MinhaFeature).
5. Abra um pull request explicando as suas alterações.

# Licença

Este projeto é licenciado sob a Licença MIT – consulte o arquivo [LICENSE](LICENSE.txt) para mais detalhes.

