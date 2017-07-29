/**
 * Created by Leoni on 7/29/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions"


class PostsIndex extends Component {



    render(){
        return (
            <div>
                Posts Index
            </div>
        );
    }

    componentDidMount(){
        this.props;fetchPosts();
    }
}


// instead of using mapDispatchToProps, we can pass the action creator directly and the connect() takes care for us
export default connect(null, {fetchPosts})(PostsIndex);