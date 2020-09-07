import React from 'react';
import { connect } from 'react-redux'
import { changeText } from '../store'
import '../App.css'; 

function TextArea(props) {
  return (
    <fieldset className="text_area">
      <h3>Ingrese el Texto:</h3>
      <textarea className="text_area_input"
        rows="15"
        name='text'
        value={props.text} 
        onChange={props.handleChange}
        />
      </fieldset>      
  );
}
 const mapStateToProps = state => {
  return {
    text: state.text
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleChange(e) {
      dispatch(changeText(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
