/**
 * Created by Leoni on 7/29/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";
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