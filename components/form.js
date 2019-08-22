import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      lat: "",
      long: "",
      done: false,
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
    // const data = {
    //   address: this.state.address,
    // }
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
    .then(val=>console.log(val));
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
        <h1>{this.state.lat} {this.state.long}</h1>
      </div>
    );
  }
}

export default FormInput;
