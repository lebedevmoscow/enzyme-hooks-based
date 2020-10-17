import React, { useReducer } from 'react'
import './App.css'
import hookActions from './actions/hookActions'

/**
 * Reducer to update state
 * @param {object} state - Existing state 
 * @param {object} action - Contains `type` and `payload` properties for the state updated
 * @returns {object} - New state
 */
function reducer(state, action) {
  switch(action.type) {
    case 'setSecretWord': 
      return {...state, secretWord: action.payload}
    default:
      throw new Error(`Invalid Action Type: ${action.type}`)
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, {secretWord: null})

  const setSecretWord = (secretWord) => dispatch({type: 'setSecretWord', payload: secretWord})

  React.useEffect(() => {
    hookActions.getSecretWord()
  }, [])

  return (
    <div data-test="component-app">
    </div>
  )
}

export default App