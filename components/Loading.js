import React from 'react';
import splash from '../public/image5.gif';

function Load(){
    return(
        <div className="imgLoad">
            <img src={splash} alt="loading..." />
            <h5 className="center">On my way hold tight...</h5>
        </div>
    );
}

export default Load;