const cityName= document.querySelector('#wetherInput');
const searchbtn =document.querySelector('#searchbtn');
const form= document.getElementById('weatherForm');
const myCity= document.getElementById('city');
const image = document.getElementById('weatherImage');
const weather=document.getElementById('weatherMain');
const temp =document.querySelector('.temp');
const dates =document.querySelector('.todayDates');
const times =document.getElementById('todaytime');
const date = new Date();
form.addEventListener('submit' ,function (e)){
  e.preventDefault();
  let city =cityName.value;
  const myweathercontainer=document.querySelector('.weathercontainer');
  const apiID ="https://github.com/open-meteo/open-meteo.git";
  let url ="https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

}