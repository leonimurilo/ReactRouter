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
        //gets field.meta, field.meta.touched and field.meta.error
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
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
                <div className="text-help">
                    {/*the error data comes from when we validate the form, the Field recalls this function to re-render and
                     then we cant render also an error message*/}
                    {/*Uses the state of the field called touch to check if the user already
                     focused the input and then unfocused it. Used to only show the error after the user
                     gets out of the field (as if the user had ended with the field)*/}
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    // values contains all the input values of the form
    onSubmit(values){

    }

    render(){
        // function that is added in the component props by reduxForm()
        const {handleSubmit} = this.props;

        return (
            // handleSubmit will check if the form is valid and ready to be submit, it call the callback function
            // that is in our case, the onSubmit()
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                {/*The name property specifies what piece of state is being edited*/}
                <Field
                    label="title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }

}


// function that will be called automatically at certain points during the form's lifecycle.
// most notable whenever the user tries to submit the form
// the argument values contains all different values the the user entered into the form
function validate(values){
    const errors = {};
    // validate the inputs (values)
    // the error.property must be the name of the Field
    if(!values.title || values.title.length < 4){
        errors.title = "Enter a title that is at least 4 characters!"
    }

    if(!values.categories){
        errors.categories = "Enter some categories!"
    }

    if(!values.content || values.content.length < 10){
        errors.content = "Enter some content with at least 10 characters!"
    }

    // if the returned object is empty, redux-form assumes that everything is ok with the form values
    // else, it doesn't submit the form
    return errors;
}


//reduxForm() give redux-form the ability to communicate directly from this component to the reducer
// (reducer that came from the redux-form library and that was put into the app rootReducer)
// receives a single argument in the first pair of parenthesis. It is an options object
export default reduxForm({
    validate,
    form: "PostsNewForm" // unique name
})(PostsNew);