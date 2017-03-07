import React from "react";
import { render } from "react-dom";
import { observable, computed, autorun } from "mobx";
import { Provider } from 'mobx-react';
import { Router, Route, hashHistory } from 'react-router';
import Test from "./src/components/test.js";
import Next from "./src/components/next.js";
import New from "./src/components/new.js";
import store from "./src/store/store.js";

class App extends React.Component {
    render() {
        return (
             <Provider {...store}>
                 <Router history={hashHistory}>
                     <Route path="/" component={Next}/>
                     <Route path="/test" component={Test}/>
                     <Route path="/new" component={New}/>
                 </Router>
             </Provider>
         )
    }
}


render( < App />, document.getElementById('app'));
// var numbers = observable([1,2,3]);
// var sum = computed(() => numbers.reduce((a, b) => a + b, 0));

// var disposer = autorun(() => console.log(sum.get()));
// // prints '6'
// numbers.push(4);
// // prints '10'

// numbers.push(6);
