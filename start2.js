const inputBox=document.querySelector('.input-box');
const searchBtn=document .querySelector('.searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.discription');
const humidity=document.getElementById('humidity');
const wind_Speed = document.getElementById('wind-speed');
 async function checkWeather(city)
 {
  const api_key="304cbe4098928e057cd457bbeff36404";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data=await  fetch(`${url}`).then(response=>response.json());
     
  console.log(weather_data);

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML =`${weather_data.weather[0].description}`;
    humidity.innerHTML =`${weather_data.main.humidity}%`;
    wind_Speed.innerHTML=`${weather_data.wind.speed}Km/h`;

    switch(weather_data.weather[0].main)
    {
      case 'Clouds':
        weather_img.src="clouds.webp";
        break;
        case 'Clear':
        weather_img.src="OIP.jpeg";
        break;
        case 'Rain':
        weather_img.src="images (1).jpeg";
        break;
        case 'Mist':
        weather_img.src="images (2).jpeg";
        break;
        case 'Snow':
        weather_img.src="images (3).jpeg";
        break;
    }

 }
searchBtn.addEventListener('click' ,()=>{
  checkWeather(inputBox.value);
})