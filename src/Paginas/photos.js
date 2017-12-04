import React, {Component} from 'react';
import axios from 'axios'; 
export default class photos extends Component {
    
    state = {
    photos:[]
    }

    render (){
        return (
            <div>
                {this.state.photos.map((photos) => {
                return (
                    <div> 
    
                        <h1>{photos.title}</h1> 
                       <h1> <img src="http://placehold.it/150/56a8c2"/> </h1>
                    </div>
                    )
                })}
            </div>
        )
    }

    componentWillMount(){
        const _root = "https://jsonplaceholder.typicode.com" ;
            axios.get(`${_root}/photos`) 
                .then((response) =>{
                    this.setState ({
                        photos: response.data 
                    }) ;
                })

    }

}