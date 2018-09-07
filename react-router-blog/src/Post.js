import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';


class Post extends Component {

	componentDidMount() {
    document.title = 'Post';
}
  render() {
    const allComments = this.props.comments;

    return (
      <div className="App">
        
        <h1> {this.props.title} </h1>
        <p> {this.props.author} </p>
        <p> {this.props.body} </p>

        <h5> Comments: </h5>

        <p> {allComments[0]} </p>

        {/*<p> {allComments.map( item => {
        	return <Comment individualComment={item} />
        	 })} 
        </p>*/}
        
        
      </div>
    );
  }
}

export default Post;
















