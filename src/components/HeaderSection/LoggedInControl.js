import React, { Component, Fragment } from 'react'
import { formatAuthorName } from '../../utils/string'
import UserInfo from './UserInfo'
import LogoutBtn from './LogoutBtn'
import AddNewPostBtn from './AddNewPostBtn'

class LoggedInControl extends Component {
  render () {
    const user = this.props.user
    const userName = formatAuthorName(user)

    return (
      <Fragment>
        <p className="buttons is-right">
          <UserInfo userName={userName} />
          <AddNewPostBtn />
          <LogoutBtn onLogout={this.props.onLogout} />
        </p>
      </Fragment>
    )
  }
}

export default LoggedInControl
