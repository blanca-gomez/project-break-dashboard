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
       
        showLocation(data['location']);
        /*const temperature = document.getElementById('temperature');
        temperature.innerHTML = `<p>${data['current']['temp_c']}</p>`
        let jsonCurrent = data['current'];
        let temp = jsonCurrent['temp_c'];*/
    })
    .catch((error) => {
        console.error('Error:', error);
    });

const showLocation = (location) => {
    const locationText = document.getElementById('location');
    let locName = location['name'];
    let country = location ['country'];
    locationText.innerHTML = `<p>${locName}/${country}</p>`;
}