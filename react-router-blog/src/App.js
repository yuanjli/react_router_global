import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Me from './Me';
import Movie from './Movie';
import Food from './Food';


const post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

class App extends Component {

  render() {
    return (
      <div className="App">

      <Router> 
        <div> 
            <nav>
              <Link to="/"> Home </Link> 
              <Link to="/post"> My Blog </Link>
              <Link to='/me'> About me </Link>
              <Link to='/movie'> The best movie </Link>
              <Link to='/food'> Favoriate food </Link>
            </nav>

        <Route exact path="/" component={Home} />   
        <Route path="/post" component={Post} /> 
        <Route path="/me" component={Me} /> 
        <Route path="/movie" component={Movie} /> 
        <Route path="/food" component={Food} /> 

        </div>
      </Router> 





        <div className="App">

          <Post 
          title={post.title}
          author={post.author}
          body={post.body}
          comments={post.comments}
          />

         </div>

      </div>
    );
  }
}


export default App;










