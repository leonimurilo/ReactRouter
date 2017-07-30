import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxPromise from "redux-promise";

// BrowserRouter interacts with the history library and decides what do do based on the change of the url
// Route is a react component that we can render inside of any other react component
// the purpose of Router is to provide a configuration that will define which component will be shown
// depending on the url
import {BrowserRouter, Route, Switch} from "react-router-dom";
import reducers from "./reducers";
import PostsIndex from "./components/PostsIndex";
import PostsNew from "./components/PostsNew";
import PostsShow from "./components/PostsShow";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Switch only renders one match. So we must put the most specific routes on the top
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/new" component={PostsNew}/>
                    <Route path="/posts/:id" component={PostsShow}/>
                    <Route path="/" component={PostsIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
