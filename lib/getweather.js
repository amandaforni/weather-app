const fetch = require('node-fetch');
require('dotenv').config(); 
//This is swapped out for privacy reasons (eg protect paid apis)...but still not totally secure
//So put APPID in a separate file and gitignore that file--->dotenv--> So const appid becomes what is in the api.env file


const getWeather = async(location, countryCode)=>{
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&units=metric&appid=${process.env.APPID}`);
    console.log(data);
    return await data.json();
}

module.exports = getWeather;

