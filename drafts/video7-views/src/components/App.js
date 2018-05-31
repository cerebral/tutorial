import React from 'react';
import { state, sequences } from 'cerebral/proxy';
import { connect } from '@cerebral/react';

export default connect(
	{
		posts: state.posts,
		isLoadingposts: state.isLoadingposts,
		openUserModal: sequences.openUserModal
	},
	function App({ posts, isLoadingposts, openUserModal }) {
		if (isLoadingposts) {
			return (
				<div className="content">
					<h4>Loading posts...</h4>
				</div>
			);
		}

		return (
			<div className="content">
				<div className="posts">
					{posts.map((Post) => (
						<div key={Post.id} className="Post" onClick={() => openUserModal({ id: Post.userId })}>
							{Post.title}
						</div>
					))}
				</div>
			</div>
		);
	}
);
