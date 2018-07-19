import React, { Component } from 'react'
import { deletePost as apiDeletePost } from './../../services/post'

function withDeletePostApi (WrappedComponent) {
  return class EnhancedComponent extends Component {
    deletePost = postId => apiDeletePost(postId)

    handleConfirmDelete = async e => {
      e.preventDefault()
      console.log('delete confirmed')
      try {
        const response = await this.deletePost(this.props.match.params.id)
        console.log(response)
        if (response === 0) {
          throw new Error('Could not delete post')
        }
        this.props.history.push({ pathname: '/' })
      } catch (err) {
        console.log(err)
      }
    }

    handleCancelDelete = e => {
      e.preventDefault()
      console.log('delete cancelled')
      const pathname = `/posts/${this.props.match.params.id}`
      this.props.history.push({ pathname })
    }

    render () {
      return (
        <WrappedComponent
          handleConfirmDelete={this.handleConfirmDelete}
          handleCancelDelete={this.handleCancelDelete}
          {...this.props}
        />
      )
    }
  }
}

export default withDeletePostApi
