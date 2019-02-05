import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
			<AppBar position="static" color="default">
				<Toolbar className='main-toolbar'>
					<Typography variant="h6" color="inherit">
						Photos
					</Typography>
				</Toolbar>
			</AppBar>
      
			<List component="nav">
				{Object.keys(users).map((key, user) =>
				<span>                    
					<ListItem key={users[key].id}>
						{ ` ${key} - ${users[key].name} favorite movie is ${getFavoriteMovie(users[key].id) } ` }
					</ListItem>
      				<Divider />
				</span>
				)}
      

      </List>
      
      </div>
    );
  }
}

export default App;
