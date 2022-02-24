import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { getClientStore } from '../store'
import Routes from './Routes';

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
        {
          Routes.map(route => (
            <Route {...route} />
          ))
        }
        </div>
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<App />, document.getElementById('root'))