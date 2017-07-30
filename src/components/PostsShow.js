/**
 * Created by Leoni on 7/30/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../actions";
import {Link} from "react-router-dom";

class PostsShow extends Component{

    componentDidMount(){
        // prop provided by react-router
        const id = this.props.match.params.id;

        // action that fetches the post from the server
        // then the posts reducer will update the application state including or replacing the fetched post
        this.props.fetchPost(id);
    }

    render(){
        const post = this.props.post;

        if(!post){
            return (<div>Loading...</div>)
        }

        return (
            <div>
                <Link to="/" className="btn btn-primary">Back to index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }

}

// ownProps is the props object that is headed to the component (PostsShow)
// at this time, the "ownProps" argument is the same as the this.props inside the component
function mapStateToProps({posts}, ownProps){
    // we only make available the only single post the component should show up
    // avoiding data dependency
    console.log(posts);
    return {post: posts[ownProps.match.params.id]};
}


export default connect(mapStateToProps, {fetchPost})(PostsShow);