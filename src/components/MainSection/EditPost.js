import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import withEditPostApi from './withEditPostApi'

function EditPost (props) {
  return (
    <Fragment>
      <form name="addNewPostForm">
        <div className="columns">
          <div className="column is-12">
            <div className="field">
              <div className="notification">Edit the post:</div>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter modified post title"
                  name="title"
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <textarea
                  className="textarea"
                  placeholder="Write something about the modified topic"
                  name="body"
                />
              </p>
            </div>
            <div className="buttons">
              <button
                type="submit"
                onClick={props.handleSubmit}
                className="button is-primary"
              >
                <span className="icon">
                  <i className="fas fa-edit" />
                </span>
                <span>Update post</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default withRouter(withEditPostApi(EditPost))
