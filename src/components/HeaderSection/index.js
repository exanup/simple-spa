import React, { Component } from 'react'
import PageTitle from './PageTitle'
import AuthControl from './AuthControl'

export default class HeaderSection extends Component {
  render () {
    const blogName = this.props.blogName

    console.log('In Headersection', this.props.user)

    return (
      <header>
        <section className="hero is-light is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-8">
                  <PageTitle blogName={blogName} />
                </div>
                <div className="column is-4">
                  <AuthControl
                    onLogin={this.props.onLogin}
                    onLogout={this.props.onLogout}
                    user={this.props.user}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    )
  }
}
