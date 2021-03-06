import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import {Columns,Column} from 'bloomer';
import Tweets from '../components/Tweets';
import Overview from '../components/Overview';
import './HomePage.css';
import Locations from '../components/Locations';
import Search from '../components/Search';
import { apiClient } from '../utils/apiClient';

class HomePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			tweets: []
		}
		this.apiClient = new apiClient();
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount(){
<<<<<<< HEAD
		let requests = this.state.requests.splice();
		this.apiClient.get('/rescue-requests/')
		.then(function(response) {
			for(const request of response.data){
				requests.push({
					id: request.id,
					sender: "Person from cluster "+request.cluster,
					coordinates: "("+request.latitude+","+request.longitude+")",
					message: request.message
				})
			}
		});
		this.setState({requests: requests});
=======

>>>>>>> parent of 6b87af5... Get rqs on home page
	}
	render(){
		return(
			<div className="top-padding">
			<Columns>
				<Column isSize={8}>
					<Overview />
					<Search />
					<Tweets tweets={
						[{'id': 2, 'sender': 'Rick', 'coordinates': 'Boca Raton, FL', 'message': 'Help me please'},
						{'id': 3, 'sender': 'Bob', 'coordinates': 'Tampa, FL', 'message': 'Help me'}]} />
				</Column>
				<Column isSize={4}>
					<Locations />
				</Column>
			</Columns>
		</div>
		);
	}
}

export default HomePage;