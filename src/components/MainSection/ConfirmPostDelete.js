import React from 'react'
import withDeletePostApi from './withDeletePostApi'

function ConfirmPostDelete (props) {
  return (
    <div className="columns">
      <div className="column is-4" />
      <div className="column is-4">
        <article className="message is-warning has-text-centered">
          <div className="message-header">
            <p>Confirm Delete Post</p>
          </div>
          <div className="message-body">
            Are you sure you want to delete the post?
          </div>
          <div className="message-footer buttons is-centered">
            <button
              onClick={props.handleConfirmDelete}
              className="button is-danger"
            >
              Yes, delete.
            </button>
            <button
              onClick={props.handleCancelDelete}
              className="button is-success"
            >
              No, get me out of here.
            </button>
          </div>
        </article>
      </div>
      <div className="column is-4" />
    </div>
  )
}

export default withDeletePostApi(ConfirmPostDelete)
