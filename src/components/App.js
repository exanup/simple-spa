import React, { Component, Fragment } from 'react'

import HeaderSection from './HeaderSection/HeaderSection'
import MainSection from './MainSection/MainSection'
import FooterSection from './FooterSection/FooterSection'
import withLoginStatus from './withLoginStatus'

class App extends Component {
  render () {
    const blogName = {
      title: 'Blog of Greatness',
      subtitle: 'The most awesome blog in the world!'
    }

    console.log('In App', this.props.user)
    return (
      <Fragment>
        <HeaderSection
          onLogin={this.props.onLogin}
          onLogout={this.props.onLogout}
          user={this.props.user}
          blogName={blogName}
        />
        <MainSection
          onLogin={this.props.onLogin}
          onLogout={this.props.onLogout}
          user={this.props.user}
        />
        <FooterSection blogName={blogName} />
      </Fragment>
    )
  }
}

export default withLoginStatus(App)
