import React from 'react'
import PropTypes from 'prop-types'

const Input = ({secretWord}) => {

    const [currentGuess, setCurrentGuess] = React.useState('')

    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input 
                    onChange={(event) => setCurrentGuess(event.target.value)}
                    data-test="input-box" 
                    type="text" 
                    className="mb-2 mx-sm-3" 
                    placeholder="enter guess"
                    value={currentGuess}
                />
                <button type="submit" data-test="submit-button" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
    )
}

Input.propTypes= {
    secretWord: PropTypes.string.isRequired
}

export default Input