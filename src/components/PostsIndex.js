/**
 * Created by Leoni on 7/29/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

// nearly identical to the anchor tag. It is used to link react pages but won't
// ask the browser to request the page to the server
import {Link} from "react-router-dom";

import _ from "lodash";


class PostsIndex extends Component {

    renderPosts(posts){
        return _.map(posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render(){
        console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts(this.props.posts)}
                </ul>
            </div>
        );
    }

    componentDidMount(){
        this.props.fetchPosts();
    }
}

function mapStateToProps({posts}){
    return {posts};
}

// instead of using mapDispatchToProps, we can pass the action creator directly and the connect() takes care for us
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);