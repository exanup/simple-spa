import React, { Component } from 'react'

function withAddNewPostApi (WrappedComponent) {
  return class EnhancedComponent extends Component {
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withAddNewPostApi
