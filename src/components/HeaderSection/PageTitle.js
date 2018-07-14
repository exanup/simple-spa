import React, { Component, Fragment } from 'react'

export default class PageTitle extends Component {
  render () {
    const title = this.props.title
    return (
      <Fragment>
        <h1>{title}</h1>
      </Fragment>
    )
  }
}
