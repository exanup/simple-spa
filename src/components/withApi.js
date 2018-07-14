import React, { Component } from 'react'

import * as api from '../services/api'
import LoadingIndicator from './LoadingIndicator'

function withApi (WrappedComponent) {
  class EnhancedComponent extends Component {
    constructor () {
      super()

      this.state = {
        isLoading: true,
        posts: []
      }
    }

    async componentDidMount () {
      const posts = await this.fetchPosts()

      this.setState({
        posts,
        isLoading: false
      })
    }

    fetchPosts () {
      return api.fetchPosts()
    }

    render () {
      return this.state.isLoading ? (
        <LoadingIndicator />
      ) : (
        <WrappedComponent {...this.props} posts={this.state.posts} />
      )
    }
  }

  return EnhancedComponent
}

export default withApi
