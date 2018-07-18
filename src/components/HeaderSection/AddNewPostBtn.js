import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function AddNewPostBtn (props) {
  return (
    <Link to="/add-new-post" className="button is-light">
      <Fragment>
        <span className="icon">
          <i className="fas fa-plus" />
        </span>
        <span>Add New Post</span>
      </Fragment>
    </Link>
  )
}

export default AddNewPostBtn
