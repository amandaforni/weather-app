const express = require ('express');
const router = express.Router();
const moment = require ('moment');

const getWeather = require ('../lib/getweather');

router.get('/', async(req, res) => {
    let data = await getWeather("Liverpool","uk");
    let name = data.name;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let clouds = data.clouds.all;
    let sunrise = moment.unix(data.sys.sunrise).format('HH:mm a');
    let sunset = moment.unix(data.sys.sunset).format('HH:mm a');
    res.render('index', {
        name, 
        description, 
        temp, 
        humidity, 
        wind, 
        clouds, 
        sunrise, 
        sunset
    });
});

module.exports=router;