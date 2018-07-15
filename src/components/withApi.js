import React, { Component } from 'react'

import * as api from '../services/api'
import LoadingIndicator from './LoadingIndicator'
import ErrorMessage from './ErrorMessage'

const Statuses = {
  ERROR: 0,
  LOADING: 1,
  OK: 2
}

function withApi (WrappedComponent) {
  class EnhancedComponent extends Component {
    constructor () {
      super()

      this.state = {
        status: Statuses.LOADING,
        posts: []
      }
    }

    async componentDidMount () {
      try {
        const posts = await this.fetchPosts()

        if (!Array.isArray(posts)) {
          throw new Error('The data needs to be in array format')
        }

        this.setState({
          posts,
          status: Statuses.OK
        })
      } catch (err) {
        console.log(err)
        this.setState({
          status: Statuses.ERROR
        })
      }
    }

    fetchPosts () {
      return api.fetchPosts()
    }

    render () {
      switch (this.state.status) {
        case Statuses.LOADING:
          return <LoadingIndicator />
        case Statuses.OK:
          return <WrappedComponent {...this.props} posts={this.state.posts} />
        case Statuses.ERROR:
          return <ErrorMessage />
      }
    }
  }

  return EnhancedComponent
}

export default withApi
