import React, { Component } from 'react'

export default class AddNewComment extends Component {
  render () {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img alt="" src="https://via.placeholder.com/128x128" />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea is-small"
                placeholder="Add a comment..."
              />
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <a className="button is-info">Submit</a>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">Post comment as: Author</div>
            </div>
          </nav>
        </div>
      </article>
    )
  }
}
