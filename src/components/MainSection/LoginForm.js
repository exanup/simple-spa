import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { serialize } from 'dom-form-serializer'
import * as auth from '../../services/auth'

class LoginForm extends Component {
  login = body => auth.login(body)

  handleSubmit = async e => {
    e.preventDefault()
    // prepare data from the from
    const $form = e.target.form
    const formData = serialize($form)

    try {
      // hit the api with the data
      const response = await this.login(formData)

      // store the access token and refresh token in the client
      localStorage.setItem('accessToken', response.accessToken)
      localStorage.setItem('refreshToken', response.refreshToken)
      localStorage.setItem('user', JSON.stringify(response.user))

      console.log(
        'loggedIn',
        response.accessToken,
        response.refreshToken,
        response.user
      )

      // lift up the state!
      this.props.onLogin(response.user)

      // The following is a hack to force react-router to re-render
      //  even if we are hitting the current url
      this.props.history.push({ pathname: '/empty' })
      this.props.history.go(-1)
    } catch (err) {
      console.log(err)
    }
  }

  goToHome = () => {
    this.props.history.push({ pathname: '/' })
  }

  componentDidUpdate = () => {
    console.group('LoginForm did update', this.props)
    const isLogged = !!this.props.user
    console.log('isLogged?', isLogged)
    console.groupEnd()

    if (isLogged) {
      this.goToHome()
    }
  }

  render () {
    console.group('LoginForm render', this.props)
    const isLogged = !!this.props.user
    console.log('isLogged?', isLogged)
    console.groupEnd()

    // if (isLogged) {
    //   this.goToHome()
    //   return <Fragment />
    // }

    return (
      <Fragment>
        <form name="loginForm">
          <div className="columns">
            <div className="column is-4" />
            <div className="column is-4">
              <div className="field">
                <div className="notification">Enter your login details:</div>
                <p className="control has-icons-left">
                  <input
                    className="input is-medium"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input is-medium"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
              </div>
              <div className="buttons">
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="button is-medium is-primary is-fullwidth"
                >
                  <span className="icon">
                    <i className="fas fa-sign-in-alt" />
                  </span>
                  <span>Login</span>
                </button>
              </div>
            </div>
            <div className="column is-4" />
          </div>
        </form>
      </Fragment>
    )
  }
}

export default withRouter(LoginForm)
