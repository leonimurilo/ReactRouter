import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
// BrowserRouter interacts with the history library and decides what do do based on the change of the url
// Route is a react component that we can render inside of any other react component
// the purpose of Router is to provide a configuration that will define which component will be shown
// depending on the url
import {BrowserRouter, Route} from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() { return <div>Hello!</div>}
}

class Goodbye extends React.Component {
    render() { return <div>Goodbye!</div>}
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <div>Header</div>
                {/*if user wants to go to the route specified in path, then it will show the component*/}
                <Route path="/hello" component={Hello}/>
                <Route path="/goodbye" component={Goodbye}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
