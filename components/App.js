import React from 'react';
import FormInput from './form';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
        }
    }


    render(){
       return(
        <div>
            <FormInput />
        </div>
       );
    }
}

export default App;