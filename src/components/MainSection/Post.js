import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import { formatAuthorName } from '../../utils/string'

export default class Post extends Component {
  render () {
    const id = this.props.id
    const title = this.props.title
    const body = this.props.body
    const createdAt = this.props.created_at
    const lastUpdatedAt = this.props.updated_at
    const author = formatAuthorName(this.props.author)
    const comments = this.props.comments

    const postHref = `/posts/${id}`

    return (
      <Fragment>
        <div className="blog section">
          <h2 className="title is-4">
            <Link to={postHref}>{title}</Link>
          </h2>
          <p className="subtitle is-7 has-text-weight-light has-text-right">
            Created: {createdAt} | Last Updated: {lastUpdatedAt} | by{' '}
            <em>
              <span className="has-text-link">{author}</span>
            </em>
          </p>
          <p className="content has-text-justified">{body}</p>
        </div>
        <CommentsContainer comments={comments} />
      </Fragment>
    )
  }
}
