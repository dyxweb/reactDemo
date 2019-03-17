import React from 'react';
import { render} from 'react-dom';
import App from './route/router.js';
import { Provider, connect } from 'react-redux'
import  {store} from './route/third'

render(
	<Provider store={store}><App /></Provider>, document.getElementById('root'));