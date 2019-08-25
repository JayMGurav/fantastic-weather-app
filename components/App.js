import React from 'react';
import FormInput from './form';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
        }
    }

    // componentDidMount() {
    //     const body = document.getElementsByTagName('body')[0];
    //     const loadImg =document.getElementById('lo');
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 5500);
    // }

    render(){
        // this.state.isLoading ?  body.removeChild(loadImg): null;
       return(
        <div>
            <FormInput />
        </div>
       );
    }
}

export default App;