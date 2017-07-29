import { combineReducers } from 'redux';
import PostsReducer from "./Posts";

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
