import React, { PropTypes } from 'react';
import store from '../store';
class CommentBox extends React.Component {
  constructor(){
    super();
    this.state={
      comments:store.getState()
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(store.getState())
    store.dispatch({type:'ADD_COMMENT',comment:this.refs.comment.value})
    this.refs.commentForm.reset();
    this.setState({comments:store.getState()})
  }
  render () {
    let commentList=this.state.comments.map((comment,i) =>(<div key={i}>{comment}</div>))
    return(
      <div className='comment-box'>
        {commentList}
        <form ref='commentForm' className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' className='input' ref='comment'/>
          <input type='submit' className='submit-btn'/>
        </form>
        <div className='underline'></div>
      </div>
    )
  }
}

export default CommentBox;
