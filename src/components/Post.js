import React, { PropTypes } from 'react'
import PostBody from './PostBody';
import CommentBox from './CommentBox';

class Post extends React.Component {
  render () {
    return(

        <div className='hello'>
          <div className='top clearfix'>
            <PostBody id={this.props.params.postId}/>
          </div>
          <div className='bottom clearfix'>
            <CommentBox id={this.props.params.postId}/>
          </div>
        </div>
    )
  }
}

export default Post;
