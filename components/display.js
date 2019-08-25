import React from 'react';

const wind = require('../public/icons/wind.png');
const humidity = require('../public/icons/humidity.png');

function Display(props){
    const icon = require(`../public/icons/${props.data.icon}.png`);
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
                <img src={icon} alt={props.data.icon}/>
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