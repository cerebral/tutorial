import * as React from 'react'
import { state } from 'app.proxy'
import { connect } from '@cerebral/react'

const deps = {
  isLoadingUser: state.isLoadingUser,
  user: state.users[state.userModal.id]
}

const UserModal: React.SFC<typeof deps> = ({ isLoadingUser, user }) => {
  return (
    <div className="modal">
      <a className="modal-backdrop" href="/" />
      {
        isLoadingUser ? (
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
        )
      }
    </div>
  )
}

export default connect(deps, UserModal)

