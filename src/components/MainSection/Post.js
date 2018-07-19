import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import { formatAuthorName } from '../../utils/string'
import PostControls from './PostControls'

export default class Post extends Component {
  render () {
    const id = this.props.post.id
    const title = this.props.post.title
    const body = this.props.post.body
    const createdAt = this.props.post.created_at
    const lastUpdatedAt = this.props.post.updated_at
    const author = formatAuthorName(this.props.post.author)
    const comments = this.props.post.comments

    const postHref = `/posts/${id}`

    return (
      <Fragment>
        <div className="blog section">
          <h2 className="title is-4">
            <Link to={postHref}>{title}</Link>
          </h2>
          <p className="subtitle is-7 has-text-weight-light has-text-right">
            Last Updated: {lastUpdatedAt} | Created: {createdAt} | by{' '}
            <em>
              <span className="has-text-link">{author}</span>
            </em>
          </p>
          <PostControls post={this.props.post} user={this.props.user} />
          <p className="content has-text-justified">{body}</p>
        </div>
        <CommentsContainer comments={comments} />
      </Fragment>
    )
  }
}
