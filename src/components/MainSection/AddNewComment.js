import React from 'react'
import { withRouter } from 'react-router-dom'

import { formatAuthorName } from '../../utils/string'
import withAddNewCommentApi from './withAddNewCommentApi'

function AddNewComment (props) {
  const authorName = formatAuthorName(props.author)

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img alt="" src="https://via.placeholder.com/128x128" />
        </p>
      </figure>
      <div className="media-content">
        <form name="addNewCommentForm">
          <div className="field">
            <p className="control">
              <textarea
                name="body"
                className="textarea is-small"
                placeholder="Add a comment..."
              />
            </p>
          </div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <button
                  onClick={props.handleSubmit}
                  type="submit"
                  className="button is-info"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                Post comment as:&nbsp;
                <em className="has-text-info">{authorName}</em>&nbsp;
                <small>
                  (<span className="has-text-link">{props.author.email}</span>)
                </small>
              </div>
            </div>
          </nav>
        </form>
      </div>
    </article>
  )
}

export default withRouter(withAddNewCommentApi(AddNewComment))
