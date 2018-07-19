import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PostsController from './PostsController'
import PostController from './PostController'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import AddNewPost from './AddNewPost'

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
              render={routerProps => (
                <PostsController {...routerProps} user={this.props.user} />
              )}
            />
            <Route
              path="/posts/:id"
              render={routerProps => (
                <PostController {...routerProps} user={this.props.user} />
              )}
            />
            <Route
              path="/register"
              render={routerProps => (
                <RegisterForm
                  {...routerProps}
                  onLogin={this.props.onLogin}
                  user={this.props.user}
                />
              )}
            />
            <Route
              path="/login"
              render={routerProps => (
                <LoginForm
                  {...routerProps}
                  onLogin={this.props.onLogin}
                  user={this.props.user}
                />
              )}
            />
            <Route
              path="/add-new-post"
              render={routerProps => (
                <AddNewPost {...routerProps} user={this.props.user} />
              )}
            />
          </div>
        </section>
      </main>
    )
  }
}

export default MainSection
