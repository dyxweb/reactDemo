import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let rootElement = document.getElementById('root')
ReactDOM.render(
        <App />,
    rootElement
)

// ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();
