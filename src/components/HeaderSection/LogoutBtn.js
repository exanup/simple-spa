import React from 'react'
import withLogoutBehaviour from './withLogoutBehaviour'
import { withRouter } from 'react-router-dom'

function LogoutBtn (props) {
  return (
    <button onClick={props.handleLogout} className="button is-light">
      <span className="icon">
        <i className="fas fa-sign-in-alt" />
      </span>
      <span>Logout</span>
    </button>
  )
}

export default withRouter(withLogoutBehaviour(LogoutBtn))
