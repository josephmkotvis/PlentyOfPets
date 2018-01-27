import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key = "root">
				<Scene key= "login"	component= {LoginForm} title="Please Login" initial/>
				<Scene key = "signUp" component = {SignUpForm} title = "Create Account" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;