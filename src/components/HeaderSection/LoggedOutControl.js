import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class LoggedOutControl extends Component {
  render () {
    return (
      <Fragment>
        <p className="buttons is-right">
          <Link to="/register" className="button is-light">
            <span className="icon">
              <i className="fas fa-user-plus" />
            </span>
            <span>Register</span>
          </Link>
          <Link to="/login" className="button is-light">
            <span className="icon">
              <i className="fas fa-sign-in-alt" />
            </span>
            <span>Login</span>
          </Link>
        </p>
      </Fragment>
    )
  }
}
