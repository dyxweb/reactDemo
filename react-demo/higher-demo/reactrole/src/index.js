import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './routes/index.js';
import {Provider} from 'react-redux'
import store from './redux/store.js'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

