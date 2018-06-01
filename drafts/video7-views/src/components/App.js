import React from 'react';
import { state, sequences } from 'cerebral/proxy';
import { connect } from '@cerebral/react';

export default connect(
	{
		posts: state.posts,
		isLoadingPosts: state.isLoadingPosts,
		openUserModal: sequences.openUserModal
	},
	function App({ posts, isLoadingPosts, openUserModal }) {
		return (
			<div className="content">
				<div className="posts">
					{isLoadingPosts ? (
              <h4>Loading posts...</h4>
          ) : posts.map((post) => (
						<div key={post.id} className="post" onClick={() => openUserModal({ id: post.userId })}>
							{post.title}
						</div>
					))}
				</div>
			</div>
		);
	}
);
