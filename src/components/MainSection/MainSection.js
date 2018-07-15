import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PostsController from './PostsController'
import PostController from './PostController'

export default class MainSection extends Component {
  render () {
    return (
      <main>
        <section className="section">
          <div className="container">
            <Route exact path="/" component={PostsController} />
            <Route path="/posts/:id" component={PostController} />
          </div>
        </section>
      </main>
    )
  }
}
