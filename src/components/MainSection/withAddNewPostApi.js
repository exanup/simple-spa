import React, { Component } from 'react'
import { serialize } from 'dom-form-serializer'
import { addPost } from '../../services/post'

function withAddNewPostApi (WrappedComponent) {
  return class EnhancedComponent extends Component {
    addNewPost = (formData) => addPost(formData)

    handleAddNewPost = async e => {
      console.log('New post submit button clicked')
      e.preventDefault()

      const $form = e.target.form
      const formData = serialize($form)

      try {
        const response = await this.addNewPost(formData)
        console.log('New Post created...', response)

        this.props.history.push({ pathname: '/' })
      } catch (err) {
        console.log(err)
      }
    }

    render () {
      return (
        <WrappedComponent
          handleSubmit={this.handleAddNewPost}
          {...this.props}
        />
      )
    }
  }
}

export default withAddNewPostApi
