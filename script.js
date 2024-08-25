const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const weather_box = document.querySelector('.weather-box')
const weather_details = document.querySelector('.weather-details')

async function checkWeather(city){
    const api_key="22dbf3288921a87d0c3f2527402fcec9"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display='none';
        weather_box.style.display='none';
        weather_description.style.display='none';
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display='flex';
    weather_box.style.display='flex';
    weather_details.style.display='flex';

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/Hr`;

    switch(weather_data.weather[0].main){
        case 'Thunderstorm':
            weather_img.src = "./assets/cat-thunderstorm.jpg"
            break
        case 'Clear':
            weather_img.src = "./assets/cat-sunny.jpg"
            break
        case 'Rain':
            weather_img.src = "./assets/cat-rainy.jpg"
            break
        case 'Mist':
            weather_img.src = "./assets/cat-mist.jpg"
            break
        case 'Snow':
            weather_img.src = "./assets/cat-snow.jpg"
            break
        case 'Haze':
                weather_img.src = "./assets/cat-haze.jpg"
                break
        case 'Clouds':
                weather_img.src = "./assets/cat-overcast-clouds.jpg"
                break
        

        
        }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});