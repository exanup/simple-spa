import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function DeletePostBtn (props) {
  return (
    <Fragment>
      <Link
        to={'/delete-post/' + props.post.id}
        className="button is-danger is-small is-outlined"
      >
        Delete
      </Link>
    </Fragment>
  )
}

export default DeletePostBtn
