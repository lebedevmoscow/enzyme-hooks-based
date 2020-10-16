import React, {Component} from 'react'
import {connect} from 'react-redux'
import {guessWord} from './actions'

export class UnconnectedInput extends Component {

    /**
     * @method constructor
     * @param {object} props - Component props
     * @returns {undefined}
     */
    constructor() {
        super()
        this.state = {currentGuess: null}
        this.submitGuessedWord = this.submitGuessedWord.bind(this)
    }

    submitGuessedWord(e) {
        e.preventDefault()
        const guessedWord = this.state.currentGuess
        if (guessWord && guessWord.length > 0) {
            this.props.guessWord(guessedWord)
            this.setState({currentGuess: ''})
        }
    }

    render() {
        const contents = this.props.success ? null : (
            <form className="form-inline">
                <input value={this.state.currentGuess} onChange={(e) => this.setState({currentGuess: e.target.value})} data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="enter guess"/>
                <button onClick={(e) => this.submitGuessedWord(e)} data-test="submit-button" type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        )
        return <div data-test="component-input">
            {contents}
        </div>
    }
}


const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput)