import React from "react";
import Load from "./Loading";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:false,
      address: "",
      latitute: '',
      country : '',
      longitude: '',
      icon: '',
      temperature :'',
      prediction : '',
      wind : '',
      summary : '',
      humidity : '',
      pressure : ''
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
 

  handleSubmit(event) {
    event.preventDefault();
    this.setState({isLoading:true})
    fetch('http://localhost:3000/find',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        address: this.state.address,
      }),
    }).then(res=>res.json())
    .then(val=>{
      console.log(val.temperature)
      this.setState({
        isLoading: false,
        latitute: val.latitute,
        country : val.country,
        longitude: val.longitude,
        icon: val.icon,
        temperature :val.temperature,
        prediction : val.prediction,
        wind : val.wind,
        summary : val.summary,
        humidity : val.humidity,
        pressure : val.pressure,
      })
    });
  }

  render() {
    return (
      <div className="formInp centerTop">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a search place"
            required
            name="address"
            value={this.state.address}
            className="formSearch"
            onChange={this.handleChange}
          />
          <button type="submit" className="searchBtn">
            Look up
          </button>
        </form>
        <h1>{this.state.isLoading ? <Load/> : this.state.temperature}</h1>
      </div>
    );
  }
}

export default FormInput;
