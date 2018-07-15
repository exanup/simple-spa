import React, { Component } from 'react'

export default class FooterSection extends Component {
  render () {
    const title = this.props.blogName.title

    return (
      <footer className="footer has-background-light">
        <section className="">
          <div className="content has-text-centered">
            <p>
              <strong>{title}</strong> by
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/exanup"
              >
                {' '}
                Anup Dhakal
              </a>. The source code is licensed
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://opensource.org/licenses/mit-license.php"
              >
                {' '}
                MIT
              </a>.
            </p>
          </div>
        </section>
      </footer>
    )
  }
}
