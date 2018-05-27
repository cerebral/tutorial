import React from 'react'
import { state, props } from 'cerebral/proxy'
import { connect } from '@cerebral/react'
import Modal from './Modal'
import Item from './Item'

export default connect(
  {
    item: state.items[props.id]
  },
  function Item({ item, openUserModal }) {
    return (
      <a className="item" href={`/users/${item.userId}`}>
        {item.title}
      </a>
    )
  }
)