import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function EditPostBtn (props) {
  return (
    <Fragment>
      <Link
        to={'/edit-post/' + props.post.id}
        class="button is-info is-small is-outlined"
      >
        Edit
      </Link>
    </Fragment>
  )
}

export default EditPostBtn
