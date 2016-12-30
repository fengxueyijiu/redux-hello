import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {Link} from 'react-router';
class PostBody extends React.Component {
  handleClick(id){
    store.dispatch({type:'INCREMENT_LIKES',index:id-1})
  }
  render () {
    console.log(this.props.comments)
    return(
      <div className='post-body'>
        <Link to={`/posts/${this.props.id}`} className='title'>{this.props.posts[this.props.id-1].title}</Link>
        <div className='comment-num'>

         {this.props.comments[this.props.id].length}---
         {this.props.id}
        </div>
        <div className="likes-num" onClick={this.handleClick.bind(this,this.props.id)}>
          {this.props.posts[this.props.id - 1].likes}likes
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state) => ({comments:state.comments, posts: state.posts});
export default connect(mapStateToProps)(PostBody);
