import React from 'react'
import { state } from 'cerebral/proxy'
import { connect } from '@cerebral/react'
import Modal from './Modal'

export default connect(
  {
    isLoadingUser: state.isLoadingUser,
    user: state.users[state.userModal.id]
  },
  function UserModal({ isLoadingUser, user }) {
    if (isLoadingUser) {
      return <h4>Loading...</h4>
    }

    return (
      <div className="modal">
        <a className="modal-backdrop" href="/" />
        <div className="modal-content">
          <h4>{user.name}</h4>
          <dl>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>Address</dt>
            <dd>{user.address.street}, {user.address.city}</dd>
            <dt>Website</dt>
            <dd><a href={user.website}>{user.website}</a></dd>
          </dl>
        </div>
      </div>
    )
  }
)

