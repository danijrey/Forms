 import React from 'react';
import { connect } from 'react-redux'
import { changeRange } from '../store'
import '../App.css'; 

function Range(props) {
  return (
      <fieldset className="range">
        <h3>Seleccione el rango:</h3>
        <input className="range_input"
        type='range'
        name='text'
        value={props.range}
        onChange={props.handleChange}
        />
      </fieldset>
  );
}
const mapStateToProps = state => {
  return {
    range: state.range
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleChange(e) {
      dispatch(changeRange(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Range);
