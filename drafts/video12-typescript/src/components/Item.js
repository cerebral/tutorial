import React from 'react'
import { state, sequences, props } from 'cerebral/proxy'
import { connect } from '@cerebral/react'
import Modal from './Modal'
import Item from './Item'

export default connect(
  {
    item: state.items[props.id],
    openUserModal: sequences.openUserModal
  },
  function Item({ item, openUserModal }) {
    return (
      <div
        className="item"
        onClick={() => openUserModal({ id: item.userId })}
      >
        {item.title}
      </div>
    )
  }
)