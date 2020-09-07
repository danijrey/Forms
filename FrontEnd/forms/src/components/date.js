import React from 'react';
import { connect } from 'react-redux'
import { changeDate } from '../store'
import '../App.css'; 

function Date(props) {
  return (
      <fieldset className="date">
        <h3>Seleccione la fecha:</h3>
        <input className="date_input"
        type='date'
        name='text'
        value={props.date}
        onChange={props.handleChange}
        />
      </fieldset>
  );
}
const mapStateToProps = state => {
  return {
    date: state.date
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleChange(e) {
      dispatch(changeDate(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Date);
