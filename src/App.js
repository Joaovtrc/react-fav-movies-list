import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { profiles, users, movies }  from './FakeAPI.js'
/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

function getFavoriteMovie(userId){
	const profile = profiles.find( x => x.userID === userId.toString() )
  	console.log(profile)
    let moviesArray =[];
    Object.keys(movies).map((key) => moviesArray.push(movies[key]) );
  	console.log(moviesArray)
  
  return moviesArray.find(m => m.id === parseInt(profile.favoriteMovieID) ).name
  
}

class App extends Component {
  

  
  render() {
    
	console.log()
                  
    return (
      <div>
        <h2>Favorite Movies</h2>
             <List component="nav">

				{Object.keys(users).map((key, user) =>
                                        
                    <ListItem key={users[key].id}>

                      { ` ${key} - ${users[key].name} favorite movie is ${getFavoriteMovie(users[key].id) } ` }

                    </ListItem>
				)}
      

      </List>
      
      </div>
    );
  }
}

export default App;
