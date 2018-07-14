import React, { Component, Fragment } from 'react'
import PageTitle from './HeaderSection/PageTitle'
import PostsContainer from './MainSection/PostsContainer'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <PageTitle title="My Blog" />
        <PostsContainer />
      </Fragment>
    )
  }
}
