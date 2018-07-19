import React, { Component } from 'react'

import withApi from './withPostsApi'
import TrimmedPost from './TrimmedPost'

class PostsController extends Component {
  render () {
    const posts = this.props.posts
    return (
      <div className="columns is-multiline is-desktop">
        {posts.map(post => (
          <TrimmedPost key={post.id} user={this.props.user} post={post} />
        ))}
      </div>
    )
  }
}

export default withApi(PostsController)
