import React, { Component } from 'react'

import * as api from '../../services/post'
import LoadingIndicator from '../LoadingIndicator'
import ErrorMessage from '../ErrorMessage'

const Statuses = {
  ERROR: 0,
  LOADING: 1,
  OK: 2
}

function withApi (WrappedComponent) {
  class EnhancedComponent extends Component {
    constructor (props) {
      super(props)

      this.state = {
        status: Statuses.LOADING,
        posts: []
      }

      console.log('inside constructor of PostsContainer\'s HOC')
    }

    async componentDidMount () {
      try {
        console.log('component PostsWithApi did mount')
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
        default:
          return <ErrorMessage />
      }
    }
  }

  return EnhancedComponent
}

export default withApi
