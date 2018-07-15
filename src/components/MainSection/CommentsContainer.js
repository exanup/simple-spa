import React, { Component } from 'react'
import Comment from './Comment'
import AddNewComment from './AddNewComment'

export default class CommentsContainer extends Component {
  render () {
    const comments = this.props.comments

    let commentsEl
    let msg
    if (comments.length > 0) {
      msg = (
        <p className="notification title is-6">
          Displaying {comments.length} comments
        </p>
      )
      commentsEl = comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))
    } else {
      msg = <p className="notification title is-6">No comments to display</p>
    }

    return (
      <div className="section">
        {msg}
        {commentsEl}
        <AddNewComment />
      </div>
    )
  }
}
