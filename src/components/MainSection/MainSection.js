import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PostsController from './PostsController'
import PostController from './PostController'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

class MainSection extends Component {
  render () {
    console.log('inside MainSection', this.props)

    return (
      <main>
        <section className="section">
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <PostsController
                  {...props}
                  onLogin={this.props.onLogin}
                  onLogout={this.props.onLogout}
                  user={this.props.user}
                />
              )}
            />
            <Route
              path="/posts/:id"
              render={props => (
                <PostController
                  {...props}
                  onLogin={this.props.onLogin}
                  onLogout={this.props.onLogout}
                  user={this.props.user}
                />
              )}
            />
            <Route
              path="/register"
              render={props => (
                <RegisterForm
                  {...props}
                  onLogin={this.props.onLogin}
                  onLogout={this.props.onLogout}
                  user={this.props.user}
                />
              )}
            />
            <Route
              path="/login"
              render={props => (
                <LoginForm
                  {...props}
                  onLogin={this.props.onLogin}
                  onLogout={this.props.onLogout}
                  user={this.props.user}
                />
              )}
            />
          </div>
        </section>
      </main>
    )
  }
}

export default MainSection
