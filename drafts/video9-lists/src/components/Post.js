import React from 'react';
import { state, sequences, props } from 'cerebral/proxy';
import { connect } from '@cerebral/react';
import Modal from './Modal';
import Post from './Post';

export default connect(
	{
		Post: state.posts[props.id],
		openUserModal: sequences.openUserModal
	},
	function Post({ Post, openUserModal }) {
		return (
			<div className="Post" onClick={() => openUserModal({ id: Post.userId })}>
				{Post.title}
			</div>
		);
	}
);
