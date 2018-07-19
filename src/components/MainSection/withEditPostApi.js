import React, { Component } from 'react'
import { serialize } from 'dom-form-serializer'
import { editPost } from '../../services/post'

function withEditPostApi (WrappedComponent) {
  return class EnhancedComponent extends Component {
    submitModification = (postId, formData) => editPost(postId, formData)

    handleEditPost = async e => {
      e.preventDefault()
      console.log(e)
      const $form = e.target.form
      const formData = serialize($form)

      try {
        const response = await this.submitModification(
          this.props.match.params.id,
          formData
        )
        console.log('Post modified...', response)

        this.props.history.push({
          pathname: `/posts/${this.props.match.params.id}`
        })
      } catch (err) {
        console.log('edit post failed')
        console.log(err)
      }
    }

    render () {
      return (
        <WrappedComponent handleSubmit={this.handleEditPost} {...this.props} />
      )
    }
  }
}

export default withEditPostApi
