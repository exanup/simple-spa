import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { truncateString, formatAuthorName } from '../../utils/string'
import SelfOwnedTag from './SelfOwnedTag'

export default class TrimmedPost extends Component {
  render () {
    const id = this.props.post.id
    const title = this.props.post.title
    const body = truncateString(this.props.post.body, 255)
    const author = formatAuthorName(this.props.post.author)
    const createdAt = this.props.post.created_at
    const lastUpdatedAt = this.props.post.updated_at

    const postHref = `/posts/${id}`

    return (
      <Fragment>
        <div className="column is-half">
          <h2 className="title is-5">
            <Link to={postHref}>{title}</Link>
            <SelfOwnedTag user={this.props.user} post={this.props.post} />
          </h2>
          <p className="subtitle is-7 has-text-weight-light has-text-right">
            Last Updated: {lastUpdatedAt} | Created: {createdAt} | by{' '}
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
