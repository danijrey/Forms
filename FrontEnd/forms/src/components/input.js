import React from 'react';
import { connect } from 'react-redux'
import '../App.css'; 

function TextArea(props) {
  return (
    <span>
      <fieldset>
        <h3>Datos del formulario:</h3>
        <textarea className="text_area_input_out"
          rows="10"
          name='text'
          value={JSON.stringify(props)}
        />
      </fieldset>
    </span>
  );
}
const mapStateToProps = state => {
  return {
    text: state.text,
    date: state.date,
    range:state.range
  }
}

export default connect(mapStateToProps)(TextArea);