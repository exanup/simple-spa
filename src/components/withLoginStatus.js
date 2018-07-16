import React, { Component } from 'react'

function withLoginStatus (WrappedComponent) {
  class EnhancedComponent extends Component {
    constructor (props) {
      super(props)
      this.state = { loggedUser: null }
    }

    componentDidMount () {
      const accessToken = localStorage.accessToken
      if (accessToken) {
        const user = JSON.parse(localStorage.user)
        this.setState({
          loggedUser: user
        })
      }
    }

    handleLogin = user => {
      this.setState({
        loggedUser: user
      })
    }

    handleLogout = user => {
      console.log('removing the app\'s state of loggedUser')
      this.setState({
        loggedUser: null
      })
    }

    render () {
      console.log('In withLoginStatus', this.state.loggedUser)
      console.log('Inside App HOC', this.state)

      return (
        <WrappedComponent
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          user={this.state.loggedUser}
          {...this.props}
        />
      )
    }
  }

  return EnhancedComponent
}

export default withLoginStatus
