import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      newSmurf: null
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.setState({
      name: event.target.name.value,
      age: event.target.age.value,
      height: event.target.height.value
    });

    axios.post('http://localhost:3333/smurfs', this.state )
    .then(res => {
      console.log(res.data);
      this.setState( {
        newSmurf : res.data[res.data.length-1]
      })
    })
    .catch(err => {
      console.log(err);
    })
    this.props.history.push('/smurfs')
    window.location.reload();
    return;
  }

  handleInputChange = e => {
    this.setState({ [e.target.name] : e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="SmurfForm">
        <h1>Add New Smurf</h1>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className='submit' type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
