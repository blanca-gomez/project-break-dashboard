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
       
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });


