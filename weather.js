require('dotenv').config({ path: '.env' })
const request = require('request');


const  weatherDet = (lat,long,callback) => {
    request({
        url: `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${lat},${long}`,
        json: true
    },(err, resp, body) => {
        if(err){
            console.error(err);
            callback('Unable to connect 🙄');
        }
        else if(resp.statusCode == 400){
            console.log(body);
            callback('Unable to fetch weather, Earth seem too unpredictive..!!');
        }
        else{
            callback(undefined,{
                temperature : body.currently.temperature,
                icon : body.currently.icon,
                prediction : body.hourly.summary,
                summary : body.currently.summary,
                wind : body.currently.windSpeed,
                humidity : body.currently.humidity,
                pressure : body.currently.pressure
            })
        }
    })
}

module.exports.weatherDet = weatherDet;