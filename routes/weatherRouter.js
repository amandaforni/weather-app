const express = require ('express');
const router = express.Router();
const getWeather = require ('../lib/getweather');
const moment = require ('moment');

router.get('/', (req, res) => {
    res.render('weather');
   });

router.post('/', async(req,res)=>{
       let location = req.body.location;
       let countryCode = req.body.countryCode;
       let data = await getWeather(location, countryCode);
       if (data.cod == '404') {
               res.render('weather', {
                   err:'The provided location doesn\'t exist'
               });
           return;
           }
       let name = data.name;
       let description = data.weather[0].description;
       let temp = data.main.temp;
       let humidity = data.main.humidity;
       let wind = data.wind.speed;
       let clouds = data.clouds.all;
       let sunrise = moment.unix(data.sys.sunrise).format('HH:mm a');
       let sunset = moment.unix(data.sys.sunset).format('HH:mm a');
       res.render('weather', {
       name,
       description, 
       temp, 
       humidity, 
       wind, 
       clouds, 
       sunrise, 
       sunset,
       listExists: true
       }); 
   
   });

   module.exports=router;