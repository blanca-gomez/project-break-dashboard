const endpoint = 'https://api.weatherapi.com/v1/forecast.json?key=5cbee4031ed04e448d0174150240304&q=Madrid&aqi=no';



fetch(endpoint)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then((data) => {
        showLocation(data.location);
        showWeatherCondition(data.current);
        showCurrentlWeather(data.forecast)
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const showLocation = (location) => {
    const locationText = document.getElementById('location');
    const locName = location.name;
    const country = location.country;
    locationText.innerHTML = `<p>${locName}/${country}</p>`;
};

const showWeatherCondition = (current) => {
    const weatherConditionText = document.getElementById('weather-condition');
    const currentTemperature  = document.getElementById('temperature');
    const temperatureIcon = document.getElementById('weather-icon');
    const precipitations = document.getElementById('precipitation');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    //destructuring
    /*const weatherConditionName = current.condition.text;
    const currentTemperatureDegrees = current.temp_c;
    const currentTemperatureIcon = current.condition.icon;
    const currentPrecipitationText = current.precip_in;
    const currentHumidityText = current.humidity;
    const currentWindText = current.wind_kph;*/
    const { condition: { text: weatherConditionName, icon: currentTemperatureIcon }, 
    temp_c: currentTemperatureDegrees, precip_in: currentPrecipitationText, humidity: currentHumidityText, wind_kph: currentWindText } = current;


    weatherConditionText.innerHTML = `<p>${weatherConditionName}</p>`;
    currentTemperature.innerHTML = `<p>${currentTemperatureDegrees}Cº</p>`;
    let httpUrl = "https:";
    temperatureIcon.src = httpUrl + currentTemperatureIcon;
    precipitations.innerHTML = `<p>Precipitaciones: ${currentPrecipitationText}%</p>`;
    humidity.innerHTML = `<p>Humedad: ${currentHumidityText}%</p>`;
    wind.innerHTML = `<p>Viento: ${currentWindText}km/h</p>`;
};

const showCurrentlWeather = (forecast) => {
    const currentWeatherText = document.getElementById('current-weather');

    const forecastDay = forecast.forecastday;
    const currentForecast = forecastDay[0];
    const hours = currentForecast.hour;


    currentWeatherText.innerHTML = '';
    

    hours.forEach (hour => {
        const time = hour.time;
        const celsius = hour.temp_c;
        const hourIcon = hour.condition.icon;

        //dividir cadena de texto time, para obtener solo la hora. time= 'FECHA HORA'
        const timeParts = time.split(' ');
        const timeHours = timeParts[1];

        const hourElement = document.createElement('div');
        hourElement.classList.add('hours');

        let httpUrl = "https:";
        hourElement.innerHTML = 
        `<p>${timeHours}</p>` +
        `<img src="${httpUrl + hourIcon}" style="width: 50px; height: auto;">`+
        `<p>${celsius}ºC</p>`;

        currentWeatherText.appendChild(hourElement);

    })
}  


