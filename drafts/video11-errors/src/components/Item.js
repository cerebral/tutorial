import React from 'react';
import { state, props } from 'cerebral/proxy';
import { connect } from '@cerebral/react';
import Modal from './Modal';
import Post from './Post';

export default connect(
	{
		Post: state.posts[props.id]
	},
	function Post({ Post, openUserModal }) {
		return (
			<a className="Post" href={`/users/${Post.userId}`}>
				{Post.title}
			</a>
		);
	}
);
