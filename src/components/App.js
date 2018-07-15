import React, { Component, Fragment } from 'react'

import HeaderSection from './HeaderSection/HeaderSection'
import MainSection from './MainSection/MainSection'
import FooterSection from './FooterSection/FooterSection'

export default class App extends Component {
  render () {
    const blogName = {
      title: 'Blog of Greatness',
      subtitle: 'The most awesome blog in the world!'
    }

    return (
      <Fragment>
        <HeaderSection blogName={blogName} />
        <MainSection />
        <FooterSection blogName={blogName} />
      </Fragment>
    )
  }
}
