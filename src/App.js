import React from 'react'
import './App.css'
import hookActions from './actions/hookActions'
import Input from './Input'
import languageContext from './context/languageContext'
import LanguagePicker from './LanguagePicker'

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
    case 'setLanguage':
      return {...state, language: action.payload}
    default:
      throw new Error(`Invalid Action Type: ${action.type}`)
  }
}

const App = () => {

  const [state, dispatch] = React.useReducer(reducer, {secretWord: null, language: 'en'})

  const setSecretWord = (secretWord) => dispatch({type: 'setSecretWord', payload: secretWord})
  const setLanguage = (language) => dispatch({type: 'setLanguage', payload: language})

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
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage}/>
        <Input secretWord={state.secretWord}/>
      </languageContext.Provider>
    </div>
  )
}

export default App