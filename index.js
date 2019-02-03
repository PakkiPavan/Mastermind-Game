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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
