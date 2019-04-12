import React from 'react';
import '../App.css';


const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button class='deleteBtn' onClick={ () => {props.deleteSmurf(props.id)} }>Delete</button>
    </div>
    
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

