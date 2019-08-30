const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const geoLoc = require('./getGeoLoc.js');
const weather = require('./weather');


const app = express();

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
app.use(allowCrossDomain);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) =>{
  res.redirect('http://localhost:8080/');
});

app.post('/find', (req, res) => {
  if(/[^a-zA-Z0-9 ,]/i.test(req.body.address)){
    console.error('Not a valid input, Re-enter a valid address');
  }
  else{
      geoLoc.searchLoc(req.body.address, (error, resut) => {
        if(error){
          console.log(error);
        }
        else{
          weather.weatherDet(resut.latitute,resut.longitude, (err,result) =>{
            if(err){
              console.log(err);
            }
            else{
              res.json({
                latitute: resut.latitute,
                longitude: resut.longitude,
                country : resut.country,
                temperature :result.temperature,
                icon: result.icon,
                prediction : result.prediction,
                summary : result.summary,
                wind : result.wind,
                humidity : result.humidity,
                pressure : result.pressure
              });
            }
          })
        }
      })
  }
})


app.listen('3000',()=>console.log('listening'));