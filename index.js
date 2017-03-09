import React from "react";
import { render } from "react-dom";
import { observable, computed, autorun } from "mobx";
import { Provider } from 'mobx-react';
import { Router, Route, hashHistory ,browserHistory} from 'react-router';
import Test from "./src/components/test.js";
import Next from "./src/components/next.js";
import New from "./src/components/new.js";
import Forms from "./src/components/form.js";
import store from "./src/store/store.js";
const routes = (
  <Route component={Forms}>
     <Route path="/" component={Forms}/>
     <Route path="/new" component={New}/>
     <Route path="/test" component={Test}/>
     <Route path="/next" component={Next}/>
  </Route>
);
class App extends React.Component {
    render() {
        return (
             <Provider {...store}>
                 <Router history={browserHistory} >
                      {routes}
                 </Router>
             </Provider>
         )
    }
}


render( < App />, document.getElementById('app'));

