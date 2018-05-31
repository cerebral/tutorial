import React from 'react';
import { state } from 'cerebral/proxy';
import { connect } from '@cerebral/react';
import UserModal from './UserModal';
import Post from './Post';

export default connect(
	{
		postsId: state.posts['*'],
		isLoadingposts: state.isLoadingposts,
		showUserModal: state.userModal.show
	},
	function App({ postsId, isLoadingposts, showUserModal }) {
		if (isLoadingposts) {
			return (
				<div className="content">
					<h4>Loading posts...</h4>
				</div>
			);
		}

		return (
			<div className="content">
				<div className="posts">{postsId.map((id) => <Post key={id} id={id} />)}</div>
				{showUserModal ? <UserModal /> : null}
			</div>
		);
	}
);
