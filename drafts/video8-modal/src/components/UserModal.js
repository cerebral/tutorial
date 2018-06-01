import React from 'react'
import { state, sequences } from 'cerebral/proxy'
import { connect } from '@cerebral/react'
import Modal from './Modal'

export default connect(
  {
    isLoadingUser: state.isLoadingUser,
    user: state.users[state.userModal.id],
    closeUserModal: sequences.closeUserModal
  },
  function UserModal({ isLoadingUser, user }) {
    return (
      <div className="modal">
        <div className="modal-backdrop" onClick={() => closeUserModal()} />
        {isLoadingUser ? (
          <div className="modal-content">
            <h4>Loading...</h4>
          </div>
        ) : (
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
        )}
      </div>
    )
  }
)

