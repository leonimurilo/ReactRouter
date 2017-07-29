/**
 * Created by Leoni on 7/29/2017.
 */
import React, {Component} from "react";

// Field is a component. We tell what type of input we want to receive from the user
// the problem is that it doesn't know how to show up to the user. it only knows how to interact with redux-form
// reduxForm is a function that is very similar to the connect function of the react-redux
// This function is what allows our component to communicate with that additional reducer called form
import {Field, reduxForm} from "redux-form";

// lets user to create (post) a new post
class PostsNew extends Component{

    // function responsible to render the input/field for the user
    // its parameter called field (that is passed by the redux-form) contains some event handlers
    // the field is a way to bind an input to the Field saying "hey, Field (from redux-form)
    // this is the input that you are responsible"
    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                {/* tells Field that this is the input it is responsible for*/}
                {/* the 3 dots indicate that every single property of the field.input must communicate
                as props to the input
                */}
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }


    render(){
        return (
            <form>
                {/*The name property specifies what piece of state is being edited*/}
                <Field
                    label="title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }

}

//reduxForm() give redux-form the ability to communicate directly from this component to the reducer
// (reducer that came from the redux-form library and that was put into the app rootReducer)
// receives a single argument in the first pair of parenthesis. It is an options object
export default reduxForm({
        form: "PostsNewForm" // unique name
})(PostsNew);