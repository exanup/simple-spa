import React, { Component } from 'react'
import { formatAuthorName } from '../../utils/string'

export default class Comment extends Component {
  render () {
    const body = this.props.body
    const updatedAt = this.props.updated_at
    const author = formatAuthorName(this.props.author)
    const email = this.props.author.email // TODO: make this email safe to display

    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img alt="" src="https://via.placeholder.com/128x128" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{author}</strong> (<small>{email}</small>){' '}
              <small>Last Updated: {updatedAt}</small>
              <br />
              {body}
            </p>
          </div>
        </div>
      </article>
    )
  }
}
