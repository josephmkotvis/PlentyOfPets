import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListItem from './ListItem';
import{ CardSection } from '../common'
import {animalsFetch} from '../../actions';
import { Icon } from 'react-native-elements/';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';



class SellerAnimalList extends Component {
		componentWillMount(){
			this.props.animalsFetch();

			this.createDataSource(this.props);

		}

		componentWillReceiveProps( nextProps ) {
			this.createDataSource(nextProps);
		}

		createDataSource({ animals }){
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.dataSource = ds.cloneWithRows(animals)
		}

		renderRow(animal){
			console.log(animal);
			return <ListItem animal = {animal} />;

		}
		onMessagePress(){

		}

render(){
		return(
			<View>
				<View style = {{paddingBottom: 56 }}>
					<ListView
					enableEmptySections
					dataSource = {this.dataSource}
					renderRow = {this.renderRow}
					/>
				</View>
				<BottomNavigation
					labelColor= '#007aff'
					rippleColor="#008080"
					style={{height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
      				activeTab = {2}
      				backgroundColor ="#fff"
      			>
      			<Tab
          			label="Account"
          			onPress= {(()=> Actions.sellerAccountEdit())}
          			icon = {<Icon name="account-box" color = '#007aff' type= "account-box"/>}
       			/>
      			<Tab
          			label="Home"
          			onPress = {(()=> Actions.sellerAnimalList())}
          			icon = {<Icon name="home" color = "#007aff" type="home"/>}
       			/>
       			 <Tab
          			label="Messages"
          			onPress = {(() => this.onMessagePress.bind())}
          			icon = {<Icon name ="message" color="#007aff" type="message" />}
       			/>
       			</BottomNavigation>
       		</View>
		);
	}
}


const mapStateToProps = state => {
	const animals =_.map( state.animals, (val, uid) => {
		return { ...val, uid};
	})
	return {animals};
};

export default connect(mapStateToProps, { animalsFetch })(SellerAnimalList);