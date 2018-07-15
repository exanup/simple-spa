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
        post: {}
      }
    }

    async componentDidMount () {
      try {
        const postId = this.props.match.params.id
        const post = await this.fetchPost(postId)

        this.setState({
          post,
          status: Statuses.OK
        })
      } catch (err) {
        console.log(err)
        this.setState({
          status: Statuses.ERROR
        })
      }
    }

    fetchPost (postId) {
      return api.fetchPost(postId)
    }

    render () {
      switch (this.state.status) {
        case Statuses.LOADING:
          return <LoadingIndicator />
        case Statuses.OK:
          return <WrappedComponent {...this.props} post={this.state.post} />
        case Statuses.ERROR:
        default:
          return <ErrorMessage />
      }
    }
  }

  return EnhancedComponent
}

export default withApi
