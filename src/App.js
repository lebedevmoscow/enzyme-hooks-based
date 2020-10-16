import React from 'react'
import './App.css'

import Input from './Input'

const App = () => {
  return (
    <div data-test="component-app">
      <Input secretWord="train" />
    </div>
  )
}

export default App