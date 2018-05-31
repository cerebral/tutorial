export type Post = {
	id: string;
	title: string;
};

export type posts = {
	[id: string]: Post;
};

export type User = {
	id: string;
	name: string;
	website: string;
	address: {
		street: string;
		city: string;
	};
};

export type Users = {
	[id: string]: User;
};

export type State = {
	title: string;
	posts: posts;
	users: Users;
	userModal: {
		show: boolean;
		id: string;
	};
	isLoadingposts: boolean;
	isLoadingUser: boolean;
	error: string;
};
