import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';
import { FIREBASEAPIKEY } from '../apiKeys';

class App extends Component {
	componentWillMount(){
	  const config = {
	    apiKey: FIREBASEAPIKEY,
	    authDomain: 'plentyofpets-9ac35.firebaseapp.com',
	    databaseURL: 'https://plentyofpets-9ac35.firebaseio.com',
	    projectId: 'plentyofpets-9ac35',
	    storageBucket: '',
	    messagingSenderId: '727200640734'
  	};
  };

  firebase.initializeApp(config);
}
	render() {
	const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));		

		return (
			<Provider store = {store}>
				 <Router />
			</Provider>
		);
	}
}

export default App;