import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxPromise from "redux-promise";

// BrowserRouter interacts with the history library and decides what do do based on the change of the url
// Route is a react component that we can render inside of any other react component
// the purpose of Router is to provide a configuration that will define which component will be shown
// depending on the url
import {BrowserRouter, Route} from "react-router-dom";
import reducers from "./reducers";
import PostsIndex from "./components/PostsIndex";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={PostsIndex}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
