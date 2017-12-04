import React, {Component} from 'react';
import axios from 'axios'; 
export default class post extends Component {
	
	state = {
		posteos:[]
	}

	render (){
		return (
			<div>
  				{this.state.posteos.map((post) => {
   		 		return (
   		 			<div> 
   	
   		 				<h1>{post.title}</h1> 
   		 			</div>
   		 			)
  				})}
  			</div>
  		)
  	}

	componentWillMount(){
		const _root = "https://jsonplaceholder.typicode.com" ;
			axios.get(`${_root}/posts`) 
				.then((response) =>{
  					this.setState ({
    					posteos: response.data 
    				}) ;
				})

	}

}