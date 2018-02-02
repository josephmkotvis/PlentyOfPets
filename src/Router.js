import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpRoleForm from './components/SignUpRoleForm';
import SignUpEmailPW from './components/SignUpEmailPW';
import SellerSignUp from './components/SellerSignUp';
import BuyerSignUp from './components/BuyerSignUp';
import SellerAnimalList from './components/seller/SellerAnimalList';
import AnimalAdd from './components/seller/AnimalAdd';	
import AnimalImagePicker from './components/seller/AnimalImagePicker';
import AnimalEdit from './components/seller/AnimalEdit';
import SellerAccountEdit from './components/SellerAccountEdit';
import BuyerHome from './components/buyer/BuyerHome';
import BuyerAccountRouter from './components/buyer/BuyerAccountRouter';
import BuyerAccountEdit from './components/BuyerAccountEdit';
import BuyerPreferences from './components/buyer/BuyerPreferences';
import BuyerRouteToHome from './components/buyer/BuyerRouteToHome';
import RoleRouter from './components/RoleRouter';
import BuyerAnimalListFetcher from './components/buyer/BuyerAnimalListFetcher';
import FirstBuyerPreferences from './components/buyer/FirstBuyerPreferences';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key = "root">
				<Scene key= "login"	component= {LoginForm} title="Please Login"  initial/>
				<Scene key = "signUpEmailPW" component = {SignUpEmailPW} title= "Sign Up" />
				<Scene key = "signUpRole" component = {SignUpRoleForm} title = "Sign Up"  left={() => null} />
				<Scene key = "sellerSignUp"  component = {SellerSignUp}  title = "Sign Up" />
				<Scene key = "buyerSignUp"  component = {BuyerSignUp}  title = "Sign Up" />
				<Scene
					rightTitle= " Add"
					onRight = {() => Actions.animalAdd()}
					key = "sellerAnimalList"
					component = {SellerAnimalList}
					title = "Animals"
					left={() => null} 
				/>
				<Scene key = "animalAdd" component = {AnimalAdd} title= "Add Animal" />
				<Scene key ="animalImageAdd" component = {AnimalImagePicker} title= "Choose Photo"  />
				<Scene key = "animalEdit" component = {AnimalEdit} title = "Animal Details" />
				<Scene key = "sellerAccountEdit" component = {SellerAccountEdit} title = "Account Details" />
				<Scene
					rightTitle = " Account"
					onRight = { () => Actions.buyerAccountRouter()}
				 	key = "buyerHome"
				 	component = {BuyerHome}
				 	title= "Home"
				 	left={() => null}
				 />
				<Scene key = "buyerAccountRouter" component = {BuyerAccountRouter} title = "Account"  left={() => null}/>
				<Scene key = "buyerAccountEdit" component = {BuyerAccountEdit} title = " Account Details" />
				<Scene key = "buyerPreferences" component ={BuyerPreferences} tite = "Animal Preferences" />
				<Scene key = "buyerRouteToHome" component = {BuyerRouteToHome} title= "" />
				<Scene key = "roleRouter" component = {RoleRouter} title ="" />
				<Scene key = "buyerAnimalListFetcher" component = {BuyerAnimalListFetcher} title="" />
				<Scene key = "firstBuyerPreferences" component = {FirstBuyerPreferences} title = "Create Preferences" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;