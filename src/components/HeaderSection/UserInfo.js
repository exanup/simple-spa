import React from 'react'

export default function UserInfo (props) {
  return (
    <button className="button is-light">
      <span className="icon">
        <i className="fas fa-user" />
      </span>
      <span>
        Welcome <strong className="has-text-link">{props.userName}</strong>
      </span>
    </button>
  )
}
