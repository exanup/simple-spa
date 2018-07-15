import React, { Component, Fragment } from 'react'

export default class PageTitle extends Component {
  render () {
    const title = this.props.blogName.title
    const subtitle = this.props.blogName.subtitle

    return (
      <Fragment>
        <section className="hero is-light is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-2">{title}</h1>
              <h2 className="subtitle is-5 is-italic has-text-weight-light">
                {subtitle}
              </h2>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
