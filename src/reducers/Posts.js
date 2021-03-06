/**
 * Created by Leoni on 7/29/2017.
 */
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from "../actions/index";
import _ from "lodash";

export default function (state = {}, action) {
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        case FETCH_POST:
            // ES5
            // const post = action.payload.data;
            // const newState = {...state, };
            // newState[post.id] = post;
            // return newState;

            // ES6
            // add a new property to state. the key is the id (inside brackets) and the value after the ":"
            // this creates a new instance of state too.
            console.log("here");
            return {...state, [action.payload.data.id]: action.payload.data};
        case DELETE_POST:
            // omit will take the state object and delete the object that has the key equals to action.payload
            // this way our state gets updated when the user successfully delete a post on the server
            // even if the home page doesn't reload/re fetch the posts
            return _.omit(state, action.payload);
        default:
            return state;
    }
}