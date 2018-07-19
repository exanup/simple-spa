import React, { Component } from 'react'

import Post from './Post'
import withApi from './withPostApi'

class PostController extends Component {
  render () {
    return <Post post={this.props.post} user={this.props.user} />
  }
}

export default withApi(PostController)
