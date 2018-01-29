import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpRoleForm from './components/SignUpRoleForm';
import SignUpEmailPW from './components/SignUpEmailPW';
import SellerSignUp from './components/SellerSignUp';
import BuyerSignUp from './components/BuyerSignUp';
import SellerAnimalList from './components/seller/SellerAnimalList';
import AnimalAdd from './components/seller/AnimalAdd';



const RouterComponent = () => {
	return (
		<Router>
			<Scene key = "root">
				<Scene key= "login"	component= {LoginForm} title="Please Login" initial/>
				<Scene key = "signUpEmailPW" component = {SignUpEmailPW} title= "Sign Up" />
				<Scene key = "signUpRole" component = {SignUpRoleForm} title = "Sign Up"  left={() => null} />
				<Scene key = "sellerSignUp"  component = {SellerSignUp}  title = "Sign Up" />
				<Scene key = "buyerSignUp"  component = {BuyerSignUp}  title = "Sign Up" />
				<Scene
					rightTitle= "Add"
					onRight = {() => Actions.animalAdd()}
					key = "sellerAnimalList"
					component = {SellerAnimalList}
					title = "Animals"
					left={() => null} 
				/>
				<Scene key = "animalAdd" component = {AnimalAdd} title= "Add Animal" />

			</Scene>
		</Router>
	);
};

export default RouterComponent;