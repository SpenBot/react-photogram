
//// DEPENDENCIES, MODULES ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';


//// IMPORT COMPONENTS, STYLES ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

import Post from './components/Post/Post'

import './App.css';



//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class App extends Component {

//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      posts: [
        {
          title: 'Star Wars',
          photo: 'images/starwars-sample.png',
          author: 'Spen',
          comments: [
            {
              author: "Bob",
              body: "Great shot kid!"
            },
            {
              author: "Kevin",
              body: "...I've got a bad feeling about this."
            },
          ]
        },
        {
          title: 'Bindy',
          photo: 'images/rody-sample.png',
          author: 'Rody',
          comments: [
            {
              author: "Mike",
              body: "Yawn!"
            },
            {
              author: "Ashly",
              body: "He's a baby boy."
            },
          ]
        }
      ]
    }
  }

//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let posts = this.state.posts.map((post, indx) => {
      return <Post post={post} key={indx} />
    })


//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="App">

        {/* <header>
          <h1> React Photogram </h1>
        </header> */}

        <button className="newPostButton"> + </button>

        {posts}

      </div>
    );
  }
}



//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default App;




// END ///////////////////////////////////////////////////////////////////
