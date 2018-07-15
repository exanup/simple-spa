import React, { Component } from 'react'
import TrimmedPost from './TrimmedPost'
import withApi from '../withApi'

class PostsContainer extends Component {
  render () {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-desktop">
            {this.props.posts.map(post => <TrimmedPost key={post.id} {...post} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default withApi(PostsContainer)
