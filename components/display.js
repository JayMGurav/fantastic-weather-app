import React from 'react';

const wind = require('../public/icons/wind.png');
const humidity = require('../public/icons/humidity.png');
const clearday = require('../public/icons/clearDay.png');
const clearnight = require('../public/icons/clearNight.png');
const cloudy = require('../public/icons/cloudy.png');
const fog = require('../public/icons/fog.png');
const rain = require('../public/icons/rain.png');
const sleet = require('../public/icons/sleet.png');
const snow = require('../public/icons/snow.png');
const partlycloudyday = require('../public/icons/partlycloudyday.png');
const partlycloudynight = require('../public/icons/partlycloudynight.png');

const arrImg = {wind,humidity,clearday,clearnight,cloudy,fog,rain,sleet,snow,partlycloudyday,partlycloudynight}

function Display(props){
   return(       
    <div>
        <h1>{props.data.temperature}{'\u00b0'}F</h1>
        <div className="extraDet">
            <div className="det">
                Wind
                <img src={wind} alt="wind"/>                
                <div><span>{props.data.wind}</span> Km/hr</div>
            </div>
            <div className="det">
                Now
                <img src={arrImg[props.data.icon.replace(/-/g,"").toLowerCase()]} alt={props.data.icon}/>
                {props.data.summary}
            </div>
            <div className="det">
                Humidity
                <img src={humidity} alt="humidity"/>                
                <div><span>{props.data.humidity}</span>%</div>
            </div>
        </div>        
        <h3>{props.data.prediction}</h3>
    </div>
   );
}


export default Display;