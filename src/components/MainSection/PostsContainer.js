import React, { Component, Fragment } from 'react'
import Post from './Post'
import withApi from '../withApi'

class PostsContainer extends Component {
  render () {
    return (
      <Fragment>
        {this.props.posts.map(post => <Post key={post.id} {...post} />)}
      </Fragment>
    )
  }
}

export default withApi(PostsContainer)
