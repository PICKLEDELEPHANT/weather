async function fetchWeather(){
    const city = document.getElementById('city').value;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "YOUR_API_KEY",
            'X-RapidAPI-Host': 'YOUR_API_HOST'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        
        cloud_pct.innerHTML = result.cloud_pct
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        max_temp.innerHTML = result.max_temp
        min_temp.innerHTML = result.min_temp
        temp.innerHTML = result.temp
        wind_degrees.innerHTML = result.wind_degrees
        wind_speed.innerHTML = result.wind_speed 

        document.querySelector('.result').style.display = 'block';

    } catch (error) {
        console.error(error);
    }
}
