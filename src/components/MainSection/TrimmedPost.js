import React, { Component, Fragment } from 'react'
import { truncateString } from '../../utils/string'

export default class TrimmedPost extends Component {
  formatAuthorName (author) {
    const fname = author.first_name
    const lname = author.last_name
    const name = `${fname} ${lname}`
    return name
  }

  render () {
    const id = this.props.id
    const title = this.props.title
    const body = truncateString(this.props.body, 255)
    const author = this.formatAuthorName(this.props.author)
    const createdAt = this.props.created_at
    const lastUpdatedAt = this.props.updated_at

    const postHref = `posts/${id}`

    return (
      <Fragment>
        <div className="column is-half">
          <p className="title is-4">
            <a href={postHref}>{title}</a>
          </p>
          <p className="subtitle is-7 has-text-weight-light has-text-right">
            Created: {createdAt} | Last Updated: {lastUpdatedAt} | by{' '}
            <em>
              <span className="has-text-link">{author}</span>
            </em>
          </p>
          <p className="content has-text-justified">
            {body}{' '}
            <a className="tag is-white has-text-link" href={postHref}>
              (read more...)
            </a>
            {/* <a className="has-text-weight-light" href={postHref}>
              <small>
              (read more...)
              </small>
            </a> */}
          </p>
        </div>
      </Fragment>
    )
  }
}
