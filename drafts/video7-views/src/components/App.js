import React from 'react'
import { state, sequences } from 'cerebral/proxy'
import { connect } from '@cerebral/react'

export default connect(
  {
    items: state.items,
    isLoadingItems: state.isLoadingItems,
    openUserModal: sequences.openUserModal
  },
  function App({ items, isLoadingItems, openUserModal }) {
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
          {items.map(item => (
            <div
              key={item.id}
              className="item"
              onClick={() => openUserModal({ id: item.userId })}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    )
  }
)