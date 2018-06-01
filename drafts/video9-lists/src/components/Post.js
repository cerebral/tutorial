import React from 'react';
import { state, sequences, props } from 'cerebral/proxy';
import { connect } from '@cerebral/react';
import Post from './Post';

export default connect(
	{
		post: state.posts[props.id],
		openUserModal: sequences.openUserModal
	},
	function Post({ post, openUserModal }) {
		return (
			<div className="post" onClick={() => openUserModal({ id: post.userId })}>
				{post.title}
			</div>
		);
	}
);
