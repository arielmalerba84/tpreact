import React, {Component} from 'react';
import axios from 'axios'; 
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';

export default class album extends Component {

  state = {
    albunes:[]
  }

  render (){
    return (
      <div>
          {this.state.albunes.map((album) => {
          return (
            <div> 
    
              <h1>{album.title}</h1> 
              <Link to="/photos"> Ver Fotos </Link>
            </div>
            )
          })}
        </div>
      )
    }

  componentWillMount(){
    const _root = "https://jsonplaceholder.typicode.com" ;
      axios.get(`${_root}/albums`) 
        .then((response) =>{
            this.setState ({
              albunes: response.data 
            }) ;
        })

  }

}