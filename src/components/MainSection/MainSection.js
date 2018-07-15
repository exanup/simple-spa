import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PostsContainer from './PostsContainer'

export default class MainSection extends Component {
  render () {
    return (
      <main>
        <section className="section">
          <div className="container">
            <Route exact path="/" component={PostsContainer} />
            <Route path="/posts/:id" component={PostsContainer} />
          </div>
        </section>
      </main>
    )
  }
}
