import React from "react";
import { render } from "react-dom";
import { Provider } from 'mobx-react';
import { Router, Route, hashHistory } from 'react-router';
import Test from "./src/components/test.js";
import Next from "./src/components/next.js";
import store from "./src/store/store.js";


class App extends React.Component {
    render() {
        return (
        		<Provider store={store}>
					<Router history={hashHistory}>
						<Route path="/" component={Next}/>
						<Route path="/test" component={Test}/>
					</Router>
        		</Provider>
        	)
    }
}


render( < App />, document.getElementById('app'));
