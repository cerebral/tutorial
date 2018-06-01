import React from 'react';
import { state, props } from 'cerebral/proxy';
import { connect } from '@cerebral/react';
import Post from './Post';

export default connect(
	{
		post: state.posts[props.id]
	},
	function Post({ post }) {
		return (
			<a className="post" href={`/users/${post.userId}`}>
				{post.title}
			</a>
		);
	}
);
