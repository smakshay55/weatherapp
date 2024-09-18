document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const errorElement = document.getElementById('error');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    // Clear previous results
    errorElement.textContent = '';
    temperatureElement.textContent = '';
    descriptionElement.textContent = '';

    if (city.trim() === '') {
        errorElement.textContent = 'Please enter a city name.';
        return;
    }

  
    const apiKey = '4737d80e81d03716b1ed094556b0b2bd';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API request failed');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            descriptionElement.textContent = `Weather: ${description}`;
        })
        .catch(error => {
            errorElement.textContent = error.message;
        });
});
