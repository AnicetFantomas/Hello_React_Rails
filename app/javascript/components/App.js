import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'
import Greeting from './Greeting'

const App = () => {
  return (
    <Provider store={store}>
      <div>
      <h1>Refresh the Get new Greetings</h1>
        <Greeting />
      </div>
    </Provider>
  )
}

export default App