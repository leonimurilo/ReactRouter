/**
 * Created by Leoni on 7/29/2017.
 */
import {FETCH_POSTS} from "../actions/index";
import _ from "lodash";

export default function (state = null, action) {
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}