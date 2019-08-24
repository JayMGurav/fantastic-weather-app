import React from 'react';
const cloudy = require('../public/cloudy.png')

function Display(props){
    console.log(cloudy)
   return(
       
    <div>
        <h1>{props.data.temperature}</h1>
        <div className="extraDet">
            <div className="det">
                <img src={`../public/${cloudy}`} alt="wind"/>
                {props.data.wind} KM/Hr
            </div>
            <div className="det">
                <img src={`../public/${cloudy}`} alt={props.data.icon}/>
                {props.data.summary}
            </div>
            <div className="det">
                <img src={`../public/${cloudy}`} alt="humidity"/>
                {props.data.humidity}%
            </div>
        </div>        
        <h6>{props.data.prediction}</h6>
    </div>
   );
}

export default Display;