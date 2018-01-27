import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentWillMount(){
		 const config = {
		    apiKey: 'AIzaSyCYnDrHrhl4euLDb3lNb0S9Aik4U3Y5o7c',
		    authDomain: 'manager-5a973.firebaseapp.com',
		    databaseURL: 'https://manager-5a973.firebaseio.com',
		    projectId: 'manager-5a973',
		    storageBucket: 'manager-5a973.appspot.com',
		    messagingSenderId: '953918193575'
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