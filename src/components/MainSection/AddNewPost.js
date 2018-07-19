import React, { Fragment } from 'react'
import withAddNewPostApi from './withAddNewPostApi'
import { withRouter } from 'react-router-dom'

function AddNewPost (props) {
  return (
    <Fragment>
      <form name="addNewPostForm">
        <div className="columns">
          <div className="column is-12">
            <div className="field">
              <div className="notification">Add new post:</div>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter the post title"
                  name="title"
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <textarea
                  className="textarea"
                  placeholder="Write something about the new topic"
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
                  <i className="fas fa-plus" />
                </span>
                <span>Create new post</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default withRouter(withAddNewPostApi(AddNewPost))
