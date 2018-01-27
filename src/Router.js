import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import AccountInfoForm from './components/AccountInfoForm';
import SignUpRoleForm from './components/SignUpRoleForm';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key = "root">
				<Scene key= "login"	component= {LoginForm} title="Please Login" initial/>
				<Scene key = "signUpRole" component = {SignUpRoleForm} title = "" />
				<Scene
					 key = "AccountInfoForm"
					 component = {AccountInfoForm} 
					 title = "Account Info" 
					 left={() => null} />
			</Scene>
		</Router>
	);
};

export default RouterComponent;