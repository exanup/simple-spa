import React, { Fragment } from 'react'
import EditPostBtn from './EditPostBtn'
import DeletePostBtn from './DeletePostBtn'

function PostControls (props) {
  return (
    <Fragment>
      {props.user && props.user.id === props.post.author_id ? (
        <p className="buttons is-right">
          <EditPostBtn post={props.post} />
          <DeletePostBtn post={props.post} />
        </p>
      ) : (
        ''
      )}
    </Fragment>
  )
}

export default PostControls
