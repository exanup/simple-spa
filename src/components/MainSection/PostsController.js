import React, { Component } from 'react'

import withApi from '../postsWithApi'
import TrimmedPost from './TrimmedPost'

class PostsController extends Component {
  render () {
    const posts = this.props.posts
    return (
      <div className="columns is-multiline is-desktop">
        {posts.map(post => <TrimmedPost key={post.id} {...post} />)}
      </div>
    )
  }
}

export default withApi(PostsController)
