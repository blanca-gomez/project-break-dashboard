const endpoint = 'https://api.weatherapi.com/v1/forecast.json?key=5cbee4031ed04e448d0174150240304&q=Madrid&aqi=no';



fetch(endpoint)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
       
        showLocation(data.location);
        showWeatherCondition(data.current);
        
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


    const weatherConditionName = current.condition.text;
    const currentTemperatureDegrees = current.temp_c;
    const currentTemperatureIcon = current.condition.icon;
    const currentPrecipitationText = current.precip_in;
    const currentHumidityText = current.humidity;
    const currentWindText = current.wind_kph;


    weatherConditionText.innerHTML = `<p>${weatherConditionName}</p>`;
    currentTemperature.innerHTML = `<p>${currentTemperatureDegrees}Cº</p>`;
    temperatureIcon.src = currentTemperatureIcon;
    precipitations.innerHTML = `<p>Precipitaciones: ${currentPrecipitationText}%</p>`;
    humidity.innerHTML = `<p>Humedad: ${currentHumidityText}%</p>`;
    wind.innerHTML = `<p>Viento: ${currentWindText}km/h</p>`;
};




