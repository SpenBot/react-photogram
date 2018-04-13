
//// DEPENDENCIES, MODULES ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';


//// IMPORT COMPONENTS, STYLES ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

import Post from './components/Post/Post'
import NewForm from './components/NewForm/NewForm'

import './App.css';



//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class App extends Component {

//// CONSTRUCTOR /////////////////////////////////////////////////////////
  constructor() {
    super()
    this.state = {
      showNewForm: false,

      posts: [
        {
          photo: 'images/rody-1-final.png',
          time: '07/21/2017, 01:14pm',
          author: {
            name: 'Spen',
            thumbnail: 'images/spen-author.png'
          },
          comments: [
            {
              author: "Bob",
              body: "Curabitur sodales ligula in libero."
            },
            {
              author: "Kevin",
              body: "Sed dignissim lacinia nunc."
            },
            {
              author: "Mary",
              body: "Duis sagittis ipsum. Praesent mauris."
            },
            {
              author: "Sue",
              body: "Aenean quam. In scelerisque sem at dolor."
            },
            {
              author: "Carl",
              body: "Fusce nec tellus sed augue semper porta."
            },
          ]
        },
        {
          photo: 'images/rody-5-final.png',
          time: '07/23/2017, 08:27am',
          author: {
            name: 'Spen',
            thumbnail: 'images/spen-author.png'
          },
          comments: [
            {
              author: "Steve",
              body: "Curabitur sodales ligula in libero."
            },
            {
              author: "William",
              body: "Sed dignissim lacinia nunc."
            },
            {
              author: "Kyle",
              body: "Duis sagittis ipsum. Praesent mauris."
            },
            {
              author: "Ashley",
              body: "Aenean quam. In scelerisque sem at dolor."
            },
            {
              author: "Dingus",
              body: "Fusce nec tellus sed augue semper porta."
            },
          ]
        },
        {
          photo: 'images/rody-4-final.png',
          time: '07/24/2017, 02:43pm',
          author: {
            name: 'Spen',
            thumbnail: 'images/spen-author.png'
          },
          comments: [
            {
              author: "Bob",
              body: "Curabitur sodales ligula in libero."
            },
            {
              author: "Kevin",
              body: "Sed dignissim lacinia nunc."
            },
            {
              author: "Mary",
              body: "Duis sagittis ipsum. Praesent mauris."
            },
            {
              author: "Sue",
              body: "Aenean quam. In scelerisque sem at dolor."
            },
            {
              author: "Carl",
              body: "Fusce nec tellus sed augue semper porta."
            },
          ]
        },
        {
          photo: 'images/rody-2-final.png',
          time: '07/24/2017, 03:19pm',
          author: {
            name: 'Spen',
            thumbnail: 'images/spen-author.png'
          },
          comments: [
            {
              author: "Bob",
              body: "Curabitur sodales ligula in libero."
            },
            {
              author: "Kevin",
              body: "Sed dignissim lacinia nunc."
            },
            {
              author: "Mary",
              body: "Duis sagittis ipsum. Praesent mauris."
            },
            {
              author: "Sue",
              body: "Aenean quam. In scelerisque sem at dolor."
            },
            {
              author: "Carl",
              body: "Fusce nec tellus sed augue semper porta."
            },
          ]
        },
        {
          photo: 'images/rody-3-final.png',
          time: '07/25/2017, 12:08pm',
          author: {
            name: 'Spen',
            thumbnail: 'images/spen-author.png'
          },
          comments: [
            {
              author: "Bob",
              body: "Curabitur sodales ligula in libero."
            },
            {
              author: "Kevin",
              body: "Sed dignissim lacinia nunc."
            },
            {
              author: "Mary",
              body: "Duis sagittis ipsum. Praesent mauris."
            },
            {
              author: "Sue",
              body: "Aenean quam. In scelerisque sem at dolor."
            },
            {
              author: "Carl",
              body: "Fusce nec tellus sed augue semper porta."
            },
          ]
        }
      ]
    }
  }







//// TOGGLE SHOW NEW FORM /////////////////////////////////////////////////////////
  toggleShowForm = () => {
    this.setState(prevState => ({
      showNewForm: !prevState.showNewForm
    }))
  }

//// ADD NEW POST /////////////////////////////////////////////////////////
  addNewPost = (newImg) => {

    let postsCopy = this.state.posts

    postsCopy.push(
      {
        photo: newImg,
        time: 'just now',
        author: {
          name: 'Spen',
          thumbnail: 'images/spen-author.png'
        },
        comments: []
      }
    )

    this.setState({
      posts: postsCopy
    }, this.toggleShowForm())

    console.log(this.state.posts)
  }









//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let posts = this.state.posts.map((post, indx) => {
      return <Post post={post} key={indx} />
    })

    let newForm = null

    if (this.state.showNewForm) {
      newForm = <NewForm addNew={this.addNewPost.bind(this)}/>
    } else if (!this.state.showNewForm) {
      newForm = null
    }
//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="App">

        <button className="newPostButton" onClick={this.toggleShowForm.bind(this)}> + </button>
        {newForm}

        {posts}

      </div>
    );
  }
}



//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default App;




// END ///////////////////////////////////////////////////////////////////
