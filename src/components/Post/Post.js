
//// DEPENDENCIES, MODULES ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';


//// IMPORT COMPONENTS, STYLES ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

import Comments from '../Comments/Comments'

import './Post.css';





//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class Post extends Component {

//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      showComments: false,
      heart: false
    }
  }



//// TOGGLE SHOW COMMENTS /////////////////////////////////////////////////

  toggleShow = () => {
    this.setState(prevState => ({
      showComments: !prevState.showComments
    }))
  }


//// TOGGLE HEART /////////////////////////////////////////////////

  toggleHeart = () => {
    this.setState(prevState => ({
      heart: !prevState.heart
    }))
  }


//// RENDER //////////////////////////////////////////////////////////////
  render() {

    // let photo = `../../${this.props.post.photo}`
    let photo = this.props.post.photo

    let heart = null

    if (!this.state.heart) {
      heart = <p className="EmptyHeart HeartGen" onClick={this.toggleHeart}>&#9829;</p>
    } else {
      heart = <p className="RedHeart HeartGen" onClick={this.toggleHeart}>&#9829;</p>
    }

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="PostDiv">


        <div className="PostHeader">
          <img className="PosterThumbnail" src={this.props.post.author.thumbnail} alt={this.props.post.author.name} />
          <h4>{this.props.post.author.name}</h4>
          <p>{this.props.post.time}</p>
        </div>


        <img className="postPhoto" src={photo} alt="post"/>


        <div className="PostUI" >
          {heart}
          <button className="commentButton" onClick={this.toggleShow} >
            { this.state.showComments ? 'Hide Comments' : 'Show Comments' }
          </button>
        </div>


        { this.state.showComments && <Comments comments={this.props.post.comments} /> }


      </div>
    );
  }
}



//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default Post;





// END ///////////////////////////////////////////////////////////////////
