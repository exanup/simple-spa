import React, { Component, Fragment } from 'react'

export default class Post extends Component {
  render () {
    const title = this.props.title
    const author = this.props.author
    const createdAt = this.props.createdAt
    const lastUpdatedAt = this.props.lastUpdatedAt
    const body = this.props.body

    return (
      <Fragment>
        <div className="Row">
          <h2>{title}</h2>
          <span>{author}</span>
          <span>{createdAt}</span>
          <span>{lastUpdatedAt}</span>
        </div>
        <div className="Row">
          {body}
        </div>
        <a href="#">Comments</a>
      </Fragment>
    )
  }
}
