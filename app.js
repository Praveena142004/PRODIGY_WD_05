function selectOption(city) {
    document.getElementById('search-box').value = city;
}

function searchFunction() {
    const searchValue = document.getElementById('search-box').value;
    // alert('You searched for: ' + searchValue);
}

const inputBox=document.getElementById('search-box');
const searchBtn=document.getElementById('searchbtn');
const backgroung_img=document.querySelector('.background');
const logo_img=document.querySelector('.logo');
const temp =document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const winds=document.getElementById('wind-speed');
const location_not_found =document.querySelector('.errbackground');
const weather_body = document.querySelector('.weather-body')


async function checkWeather(city){
    const api_key = "f37af1f1d3a20737210c47b9d4034a6b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => 
    response.json());

    if(weather_data.cod ===`404`)
    {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temp.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    winds.innerHTML = `${weather_data.wind.speed} Kl/Hr`;

    switch(weather_data.weather[0].main)
    {
        case 'Clear': 
        logo_img.src="photos/clear.png";
        backgroung_img.src= "photos/clearbg.jpg";
        break;

        case 'Clouds': 
        logo_img.src="photos/cloud.png";
        backgroung_img.src= "photos/cloudbg.jpg";
        break;

        case 'Rain': 
        logo_img.src="photos/rain.png";
        backgroung_img.src= "photos/rainybg.jpg";
        break;

        case 'Mist': 
        logo_img.src="photos/mist.png";
        backgroung_img.src= "photos/mistbg.jpg";
        break;
        case 'Snow': 
        logo_img.src="photos/snow.png";
        backgroung_img.src= "photos/snowbg.jpg";
        break;
    }
    console.log(weather_data);
}
searchBtn .addEventListener('click' , ()=>{
    checkWeather(inputBox.value);
})