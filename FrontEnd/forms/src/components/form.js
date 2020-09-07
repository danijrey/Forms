import React from 'react';
import { connect } from 'react-redux'
import TextArea from './textArea'
import Date from './date'
import Range from './range'
import Input from './input'
import '../App.css';
import { CHECK_TEXT, CHECK_DATE, CHECK_RANGE, SUBMIT } from '../store';

function Form(props) {
  return (
      <div className="container_form">
        <fieldset>
          <p>Seleccione los campos que tendrá el formulario</p>
          <form>
            <label htmlFor='text'>Texto</label>
            <input
              type='checkbox'
              name='text'
              id='text'
              value={props.checkboxText}
              onChange={props.handleClickText}
            />
            <label htmlFor='date'>Fecha</label>
            <input
              type='checkbox'
              name='date'
              value={props.checkboxDate}
              onChange={props.handleClickDate}
            />
            <label htmlFor='range'>Rango</label>
            <input
              type='checkbox'
              name='range'
              value={props.checkboxRange}
              onChange={props.handleClickRange}
            />
            <div className="forms_view" >
              {props.checkboxText ?
                <TextArea /> : <></>}
              {props.checkboxDate ?
                <Date /> : <></>}
              {props.checkboxRange ?
                <Range /> : <></>}
            </div>
            {props.submit ?
              <Input /> :
              <button
                type="submit"
                className="btn_form"
                value={props.submit}
                onClick={props.handleClickSubmit}
              >Crear</button>}
          </form>
        </fieldset>
      </div>
  );
}
const mapStateToProps = state => {
  console.log('state', state)
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    handleClickText() {
      dispatch({ type: CHECK_TEXT })
    },
    handleClickDate() {
      dispatch({ type: CHECK_DATE })
    },
    handleClickRange() {
      dispatch({ type: CHECK_RANGE })
    },
    handleClickSubmit() {
      dispatch({ type: SUBMIT })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);