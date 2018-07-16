import React, { Component } from 'react'

import Post from './Post'
import withApi from './withPostApi'

class PostController extends Component {
  render () {
    const post = this.props.post
    return <Post {...post} />
  }
}

export default withApi(PostController)
