import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class RegisterForm extends Component {
  handleSubmit = e => {
    console.log('registering in...')
    e.preventDefault()
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
