import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import Albums from './Paginas/albums';
import Photos from './Paginas/photos';
import Posts from './Paginas/posts' ;
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {purple600,pink500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Default" />
    <FlatButton label="Primary" primary={true} />
  </div>
);



const muiTheme = getMuiTheme ({
   palette: {
          primary1Color: purple600,
          accent1Color: pink500,
   }

  });


class App extends Component {
  
  render() {
    return (
        <div className="App" >   <post/> 

          <Router>        
          <div>  
             <nav>
             <MuiThemeProvider muiTheme={muiTheme}>
             


    <AppBar title="SEMINARIO DE ACTUALIZACION EN SISTEMAS APLICADOS" />
               </MuiThemeProvider>
           
          
          
         
          </nav>
          <header>     
          <Link to="/posts"> Posts </Link> 
          <Link to="/photos"> Photos </Link>
          <Link to="/albums"> Albums </Link>
          </header>
            
            <Route path='/posts' component={Posts} />
            <Route path='/photos' component={Photos} />
            <Route path='/albums' component={Albums} />
          </div>
          </Router>

  

      </div>
    );
  
  }
}

export default App;
