import { createStore } from 'redux';
import rootReducer from './reducers';
const comments={
  1: ['1nice course', '1help me a lot'],
  2: ['2really good', '2save me lots of time']
}
const posts=[
  {
    id:1,
    title: 'redux-hello',
    likes:3
  },{
    id: 2,
    title: 'redux-baby',
    likes:5
  }
]
const defaultState ={
  comments,
  posts
}
let store=createStore(rootReducer,defaultState);
export default store;
