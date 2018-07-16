import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class PageTitle extends Component {
  render () {
    const title = this.props.blogName.title
    const subtitle = this.props.blogName.subtitle
    const homeHref = '/'

    return (
      <Fragment>
        <h1 className="title is-2">
          <Link to={homeHref}>{title}</Link>
        </h1>
        <p className="subtitle is-5 is-italic has-text-weight-light">
          {subtitle}
        </p>
      </Fragment>
    )
  }
}
