import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { serialize } from 'dom-form-serializer'
import * as auth from '../../services/auth'

export default class RegisterForm extends Component {
  register = body => auth.register(body)

  handleSubmit = async e => {
    console.log('registering in 3, 2, 1...')
    e.preventDefault()
    const $form = e.target.form
    const formData = serialize($form)

    try {
      // hit the api with the data
      const response = await this.register(formData)
      console.log(response)

      if (!response) throw new Error('Cannot create a new user')

      console.log('new user created!')

      // // store the access token and refresh token in the client
      // localStorage.setItem('accessToken', response.accessToken)
      // localStorage.setItem('refreshToken', response.refreshToken)
      // localStorage.setItem('user', JSON.stringify(response.user))

      // console.log(
      //   'loggedIn',
      //   response.accessToken,
      //   response.refreshToken,
      //   response.user
      // )

      // // lift up the state!
      // this.props.onLogin(response.user)

      // // The following is a hack to force react-router to re-render
      // //  even if we are hitting the current url
      // this.props.history.push({ pathname: '/empty' })
      // this.props.history.go(-1)
    } catch (err) {
      console.log(err)
    }
  }

  goToHome = () => {
    this.props.history.push({ pathname: '/' })
  }

  componentDidUpdate = () => {
    console.group('inside RegisterForm', this.props)
    const isLogged = !!this.props.user
    console.log('isLogged?', isLogged)
    console.groupEnd()

    if (isLogged) {
      this.goToHome()
    }
  }

  render () {
    return (
      <Fragment>
        <form name="registerForm">
          <div className="columns">
            <div className="column is-4" />
            <div className="column is-4">
              <div className="notification">
                Enter your registration details:
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-pencil-alt" />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-pencil-alt" />
                  </span>
                </p>
              </div>
              <div className="field">
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
                <Link
                  to="/"
                  style={{ width: '100%' }}
                  onClick={this.handleSubmit}
                >
                  <button
                    type="submit"
                    className="button is-medium is-primary is-fullwidth"
                  >
                    <span className="icon">
                      <i className="fas fa-user-plus" />
                    </span>
                    <span>Register</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="column is-4" />
          </div>
        </form>
      </Fragment>
    )
  }
}
