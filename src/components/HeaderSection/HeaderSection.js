import React, { Component } from 'react'
import PageTitle from './PageTitle'

export default class HeaderSection extends Component {
  render () {
    const blogName = this.props.blogName

    return (
      <header>
        <PageTitle blogName={blogName} />
      </header>
    )
  }
}
