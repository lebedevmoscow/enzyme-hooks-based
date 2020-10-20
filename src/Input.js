import React from 'react'
import PropTypes from 'prop-types'

import stringsModule from './helpers/strings'
import languageContext from './context/languageContext'

const Input = ({secretWord}) => {
    const language = React.useContext(languageContext)

    const [currentGuess, setCurrentGuess] = React.useState('')

    const onChangeHandler = (e) => {
        setCurrentGuess(e.target.value)
    }

    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input 
                    onChange={(e) => onChangeHandler(e)}
                    data-test="input-box" 
                    type="text" 
                    className="mb-2 mx-sm-3" 
                    placeholder={stringsModule.getStringByLanguage(language, "guessInputPlaceholder")}
                    value={currentGuess}
                />
                <button 
                    onClick={(e) => {
                        e.preventDefault()
                        // TODO: update guessesWords
                        // TOOD: check against secretWord and update success if needed
                        setCurrentGuess('')
                    }} 
                    type="submit" 
                    data-test="submit-button" 
                    className="btn btn-primary mb-2">
                        {stringsModule.getStringByLanguage(language, 'submit')}
                    </button>
            </form>
        </div>
    )
}

Input.propTypes= {
    secretWord: PropTypes.string.isRequired
}

export default Input