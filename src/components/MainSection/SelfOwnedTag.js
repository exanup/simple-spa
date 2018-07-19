import React, { Fragment } from 'react'

function SelfOwnedTag (props) {
  return (
    <Fragment>
      <span style={{ marginLeft: '5px' }}>
        {props.user && props.user.id === props.post.author_id ? (
          <span className="tag is-warning">Owned</span>
        ) : (
          ''
        )}
      </span>
    </Fragment>
  )
}

export default SelfOwnedTag
