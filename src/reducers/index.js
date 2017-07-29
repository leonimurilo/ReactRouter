import { combineReducers } from 'redux';
import PostsReducer from "./Posts";

// redux form is just saving us from having to create a bunch of action creators
// when we use the Field component inside our components, they already take care about firing the needed actions
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

export default rootReducer;
