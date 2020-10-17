import React from 'react'
import './App.css'
import hookActions from './actions/hookActions'
import Input from './Input'

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

  const [state, dispatch] = React.useReducer(reducer, {secretWord: null})

  const setSecretWord = (secretWord) => dispatch({type: 'setSecretWord', payload: secretWord})

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
    setSecretWord('party')
  }, [])

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word...</p>
      </div>
    )
  }

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Input secretWord={state.secretWord}/>
    </div>
  )
}

export default App