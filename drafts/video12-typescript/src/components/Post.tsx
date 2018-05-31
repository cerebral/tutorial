import * as React from 'react';
import { state, sequences, props } from 'cerebral.proxy';
import { connect } from '@cerebral/react';

type Props = {
  id: string
}

const deps = {
  post: state.posts[props.id],
  openUserModal: sequences.openUserModal
}

const Post: React.SFC<Props & typeof deps> = ({ post, openUserModal }) => {
  return (
    <a className="post" href={`/users/${post.userId}`}>
      {post.title}
    </a>
  );
}


export default connect<Props, typeof deps>(deps, Post);
