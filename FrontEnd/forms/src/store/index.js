import { createStore } from 'redux' 

export const CHANGE_TEXT = 'CHANGE_TEXT'
export const CHANGE_DATE = 'CHANGE_DATE'
export const CHANGE_RANGE = 'CHANGE_RANGE'
export const CHECK_TEXT = 'CHECK_TEXT'
export const CHECK_DATE = 'CHECK_DATE'
export const CHECK_RANGE = 'CHECK_RANGE'
export const SUBMIT = 'SUBMIT'

 export function changeText(text){
  return{
    type: CHANGE_TEXT,
    payload: text
  }
}
export function changeDate(date) {
  return {
    type: CHANGE_DATE,
    payload: date
  }
}
export function changeRange(range) {
  return {
    type: CHANGE_RANGE,
    payload: range
  }
} 
function reducer(state, action){
switch (action.type){
  case CHANGE_TEXT:
    return{
      ...state,
      text: action.payload
    }
  case CHANGE_DATE:
    return {
      ...state,
      date: action.payload
    }
  case CHANGE_RANGE:
    return {
      ...state,
      range: action.payload
    }
  case CHECK_TEXT:
    return {
      ...state,
      checkboxText: !state.checkboxText
    }
  case CHECK_DATE:
    return {
      ...state,
      checkboxDate: !state.checkboxDate
    }
  case CHECK_RANGE:
    return {
      ...state,
      checkboxRange: !state.checkboxRange
    }
  case SUBMIT:
    return {
      ...state,
      submit: !state.submit,
      checkboxText: false,
      checkboxDate: false,
      checkboxRange: false
    }
default:
  return{
    ...state
  }
}
}
const initialState = {
  text:'Valor del texto',
  date:'00/00/0000',
  range: 0,
  checkboxText: false,
  checkboxDate: false,
  checkboxRange: false,
  submit: false
}

export const store = createStore(reducer, initialState);