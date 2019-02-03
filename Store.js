import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MM1 from './MM1';
import MMReducer from './MMReducer';

const store=createStore(MMReducer);

ReactDOM.render(
	<Provider store={store}>
		<MM1 />
	</Provider>,
	document.getElementById('root')
);

store.subscribe(()=>{
	console.log("Current state is",store.getState())
})

serviceWorker.unregister();
