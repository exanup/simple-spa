import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { truncateString, formatAuthorName } from '../../utils/string'

export default class TrimmedPost extends Component {
  render () {
    const id = this.props.id
    const title = this.props.title
    const body = truncateString(this.props.body, 255)
    const author = formatAuthorName(this.props.author)
    const createdAt = this.props.created_at
    const lastUpdatedAt = this.props.updated_at

    const postHref = `/posts/${id}`

    return (
      <Fragment>
        <div className="column is-half">
          <h2 className="title is-4">
            <Link to={postHref}>{title}</Link>
          </h2>
          <p className="subtitle is-7 has-text-weight-light has-text-right">
            Created: {createdAt} | Last Updated: {lastUpdatedAt} | by{' '}
            <em>
              <span className="has-text-link">{author}</span>
            </em>
          </p>
          <p className="content has-text-justified">
            {body}{' '}
            <Link to={postHref} className="tag is-white has-text-link">
              (read more...)
            </Link>
          </p>
        </div>
      </Fragment>
    )
  }
}
