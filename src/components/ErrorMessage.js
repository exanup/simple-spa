import React, { Component } from 'react'

export default class ErrorMessage extends Component {
  render () {
    return (
      <div className="has-text-centered">
        <article className="container message is-danger is-medium">
          <div className="message-header">
            <p>Error while fetching data from server</p>
            <button className="delete" aria-label="delete" />
          </div>
          <div className="message-body content">
            <p>
              There was some kind of unexpected error while trying to fetch data
              from the server. This problem should not persist and should go
              away once you refresh (<strong><kbd>F5</kbd></strong>) the page.
            </p>
            <p>Also try hard-refresh (<strong><kbd>Ctrl + F5</kbd></strong>).</p>
            <p>
              If the problem persists, please contact the owners. Contact
              details are in the footer section.
            </p>
          </div>
        </article>
      </div>
    )
  }
}
