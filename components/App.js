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
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 5500)
    // }

    render(){
       return(
        <div>
            <FormInput />
        </div>
       );
    }
}

export default App;