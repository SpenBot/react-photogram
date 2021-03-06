
//// DEPENDENCIES, MODULES ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';


//// IMPORT COMPONENTS, STYLES ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

import './Comment.css';





//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class Comment extends Component {


//// RENDER //////////////////////////////////////////////////////////////
  render() {

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="CommentDiv">
        <strong>{this.props.comment.author}:</strong>
        <p>{this.props.comment.body}</p>
      </div>
    );
  }
}



//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default Comment;





// END ///////////////////////////////////////////////////////////////////
