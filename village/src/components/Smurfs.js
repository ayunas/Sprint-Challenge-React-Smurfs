import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Smurf from './Smurf';
import '../App.css';


class Smurfs extends Component {

  deleteSmurf = (id) => {
    
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res.data[{id}]);
      window.location.reload();
    })
    .catch( err => {
      console.log(err);
    })

  }

  render() {
    return (
      <div className="Smurfs">
        <header>
          <h1>Smurf Village</h1>
          <Link to='/'><button className='headerBtn'>Add Smurf</button></Link>
        </header>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  smurf={smurf}
                  deleteSmurf={this.deleteSmurf}
                />
                
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
