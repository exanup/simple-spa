import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { formatAuthorName } from '../../utils/string'
import * as authService from '../../services/auth'

class LoggedInControl extends Component {
  logout = () => authService.logout()

  handleLogout = async e => {
    console.log('logging out')
    e.preventDefault()
    try {
      // hit logout url
      const response = await this.logout()
      console.log(response)
      if (response !== 1) throw Error('Could not log out')

      // need to delete all the saved data
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')

      console.log('removed the local stored data')
      console.log(localStorage.accessToken)
      console.log(localStorage.refreshToken)
      console.log(localStorage.user)

      // update the app state to logged out
      this.props.onLogout()

      // The following is a hack to force react-router to re-render
      //  even if we are hitting the current url
      this.props.history.push({ pathname: '/empty' })
      this.props.history.go(-1)
    } catch (err) {
      console.log('could not log out:', err)
      // could not log out
    }
  }

  render () {
    const user = this.props.user
    const name = formatAuthorName(user)

    return (
      <Fragment>
        <p className="buttons is-right">
          <button className="button is-light">
            <span className="icon">
              <i className="fas fa-user" />
            </span>
            <span>
              Welcome <strong className="has-text-link">{name}</strong>
            </span>
          </button>
          <button onClick={this.handleLogout} className="button is-light">
            <span className="icon">
              <i className="fas fa-sign-in-alt" />
            </span>
            <span>Logout</span>
          </button>
        </p>
      </Fragment>
    )
  }
}

export default withRouter(LoggedInControl)
