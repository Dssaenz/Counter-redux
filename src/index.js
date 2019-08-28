import React from 'react'
import ReactDOM from 'react-dom'
import Principal from './Counter/Principal'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker'
import reducer from './Counter/reducer'

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
      <Principal/>
    </Provider>
  )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
