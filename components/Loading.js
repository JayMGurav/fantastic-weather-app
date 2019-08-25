import React from 'react';
import splash from '../public/icons/weather.gif';

function Load(){
    return(
        <div className="imgLoad">
            <img src={splash} alt="loading..." />
            <p className="center">hold tight...</p>
        </div>
    );
}

export default Load;