import React, { Component } from 'react'
import { serialize } from 'dom-form-serializer'
import { addComment } from '../../services/comment'

function withAddNewCommentApi (WrappedComponent) {
  return class EnhancedComponent extends Component {
    addNewComment = formData => addComment(formData)

    handleAddNewComment = async e => {
      console.log('New comment submit button clicked')
      e.preventDefault()

      const postId = this.props.post.id
      const $form = e.target.form
      const formData = { ...serialize($form), postId }

      try {
        const response = await this.addNewComment(formData)
        console.log('New Comment created...', response)

        this.props.history.push({ pathname: '/' })
        this.props.history.go(-1)
      } catch (err) {
        console.log(err)
      }
    }

    render () {
      console.log(this.props)
      return (
        <WrappedComponent
          handleSubmit={this.handleAddNewComment}
          {...this.props}
        />
      )
    }
  }
}

export default withAddNewCommentApi
