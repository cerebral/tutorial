import App from 'cerebral';
import Devtools from 'cerebral/devtools';
import { state, props, sequences } from 'cerebral/proxy';
import { set } from 'cerebral/factories';

const API_URL = 'https://jsonplaceholder.typicode.com';

function getPosts({ api }) {
	return api.getPosts().then((posts) => ({ posts }));
}

function getUser({ api, props }) {
	return api.getUser(props.id).then((user) => ({ user }));
}

const app = App(
	{
		state: {
			title: 'My Project',
			posts: [],
			users: {},
			userModal: {
				show: false,
				id: null
			},
			isLoadingPosts: false,
			isLoadingUser: false,
			error: null
		},
		sequences: {
			openPostsPage: [
				set(state.isLoadingPosts, true),
				getPosts,
				set(state.posts, props.posts),
				set(state.isLoadingPosts, false)
			],
			openUserModal: [
				set(state.userModal.id, props.id),
				set(state.userModal.show, true),
				set(state.isLoadingUser, true),
				getUser,
				set(state.users[props.id], props.user),
				set(state.isLoadingUser, false)
			],
			closeUserModal: set(state.userModal.show, false)
		},
		providers: {
			api: {
				getPosts() {
					return fetch(`${API_URL}/posts`).then((response) => response.json());
				},
				getUser(id) {
					return fetch(`${API_URL}/users/${id}`).then((response) => response.json());
				}
			}
		}
	},
	{
		devtools: Devtools({
			host: 'localhost:8585'
		})
	}
);

const openUserModal = app.get(sequences.openUserModal);
openUserModal({ id: 1 });
