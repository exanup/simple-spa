import React, { Component } from 'react'

import withApi from '../withApi'
import TrimmedPost from './TrimmedPost'
import Post from './Post'

class PostsContainer extends Component {
  constructor (props) {
    super(props)

    const postId = props.match.params.id
    this.state = {
      currentPost: postId
    }
  }

  render () {
    const postId = this.state.currentPost
    const key = postId - 1

    let element
    if (typeof postId === 'undefined' || !(key in this.props.posts)) {
      const posts = this.props.posts
      element = (
        <div className="columns is-multiline is-desktop">
          {posts.map(post => <TrimmedPost key={post.id} {...post} />)}
        </div>
      )
    } else {
      const post = this.props.posts[key]
      element = <Post {...post} />
    }

    return element
  }
}

export default withApi(PostsContainer)
