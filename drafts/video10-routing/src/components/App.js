import React from 'react'
import { state } from 'cerebral/proxy'
import { connect } from '@cerebral/react'
import UserModal from './UserModal'
import Item from './Item'

export default connect(
  {
    itemsId: state.items['*'],
    isLoadingItems: state.isLoadingItems,
    showUserModal: state.userModal.show
  },
  function App({ itemsId, isLoadingItems, showUserModal }) {
    if (isLoadingItems) {
      return (
        <div className="content">
          <h4>Loading items...</h4>
        </div>
      )
    }

    return (
      <div className="content">
        <div className="items">
          {itemsId.map(id => <Item key={id} id={id} />)}
        </div>
        {showUserModal ? <UserModal /> : null}
      </div>
    )
  }
)