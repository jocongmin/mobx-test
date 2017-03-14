import "./js/auto_rem.js";
import "./css/style.scss";
import React from "react";
import { render } from "react-dom";
import { observable, computed, autorun } from "mobx";
import { Provider } from 'mobx-react';
import { Router, Route, hashHistory ,browserHistory} from 'react-router';
import Test from "./src/components/test.js";
import Next from "./src/components/next.js";
import New from "./src/components/new.js";
import Forms from "./src/components/form.js";
import Menu from "./src/components/menu.js";
import store from "./src/store/store.js";

const routes = (
  <Route component={App}>
     <Route path="/" component={Menu}/>
     <Route path="/menu" component={Menu}/>
     <Route path="/form" component={Forms}/>
     <Route path="/new" component={New}/>
     <Route path="/test" component={Test}/>
     <Route path="/next" component={Next}/>
  </Route>
);
class App extends React.Component {
    render() {
        return (
             <Provider {...store}>
                 <Router history={hashHistory} >
                      {routes}
                 </Router>
             </Provider>
         )
    }
}


render( < App />, document.getElementById('app'));
