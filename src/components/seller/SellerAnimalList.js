import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListItem from './ListItem';
import{ CardSection } from '../common'
import {animalsFetch} from '../../actions';
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
			console.log(animals)
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.dataSource = ds.cloneWithRows(animals)
		}

		renderRow(animal){
			console.log(animal);
			return <ListItem animal = {animal} />;

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
       			/>
      			<Tab
          			label="Home"
          			onPress = {(()=> Actions.sellerAnimalList())}
       			/>
       			 <Tab
          			label="Messages"
          			onPress = {(() => Actions.messages())}
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