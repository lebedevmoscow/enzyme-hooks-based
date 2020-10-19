import React from 'react'
import PropTypes from 'prop-types'
import languageContext from './context/languageContext'
import stringsModule from './helpers/strings'

/**
 * Functional React component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered Component
 */

 const Congrats = (props) => {

    const language = React.useContext(languageContext)


    if (props.success) {
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    {stringsModule.getStringByLanguage(language, 'congrats')}
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        )
    }
 }

 Congrats.propTypes = {
     success: PropTypes.bool.isRequired
 }
 
 export default Congrats