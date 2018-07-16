import React, { Component, Fragment } from 'react'
import LoggedInControl from './LoggedInControl'
import LoggedOutControl from './LoggedOutControl'

export default class AuthControl extends Component {
  render () {
    const user = this.props.user
    console.log('In AuthControl', user)

    return (
      <Fragment>
        {user ? (
          <LoggedInControl
            onLogin={this.props.onLogin}
            onLogout={this.props.onLogout}
            user={user}
          />
        ) : (
          <LoggedOutControl
            onLogin={this.props.onLogin}
            onLogout={this.props.onLogout}
          />
        )}
      </Fragment>
    )
  }
}
