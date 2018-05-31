import * as providers from './providers'
import * as sequences from './sequences'

export type Providers = typeof providers

export type Sequences = typeof sequences

export type Post = {
	userId: string;
	title: string;
};

export type Posts = {
  [id: string]: Post
} & {'*'?: string[]}

export type User = {
	id: string;
	name: string;
  website: string;
  email: string;
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
	posts: Posts;
	users: Users;
	userModal: {
		show: boolean;
		id: string;
	};
	isLoadingPosts: boolean;
	isLoadingUser: boolean;
	error: string;
};
