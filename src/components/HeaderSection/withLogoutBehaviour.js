import React, { Component } from 'react'
import * as authService from '../../services/auth'

function withLogoutBehaviour (WrappedComponent) {
  return class EnhancedComponent extends Component {
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
      return <WrappedComponent handleLogout={this.handleLogout} {...this.props} />
    }
  }
}

export default withLogoutBehaviour
