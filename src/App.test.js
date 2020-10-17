import React from 'react'
import {mount} from 'enzyme'
import App from './App'
import {findByTestAttr} from './../test/testUtils'
import hookActions from './actions/hookActions'

const mockGetSecretWord = jest.fn()

/**
 * Setup function for app component
 * @param {string} secretWord - Desired secretWord state value for state
 * @returns {ReactWrapper}
 */
const setup = (secretWord = 'party') => {

  mockGetSecretWord.mockClear()
  hookActions.getSecretWord = mockGetSecretWord

  const mockUseReducer = jest.fn().mockReturnValue([{secretWord}, jest.fn()])

  React.useReducer = mockUseReducer
  
  // use mount because useEffect not called on `shallow`
  return mount(<App />)
}

test('App renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-app')
  console.log(wrapper.debug())
  expect(component.length).toBe(1)
})

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup()

    // Check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled()
  })

  test('secretWord does not update on App update', () => {
    const wrapper = setup()
    mockGetSecretWord.mockClear()

    wrapper.setProps()

    expect(mockGetSecretWord).not.toHaveBeenCalled()
  })
})

// describe('secretWord is not null', () => {

//   let wrapper
//   beforeEach(() => {
//     wrapper = setup('party')
//   })

//   test('renders app when secretWord is not null', () => {
//     const appComponent = findByTestAttr(wrapper, 'component-app')
//     expect(appComponent.exists()).toBe(true)
//   })

//   test('does not render spinner when secretWord is not null', () => {
//     const spinner = findByTestAttr(wrapper, 'spinner')
//     expect(spinner.exists()).toBe(false)
//   })
// })


describe('secretWord is null', () => {

  let wrapper
  beforeEach(() => {
    wrapper = setup(null)
  })

  test('does not renders app when secretWord not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.exists()).toBe(false)
  })

  test('render spinner when secretWord is null', () => {
    const spinner = findByTestAttr(wrapper, 'spinner')
    expect(spinner.exists()).toBe(true)
  })
})